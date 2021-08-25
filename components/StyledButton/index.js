import React from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './styles'
const StyledButton = ({ buttonText, type, onPress }) => {

    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6'
    const color = type === 'primary' ? '#FFFFFFA6' : '#171A20CC'
    return (
        <View style={styles.container}>
            <Pressable style={[styles.button, { backgroundColor: backgroundColor }]} onPress={() => onPress()}><Text style={[styles.text], { color: color }}>{buttonText}</Text></Pressable>
        </View>
    )
}

export default StyledButton