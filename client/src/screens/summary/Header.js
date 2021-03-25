import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'


const Header = ({onPress})=>{
    return   <View style={{ flexDirection: 'row', }}>
    <TouchableOpacity onPress={onPress} style={{ backgroundColor: '#fcdada', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: 40 }}>
        <Icon name="arrow-left" size={18} color="#590995" />
    </TouchableOpacity>
    <Text style={{ fontSize: 24, fontWeight: '700', marginLeft: 10 }}>Summary</Text>
</View>
}


export default Header