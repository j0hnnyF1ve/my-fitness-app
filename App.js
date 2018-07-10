import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Screen from './app/components/Screen';
import IconButton from './app/components/IconButton';

import RoutinesPage from './app/screens/Routines';
import ExercisesPage from './app/screens/Exercises';
import CreateExercisePage from './app/screens/CreateExercise';

import LogsPage from './app/screens/Logs';
import LogWorkoutPage from './app/screens/LogWorkout';
import ShowWorkoutPage from './app/screens/ShowWorkout';

import styles from './app/lib/styles';

const pages = {
  routines: {
    title: 'Routines',
    component: <RoutinesPage />,
    has_header_button: true
  },
  exercises: {
    title: 'Exercises',
    component: <ExercisesPage />,
    has_header_button: false
  },
  create_exercises: {
    title: 'Create Exercise',
    component: <CreateExercisePage />,
    has_header_button: false
  },
  logs: {
    title: 'Logs',
    component: <LogsPage />,
    has_header_button: false
  },
  log_workout: {
    title: 'Log Workout',
    component: <LogWorkoutPage />,
    has_header_button: false
  },
  show_workout: {
    title: 'Current Workout',
    component: <ShowWorkoutPage />,
    has_header_button: false
  }
};
var current_page = pages.log_workout;

export default class App extends React.Component {
  render() {
    var date = new Date();
    date = date.toString();

    return (
      <View style={styles.container}>
        <Screen
          page={current_page.component}
          title={current_page.title}
          has_header_button={current_page.has_header_button} />
          <View style={styles.tabs_container}>
            <IconButton icon="event-note" />
            <IconButton icon="edit" />
            <IconButton icon="camera-alt" />
          </View>
          <Text>{ date }</Text>
      </View>
    );
  }
}
