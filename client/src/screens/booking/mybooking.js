
import {View,  Text } from 'react-native'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllhotel } from '../../redux/actions/hotelsAction'
import { onUserlogut } from '../../redux/actions/userAction'

const Booking = ({ onUserlogut, user, hotels, getAllhotel }) => {



    return (
        <View>
            <Text>this is booking</Text>
        </View>

    )
}

const mapDispatchToProps = {
    onUserlogut, getAllhotel
}

const mapStatetoProps = (state) => {
    return {
        user: state.user,
        hotels: state.hotels
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Booking)