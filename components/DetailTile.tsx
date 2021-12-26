import React from 'react'
import { View, Text, Image} from 'react-native'
import tw from 'tailwind-react-native-classnames'

export interface Props {
    status: string;
    time: string;
    image: string;
    location: string;
}
const DetailTile = ({status, time, location, image}: Props) => {
    return (
        <View style={tw`flex-row items-center py-2`}>
           <View style={tw`bg-yellow-100 py-4 px-4 rounded-full`}>
               <Image source={{uri: image}} style={tw`h-8 w-8`} />
           </View>
           <View style={tw`flex-row justify-between items-center flex-1 mx-3 `}>
               <View>
                   <Text style={tw`text-lg  font-semibold`}>{status}</Text>
                   <Text style={tw`text-lg font-medium text-gray-500`}>{location}</Text>
               </View>
               <View>
                     <Text style={tw`font-medium text-gray-500`}>{time}</Text>
               </View>
           </View>
        </View>
    )
}

export default DetailTile
