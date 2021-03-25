import React from 'react'
import { View, Text, FlatList, Button, Dimensions } from 'react-native'
import ImageList from './imagelist'
import Icon from 'react-native-vector-icons/FontAwesome5'


const Rooms = ({ room_data, navigation, hotel_data }) => {

    const renderItem = ({ item }) => {

        return <View>

            <ImageList image={item.image} direct="room-images/" width={372} />
            <View style={{ margin: 10 }}>
                <Text style={{ fontSize: 15, color: '#A8B2C8', fontWeight: '700', marginTop: 15 }}>{item.name}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name="user-friends" color='#A8B2C8' size={18} />
                    <Text style={{ fontSize: 13, color: '#A8B2C8', marginLeft: 5 }}>{item.guest_count} guest(s)/room</Text>


                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 25 }}>

                    <Text style={{ fontSize: 13, color: '#A8B2C8' }}> room available {item.room_count} </Text>
                    <Text style={{ fontSize: 15, color: '#ff9a00', textAlign: 'right' }}>Rp.{item.price.toLocaleString('id-ID')} /room/night</Text>
                </View>

                <View style={{ width: '30%', justifyContent: 'center' }}>
                    <Button title="select" color='#ff9a00' onPress={() => navigation.navigate('summary', { data: hotel_data, id: item.id, room_name: item.name, room_price: item.price })} />
                </View>
            </View>
        </View>


    }

    return <FlatList contentContainerStyle={{ marginBottom: 15, elevation: 1, borderColor: '#707070', marginTop: 10 }} showsVerticalScrollIndicator={false} data={room_data} renderItem={renderItem} keyExtractor={(item, index) => String(index)} />
}


export default Rooms