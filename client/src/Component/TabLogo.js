import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, Image, View, Text, ImageBackground } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome"
import pattern from "../supports/images/pattern.jpg"





const HomeLogo = ({ state, navigation,descriptors }) => {

    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions.tabBarVisible === false) {
      return null;
    }


    return (
        <View style={{ height: 65 }}>


            <View style={{ flex: 1, backgroundColor: "#3ec1d3" }} >
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginLeft: 25 }}>
                    {
                        state.routes.map((route, index) => {
                            const isFocused = state.index === index;
                            const onPress = () => {
                                navigation.navigate(route.name)
                            }
                            const icon = ["home", isFocused ? "folder-open-o" : 'folder-o', "calendar", "inbox", "user-o"]
                            const label = ["home", "saved", "book", "inbox", "profile"]

                            return <TouchableOpacity
                                key={index}
                                onPress={onPress}
                                style={{ marginBottom: isFocused ? 15 : null }}

                            >
                                <Icon name={icon[index]} size={30} color={isFocused ? "#ff9a00" : 'white'} />
                                <Text style={{ color: isFocused ? '#ac4b1c' : '#f1f6f9', textAlign: 'center', marginRight: 10 }}>
                                    {label[index]}
                                </Text>

                            </TouchableOpacity>


                        })
                    }
                </View>

            </View>

        </View>




    );
}




export default HomeLogo