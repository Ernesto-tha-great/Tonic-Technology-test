import React, {useRef, useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CarouselComp, {Pagination} from 'react-native-snap-carousel'
import CarouselItem, {SLIDER_WIDTH, ITEM_WIDTH} from './CarouselItem'
import appData from '../constants/DummyData'
import tw from 'tailwind-react-native-classnames'


const Carousel = () => {
    const [activeSlide, setActiveSlide] = useState(0)
    const isCarousel = useRef(null)
    return (
        <View style={tw`-ml-10  pt-4  `}>
          <CarouselComp
            layout='default'
            ref={isCarousel}
            data={appData}
            renderItem={CarouselItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            inactiveSlideScale={0.95}
            useScrollView={true}
            onSnapToItem={(index) => setActiveSlide(index)}
            // loop={true}
          />
            <Pagination
                dotsLength={appData.length}
                activeDotIndex={activeSlide}
                ref={isCarousel}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                containerStyle={tw`ml-8`}
                dotStyle={styles.paginationDot}
            />
        </View>
    )
}

export default Carousel

const styles = StyleSheet.create({
    paginationContainer: {
        paddingVertical: 12,
        justifyContent: 'center',
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        
    }
})