import React from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DateTimerPidkerModal_2 from 'react-native-modal-datetime-picker'
import Icon from 'react-native-vector-icons/FontAwesome5'

const findHotel = ({ handleStartDate, handleEndDate, startDate, endDate, handleFindHotel, isStartVisible, handleConfirmStart, onCancelStart, isEndDateVisible, endDatehandleConfirm, onCancelendDate }) => {
    return <View style={{ padding: 10, justifyContent: 'space-around', elevation: 1, width: 370, height: 210, backgroundColor: '#51adcf', marginHorizontal: 10, borderColor: '#707070', borderRadius: 20, marginTop: 10 }}>

        <View>

            <View style={{
                backgroundColor: '#ffffff', borderRadius: 20, flexDirection: 'row', alignItems: 'center', elevation: 1
            }}>
                <Icon name="map-marker-alt" size={16} color='#14274e' style={{ marginLeft: 5 }} />
                <TextInput placeholder="location" style={{
                    fontSize: 18,
                    flex: 1,
                    color: '#ffffff', fontSize: 16
                }} />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flex: 0.49, }}>
                    <Text style={{ fontWeight: "700", textAlign: 'center', marginLeft: 5, color: 'white', fontSize: 16, fontWeight: '700', }}>Check In</Text>
                    <TouchableOpacity onPress={handleStartDate} style={{ borderRadius: 20, marginTop: 10, padding: 15, flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#f4f4f2' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ color: '#1a1c20', fontSize: 16, fontWeight: '700', marginRight: 9 }}>{startDate}</Text>
                            <Icon name="calendar" size={18} color='#14274e' />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 0.49, }}>
                    <Text style={{ marginRight: 5, fontWeight: "700", textAlign: 'center', marginLeft: 5, color: '#A8B2C8', fontSize: 16, color: '#ffffff' }}>Check out</Text>
                    <TouchableOpacity onPress={handleEndDate} style={{ borderRadius: 20, marginTop: 10, padding: 15, backgroundColor: '#f4f4f2' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ color: '#1a1c20', fontSize: 16, fontWeight: '700', marginRight: 9 }}>{endDate}</Text>
                            <Icon name="calendar" size={18} color='#14274e' />
                        </View>
                    </TouchableOpacity>
                </View>

            </View>

            <TouchableOpacity onPress={handleFindHotel} style={{ backgroundColor: '#0f4c75', alignItems: 'center', height: 50, justifyContent: 'center', borderRadius: 20, marginTop: 10 }}>
                <Text style={{ color: 'white', fontWeight: '700' }}>Let's Go</Text>
            </TouchableOpacity>
        </View >
        <DateTimePickerModal
            isVisible={isStartVisible}
            mode="date"
            onConfirm={handleConfirmStart}
            onCancel={onCancelStart}
            display='spinner'
        />

        <DateTimerPidkerModal_2
            isVisible={isEndDateVisible}
            mode="date"
            onConfirm={endDatehandleConfirm}
            onCancel={onCancelendDate}
            display='spinner'

        />


    </View>
}

export default findHotel