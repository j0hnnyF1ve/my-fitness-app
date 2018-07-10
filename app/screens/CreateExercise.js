import React from 'react';
import { View, Text, TextInput, Picker, Stylesheet, Button } from 'react-native';

import { renderPickerItems } from '../lib/general';

import routines_data from '../data/routines';

import styles from '../lib/styles';

export default class CreateExercise extends React.Component {
  render() {
    return (
      <View style={styles.form_container}>
        <View style={styles.form_group}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.text_input}
            returnKeyType="done"
            placeholder="Squat"
          />
        </View>

        <View style={styles.form_group}>
          <Text style={styles.label}>Muscle</Text>
          <Picker
            style={styles.picker}
            itemStyle={styles.picker_items}
            mode="dropdown">
            { renderPickerItems(routines_data) }
          </Picker>
        </View>

        <View style={styles.form_group}>
          <Text style={styles.label}>Sets</Text>
          <TextInput
            style={styles.text_input}
            returnKeyType="done"
            keyboardType="numeric"
            placeholder="20"
          />
        </View>

        <View style={styles.button_container}>
          <Button
            style={styles.button}
            title="Save"
            onPress={() => {
              console.log('Create Exercise Pressed!');
            }}
          />
        </View>
      </View>
    );
  }
}
