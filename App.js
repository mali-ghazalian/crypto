import { StatusBar } from 'react-native';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';
import HomeScreen from './src/screens/homeScreen';
import CoinDatailedScreen from './src/screens/coinDetailedScreen';

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      {/* <HomeScreen /> */}
      <CoinDatailedScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212'
  }
})

export default App;
