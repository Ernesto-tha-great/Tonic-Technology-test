import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Header from '../components/Header'
import tw from 'tailwind-react-native-classnames'
import Carousel from '../components/Carousel'
import {  AntDesign } from '@expo/vector-icons';

const HomeScreen = () => {
    return (
        <View style={tw` bg-white flex-1`}>
            <Header />
            <Carousel />

            <View style={tw`flex-row py-4  bg-yellow-400`}>
                <View style={tw``}>
                    <Text style={tw`text-xl text-gray-600  mx-8 `}>Gotten your {"\n"}E-Bike yet?</Text>
                </View>
                <TouchableOpacity activeOpacity={0.4} style={tw`flex-row items-center py-4 px-6 rounded-full bg-black mr-6`}>
                    <Text style={tw`mx-2 text-white text-lg font-semibold`}>Your Orders</Text>
                    <AntDesign name='arrowright' size={30} color='white' />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeScreen
