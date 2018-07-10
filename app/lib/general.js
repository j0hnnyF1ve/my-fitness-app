import React from 'react';
import { View, FlatList, Text, TouchableHighlight, Picker } from 'react-native';
import styles from './styles';

function renderItem({item}) {
  return (
    <TouchableHighlight underlayColor="#ccc" onPress={() => {
      console.log('pressed!');
    }} style={styles.list_item}>
      <Text key={item.key}>{item.name}</Text>
    </TouchableHighlight>
  );
}

function renderLogItem({item}) {
  return (
    <TouchableHighlight underlayColor="#cce" onPress={() => {
      console.log('log item pressed!');
    }} style={styles.list_item}>
      <Text key={item.key}>{item.month}-{item.day} - {item.exercises}</Text>
    </TouchableHighlight>
  );
}

function renderPickerItems(data) {
  return data.map( (item) => {
    let val = item.name.toLowerCase();
    return (
      <Picker.Item key={item.key} label={item.name} value={val} />
    );
  });
}

export { renderItem, renderLogItem, renderPickerItems };
