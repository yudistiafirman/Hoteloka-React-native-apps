
import { View, Dimensions } from 'react-native'
import React from 'react'
import Imagelist from './imagelist'
import Description from './desription'
import Facility from './facility'
import Reviews from './review'
import Rooms from './rooms'
const { width } = Dimensions.get('window')




const RenderItem = ({ item, index, navigation }) => {





    return <View style={{ flex: 1 }}>

        <Imagelist image={item.hotel_images} width={width} direct="hotel-images/" />

        <View style={{ flex: 1, margin: 10 }}>
            <Description item={item} />
            <View style={{ flex: 1 }}>

                <Facility mapData={item.facility} />
            </View>
            <Reviews star={item.star} />
            <Rooms room_data={item.rooms} hotel_data={item} navigation={navigation} />
        </View>
    </View>
}

export default RenderItem