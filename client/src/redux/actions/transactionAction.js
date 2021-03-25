import { FETCH_DATA, GET_HISTORY, LOADING_TRANS, TRANS_ERROR, TRANS_SUCCESS } from "../typeRed"
import Axios from 'axios'
import { transRoute } from "../../constants/Api"
import AsyncStorage from '@react-native-async-storage/async-storage';




export const createTransaction =(data)=>{
    return (dispatch)=>{
        dispatch({
            type:LOADING_TRANS
        })
    
       
        AsyncStorage.getItem('@token').then((token)=>{
            data.users_id= token
            Axios.post(transRoute,data).then((res)=>{
           
                    dispatch({
                        type:FETCH_DATA,
                        payload:res.data.data
                    })
    
            }).catch((err)=>{
                dispatch({
                    type:TRANS_ERROR,
                    payload:err.message
                })
            })
        }).catch((error)=>{
            console.log(error)
        })
    }
}
    
    
export const confirmedTransactions =(id)=>{
    return (dispatch)=>{
        dispatch({
            type:LOADING_TRANS
        })
        AsyncStorage.getItem('@token').then((token)=>{
            const dataTosend= {
                token,
                id,

            }
            Axios.post(`${transRoute}/approved`,dataTosend).then((res)=>{
                    dispatch({
                        type:TRANS_SUCCESS,
                        payload:res.data.message
                    })

            }).catch((err)=>{
                console.log(err)
            })

        }).catch((error)=>{
            console.log(error)
        })

        
    }
}

export const getTransactionHistory=(user_id)=>{
    return (dispatch)=>{
            dispatch({
                type:LOADING_TRANS,
            })
    Axios.get(transRoute+'/gettransactionsbyid/'+user_id).then((res)=>{

        if(res.data.error){
            dispatch({
                type:TRANS_ERROR,
                payload:res.data.messsage
            })
        }else{
            if(res.data.redis){
                dispatch({
                    type:GET_HISTORY,
                    payload:res.data.redis
                })
            }else{
                dispatch({
                    type:GET_HISTORY,
                    payload:res.data.db
                })
            }
           
        }
    }).catch((err)=>{
        dispatch({
            type:TRANS_ERROR,
            payload:err
        })
    })

    }
}
        


