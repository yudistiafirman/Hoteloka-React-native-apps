import React, { useState, useEffect } from 'react'
import Container from "../../Component/Container"


import SocialLogin from '../../Component/SocialLogin'
import MyInput from '../../Component/MyInput';
import Button from '../../Component/Button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from 'react-redux'

import { View, Text } from 'react-native'
import { onEmailChange, onPasswordChange, onUserForgotPass, onUserLogin } from '../../redux/actions/userAction';


const ForgotPass = ({ navigation, user, onUserForgotPass, onUserLogin, onEmailChange, onPasswordChange }) => {

    return <Container navigation={navigation} footer={<SocialLogin />}>

        <Text style={{ paddingTop: 45, fontWeight: 'bold', fontSize: 24, color: '#0C0D34', textAlign: 'center', }}>Forgot Password ?</Text>
        <Text style={{ color: 'rgba(12,13,52,0.5)', textAlign: 'center', marginTop: 2 }}>Enter your email address</Text>
        <Text style={{ color: 'rgba(12,13,52,0.5)', textAlign: 'center', margin: 3 }}>associated with your account</Text>

        <KeyboardAwareScrollView style={{ marginHorizontal: 25 }}>

            <MyInput text="enter your mail" icon="envelope" size={22} bool={false} value={user.email} onChangeText={onEmailChange} />
            <MyInput text="enter your password" icon="lock" size={22} bool={true} value={user.password} onChangeText={onPasswordChange} />
            {
                user.data !== undefined ?
                    <Text style={{ textAlign: 'center', color: "green", marginTop: 20 }}>{user.data.message} </Text>
                    :
                    <Text style={{ textAlign: 'center', color: "red", marginTop: 20 }}>{user.error && user.error + '!!'} </Text>
            }
            <View style={{ alignItems: 'center', marginTop: 30 }}>
                <Button variant="primary" label={user.data !== undefined ? "Log in to your account" : "reset your password"} onPress={user.data !== undefined ? () => onUserLogin(user.email, user.password) : () => onUserForgotPass(user.email, user.password)} />
                <Text style={{ textAlign: 'center', color: '#0c0d34', marginTop: 50 }}>Dont'work? <Text style={{ color: 'blue' }}>Try another way</Text></Text>
            </View>
        </KeyboardAwareScrollView>
    </Container>

}

const mapDispatchToProps = {
    onUserForgotPass, onUserLogin, onPasswordChange, onEmailChange
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPass)








