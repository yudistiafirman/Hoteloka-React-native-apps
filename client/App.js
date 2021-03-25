import React, { useState, useEffect } from 'react'

import { SafeAreaProvider } from "react-native-safe-area-context"
import { NavigationContainer } from '@react-navigation/native'
import AuthRouter from './src/router/Auth'
import MainRouter from './src/router/Main'
import { connect } from 'react-redux'

import AsyncStorage from '@react-native-async-storage/async-storage';
import { onSaveToken } from "./src/redux/actions/userAction"

import SplashScreen from './src/screens/SplashScreen/Splashscreen'

const App = ({ user, onSaveToken }) => {
  const [isStorageChecked, setIsStorageChecked] = useState(false)

  useEffect(() => {
    const getStorageData = () => {
      AsyncStorage.getItem('@token')
        .then((data) => {

          if (data) {
            onSaveToken(data)
          }
          setIsStorageChecked(true)
        })
        .catch((err) => {

          setIsStorageChecked(true)
        })
    }

    getStorageData()
  }, [])

  const homeStack={
    path : "home",
    screens : {
      homey : 'hommy',
      hotelDetail : {
        path : 'detailHotel/:id',
        params : {
          id : 1
        }
      },
    }
  }

  const linkingOptions={
    prefixes:['https://hotelokaApp.com','hotelokaApp://'],
    config:{
      screens:{
        home: homeStack,
        mybooking:'mybooking',
        myinbox:'myinbox',
        myaccount:'myaccount',
        saved:'saved'
      }
    }
  }
 
  if (isStorageChecked === false) {
    return (
      <SplashScreen />
    )
  }
  return (

    <SafeAreaProvider>
      <NavigationContainer linking={linkingOptions}>
        {
          user.token !== "" ?
            <MainRouter />
            :

            <AuthRouter />
        }
      </NavigationContainer>
    </SafeAreaProvider>


  )
}
const mapDispatchtoProps = {
  onSaveToken
}

const mapStatetoProps = (state) => {
  return {
    user: state.user
  }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(App);