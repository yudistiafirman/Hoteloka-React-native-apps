import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native'






const Button = ({ variant, label, onPress, loading }) => {
    // const backgrounColor = variant === "primary" ? "#2CB980" : "rgba(12,13,52,0.05)"
    // const color = variant === "primary" ? "white" : "#0C0D34"
    const styles = StyleSheet.create({
        container: {

            borderRadius: 50,
            height: 50,
            width: 245,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: variant === "primary" ? "#2CB9B0" : variant === "transparent" ? '#f5f5f5' : loading ? "red" : 'rgba(12,13,52,0.14)'

        },
        label: {
            fontSize: 15,
            fontFamily: "SF-Pro-Text-Regular",
            color: variant === "primary" ? 'white' : '#0C0D34'
        }
    })

    return (
        <TouchableHighlight underlayColor="#eeeeee" style={styles.container} disabled={loading} onPress={onPress}>

            <Text style={styles.label}>{label}</Text>


        </TouchableHighlight>
    )
}


export default Button