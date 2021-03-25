import React, { useState } from 'react'
import { View, Text } from 'react-native'
import Container from '../../Component/Container'
import SocialLogin from '../../Component/SocialLogin'
import MyInput from '../../Component/MyInput';
import Button from '../../Component/Button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { onEmailChange, onPasswordChange, onUserLogin } from '../../redux/actions/userAction';
import { connect } from 'react-redux';




const Login = ({ navigation, user, onUserLogin, onEmailChange, onPasswordChange }) => {






    return (

        <Container navigation={navigation} footer={<SocialLogin />}>

            <Text style={{ paddingTop: 45, fontWeight: 'bold', fontSize: 24, color: '#0C0D34', textAlign: 'center', }}>Welcome Back</Text>
            <Text style={{ color: 'rgba(12,13,52,0.5)', textAlign: 'center', marginTop: 2 }}>use your credential below to login to your account</Text>
            <Text style={{ color: 'rgba(12,13,52,0.5)', textAlign: 'center', margin: 3 }}>to login to your account</Text>

            <KeyboardAwareScrollView style={{ marginHorizontal: 25 }}>
                <MyInput text="enter your mail" icon="envelope" size={22} value={user.email} bool={false} onChangeText={onEmailChange} />
                <MyInput text="enter your password" icon="lock" size={29} value={user.password} bool={true} onChangeText={onPasswordChange} />
                <Text style={{ textAlign: 'right', color: 'blue', marginTop: 10 }} onPress={() => navigation.navigate("forgot")}>Forgot Password </Text>

                <View style={{ alignItems: 'center', marginTop: 60 }}>
                    <Button variant="primary" label="Log into your account" loading={user.loading} onPress={() => onUserLogin(user.email, user.password)} />
                    <Text style={{ textAlign: 'center', color: '#0c0d34', marginTop: 50 }}>Don't have account? <Text onPress={() => navigation.navigate('register')} style={{ color: 'blue' }}>Sign Up here</Text></Text>
                </View>


            </KeyboardAwareScrollView>

        </Container>
    )
}

const mapDispatchToProps = {
    onUserLogin, onEmailChange, onPasswordChange
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);