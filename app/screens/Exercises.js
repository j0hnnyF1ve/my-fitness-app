import React from 'react';

import exercises_data from '../data/exercises';

import { Text, View, FlatList } from 'react-native';

//import list_styles from '../components/List/styles';

import { renderItem } from '../lib/general';

export default class Exercises extends React.Component {

  render() {
    return (
      <View>
        <Text>Legs</Text>
        <FlatList data={exercises_data} renderItem={renderItem} />
      </View>
    );
  }
}
