import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


const CusHeader = ({ padding, position, children, onPress, leftIcon, rightIcon, title }) => {

    const styles = StyleSheet.create({
        children: {
            padding: padding,
            position: position,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderTopLeftRadius: 75,
            backgroundColor: "white",
            justifyContent: 'center'
        }

    })



    return <View style={{ flex: 1 }}>
        <View style={{ flex: 0.2, backgroundColor: 'white' }} >

            <View style={{
                backgroundColor: "#3ec1d3",
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderBottomRightRadius: 75,
                flexDirection: 'row',
                justifyContent: 'space-between'
            }} >
                <Icon onPress={onPress} name={leftIcon} color="white" size={22} />
                <Text style={{ color: "white", textAlign: 'center', marginTop: 2, marginBottom: 30 }}>{title}</Text>
                <Icon name={rightIcon} color="white" size={22} />


            </View>
        </View>
        <View style={{ flex: 0.8 }}>
            <View style={{ flex: 1, backgroundColor: "#3ec1d3" }} />
            <View style={{ flex: 1, }} />



            <View style={styles.children}>


                {children}


            </View>

        </View>
    </View>

}

export default CusHeader