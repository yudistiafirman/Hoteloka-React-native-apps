import React from 'react'
import { View, Text, Image } from 'react-native'
import google from '../supports/images/google-logo-9824.png'
import facebook from '../supports/images/facebook.png'
import apple from '../supports/images/applelogo.png'




const SocialLogin = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: 20 }}>
            <View style={{ backgroundColor: 'white', width: 44, height: 44, borderRadius: 22, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={google} style={{ width: 22, height: 22 }} />
            </View>
            <View style={{ backgroundColor: 'white', width: 44, height: 44, borderRadius: 22, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={facebook} style={{ width: 22, height: 22 }} />
            </View>
            <View style={{ backgroundColor: 'white', width: 44, height: 44, borderRadius: 22, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={apple} style={{ width: 22, height: 24 }} />
            </View>

        </View>
    )
}


export default SocialLogin