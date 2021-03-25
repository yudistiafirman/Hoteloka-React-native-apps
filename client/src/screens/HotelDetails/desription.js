import React from 'react'
import { View, Text } from 'react-native'


const Description = ({ item }) => {


    return <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 18, color: '#A8B2C8', fontWeight: '700' }}>{item.name}</Text>
        <Text style={{ fontSize: 13, color: '#A8B2C8' }}>{item.address}</Text>
        <Text style={{ fontSize: 17, color: '#A8B2C8', fontWeight: '700', marginTop: 15, marginBottom: 2 }}>Details</Text>

    </View>
}

export default Description