
import { View, Text, SafeAreaView,TouchableHighlight, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import SplashScreen from '../../screens/SplashScreen/Splashscreen'
import Drawer from '../../Component/Drawer'
import { onUserlogut} from '../../redux/actions/userAction'
import {getUserByid}from '../../redux/actions/getuseraction'
import { connect } from 'react-redux'
import CusHeader from '../../Component/CusHeader'
import { icon } from '../../constants/dataTomap'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { onRefreshEdit } from '../../redux/actions/editAction'


const MyAccount = ({ navigation, onUserlogut, getUserByid, user,onRefreshEdit }) => {
    


  
  
   

    useEffect(()=>{
        getUserByid()

        const unsubscribe= navigation.addListener('focus', () => {
            getUserByid();
            onRefreshEdit()

          });
      return()=>{

        unsubscribe
      }

    },[navigation])
  
    if(user.loading===true){
        return <SplashScreen/>
    }
  
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CusHeader leftIcon="close" title="MY PROFILE" onPress={onUserlogut} rightIcon="flash" padding={70} position="absolute">

    <Text style={{ fontWeight: 'bold', fontSize: 24, color: '#0C0D34', textAlign: 'center', paddingTop: 50 }}>{user.name}</Text>
    <Text style={{ color: 'rgba(12,13,52,0.5)', textAlign: 'center', marginTop: 2, marginBottom: 30 }}>{user.email}</Text>
                {
                    icon.map((value, index) => {

                        return <Drawer key={index} logout={onUserlogut} navigation={navigation} location={value.location} bgColor={value.bgColor} label={value.label} name={value.name} />
                    })
                }
            </CusHeader>
            <View  style={{alignItems:'center',justifyContent:'center', width: 100, height: 100, borderRadius: 50, backgroundColor: '#f4f4f4', position: 'absolute', top: 85, left: 143, right: 0, bottom: 0, }} >
               {
                   user.image? <Image style={{width:100,height:100,borderRadius:50}} source={{uri:"http://192.168.100.8:9000" + "/public/profile-images/" + user.image}}/>:<Icon name="user" color="#ffffff" size={50}/>
               }
            </View>
       
        </SafeAreaView >

    )
}

const mapDispatchToProps = {
    onUserlogut,getUserByid,onRefreshEdit
}

const mapStateToProps = (state) => {
    return {
        user: state.credential,

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount)









