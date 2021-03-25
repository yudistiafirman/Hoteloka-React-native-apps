import React from 'react'

import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Button from "../../Component/Button"

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        width,
        justifyContent: 'center',
        alignItems: 'center',

    },
    subtitle: {

        fontWeight: 'bold',
        fontSize: 24,
        color: '#0C0D34',
        lineHeight: 30,
        textAlign: 'center',
        marginBottom: 50

    }
})

const SubSlide = ({ text, last, onPress, navigation }) => {


    return (
        <View style={styles.container} >
            <Text style={styles.subtitle}>{text}</Text>
            <Button label={last ? 'Let us get started' : 'Next'} variant={last ? 'primary' : 'default'} onPress={last ? () => navigation.navigate('welcome') : onPress} />
        </View>
    )


}



export default SubSlide