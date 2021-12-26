import React from 'react'
import { View, Text, StyleSheet, Dimensions} from 'react-native'
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import tw from 'tailwind-react-native-classnames';

const Map = () => {
    const {width, height} = Dimensions.get('window');
    const ASPECT_RATIO = width / height;
    const LATITUDE_DELTA = 0.42;
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
    const GOOGLE_MAP_KEY = 'AIzaSyDBmw9l7QCXEW2pOfohlM5JFIh6iGJP_Bo';

    const Coordinates = [
        {
            latitude: 6.583331,
            longitude:  3.333332,
        },
        {
            latitude: 6.458985,
            longitude: 3.601521,
        }
    ]
    return (
        <View style={{}}>
            <MapView
              style={styles.mapStyle}      
              mapType={'standard'}
              userInterfaceStyle='dark'
              showsUserLocation={true}
              initialRegion={{
                latitude: 6.465422, 
                longitude: 3.406448,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
                }}
            >
            <Marker
                coordinate={Coordinates[0]}
                title={'Start'}
            />
            <Marker
                coordinate={Coordinates[1]}
                title={'End'}
            />
            <MapViewDirections
                origin={Coordinates[0]}
                destination={Coordinates[1]}
                apikey={GOOGLE_MAP_KEY}
                strokeWidth={4}
                // mode='DRIVING'
                strokeColor='hotpink'
            />

            </MapView>
        </View>
    )
}

export default Map

const styles = StyleSheet.create({
    mapStyle: {
        height: Dimensions.get('window').height,
    }
})
