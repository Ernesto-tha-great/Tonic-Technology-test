import React from 'react'
import { View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native'
import tw from 'tailwind-react-native-classnames'
import {  Ionicons } from '@expo/vector-icons';

const Header = () => {
    return (
        <SafeAreaView style={tw``}>
            <View style={tw`flex-row justify-between items-center mx-5`}>
                <Image source={{uri: 'https://cdn.pixabay.com/photo/2018/08/29/03/57/man-3639100__340.jpg'}} style={tw`h-14 w-14 rounded-full`} />
                <TouchableOpacity style={tw`bg-gray-100 py-2 px-2 mr-2 rounded-xl`}>
                  <Ionicons size={28} name='notifications-outline' />
                </TouchableOpacity>
            </View>
            <Text style={tw`p-4 text-xl font-bold`}>Hello good Morning!</Text>
        </SafeAreaView>
    )
}

export default Header
