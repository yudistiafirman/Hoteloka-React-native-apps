import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'


const Header = ({ fullname }) => {
    return <View >
        <ImageBackground style={{ width: '100%', height: 300, borderBottomRightRadius: 70 }} source={require('../../supports/padma/main.jpg')}>
            <Text style={{ fontWeight: '700', color: '#ffffff', fontSize: 20 }}>Hi, {fullname}</Text>
            <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: '500' }}>Where you gonna stay today?</Text>
        </ImageBackground>
    </View>
}

export default Header