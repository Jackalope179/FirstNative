import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Button} from 'react-native';
const GoalInput = props => {
  const [goal, setGoal] = useState('');
  const goalInputHandler = enteredText => {
    setGoal(enteredText);
  };

  return (
    <View style={styles.inputField}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={goal}></TextInput>
      {/* <Button title="Add" onPress={() => props.onAddGoal(goal)} /> */}
      <Button title="Add" onPress={props.onAddGoal.bind(this, goal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  inputField: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
export default GoalInput;
