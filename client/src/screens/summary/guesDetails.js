import React from 'react'
import {View,Text} from 'react-native'



const GuestDetails= ({guest_name,guest_email,guest_phone})=>{
    return   <View style={{flex: 1, }}>
        

        <View style={{  justifyContent: 'space-evenly', flex: 1 }}>
            <Text style={{ fontSize: 20, fontWeight: '700',color:'#A8B2C8' }}>Guest Details</Text>
            <View style={{borderBottomWidth:0.5}}/>
<Text style={{ fontSize: 16, fontWeight: '700',color:'#A8B2C8' }}>Name : {guest_name}</Text>

<Text style={{ fontSize: 16, fontWeight: '700',color:'#A8B2C8' }}>Email : {guest_email}</Text>
<Text style={{ fontSize: 16, fontWeight: '700',color:'#A8B2C8' }}>Phone : {guest_phone}</Text>

        </View>
    </View>
}

export default GuestDetails