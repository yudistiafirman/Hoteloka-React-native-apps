import React from 'react'
import { View } from 'react-native'
import Animated, { Extrapolate, interpolate } from 'react-native-reanimated'




const Dot = ({ idx, currentIndex }) => {

    const opacity = interpolate(currentIndex, {
        inputRange: [idx - 1, idx, idx + 1],
        outputRange: [0.5, 1, 0.5],
        extrapolate: Extrapolate.CLAMP
    })

    const scale = interpolate(currentIndex, {
        inputRange: [idx - 1, idx, idx + 1],
        outputRange: [1, 1.25, 1],
        extrapolate: Extrapolate.CLAMP
    })

    return (
        <View>
            <Animated.View style={{ opacity, backgroundColor: '#2CB9B0', height: 8, width: 8, borderRadius: 4, margin: 8, transform: [{ scale }] }}>

            </Animated.View>
        </View>
    )
}

export default Dot