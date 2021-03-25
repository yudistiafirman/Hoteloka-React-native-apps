

import React from 'react'
import { View, StyleSheet, Dimensions, Image } from 'react-native'
const { width, height } = Dimensions.get('window')





const Slide = ({ label, right }) => {

    const styles = StyleSheet.create({
        container: {
            width,
        },
        titleContainer: {

            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
        },
        title: {
            ...StyleSheet.absoluteFillObject,
            height: undefined,
            width: undefined
        },


    })
    const transform = [
        { translateY: (0.61 * height - 100) / 2 },
        { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
        { rotate: right ? '-90deg' : '90deg' }
    ]
    return (
        <View style={styles.container}>

            <View style={[styles.titleContainer, { transform }]} >

                <Image style={styles.title} source={label} />
            </View>

        </View >
    )

}

export default Slide