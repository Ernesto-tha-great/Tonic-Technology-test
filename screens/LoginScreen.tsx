import React from 'react'
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import * as Google from 'expo-google-app-auth';


const LoginScreen = ({navigation}: any) => {
    const [googleSubmitting, setGoogleSubmitting] = React.useState(false)



    const handleGoogleSignIn = () => {
        setGoogleSubmitting(true)
        const config = {
            iosClientId: `868772862877-6mkd23h1o7fc2a6khs822bqf8m91dghq.apps.googleusercontent.com`, 
            androidClientId: `868772862877-h8lu4f89ar45bk2v1fj3ub2rhuvogg6h.apps.googleusercontent.com`,
            scopes: ['profile', 'email']
            }

        
        Google.logInAsync(config).then((res) => {
                const {type } = res;
                if(type === 'success'){
                console.log("success");
                navigation.navigate('Root', {})  
                }else{
                    console.log('erroroooo')
                }
                setGoogleSubmitting(false)
        }).catch((err) => {
            console.log(err)
            setGoogleSubmitting(false)
        }
        )}
    return (
        <View style={tw`flex-1 bg-yellow-400`}>
            <View style={tw`mt-32 pb-6`}>
            <Image source={{uri: 'https://cdn.pixabay.com/photo/2017/07/08/10/44/parcel-2484036__340.png'}} style={tw`w-full h-72`} />
            </View>

            <View style={tw`justify-center items-center my-8`}>
                <Text style={tw`text-3xl font-semibold my-3`}>Welcome to E-Bikes</Text>
                <Text style={tw`text-lg text-center text-gray-500`}>Buying Electric bikes just got a lot easier,{'\n'} Try us today.</Text>
            </View>

            {!googleSubmitting ? (
                <TouchableOpacity  onPress={handleGoogleSignIn} activeOpacity={0.7} style={tw`flex-row items-center bg-black mx-6 py-3 my-3  px-4 rounded-full`}>
                <Image source={{uri: 'https://cdn.pixabay.com/photo/2017/01/19/09/11/logo-google-1991840__340.png'}} style={tw`w-8 h-8 bg-white rounded-full`} />
                    <Text style={tw`text-white text-lg font-semibold ml-12`}>Login with Google</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity disabled={true} onPress={handleGoogleSignIn} activeOpacity={0.7} style={tw` items-center bg-black mx-6 py-3 my-3  px-4 rounded-full`}>
                    <ActivityIndicator size="small" color="white" />
                </TouchableOpacity>
            )}

                
           

                <View style={tw`flex-row justify-center my-3`}>
                    <Text style={tw`text-lg text-gray-500`}>Don't have any account? </Text>
                    <TouchableOpacity>  
                        <Text style={tw`text-lg`}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
           
        </View>
    )
}

export default LoginScreen
