import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class Item extends React.Component {

  render() {
    return (
      <View style={[styles.container]}>
        <Image
          source={{uri: this.props.data.content.relations[0].content.href}}
          style={{width: 300, height: 200}}
        />
        <Text>{this.props.data.content.shortName}</Text>
        <Text>{this.props.data.content.lastUpdated}</Text>
        <Text>{this.props.data.content.relations[1].content.name}</Text>
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
