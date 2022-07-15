import { StyleSheet, ScrollView, View, StatusBar, useWindowDimensions } from 'react-native'
import React from 'react'
import Pin from '../components/Pin';

interface IMasonryList {
    pins: {
        id: string
        image: string
        title: string
    }[]
}

const MasonryList = ({ pins }: IMasonryList) => {
    const width = useWindowDimensions().width;
    const numberOfColumns = Math.ceil(width / 350);

    return (
        <View style={styles.container}>
            {
                Array.from(Array(numberOfColumns)).map((col, colIndex) => (
                    <View style={styles.column} key={colIndex}>
                        {
                            pins.filter((_, index) => index % numberOfColumns === colIndex)
                                .map((pin, _) => (
                                    <Pin
                                        pin={pin}
                                        key={pin.id}
                                    />
                                ))
                        }
                    </View>
                ))
            }
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row"
    },
    column: {
        flex: 1,
        padding: 2
    }
});

export default MasonryList
