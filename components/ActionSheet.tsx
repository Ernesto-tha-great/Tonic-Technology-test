import React, {useState} from 'react'
import { View, Text, StyleSheet, Dimensions, Animated, ScrollView } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import Card from './Card';


const {width} = Dimensions.get('screen');
const height = Dimensions.get('window').height;
const ActionSheet = () => {
    const [alignment ] = useState(new Animated.Value(0));

    const bringUpActionSheet = () => {
        Animated.timing(alignment, {
            toValue: 1,
            duration: 500,
            useNativeDriver: false
        }).start();
    }
    const hideTheActionSheet = () => {
        Animated.timing(alignment, {
            toValue: 0,
            duration: 500,
            useNativeDriver: false
        }).start();
    }


    const actionSheetInterpolate = alignment.interpolate({
        inputRange: [0, 1],
        outputRange: [-height / 1.2,  -102]
    })

    const actionSheetStyle = {
        bottom: actionSheetInterpolate
    }

    const gestureHandler = (e: any) => {
        if(e.nativeEvent.contentOffset.y > 0) bringUpActionSheet();
        else if (e.nativeEvent.contentOffset.y < 0) hideTheActionSheet();
    }
    
    
    return (
        <Animated.View style={[styles.container, actionSheetStyle]}>
            <ScrollView onScroll={(e) => gestureHandler(e)} style={styles.grabber}>
            </ScrollView>
            <ScrollView style={{height: height * 3.3}}>  
                    <Card />
            </ScrollView>
        </Animated.View>
    )
}

export default ActionSheet

const styles = StyleSheet.create({
    container: {
        left: 0,
        right: 0,
        height: height * 3,
        backgroundColor: '#fff',
        width: width ,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        paddingBottom: 40,
        
        
        
    },
    grabber: {
        width: 60,
        height: height / 33.9,
       borderTopWidth: 9,
        borderTopColor:"#aaa",
        alignSelf: 'center',
        marginTop: 5,
    }
})