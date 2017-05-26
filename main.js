import Expo from 'expo';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MyApp from './app/containers/App.js';

class App extends React.Component {

  render() {
    return (
      <View style={[styles.container]}>
        <MyApp />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

Expo.registerRootComponent(App);
