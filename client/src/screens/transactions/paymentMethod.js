import React from 'react'
import {View,Text} from 'react-native'
import {CreditCardInput} from 'react-native-credit-card-input-fullpage'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view' 

const PaymentMethod =({onChange})=>{

    return <KeyboardAwareScrollView>
    <CreditCardInput requiresName onChange={onChange} />
    </KeyboardAwareScrollView>
}

export default PaymentMethod