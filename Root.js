import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';

import RoutinesPage from './app/screens/Routines';
import LogsPage from './app/screens/Logs';

import ExercisesPage from './app/screens/Exercises';
import CreateExercisePage from './app/screens/CreateExercise';
import LogWorkoutPage from './app/screens/LogWorkout';

const icons = {
  'Logs': 'event-note',
  'Routines': 'edit'
//  'Progress': 'camera-alt'
};

const LogStack = createStackNavigator(
  {
    Logs: LogsPage,
    LogWorkout: LogWorkoutPage
  },
  { initialRouteName: 'Logs' }
);

const RoutinesStack = createStackNavigator(
  {
    Routines: RoutinesPage,
    Exercises: ExercisesPage ,
    CreateExercises: CreateExercisePage

  },
  { initialRouteName: 'Routines' }
);

/*
const ProgressStack = StackNavigator(
  { Progress: ProgressPage },
  { initialRouteName: 'Progress' }
)
*/


export default createBottomTabNavigator(
  {
    Logs: LogStack,
    Routines: RoutinesStack
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
