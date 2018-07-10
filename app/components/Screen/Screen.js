import React from 'react';
import { View, Text } from 'react-native';
import Header from '../Header'; // App Header custom component
import IconButton from '../IconButton'; // Icon Button custom Component
import styles from './styles';

const Screen = (props) => {
  return (
    <View style={styles.screen}>
      <Header style={styles.header} text={props.title}>
        <IconButton icon={props.icon} is_header={props.has_header_button} />
      </Header>
      <View style={styles.body}>
        {props.page}
      </View>
    </View>
  );
}

export default Screen;
