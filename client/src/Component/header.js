import React from 'react'
import {View,Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'


const Header =({leftIcon,title,rightIcon,leftPress,rightPress})=>{
    return    <View style={{margin:10,flexDirection:'row',justifyContent:'space-between'}}>
    <View >
        <Icon name={leftIcon} color='#ffffff' onPress={leftPress} size={22} />
    </View>
    <View >
<Text style={{color:'#ffffff',fontSize:18}}>{title}</Text>
    </View>
    
    <View >
        <Icon name={rightIcon} onPress={rightPress} color='#ffffff' size={22}/>

    </View>

</View>
}

export default Header