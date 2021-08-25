import React from 'react';
import { Dimensions, FlatList, View } from "react-native"
import cars from './cars';
import CarItems from '../CarItems'
import styles from './Styles';

const CarsList = () => {
    return (
        <View style={styles.container}>
            <FlatList data={cars} renderItem={({ item }) => <CarItems car={item} />}

                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}

            />
        </View>
    )
}

export default CarsList