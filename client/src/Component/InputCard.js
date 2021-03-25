import React from 'react'
import {View,Text} from 'react-native'
import MyInput from '../Component/MyInput'


const InputCard =({title,onChangeName,onChangePhone,onChangeEmail,onChangeAddress})=>{
        return   <View style={{marginHorizontal:10,marginVertical:50,backgroundColor:'#fceef5',borderRadius:25}}>
                        <View style={{margin:10}}>
                                 <View style={{paddingTop:90}}>
                                        <Text style={{fontSize:18,color:'#656565'}}>{title}</Text>
                    
                                         </View>
                <View style={{borderWidth:0.5,borderColor:'#656565',marginVertical:10}}/>
                <MyInput placeholder="name" onChangeText={onChangeName}/>
                <MyInput placeholder="phone" onChangeText={onChangePhone}/>
                <MyInput placeholder="email" onChangeText={onChangeEmail}/>
                <MyInput placeholder="address" onChangeText={onChangeAddress}/>
              

                
        </View>

    </View>

}

export default InputCard
