import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {getStar} from '../../constants/getstar'

const Reviews = ({star}) => {
    return <View style={{ flex: 1, alignItems: 'flex-start', width: '35%',marginBottom:5 }}>
        <Text style={{ fontSize: 15, color: '#A8B2C8', fontWeight: '700', marginTop: 15 }}>Hotels Stars</Text>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
           
           {
               getStar(star)
           }
           
        </View>

    </View>
}


export default Reviews