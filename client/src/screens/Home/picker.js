import React from 'react'
import { View, Text, Picker } from 'react-native'


const MyPicker = ({ setValue, selectedValue }) => {
    return <View style={{
        flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginTop: 10,
    }}>
        < Text style={{ marginRight: 5, color: '#A8B2C8', fontSize: 16, fontWeight: '500' }}>Sort by</Text>
        <Picker
            selectedValue={selectedValue}
            defaultValue=""
            style={{ height: 50, width: 30 }}
            onValueChange={setValue}
        >

            <Picker.Item label="price" value="price" />
        </Picker>

    </View>

}

export default MyPicker