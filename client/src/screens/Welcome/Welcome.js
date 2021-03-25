import { Text, View, Image, Dimensions, StyleSheet } from 'react-native'
import Animated from 'react-native-reanimated'
import React from 'react'
import hotelloka from '../../supports/images/hotellokalogo.jpg'
import { opacity } from 'react-native-redash/lib/module/v1'
import Button from '../../Component/Button'

const theWidth = Dimensions.get('window')

const styles = StyleSheet.create({
    image: {
        height: '100%',
        width: '100%'
    },
    subtitle: {

        fontWeight: 'bold',
        fontSize: 24,
        color: '#0C0D34',
        lineHeight: 30,
        textAlign: 'center',


    }


})
const Welcome = ({ navigation }) => {

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{
                flex: 1, borderBottomRightRadius: 75, overflow: 'hidden',
            }}>
                < Image source={hotelloka} style={styles.image} />
            </View>
            <View style={{ flex: 1, borderTopLeftRadius: 75 }}>
                <View style={{ backgroundColor: '#e0dede', height: '100%', width: '100%', position: 'absolute' }} />
                <View style={{ backgroundColor: 'white', borderTopLeftRadius: 75, flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
                    <Text style={styles.subtitle}>Let's get started  </Text>
                    <Text style={{ textAlign: 'center', fontWeight: '600' }}>Login to your account below to sign up for an amazing experience</Text>
                    <Button onPress={() => navigation.navigate('login')} variant="primary" label="have an account? Login" />
                    <Button onPress={() => navigation.navigate('register')} variant="default" label="Join us for free" />
                    <Button variant="transparent" onPress={() => navigation.navigate('forgot')} label="Forgot Password" />
                </View>
            </View>

        </View>
    )
}


export default Welcome