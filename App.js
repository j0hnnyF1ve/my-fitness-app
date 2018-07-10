import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Root from './Root';
import styles from './app/lib/styles';

export default class App extends React.Component {
  render() {
    var date = new Date();
    date = date.toString();

    return (
      <View style={styles.container}>
        <Root />
        <Text>{ date }</Text>
      </View>
    );
  }
}
