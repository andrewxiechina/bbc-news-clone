import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.refresh();
  }
  refresh() {
    const url = "http://trevor-producer-cdn.api.bbci.co.uk/content/cps/news/world"; // 获取十名用户的信息

    fetch(url)
      .then((response) => response.json())      // 将返回的response值转换为json，并作为返回值返回
      .then((data) => this.setState(data)) // data即是上个.then方法的返回值，这里将其打印到console
      .then(() => console.log(this.state))
      .catch((error) => console.error(error));
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up main.js to start working on your app!</Text>
        <Text>{this.state.type}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);
