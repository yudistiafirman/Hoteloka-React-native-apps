import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Button from '../../Component/Button'

const SuccessTransaction =({price,hotel_name,onPress})=>{
    return <View style={{margin:10,paddingTop:60}}>
    <Text style={{fontSize:24, color:'#A8B2C8',fontWeight:'700',textAlign:'center'}}>Rp.{price}</Text>
    <Text style={{fontSize:20, color:'#A8B2C8',fontWeight:'700',textAlign:'center'}}>Transaction Success</Text>
    <View style={{alignItems:'center'}}>
    <Icon name="check" size={80} color='#A8B2C8'/>
    </View>
            <Text style={{fontSize:14,color:'#A8B2C8',textAlign:'center'}}>Your {hotel_name} Booking is success. We will notify you when it have update. Thank you!</Text>
            <View style={{alignItems:'center',marginTop:50}}>
            <Button label="continue booking" variant="primary" onPress={onPress}/>
            </View>
           
    
    </View>
}

export default SuccessTransaction