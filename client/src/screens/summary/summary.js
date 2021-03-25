import React from 'react'
import {  View} from 'react-native'
import { connect } from 'react-redux'
import Button from '../../Component/Button'
import HotelSummary from './hotelSumarry'
import GuestDetails from './guesDetails'
import BookingSummary from './bookingSumarry'
import Header from './Header'
import { createTransaction } from '../../redux/actions/transactionAction'


const Summary = ({ route, hotels, customer, navigation,createTransaction }) => {

    const { data, id, room_name, room_price } = route.params
    const duration =  hotels.filterDateEnd.getDate()-hotels.filterDate.getDate()
    const total= duration*room_price
    const transaction_data={
        begin_book_date:hotels.filterDate,
        end_book_date:hotels.filterDateEnd,
        hotel_room:room_name,
        price:room_price,
        rooms_id:id,
        hotel_name:data.name,
        email_buyer:customer.email,
        fullname_buyer:customer.fullname
    }
const makeTransaction=(data)=>{
        createTransaction(data)
        navigation.navigate('transaction')

}
   

    return <View style={{ flex: 1,marginHorizontal:5,backgroundColor:'#ffffff' }}>
 
         <Header onPress={()=> navigation.navigate('hotel-details')}/>
 
         <HotelSummary hotel_name={data.name} hotel_star={data.star} hotel_address={data.address} hotel_phone={data.phone}/>
 
         <GuestDetails guest_name={customer.fullname} guest_email={customer.email} guest_phone={customer.phone} />
 
         <View style={{flex: 1,  marginBottom: 10, }}>
             <BookingSummary room_price={room_price} startDate={hotels.filterDate.toString().slice(0,15)} endDate={hotels.filterDateEnd.toString().slice(0,10)} room_name={room_name} duration={duration} total={total} />
         </View>
 
         <View style={{flexDirection:'row',justifyContent:'center',marginBottom:10}}>
         <Button variant="primary" label="Book Now" onPress={()=>makeTransaction(transaction_data)}  />
         </View>
 
 
     </View >
 
 }
 const mapDispatchToProps={
     createTransaction
 }
 const mapStateToProps = (state) => {
     return { hotels: state.hotels, customer: state.user }
 }
 
 
 export default connect(mapStateToProps,mapDispatchToProps)(Summary)

    



     



       
    