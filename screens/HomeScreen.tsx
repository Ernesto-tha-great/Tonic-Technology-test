import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Header from '../components/Header'
import tw from 'tailwind-react-native-classnames'
import Carousel from '../components/Carousel'
import {  AntDesign } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';


const HomeScreen = ({navigation}: any) => {
    return (
        <View style={tw` bg-white flex-1`}>
            <Header />
            <Carousel />

            <View style={tw`flex-row py-4  bg-yellow-400`}>
                <View style={tw``}>
                    <Text style={tw`text-xl text-gray-600  mx-8 `}>Gotten your {"\n"}E-Bike yet?</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Track')} activeOpacity={0.4} style={tw`flex-row items-center py-4 px-6 rounded-full bg-black mr-6`}>
                    <Text style={tw`mx-2 text-white text-lg font-semibold`}>Your Orders</Text>
                    <AntDesign name='arrowright' size={30} color='white' />
                </TouchableOpacity>
            </View>

            <View style={tw`flex-row justify-evenly items-center `}>
                <View style={tw``}>
                <LottieView 
               style={{height: 170,   marginBottom: 10}} 
                source={require('../assets/animations/cycler.json')}
                autoPlay
                speed={0.9}
                loop
                />
                </View>
                <Text style={tw`text-xl font-medium text-gray-600 mr-2`}>You too can join our {'\n'}Elite squad of E-bikers</Text>
            </View>
        </View>
    )
}

export default HomeScreen
