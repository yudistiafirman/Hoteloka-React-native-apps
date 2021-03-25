import React from 'react'
import {Text,View,Image} from 'react-native'

const Confirmation =({name,email,total,duration,room,cardNumber,cardHolder,cardType,image})=>{
    return <View style={{height:400,justifyContent:'space-around'}}>
        <View style={{flex:1,alignItems:'center',paddingBottom:50}}>
                <Image source={{uri:"http://192.168.100.8:9000" + "/public/profile-images/" + image}} style={{width:100,height:100,borderRadius:50}}/>
<Text style={{ fontSize: 20, fontWeight: '700',color:'#A8B2C8'}}>{name}</Text>
<Text style={{fontSize: 12, fontWeight: '700',color:'#A8B2C8'}}>{email}</Text>
               
        </View>
        <View style={{flex:1}}>
<Text style={{textAlign:'center',fontSize:40,fontWeight:'700'}}>Rp.{total.toLocaleString('id-ID')}</Text>
<Text style={{textAlign:'center',fontSize:20}}>{duration} night {room}</Text>
    </View>
    <View style={{flex:1}}>
        <View style={{borderWidth:0.5,borderColor:'#9ad3bc'}}/>
        <View style={{margin:10}}>
        <Text style={{fontSize:18}}>{cardType} from {cardHolder} </Text>
<Text style={{fontSize:18}}>SB A/c {cardNumber}</Text>
        </View>
            
             </View>
    </View>
}





export default  Confirmation