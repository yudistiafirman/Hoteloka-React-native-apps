const { __esModule } = require('validator/lib/isPostalCode')
const db = require('../database/users')
const {decodeToken}=require('../supports/jwt')
const Moment = require('moment')
const sendNotif=require('../supports/sendNotif')
const redis =require('./../database/redis')
const { json } = require('express')

module.exports = {
    createTransaction: (req, res) => {
        let dataTosend = req.body  // {begin_book_date,end_book_date,rooms_id,users_id}
        dataTosend.users_id= decodeToken(dataTosend.users_id).id
        dataTosend.begin_book_date= Moment(dataTosend.begin_book_date).format('YYYY-MM-DD H:mm:ss')
        dataTosend.end_book_date=Moment(dataTosend.end_book_date).format('YYYY-MM-DD H:mm:ss')

        db.query('insert into transactions set ?', dataTosend, (err, result) => {
            try {
                if (err) throw err

                db.query('select * from transactions where id = ?', result.insertId, (err, data) => {
                    try {
                        if (err) throw err
     
                        let expired_at = data[0].expired_at
                        expired_at = new Date(expired_at)
                        expired_at = `${expired_at.getFullYear()}-${expired_at.getMonth() + 1}-${expired_at.getDate()} ${expired_at.getHours()}:${expired_at.getMinutes()}:${expired_at.getSeconds()}`
                        console.log(expired_at)
                        db.query(`
                            CREATE EVENT auto_cancel_transaction_${result.insertId}
                            ON SCHEDULE AT DATE_ADD(NOW(),INTERVAL 10 MINUTE)
                            DO
                                UPDATE transactions set status = 'failed' where id = ${result.insertId};
                        `, (err, response) => {


                            try {
                                if (err) throw err
                                
                           let redisKey='transactions_user_id'+ data[0].users_id
                           console.log(redisKey)
                           redis.del(redisKey,(err,ok)=>{
                            if(err)throw err  
                            res.send({
                                error: false,
                                data:data[0],
                                message: "transaction created"
                            })
                           })
                               
                            } catch (error) {
                                console.log(error)
                            }
                        })
                    } catch (error) {
                        console.log(error)
                    }
                })

            } catch (error) {
                console.log(error)
            }
        })

    },
    paymentApproved : (req,res) => {

        let data = req.body // id_trans, token

        db.query('update transactions set status = "payment approved" where id = ? and users_id = ?',[data.id, req.bebas.id], (err,result) => {
            try {
                if(err) throw err

                db.query(`drop event auto_cancel_transaction_${data.id};`, (err,result) => {
                    try {
                        if(err) throw err

                        let dataNotif = {
                            app_id: "998b3300-f797-493f-9235-c6da6bb67b11",
                            contents: {"en": "Transaction Approved"},
                            channel_for_external_user_ids: "push",
                            include_external_user_ids: [data.token]
                        }
                        sendNotif(dataNotif,res)

                    } catch (error) {
                        console.log(error)
                    }
                } )
            } catch (error) {
                console.log(error)
            }
        })
        // update transaction status
        // kill event auto cancel
        // send notification one signal
    },
    getAllTransactions:(req,res)=>{
        redis.get('all_transactions',(err,redisData)=>{
            if(err)throw err
            if(redisData){
                var redisParsed=JSON.parse(redisData)
                res.send({
                    redisParsed
                })
            }else{

                db.query('select * from transactions',(err,result)=>{
                    if(err) throw err
                    var resultString= JSON.stringify(result)
                    redis.set('all_transactions',resultString,(err,ok)=>{
                        if(err)throw err
                        res.send({
                            result
                        })
                    })
                })
            }

        })
    },
    getTransactionsByid:(req,res)=>{
            const{id }=req.params
            let redisKey= 'transactions_user_id'+ id

            redis.get(redisKey,(err,redisData)=>{
                if(err){
                    res.send({
                        error:true,
                        message:err
                    })
                }
                if(redisData){
                    res.send({
                        error:false,
                        redis:JSON.parse(redisData)
                    })
                }else{
                    db.query('select * from transactions where users_id=?',id,(err,result)=>{
                        if(err){
                            res.send({
                                error:true,
                                message:err
                            })
                        }
                        redis.set(redisKey,JSON.stringify(result),(err,ok)=>{

                            if(err){
                                res.send({
                                    error:true,
                                    message:err
                                })
                            }
                            res.send({
                                error:false,
                                db:result
                            })
                        })
                    })
                }
            })


    }

}