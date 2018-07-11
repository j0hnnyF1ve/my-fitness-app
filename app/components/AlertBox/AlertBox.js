import React from 'react';
import { View, Text } from 'react-native';
import IconButton from '../IconButton';
import styles from './styles';

const AlertBox = (props) => {
  const text = props.text ? props.text : 'Placeholder Alert';
  const type = props.type ? props.type : 'info';
  return (
    <View style={styles.alert_container}>
      <IconButton styles={styles.alert_icon} icon={type} color="#000" />
      <Text style={styles.alert_text}>{text}</Text>
    </View>
  );
};
export default AlertBox;
