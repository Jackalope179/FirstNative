import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import GoalInput from './components/GoalInput';
import GoalList from './components/GoalList';

export default function App() {
  const [goals, setGoals] = useState([]);
  const addGoalHandler = goal => {
    setGoals(currentGoals => [
      ...currentGoals,
      {id: Math.random().toString(), value: goal},
    ]);
  };
  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View>
        <FlatList
          keyExtractor={item => item.id}
          data={goals}
          renderItem={itemData => {
            return (
              <GoalList
                onDelete={() => {
                  console.log('Hello');
                }}
                value={itemData.item.value}
              />
            );
          }}></FlatList>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
