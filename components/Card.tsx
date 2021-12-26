import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet,  Dimensions, ScrollView} from 'react-native'
import tw from 'tailwind-react-native-classnames';
import {  Entypo } from '@expo/vector-icons';
import DetailTile from './DetailTile';
import { data3 } from '../constants/DummyData';


const {width, height} = Dimensions.get('screen');
const Card = () => {
    return (
        <View style={tw`mt-6`}>
            <View style={tw`flex-row justify-between mb-10 mx-4 items-center`}>
            <View>
                <Text style={tw`text-lg text-gray-600 font-medium`}>Estimate arrives in</Text>
                <Text style={tw`text-2xl font-semibold`}>2h 40m</Text>
            </View>
            <View>
                <Entypo name='dots-two-horizontal' size={25} color='black' />
            </View>
            </View>

            <View style={tw`bg-yellow-400 p-4 mx-4 rounded-3xl  `}>
                <View style={tw`ml-4 border-b border-gray-400 py-3`}>
                    <Text style={tw`text-lg font-semibold`}>Sukabumi, Indonesia</Text>
                    <Text style={tw`text-gray-600`}>No receipt: SCP6653728497</Text>
                </View>
                <View style={tw`ml-4 border-b border-gray-400 py-3`}>
                    <Text style={tw`text-lg font-semibold`}>
                        2, 50 USD
                    </Text>
                    <Text style={tw`text-gray-600`}>
                        Postal fee
                    </Text>
                </View>
                <View style={tw`ml-4 py-3 `}>
                <Text style={tw`text-lg font-semibold`}>
                    Bali, Indonesia
                </Text>
                <Text style={tw`text-gray-600`}>
                    Parcel, 24kg
                </Text>
                </View>
            </View>
            
            <View style={tw`p-4`}>
                <Text style={tw`text-xl font-semibold`}>History</Text>
                {data3.map((item: any, index: number) => (
                    <DetailTile key={index} status={item.status} time={item.time} image={item.image} location={item.location} />
                ))}
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        width: width/1.2,
        shadowColor: "#ccc",
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.9,
        marginVertical: 10,
        backgroundColor: 'white',
        padding: 10,
        alignSelf: 'center',
    }
})
