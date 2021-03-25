import React, { useEffect } from 'react'
import { Text, FlatList } from 'react-native'
import { getHoteldetails } from '../../redux/actions/hotelDetailaction'
import { connect } from 'react-redux'
import RenderItem, { renderItem } from './renderItem'
import SplashScreen from '../SplashScreen/Splashscreen'
import { format } from '../../constants/dateFormat'











const HotelDetails = ({ route, details, hotels, getHoteldetails, navigation }) => {

    const { id } = route.params

    useEffect(() => {
        const date = format(hotels.filterDate)
        const end = format(hotels.filterDateEnd)
        getHoteldetails(id, date, end)
    }, [])
    console.log(hotels)
    console.log(details)
    if (details.data === null) {
        return <SplashScreen />
    }



    return <FlatList style={{ backgroundColor: '#ffffff' }} data={details.data} renderItem={({ item, index }) => <RenderItem item={item} index={index} navigation={navigation} />} scrollEventThrottle={16} keyExtractor={item => item.toString()} />

}

const mapDispatchToProps = {
    getHoteldetails
}

const mapStateToProps = (state) => {
    return {
        details: state.details,
        hotels: state.hotels
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HotelDetails)



























