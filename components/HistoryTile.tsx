import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import {  AntDesign } from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames';

export interface Props {
    img: string;
    orderNum: string;
    tStatus: string;
    setReceiptNum: (receiptNum: string) => void;
}

const HistoryTile = ({img, orderNum, tStatus, setReceiptNum}: Props) => {
    return (
        <TouchableOpacity onPress={() => setReceiptNum(orderNum)} style={tw`flex-row items-center mx-4 my-3`}>
           <View style={tw`bg-gray-100 py-4 px-4 rounded-full`}>
                <Image source={{uri: img}} style={tw`h-8 w-8`} />
           </View>

         <View style={tw`flex-row justify-between mx-4 flex-1 items-center`}>
           <View style={tw`ml-2`}>
                <Text style={tw`text-lg font-semibold`}>{orderNum}</Text>
                <Text style={tw`font-medium text-gray-500`}>{tStatus}</Text>  
           </View>   

          <AntDesign name='right' size={28} color='black' />   
          </View>      

        </TouchableOpacity>
    )
}

export default HistoryTile
