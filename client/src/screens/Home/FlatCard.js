import React from 'react'
import { View, Text, Image, Animated, Dimensions, TouchableOpacity, TouchableHighlight } from 'react-native'
import {getStar} from '../../constants/getstar'
import Icon from 'react-native-vector-icons/FontAwesome5'

const { height: wHeight } = Dimensions.get('window')
const { width } = Dimensions.get('window')
const ratio = 228 / 362;
const CARD_WIDTH = width * 0.8;
const CARD_HEIGHT = CARD_WIDTH * ratio;
const HEIGHT = CARD_HEIGHT + 2 * 16
const height = wHeight - 64
const FlatCard = ({ source, name, address, price, onPress, y, index, id,star }) => {
    const position = Animated.subtract(index * CARD_HEIGHT, y)
    const isDisappering = -CARD_HEIGHT;
    const isTop = 0
    const isBotton = height - CARD_HEIGHT
    const isAppearing = height
    const translateY = Animated.add(y, y.interpolate({
        inputRange: [0, 0.0001 + index * CARD_HEIGHT],
        outputRange: [0, -index * CARD_HEIGHT],
        extrapolateRight: 'clamp'
    }))

    const scale = position.interpolate({
        inputRange: [isDisappering, isTop, isBotton, isAppearing],
        outputRange: [0.5, 1, 1, 0.5],
        extrapolate: 'clamp'
    })
    const opacity = position.interpolate({
        inputRange: [isDisappering, isTop, isBotton, isAppearing],
        outputRange: [0.5, 1, 1, 0.5],
        extrapolate: 'clamp'
    })
    return <Animated.View style={[{ opacity, elevation: 1, borderRadius: 5, borderColor: '#707070', margin: 16, overflow: 'hidden', transform: [{ translateY }, { scale }] }]} >
        <TouchableOpacity style={{ flexDirection: 'row' }} activeOpacity={0.1} onPress={onPress}>
            <View style={{ flex: 1.5 }}>

                <Image source={source} style={{ width: 138, height: 160 }} />

            </View>

            <View style={{ flex: 2, backgroundColor: '#ffffff', justifyContent: 'space-around', paddingLeft: 10 }}>

                <Text style={{ color: '#19A3FF', fontSize: 14, fontWeight: '700' }}>{name}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="map-marker-alt" color="#A8B2C8" style={{ marginTop: 4 }} />
                    <Text style={{ color: '#A8B2C8', fontSize: 14, }}>{address}</Text>
                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row' }}>
                        {
                            getStar(star)
                        }
                    </View>

                    <Text style={{ color: '#19A3FF', fontSize: 14, fontWeight: '700', marginRight: 10 }}>{price.toLocaleString('id - ID')}/night</Text>

                </View>
            </View>
        </TouchableOpacity>
    </Animated.View>






}


export default FlatCard