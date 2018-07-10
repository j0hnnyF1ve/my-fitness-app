import React from 'react';
import routines_data from '../data/routines';
import { FlatList } from 'react-native';
import { renderItem } from '../lib/general';

export default class Routines extends React.Component {
  render() {
    return(
      <FlatList data={routines_data} renderItem={renderItem} />
    );
  }
}
