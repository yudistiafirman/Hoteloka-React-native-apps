import React, { useEffect } from 'react'
import {View,Image,TouchableOpacity}from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Header from '../../Component/header'
import {connect} from 'react-redux'
import {onChangeImage, onEditAddress, onEditEmail, onEditName, onEditPhone,onSaveDataToEdit} from '../../redux/actions/editAction'
import InputCard from '../../Component/InputCard'
import Button from '../../Component/Button'
const EditProfile= ({navigation,user,onChangeImage,edit,onSaveDataToEdit,onEditName,onEditEmail,onEditAddress,onEditPhone})=>{

        console.log(edit)
       
    return <View style={{backgroundColor:'#29B6F6',flex:1,justifyContent:'space-between'}}>
    
         <Header leftPress={()=>navigation.navigate('myaccount')} leftIcon="arrow-left" title="EDIT PROFILE" />
        <InputCard title="User Profile" onChangeName={onEditName} onChangeEmail={onEditEmail} onChangePhone={onEditPhone} onChangeAddress={onEditAddress}/>
      
        <View  style={{alignItems:'center',justifyContent:'center', width: 120, height: 120, borderRadius: 60, backgroundColor: 'white', position: 'absolute', top: 60, left: 143, right: 0, bottom: 0, }} >
            { edit.image.uri? <Image style={{width:120,height:120,borderRadius:60}} source={{uri: edit.image.uri }}/>
             :
             user.image?<Image style={{width:120,height:120,borderRadius:60}} source={{uri: "http://192.168.100.8:9000" + "/public/profile-images/" + user.image }}/>
             
               :
                <Icon name="user" color="#f4f4f4" size={80}/>
            }
     
            </View>
         <TouchableOpacity onPress={onChangeImage} style={{alignItems:'center',justifyContent:'center',backgroundColor:"#29B6F6",width:37,height:37,borderRadius:18.5,position:'absolute',top:140,left:130,right:0,bottom:0}}>
             <Icon name="plus" color="#f4f4f4" size={18}/>
         </TouchableOpacity>
         <View style={{marginBottom:50,alignItems:'center'}}>
         <Button variant="transparent" label="SAVE CHANGES" onPress={()=>onSaveDataToEdit(user.id,edit.image,edit.phone,edit.email,edit.address,edit.name)}/>
         </View>

 
    </View>
}
const MapDispatchToProps={
    onChangeImage,onEditName,onEditEmail,onEditPhone,onEditAddress,onSaveDataToEdit
}
const MapStateToProps=(state)=>{
    return {
        user:state.credential,
        edit:state.edit
    }
}

export default connect(MapStateToProps,MapDispatchToProps)( EditProfile)
