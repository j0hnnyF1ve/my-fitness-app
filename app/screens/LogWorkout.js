import React from 'react';
import { Modal, ScrollView, StyleSheet, FlatList, View, Text, TextInput, Button, Picker } from 'react-native';
import { renderPickerItems } from '../lib/general';

import SetContainer from '../components/SetContainer';
import IconButton from '../components/IconButton';

import workouts_data from '../data/workouts';
import exercises_data from '../data/exercises';
import routines_data from '../data/routines';

export default class LogWorkout extends React.Component {
  render() {
    return (
      <View style={styles.form_container}>

        <Modal animationType="slide"
          transparent={false}
          visible={false}
          onRequestClose={() => {
            console.log('request close');
          }}>
          <View style={styles.modal_header}>
            <Text style={styles.modal_header_text}>Add Exercise</Text>
            <IconButton icon="close" color="#fff" size={18} />
          </View>
          <View style={styles.modal_body}>
            <Picker
              style={styles.picker}>
                {renderPickerItems(routines_data)}
            </Picker>
            <View style={styles.button_container}>
              <Button style={styles.button}
                title="Add"
                onPress={() => {
                  console.log('modal button pressed!');
                }}
              />
            </View>
          </View>
        </Modal>

        <Modal animationType="slide"
          transparent={false}
          visible={false}
          onRequestClose={() => {
            console.log('request close');
          }}>
          <View style={styles.modal_header}>
            <Text style={styles.modal_header_text}>Add Set</Text>
            <IconButton icon="close" color="#fff" size={18} />
          </View>
          <View style={styles.modal_body}>
            <View style={styles.modal_group}>
                <Text style={styles.label}>Weight</Text>
                <TextInput
                  style={styles.text_input}
                  returnKeyType="done"
                  placeholder="225" />
            </View>
            <View style={styles.modal_group}>
                <Text style={styles.label}>Reps</Text>
                <TextInput
                  style={styles.text_input}
                  returnKeyType="done"
                  placeholder="5" />
            </View>
            <View style={styles.modal_group}>
                <Text style={styles.label}>RPE</Text>
                <TextInput
                  style={styles.text_input}
                  returnKeyType="done"
                  placeholder="8" />
            </View>
            <View style={styles.button_container}>
              <Button style={styles.button}
                title="Add"
                onPress={() => {
                  console.log('modal button pressed!');
                }}
              />
            </View>
          </View>
        </Modal>

        <FlatList data={workouts_data} renderItem={this.renderWorkoutItem} />
      </View>
    )
  } // end render()

  renderWorkoutItem({item}) {
    console.log(this);

    function renderListItem({item}) {
      return(
        <SetContainer
          key={item.key}
          weight={item.weight}
          reps={item.reps}
          rpe={item.rpe}
        />
      );
    } // end renderListItem

    return (
      <View key={item.key}>
        <View style={styles.item_header}>
          <Text style={styles.item_header_text} key={item.key}>{item.name}</Text>
          <IconButton icon="add" size={20} color="#333" />
        </View>
        <ScrollView horizontal={true} contentContainerStyle={styles.content_container}>
          <FlatList
            numColumns={10}
            columnWrapperStyle={styles.list_columns}
            data={item.sets}
            renderItem={renderListItem} />
        </ScrollView>
      </View>
    );
  } // end renderWorkoutItem
} // end class LogWorkout

const styles = StyleSheet.create({
  item_header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 2,
    padding: 10,
  },
  item_header_text: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  content_container: {
    marginBottom: 10
  }
});
