import React from 'react';
import logs_data from '../data/logs';
import { FlatList } from 'react-native';
import { renderLogItem } from '../lib/general';

export default class Logs extends React.Component {
  render() {
    return (
      <FlatList data={logs_data} renderItem={renderLogItem} />
    );
  }
}
