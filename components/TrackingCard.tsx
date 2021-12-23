import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, Image} from 'react-native'
import tw from 'tailwind-react-native-classnames'
import {data2 }from '../constants/DummyData'
import HistoryTile from './HistoryTile'

const TrackingCard = () => {
    return (
        <View>
            <Text style={tw`pt-6 px-4 text-xl font-semibold`}>Tracking history</Text>
            <ScrollView>
                {data2.map((item: any, index: number) => (
                   <HistoryTile key={index} img={item.img} orderNum={item.orderNum} tStatus={item.tStatus} />
                ))}
            </ScrollView>
        </View>
    )
}

export default TrackingCard
