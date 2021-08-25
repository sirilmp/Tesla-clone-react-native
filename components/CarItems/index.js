import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import StyledButton from '../StyledButton'
import styles from './styles'

const CartItem = () => {
    return (
        <View style={styles.carModalContainer}>
            <ImageBackground source={require('../../assets/images/ModelS.jpeg')} style={styles.image} />
            <View style={styles.titles}>
                <Text style={styles.heading}>Model S</Text>
                <Text style={styles.sebHeading}>Sample text</Text>
            </View>
            <StyledButton buttonText={'CUSTOM ORDER'} type={'primary'} onPress={()=>{
                console.warn('btn pressde')
            }} />
            <StyledButton buttonText={'EXISTING INVENTORY'} type={'secondary'} onPress={()=>{
                console.warn('btn pressde')
            }} />
        </View>
    )
}

export default CartItem
