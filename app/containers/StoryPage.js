import React from 'react';
import {View, Text, StyleSheet, Image,TouchableOpacity} from 'react-native';

export default class Item extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: navigation.state.params.name ,
  });
  constructor(props) {
    super(props);
    this.state = {
      html: "",
      json: {}
    }
  }
  fetchContent(){
    fetch("http://trevor-producer-cdn.api.bbci.co.uk/content" + this.props.navigation.state.params.id)
      .then((response) => response.json())      // 将返回的response值转换为json，并作为返回值返回
      .then((data) => this.setState({html: data.body, title: data.title}))      // data即是上个.then方法的返回值，这里将其打印到console
      .catch((error) => console.error(error));
  }
  componentWillMount() {
    this.fetchContent();
  }
  render() {
    return (
      <View style={[styles.container]}>
        {this.state.html!=null ? <Text>{this.state.html}</Text> : <Text>Loading</Text>}
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
