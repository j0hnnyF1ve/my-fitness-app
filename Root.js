import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';

import RoutinesPage from './app/screens/Routines';
import LogsPage from './app/screens/Logs';

import ExercisesPage from './app/screens/Exercises';
import CreateExercisePage from './app/screens/CreateExercise';
import LogWorkoutPage from './app/screens/LogWorkout';

export default TabNavigator(
  {
    Logs: {
      screen: LogStack
    },
    Routines: {
      screen: RoutinesStack
    }
/*
    , Progress: {
      screen: ProgressStack
    }
*/
  },
  {
    navigationOptions: ({navigation}) => ({
      tabBarIcon: ({ focused, tintColor}) => {
        const { routeName } = navigation.state;
        const iconName = icons[routeName];
        const color = (focused) ? '#fff' : '#929292';

        return <MaterialIcons name={iconName} size={35} color={color} />
      }
    }),
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      style: {
        backgroundColor: '#333'
      }
    }
  },
  { initialRouteName: 'Routines' }
)

const icons = {
  'Logs': 'event-note',
  'Routines': 'edit'
//  'Progress': 'camera-alt'
};

const LogStack = StackNavigator(
  {
    Logs: { screen: LogsPage },
    LogWorkout: { screen: LogWorkoutPage }
  },
  { initialRouteName: 'Logs' }
);

const RoutinesStack = StackNavigator(
  {
    Routines: { screen: RoutinesPage },
    Exercises: { screen: ExercisesPage },
    CreateExercises: { screen: CreateExercisePage }
  },
  { initialRouteName: 'Routines' }
);

/*
const ProgressStack = StackNavigator(
  {
    Progress: { screen: ProgressPage }
  },
  {
    initialRouteName: 'Progress'
  }
)
*/
