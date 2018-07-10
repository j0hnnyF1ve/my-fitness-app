import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
  },
  tabs_container: {
    flexDirection: 'row',
    backgroundColor: '#000',
    justifyContent: 'space-around'
  },
  list_item: {
    padding: 10,
    borderStyle: 'solid',
    borderBottomColor: '#000',
    borderBottomWidth: 1
  },
  textInput: {
    padding: 5
  },
  workoutItem: {
    flexDirection: 'row',
    alignItems: 'center'
  },

});

export default styles;
