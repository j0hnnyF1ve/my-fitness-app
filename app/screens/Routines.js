import React from 'react';
import { StyleSheet, FlatList, TouchableHighlight, Text } from 'react-native';
import routines_data from '../data/routines';

export default class Routines extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: 'Routines',
    headerStyle: {
      backgroundColor: '#333'
    },
    headerTitleStyle: {
      color: '#fff'
    }
  });

  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
  }

  renderItem = ({item}) => {
    const { navigate } = this.props.navigation;

    return (
      <TouchableHighlight style={styles.routine_entry} key={item.key} underlayColor="#ccc" onPress={() => {
        navigate('Exercises', {
          'key': item.key,
          'name': item.name
        });
      }}>
        <Text style={styles.routine} key={item.key}>{item.name}</Text>
      </TouchableHighlight>
    );
  }

  render() {
    return(
      <FlatList data={routines_data} renderItem={this.renderItem} />
    );
  }
}

const styles = StyleSheet.create({
  routine_entry: {
    padding: 10,
    borderBottomColor: '#444',
  },
  routine: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});
