import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,View } from 'react-native';

import CarsList from './components/CarsList';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CarsList />
      {/* <CartItem heading={'Model S'} subHeading={'Order Online for'} tailHeading={'Touchless Delivery'} source={require('./assets/images/ModelS.jpeg')} />
      <CartItem heading={'Model S'} subHeading={'Order Online for'} tailHeading={'Touchless Delivery'} source={require('./assets/images/ModelS.jpeg')} /> */}
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
