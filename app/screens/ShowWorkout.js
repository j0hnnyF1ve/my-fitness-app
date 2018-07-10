import React from 'react';
import { FlatList } from 'react-native';
import { renderItem } from '../lib/general';
import workouts_data from '../data/workouts';

export default class ShowWorkout extends React.Component {
  render() {
/*
    return (
      <FlatList data={workouts_data} renderItem={renderWorkoutItem} />
    );
*/

    return (
      <FlatList data={workouts_data} renderItem={renderItem} />
    );
  }
}
