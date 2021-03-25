import Icon from 'react-native-vector-icons/FontAwesome';
import React from "react"
import { Text, TextInput, View, StyleSheet } from "react-native"



const MyInput = ({ text, icon, bool, size, onChangeText, value, bgColor, placeholder }) => {
    const styles = StyleSheet.create({
        inputSection: {
            flexDirection: 'row',
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 5,
            borderWidth: 1,
            borderColor: "#94b4a4",
            borderRadius: 20,
            overflow: 'hidden',
            backgroundColor: bgColor,

        },
        ImageStyle: {


            alignItems: 'center',
            color: "#b3b3b3",



        },
        input: {
            fontSize: 14,
            color: "#b3b3b3",

        },
        textInput: {

            fontSize: 18,
            flex: 1
        },
        forgotPass: {
            alignSelf: "flex-end",

            color: "#5198e9",
            fontWeight: "bold",
            fontSize: 12
        },

    })

    return (
        <View >
            <Text style={styles.input}>{text}</Text>
            <View style={styles.inputSection} >
                <Icon name={icon} size={size} style={styles.ImageStyle} />
                <TextInput style={styles.textInput} placeholder={placeholder} secureTextEntry={bool} value={value} onChangeText={onChangeText} />
            </View>
        </View>
    )
}


export default MyInput