import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import CartItem from './components/CarItems';

export default function App() {
  return (
    <View style={styles.container}>

     <CartItem heading={'Model S'} subHeading={'Order Online for'} tailHeading={'Touchless Delivery'} source={require('./assets/images/ModelS.jpeg')}/>
     

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
