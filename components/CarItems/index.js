import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import StyledButton from '../StyledButton'
import styles from './styles'

const CartItem = ({ heading, subHeading, tailHeading, source }) => {
    return (
        <View style={styles.carModalContainer}>
            <ImageBackground source={source} style={styles.image} />
            <View style={styles.titles}>
                <Text style={styles.heading}>{heading}</Text>
                <Text style={styles.subHeading}>{subHeading}
                    {' '}<Text style={styles.tailHeading}>{tailHeading}</Text>
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <StyledButton buttonText={'CUSTOM ORDER'} type={'primary'} onPress={() => {
                    console.warn('btn pressde')
                }} />
                <StyledButton buttonText={'EXISTING INVENTORY'} type={'secondary'} onPress={() => {
                    console.warn('btn pressde')
                }} />
            </View>
        </View>
    )
}

export default CartItem
