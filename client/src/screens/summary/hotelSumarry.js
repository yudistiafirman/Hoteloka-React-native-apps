import React from 'react'
import {Text,View} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {getStar} from '../../constants/getstar'



const HotelSummary=({hotel_name,hotel_star,hotel_address,hotel_phone})=>{
    return   <View style={{flex: 1, marginBottom: 10,marginTop: 5}}>

        <View style={{ justifyContent: 'space-evenly', flex: 1 }}>

            <Text style={{ fontSize: 20, fontWeight: '700', color: '#A8B2C8'}}>{hotel_name}</Text>
            <View style={{flexDirection:'row'}}>
                {
                        getStar(hotel_star)         
                }
            </View>
            <View style={{borderBottomWidth:0.5}}/>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="map-marker-alt" color="#A8B2C8" size={16} style={{alignSelf:'flex-start',marginTop:4}} />
                <Text style={{ fontSize: 16, fontWeight: '700', color: '#A8B2C8', marginLeft: 10 }}>{hotel_address}</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="phone" color="#A8B2C8" size={16} />
                <Text style={{ fontSize: 16, fontWeight: '700', color: '#A8B2C8', marginLeft: 10 }}>{hotel_phone}</Text>
            </View>
         

        </View>
       
    </View>


}

export default HotelSummary