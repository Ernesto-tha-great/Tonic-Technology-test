import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'

export const SLIDER_WIDTH = Dimensions.get('window').width + 10
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)



const CarouselItem = ({item, index}: any) => {
    return (
        <View key={index}  >
           <Image resizeMode='cover' source={{uri: item.source}} style={[tw`rounded-3xl`, {width: ITEM_WIDTH, height: 270}]} />
        </View>
    )
}

export default CarouselItem
