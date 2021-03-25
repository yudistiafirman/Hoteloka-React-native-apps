import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login/Login'
import Register from '../screens/Register/Register'
import onBoarding from '../screens/Onboarding/onboarding'
import Welcome from '../screens/Welcome/Welcome'
import ForgotPass from '../screens/Forgotpass/Forgotpass'

const Stack = createStackNavigator()
const AuthRouter = ({ user, setUser }) => {

    return <Stack.Navigator headerMode={false} >
        <Stack.Screen name="onBoarding" component={onBoarding} />
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name='register' component={Register} />
        <Stack.Screen name='forgot' component={ForgotPass} />
    </Stack.Navigator>
}


export default AuthRouter