import React from 'react';
import {View,  StyleSheet, Image,TouchableOpacity, Dimensions} from 'react-native';
import {Text, Card} from 'react-native-elements';

var {height, width} = Dimensions.get('window');

export default class Item extends React.Component {
  pressed() {

  }
  render() {
    return (
      <TouchableOpacity  onPress={() => this.props.navigation.navigate('Detail', {id: this.props.data.content.id, name: this.props.data.content.shortName})}>

      <View style={[styles.container]}>
        <Image
          source={{uri: this.props.data.content.relations[0].content.href}}
          style={{width: width, height: height*0.25}}
        />
        <View style={[styles.box]}>
          <Text style={[styles.title]}>{this.props.data.content.shortName}</Text>
          <View style={[styles.rowInBox]}>
            <Text>{this.props.data.content.lastUpdated}</Text>
            <Text> | </Text>
            <Text>{this.props.data.content.relations[1].content.name}</Text>
          </View>
        </View>
      </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  box: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rowInBox: {
    flexDirection: 'row',
  }
});
