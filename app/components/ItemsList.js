import React from 'react';
import {View, Text, StyleSheet, ListView} from 'react-native';
import Item from './Item'
export default class ListViewBasics extends React.Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <ListView
          dataSource={this.props.dataSource}
          renderRow={(rowData) => <Item data={rowData} navigation={this.props.navigation}/>}
        />
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
