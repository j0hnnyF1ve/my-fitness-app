import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';

const SetContainer = (props) => {
  function rpeStyle(rpe) {
    let rpeColor = '#00ff00'

    if(rpe >= 10) { rpeColor = '#ff0000'; }
    if(rpe < 10 && rpe >= 9.5) { rpeColor = '#ff6600'; }
    if(rpe < 9.5 && rpe >= 9) { rpeColor = '#ff9900'; }
    if(rpe < 9 && rpe >= 8) { rpeColor = '#ffcc00'; }
    if(rpe < 8 && rpe >= 7) { rpeColor = '#f2e01a'; }
    if(rpe < 7 && rpe >= 6) { rpeColor = '#bbff00'; }

    return {
      backgroundColor: rpeColor,
      width: 50,
      height: 50,
      borderRadius: 25,
      padding: 10,
      alignItems: 'center'
    };
  }

  return (
    <TouchableHighlight
      style={styles.set_container}
      onPress={ () => { console.log('pressed!'); }}
      underlayColor="#eee"
    >
      <View style={styles.set_body}>
        <View style={styles.weight_view}>
          <Text style={styles.weight}>{props.weight}</Text>
        </View>
        <View style={ rpeStyle(props.rpe) }>
          <Text style={styles.reps}>{props.reps}</Text>
        </View>
{/*
        <View style={styles.rpe_view}>
          <Text style={styles.rpe}>RPE{props.rpe}</Text>
        </View>
*/      }

      </View>
    </TouchableHighlight>
  );
}

export default SetContainer;
