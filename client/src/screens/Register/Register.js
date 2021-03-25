import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'



import Container from '../../Component/Container'
import { onNameChange, onPhoneChange, onEmailChange, onPasswordChange, onUserRegister } from "../../redux/actions/userAction"
import SocialLogin from '../../Component/SocialLogin'
import MyInput from '../../Component/MyInput';
import Button from '../../Component/Button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from 'react-redux'

const Register = ({ navigation, user, onUserRegister, onEmailChange, onPasswordChange, onNameChange, onPhoneChange }) => {


    const [conpass, setConpass] = useState(null)

    return (
        <Container navigation={navigation} footer={<SocialLogin />}>

            <Text style={{ paddingTop: 45, fontWeight: 'bold', fontSize: 24, color: '#0C0D34', textAlign: 'center', }}>Create Your Account</Text>
            <Text style={{ color: 'rgba(12,13,52,0.5)', textAlign: 'center', marginTop: 2 }}>Let us know what your name, email</Text>
            <Text style={{ color: 'rgba(12,13,52,0.5)', textAlign: 'center', margin: 3 }}>and your password</Text>

            <KeyboardAwareScrollView style={{ marginHorizontal: 25 }}>
                <MyInput text="enter your name " icon="user-o" size={22} bool={false} value={user.fullname} onChangeText={onNameChange} />
                <MyInput text="enter your phone" icon="fax" size={22} bool={false} value={user.phone} onChangeText={onPhoneChange} />
                <MyInput text="enter your mail" icon="envelope" size={22} bool={false} value={user.email} onChangeText={onEmailChange} />
                <MyInput text="enter your password" icon="lock" size={29} bool={true} value={user.password} onChangeText={onPasswordChange} />
                <MyInput text="confirm your password" icon="lock" size={29} bool={true} value={conpass} onChangeText={text => setConpass(text)} />
                <Text>{user.error && user.error}</Text>

                <View style={{ alignItems: 'center', marginTop: 30 }}>
                    <Button variant="primary" label="Sign Up" loading={user.loading} onPress={() => onUserRegister(user.fullname, user.phone, user.email, user.password, conpass)} />
                    <Text style={{ textAlign: 'center', color: '#0c0d34', marginTop: 50 }}>Already have an account? <Text onPress={() => navigation.navigate('login')} style={{ color: 'blue' }}>Log in here</Text></Text>

                </View>


            </KeyboardAwareScrollView>

        </Container>
    )
}





const mapDispatchToProps = {
    onUserRegister, onEmailChange, onPasswordChange, onNameChange, onPhoneChange
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)