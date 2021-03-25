import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home/Home'
import HotelDetails from '../screens/HotelDetails/hotelDetails'
import Transaction from '../screens/transactions/transaction'
import Summary from '../screens/summary/summary'



const hotelDetails = createStackNavigator()

const hotelDetailsRoute = () => {
    return <hotelDetails.Navigator headerMode={null}>
        <hotelDetails.Screen name="hommy" component={Home} />
        <hotelDetails.Screen name="hotelDetail" component={HotelDetails} />
        <hotelDetails.Screen name="summary" component={Summary} />
        <hotelDetails.Screen name="transaction" component={Transaction} />
    </hotelDetails.Navigator>



}

export default hotelDetailsRoute