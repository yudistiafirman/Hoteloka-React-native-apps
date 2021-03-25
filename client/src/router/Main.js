import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Booking from '../screens/booking/mybooking'
import Saved from '../screens/Saved/Saved'
import HotelDetailsRoute from '../router/HotelDetails'
import Myinbox from '../screens/Myinbox/Myinbox'

import Tablogo from '../Component/TabLogo'
import OneSignal from 'react-native-onesignal'
import {connect} from 'react-redux'
import ProfileRoute from './ProfileRoute'

const Tab = createBottomTabNavigator()
const MainRouter = ({token}) => {
  console.log(token)
    useEffect(() => {
        OneSignal.setLogLevel(6, 0);
        OneSignal.init('998b3300-f797-493f-9235-c6da6bb67b11', {
          kOSSettingsKeyAutoPrompt: false,
          kOSSettingsKeyInAppLaunchURL: false,
          kOSSettingsKeyInFocusDisplayOption: 2,
        });
        OneSignal.inFocusDisplaying(2);
            OneSignal.addEventListener('received', onReceived);
            OneSignal.addEventListener('opened', onOpened);
            OneSignal.addEventListener('ids', onIds);

            OneSignal.setExternalUserId(token, (results) => {
              // The results will contain push and email success statuses
              console.log('Results of setting external user id');
              console.log(results);
              
              // Push can be expected in almost every situation with a success status, but
              // as a pre-caution its good to verify it exists
              if (results.push && results.push.success) {
                console.log('Results of setting external user id push status:');
                console.log(results.push.success);
              }
              
              // Verify the email is set or check that the results have an email success status
              if (results.email && results.email.success) {
                console.log('Results of setting external user id email status:');
                console.log(results.email.success);
              }
            });
            return () => {
              OneSignal.removeEventListener('received', onReceived);
              OneSignal.removeEventListener('opened', onOpened);
              OneSignal.removeEventListener('ids', onIds);
            };
          
        
          }, []);


          const onReceived = (notification) => {
            console.log('Notification received: ', notification);
          };
        
          function onOpened  (openResult) {
            
            console.log('Message: ', openResult.notification.payload.body);
            console.log('Data: ', openResult.notification.payload.additionalData);
            console.log('isActive: ', openResult.notification.isAppInFocus);
            console.log('openResult: ', openResult);
        
          };
        
          const onIds = (device) => {
            console.log('Device info: ', device);
          };
    
    
          const getTabBarVisibility = (route) => {
     
            const routeName = route.state
              ? route.state.routes[route.state.index].name
              : '';
      
            if (routeName === 'editprofile') {
              return false;
            }
      
            return true;
          };
   
  

    
    return (
        <Tab.Navigator initialRouteName="myaccount" tabBar={props => <Tablogo state={props.state} descriptors={props.descriptors} navigation={props.navigation} />}>
            <Tab.Screen name='home' component={HotelDetailsRoute} />
            <Tab.Screen name='saved' component={Saved} />
            <Tab.Screen name='mybooking' component={Booking} />
            <Tab.Screen name='myinbox' component={Myinbox} />
            <Tab.Screen name='myaccount' component={ProfileRoute} options={({route})=>({tabBarVisible:getTabBarVisibility(route)})} />
        </Tab.Navigator>
    )
}

const mapStateToProps=(state)=>{
  return{token:state.user.token}
}

export default connect(mapStateToProps)( MainRouter);