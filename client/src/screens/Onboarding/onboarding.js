import React, { useRef } from 'react'
import { View, StyleSheet, Dimensions, Image } from 'react-native'
import Animated, { divide, Extrapolate, interpolate, multiply } from 'react-native-reanimated'

import { useValue, onScrollEvent, interpolateColor } from 'react-native-redash/lib/module/v1'
import Slide from './slide'
import SubSlide from './subslide'
import Dot from './Dot'
import IHG from '../../supports/images/IHG.png'
import marriot from '../../supports/images/marriot.png'
import hilton from '../../supports/images/hilton.png'
import santika from '../../supports/images/santika.jpg'
import ihglogo from '../../supports/images/ihglogo.png'
import marriotlogo from '../../supports/images/marriotlogo.png'
import hiltonlogo from '../../supports/images/hiltonlogo.png'
import santikalogo from '../../supports/images/santikalogo.png'


const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    slider: {
        height: 0.61 * height,

        borderBottomRightRadius: 75
    },
    footer: {
        flex: 1,
    },
    footerContent: {
        flex: 1, backgroundColor: 'white'
    },
    pagination: {


        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    picture: {
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: undefined,


    },
    underlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderBottomRightRadius: 75,
        overflow: 'hidden'
    },
})

const slide = [
    { picture: IHG, label: ihglogo, color: '#BFEAF5', description: '20% discount from dine in ' },
    { picture: marriot, label: marriotlogo, color: '#BEECC4', description: 'Free house pouring ' },
    { picture: hilton, label: hiltonlogo, color: '#FFE4D9', description: 'Free airport pickup' },
    { picture: santika, label: santikalogo, color: '#FFDDDD', description: '50% discount  for honeymooners' }
]

const onBoarding = ({ navigation }) => {

    const scroll = useRef(null)
    const x = useValue(0)
    const onScroll = onScrollEvent({ x })
    const backgroundColor = interpolateColor(x, {
        inputRange: slide.map((_, index) => index * width),

        outputRange: slide.map((value) => value.color)
    })


    return (
        <View style={styles.container}>
            <Animated.View style={[styles.slider, { backgroundColor }]}>
                {
                    slide.map(({ picture }, index) => {
                        const opacity = interpolate(x, {
                            inputRange: [(index - 1) * width, index * width, (index + 1) * width],
                            outputRange: [0, 1, 0],
                            extrapolate: Extrapolate.CLAMP
                        })
                        return <Animated.View key={index} style={[styles.underlay, { opacity }]}>
                            <Image source={picture} style={styles.picture} />
                        </Animated.View>
                    })
                }

                <Animated.ScrollView
                    {...{ onScroll }}

                    ref={scroll} horizontal snapToInterval={width} decelerationRate="fast" showsHorizontalScrollIndicator={false} bounces={false}  >
                    {slide.map(({ label }, index) =>
                        <Slide key={index} label={label} right={index % 2} />
                    )}



                </Animated.ScrollView>

            </Animated.View>
            <View style={styles.footer}>
                <Animated.View style={{ ...StyleSheet.absoluteFillObject, backgroundColor }} />
                <View style={styles.footerContent}>

                    <View style={styles.pagination}>
                        {slide.map((_, index) => {
                            return <Dot key={index} currentIndex={divide(x, width)} idx={index} />
                        })}
                    </View>
                    <Animated.View style={{ width: width * slide.length, flex: 1, flexDirection: 'row', transform: [{ translateX: multiply(x, - 1) }], }}>
                        {
                            slide.map((value, index) => {
                                return <SubSlide key={index} text={value.description} last={index === slide.length - 1} navigation={navigation} onPress={() => {
                                    if (scroll.current) {
                                        scroll.current.getNode().scrollTo({ x: width * (index + 1), animated: true })
                                    }
                                }} />
                            })
                        }
                    </Animated.View>

                </View>

            </View>
        </View >
    )
}

export default onBoarding