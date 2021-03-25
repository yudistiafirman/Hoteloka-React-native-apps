import React from 'react'
import { FlatList, View, Text, Image } from 'react-native'



const Facility = ({ mapData }) => {

    const renderItem = ({ item, index }) => {
        return <View style={{ alignItems: 'center' }}>
            <Image style={{ height: 30, width: 30 }} source={{ uri: "http:192.168.100.8:9000" + "/public/facilities-images/" + item.icon }} />
            <Text style={{ fontSize: 13, color: '#A8B2C8' }}>{item.name}</Text>
        </View>
    }

    return <View>
        <Text style={{ fontSize: 15, color: '#A8B2C8', fontWeight: '700', marginTop: 15, marginBottom: 2 }}>Amenities</Text>

        <FlatList contentContainerStyle={{ flex: 1, justifyContent: 'space-around', marginTop: 20 }} data={mapData} renderItem={renderItem} horizontal showsHorizontalScrollIndicator={false} keyExtractor={(item, index) => String(index)} />

    </View>

}

export default Facility