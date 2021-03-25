import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Myaccount from '../screens/Myaccount/Myaccount'
import EditProfile from '../screens/Myaccount/editProfile'
import TransactionHistory from '../screens/Myaccount/transactionhistory'




const ProfileStack =createStackNavigator()


const ProfileRoute=()=>{
    return <ProfileStack.Navigator headerMode={null}>
        <ProfileStack.Screen name='myaccount' component={Myaccount}/>
        <ProfileStack.Screen name="editprofile" component={EditProfile}/>
        <ProfileStack.Screen name="transactionhistory" component={TransactionHistory}/>

    </ProfileStack.Navigator>
}

export default ProfileRoute
