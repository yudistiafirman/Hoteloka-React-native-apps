import React from 'react'
import {View,Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'


const BookingSummary =({startDate,endDate,room_name,duration,total,room_price})=>{


    return   <View style={{  justifyContent: 'space-evenly', flex: 1 }}>
                 <Text style={{ fontSize: 20, fontWeight: '700',color:'#A8B2C8' }}>Booking Details</Text>
                    <View style={{borderBottomWidth:0.5}}/>
  
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flex: 0.49, }}>
                <Text style={{ fontWeight: "700", textAlign: 'center', marginLeft: 5, color: '#A8B2C8', fontSize: 16, fontWeight: '700', }}>Check In</Text>
                <View style={{ borderRadius: 20, marginTop: 5, padding: 15, flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#40a8c4' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: '700', marginRight: 9 }}>{startDate}</Text>
                        <Icon name="calendar" size={18} color='#ffffff' />
                    </View>
                </View>
            </View>
            <View style={{ flex: 0.49, }}>
                <Text style={{ marginRight: 5, fontWeight: "700", textAlign: 'center', marginLeft: 5, color: '#A8B2C8', fontSize: 16, }}>Check out</Text>
                <View style={{ borderRadius: 20, marginTop: 5, padding: 15, backgroundColor: '#40a8c4' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
<Text style={{ color: '#ffffff', fontSize: 16, fontWeight: '700', marginRight: 9 }}>{endDate}</Text>
                        <Icon name="calendar" size={18} color='#ffffff' />
                    </View>
                </View>
            </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="bed" color="#A8B2C8" size={16} />
<Text style={{ fontSize: 16, fontWeight: '700', color: '#A8B2C8', marginLeft: 10 }}>{room_name}                          Rp. {room_price}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="moon" color="#A8B2C8" size={16} />
            <Text style={{ fontSize: 16, fontWeight: '700', color: '#A8B2C8', marginLeft: 10 }}>{duration} night</Text>
        </View>
        <View style={{borderBottomWidth:0.5}}/>
<Text style={{ fontSize: 16, fontWeight: '700',color:'#A8B2C8',textAlign:'right' }}>Total : Rp. {total} </Text>
    </View>
}

export default BookingSummary