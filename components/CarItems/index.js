import React from 'react'
import {ImageBackground, Text, View } from 'react-native'
import StyledButton from '../StyledButton'
import styles from './styles'

const CartItem = (props) => {

const { heading, subHeading, tailHeading, image }= props.car


    return (
        <View style={styles.carModalContainer}>
            <ImageBackground source={image} style={styles.image} />
            <View style={styles.titles}>
                <Text style={styles.heading}>{heading}</Text>
                <Text style={styles.subHeading}>{subHeading}
                    {' '}<Text style={styles.tailHeading}>{tailHeading}</Text>
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <StyledButton buttonText={'CUSTOM ORDER'} type={'primary'} onPress={() => {
                    console.warn('btn pressed')
                }} />
                <StyledButton buttonText={'EXISTING INVENTORY'} type={'secondary'} onPress={() => {
                    console.warn('btn pressed')
                }} />
            </View>
        </View>
    )
}

export default CartItem
