import React from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';
import ItemsList from '../components/ItemsList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
         rowHasChanged: (row1, row2) => row1 !== row2,
       }),
    };
    this.refresh();

  }
  refresh() {
    const url = "http://trevor-producer-cdn.api.bbci.co.uk/content/cps/news/world"; // 获取十名用户的信息

    fetch(url)
      .then((response) => response.json())      // 将返回的response值转换为json，并作为返回值返回
      .then((data) => this.setState({dataSource: this.state.dataSource.cloneWithRows(data.relations)}))      // data即是上个.then方法的返回值，这里将其打印到console
      .catch((error) => console.error(error));
  }
  render() {
    return (
      <View style={[styles.container]}>
        <ItemsList dataSource={this.state.dataSource} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
