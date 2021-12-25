import React, {useState} from 'react'
import { View, Text, TextInput } from 'react-native'
import {  AntDesign } from '@expo/vector-icons';
import Map from '../components/Map';
import tw from 'tailwind-react-native-classnames';
import ActionSheet from '../components/ActionSheet';


const TrackingDetailScreen = ({navigation, route}: any) => {
    const [receiptNum, setReceiptNum] = useState<string>(route.params.rNum);
    return (
        <View style={tw`flex-1 relative`}>
            <Map />
            <View style={tw` absolute z-50 top-10 flex-row items-center my-2`}>
               <AntDesign onPress={() => navigation.goBack()} style={tw`ml-4`} name='left' size={28} color='black' />
                <Text style={tw`text-2xl font-semibold mx-16 `}>Tracking Details</Text>
                </View>

           <View style={tw`z-20 top-16`}>
                <View style={tw`bg-yellow-400 items-center py-3 px-3 rounded-full mx-14 my-8`}>
                <TextInput editable={false}  value={receiptNum} placeholder='Enter the receipt Number' style={[tw`border border-gray-600 text-lg  font-medium rounded-full text-center `,{ height: 55, width: 260}]}/>
                </View>

                
           </View>

           <View style={tw`absolute`}>
                <ActionSheet />
            </View>
        </View>
    )
}

export default TrackingDetailScreen
