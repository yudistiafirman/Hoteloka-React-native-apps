import React, { useState } from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps'
import PaymentMethod from '../transactions/paymentMethod'
import Confirmation from './confirmTransaction'
import {connect} from 'react-redux'
import SplashScreen from '../SplashScreen/Splashscreen'
import SuccessTransacton from './successTransaction'
import {confirmedTransactions}from '../../redux/actions/transactionAction'
import {nextBtnPayMethod,nextBtnTextStyle,prevBtnStyle,nextBtnStyle} from './progressTransaction'
const Transaction = ({guest,transData,startDate,endDate,confirmedTransactions,navigation}) => {


    
    const [valid,setValid]=useState(false)
   const [name,setName]=useState(null)
   const [cardNumber,setCardNumber]= useState(null)
   const [cardType,setCardType]= useState(null)

    const onChange=(form)=>{
       setValid(form.valid)
       setName(form.values.name)
       setCardNumber(form.values.number)
       setCardType(form.values.type)
    }
    
        const duration = endDate.getDate()-startDate.getDate()

     if(transData===null){
        return <SplashScreen/> 
     } 
    return <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
     
    <ProgressSteps>
        <ProgressStep label="Payment Method" nextBtnTextStyle={nextBtnTextStyle} nextBtnText="submit" nextBtnStyle={nextBtnPayMethod}>
        <View style={{ alignItems: 'center' }}>
            <PaymentMethod onChange={onChange}/>
        </View>
        </ProgressStep>
        <ProgressStep label="Confirmation"  nextBtnText="Paynow" onNext={()=>confirmedTransactions(transData.id)} previousBtnStyle={prevBtnStyle} previousBtnTextStyle={{color:'#ffffff'}} nextBtnTextStyle={nextBtnTextStyle} nextBtnStyle={nextBtnStyle}>
            <View style={{ alignItems: 'center' }}>
                    <Confirmation cardType={cardType} cardNumber={cardNumber} cardHolder={name} name={guest.fullname} image={guest.image} email={guest.email} total={transData.price} duration={duration} room={transData.hotel_room}/>
            </View>
        </ProgressStep>
        <ProgressStep label="Transaction Success" removeBtnRow  previousBtnStyle={prevBtnStyle} previousBtnTextStyle={{color:'#ffffff'}} nextBtnTextStyle={nextBtnTextStyle} nextBtnStyle={nextBtnStyle}>
            <View style={{ alignItems: 'center',justifyContent:'center' }}>
               <SuccessTransacton price={transData.price} hotel_name={transData.hotel_name} onPress={()=>navigation.navigate('Home')}/>
            </View>
        </ProgressStep>
    </ProgressSteps>

      




     </SafeAreaView>
}

const mapStateToProps=(state)=>{
    return {
        guest:state.user,
        transData:state.transactions.transaction,
        success:state.transactions.message,
        startDate:state.hotels.filterDate,
        endDate:state.hotels.filterDateEnd
    }
}

const mapDispatchToProps={
    confirmedTransactions
}

export default connect(mapStateToProps,mapDispatchToProps)( Transaction)