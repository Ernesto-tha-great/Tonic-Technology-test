import React, {useState} from 'react'
import { View, Text, SafeAreaView, TextInput, TouchableOpacity} from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Header from '../components/Header'
import {  AntDesign } from '@expo/vector-icons';
import TrackingCard from '../components/TrackingCard';
import HistoryTile from '../components/HistoryTile';

const TrackScreen = () => {
    const [receiptNum, setReceiptNum] = useState<string>();
    return (
        <SafeAreaView style={tw`flex-1 bg-white`}>
          <Header />

           <View style={tw`bg-yellow-400 mx-4 rounded-3xl items-center mb-6`}>
                <View style={tw`pt-12`}>
                    <Text style={tw`text-2xl font-semibold`}>Track Your Package</Text>
                    <Text style={tw`text-lg text-gray-500 `}>Enter the receipt number that has {'\n'}been given by the officer</Text>
                </View>

                <View style={tw`py-8`}>
                  <TextInput onChangeText={setReceiptNum} value={receiptNum} placeholder='Enter the receipt Number' style={[tw`border border-gray-600 rounded-full pl-4 `,{ height: 55, width: 260}]}/>
                    <TouchableOpacity style={tw`flex-row bg-black justify-between py-3 rounded-full px-4 mt-3 items-center`}>
                      <Text style={tw`text-white text-xl font-medium`}>Track Now</Text>
                      <AntDesign name='arrowright' size={30} color='white' />
                    </TouchableOpacity>
                </View>
            </View>

            <TrackingCard ReceiptNum={setReceiptNum} />
            
        </SafeAreaView>
    )
}

export default TrackScreen
