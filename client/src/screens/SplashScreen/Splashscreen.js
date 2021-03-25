
import React from 'react'
import { Image, ImageBackground } from 'react-native'

const SplashScreen = () => {
    return (
        <Image source={require("../../supports/splash/hotelokaSplash.gif")} style={{
            flex: 1,
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",

        }} />
    )
}

export default SplashScreen