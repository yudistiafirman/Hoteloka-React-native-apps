import React, { useEffect } from 'react'
import {View,Text}from 'react-native'
import {connect}from 'react-redux'
import {getTransactionHistory}from '../../redux/actions/transactionAction'
const TransactionHistory=({transaction_history,user_id,getTransactionHistory})=>{

    useEffect(()=>{
            getTransactionHistory(user_id)
    },[])
    console.log(transaction_history)
    return <View>
        <Text>this is history</Text>
    </View>
}
const MapDispatchToProps={
    getTransactionHistory
}
const MapStateToProps=(state)=>{
    return{
        transaction_history:state.transactions,
        user_id:state.credential.id
    }
}

export default connect(MapStateToProps,MapDispatchToProps)( TransactionHistory)