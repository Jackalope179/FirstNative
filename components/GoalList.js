import React from 'react';
import {StyleSheet, View, Text, Touchable} from 'react-native';
const GoalList = props => {
  return (
    <Touchable onLongPress={props.onDelete}>
      <View style={styles.itemList}>
        <Text>{props.value}</Text>
      </View>
    </Touchable>
  );
};
const styles = StyleSheet.create({
  itemList: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10,
  },
});
export default GoalList;
