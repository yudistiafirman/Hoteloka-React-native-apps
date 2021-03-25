import { SafeAreaView, View, FlatList, Animated, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import HotelCard from './FlatCard'
import { getAllhotel, setDate, sortHotelbyPrice, hideDatePicker, showDatePicker, setDateEnd } from '../../redux/actions/hotelsAction'
import { connect } from 'react-redux'
import Mypicker from './picker'
import { format } from '../../constants/dateFormat';
import FindHotel from './findHotel'







const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList)



const Home = ({ hotels, getAllhotel, sortHotelbyPrice, navigation, customer, setDate }) => {

    const y = new Animated.Value(0)
    const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], {
        useNativeDriver: true
    })
    const [selectedValue, setSelectedValue] = useState("Sort By");
    const [isDateVisible, setIsDateVisible] = useState(false)
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDay() + 9))
    const [isEndDateVisible, setIsEndDateVisible] = useState(false)

    useEffect(() => {
        const date = format(hotels.filterDate)
        const end = format(hotels.filterDateEnd)
        getAllhotel(date, end)
    }, [hotels.filterDate, hotels.filterDateEnd])

    const handleConfirm = (date) => {
        setStartDate(date)
   
        setIsDateVisible(false)
    }
    const endDatehandleConfirm = (selectedDate) => {
        setEndDate(selectedDate)
        
        setIsEndDateVisible(false)

    }

    const findHotel = (start, end) => {
  
        if( end.getDate() <= start.getDate()){
            alert('wrong date')
        }else{
            const range = { startDate: start, endDate: end }
            
            setDate(range)
        }
       
    }



    return (


        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>



            <FindHotel startDate={startDate.toString().slice(0, 10)} endDate={endDate.toString().slice(0, 10)} handleStartDate={() => setIsDateVisible(true)} handleEndDate={() => setIsEndDateVisible(true)} handleFindHotel={() => findHotel(startDate, endDate)} isStartVisible={isDateVisible} handleConfirmStart={handleConfirm} onCancelStart={() => setIsDateVisible(false)} isEndDateVisible={isEndDateVisible} onCancelendDate={() => setIsEndDateVisible(false)} endDatehandleConfirm={endDatehandleConfirm} />

            <Mypicker selectedValue={selectedValue} setValue={(itemValue, itemIndex) => setSelectedValue(itemValue)} />


            <View style={{ flex: 1, marginHorizontal: 20, justifyContent: 'space-evenly', }}>
                <AnimatedFlatlist data={hotels.data} renderItem={({ index, item }) => <HotelCard y={y} onPress={() => navigation.navigate('hotelDetail', { id: item.id })} index={index} id={item.id} name={item.name} address={item.address} source={{ uri: "http://192.168.100.8:9000" + "/public/hotel-images/" + item.url }} star={item.star} price={item.price} />} keyExtractor={item => item.id.toString()} bounces={false} {...{ onScroll }} scrollEventThrottle={16} />
            </View>
        </SafeAreaView >

    )
}

const mapDispatchToProps = {
    getAllhotel, sortHotelbyPrice, setDate
}

const mapStatetoProps = (state) => {
    return {

        hotels: state.hotels,
        customer: state.user
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Home)





































