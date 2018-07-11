import React from 'react';
import { Text, View, FlatList } from 'react-native';
import Store from 'react-native-simple-store';
import exercises_data from '../data/exercises';

import IconButton from '../components/IconButton';
import AlertBox from '../components/AlertBox';
import list_styles from '../components/List/styles';

import { renderItem } from '../lib/general';

export default class Exercises extends React.Component {
  static navigationOptions = ({navigation}) => {
    const { params } = navigation.state;

    return {
      headerTitle: 'Exercises',
      headerRight: (
        <IconButton size={25} color="#fff" onPress={() => {
          navigation.navigate('CreateExercise', {
            'key': params.key,
            'name': params.name,
            'updateExercises': params.updateExercises
          });
        }} />
      ),
      headerStyle: {
        backgroundColor: '#333'
      },
      headerTitleStyle: {
        color: '#fff'
      },
    }
  };

  state = { exercises_data: [] };

  updateExercises = (exercises) => {
    this.setState({
      exercises_data: exercises
    });

    this.props.navigation.setParams({
      'updateExercises': this.updateExercises
    });
  }

  componentDidMount() {
    Store.get('exercises')
      .then((response) => {
        if(response) {
          this.setState({
            exercises_data: response
          });
        }
      });
  }

  render() {
    const { params } = this.props.navigation.state;
    let routine = params.key;

    let exercises = this.state.exercises_data.filter((item) => {
      return item.routine == routine;
    });

    return (
      <View>
        <Text style={list_styles.list_item_header}>{params.name}</Text>
        <FlatList
          data={exercises}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id} />
        {
          exercises.length == 0 &&
            <AlertBox type="info" text="You haven't added any exercises for this routine yet." />
        }
      </View>
    );
  }
}
