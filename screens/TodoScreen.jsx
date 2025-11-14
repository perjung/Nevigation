// screens/TodoScreen.jsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TodoInput from './TodoList/TodoInput.jsx';
import FilterToggleList from './TodoList/FilterToggleList.jsx';

export default function TodoScreen() {
  const [tasks, setTasks] = useState([]);

  const handleAdd = (text) => {
    setTasks(prev => [...prev, { id: Date.now().toString(), text, done: false }]);
  };

  return (
    <View style={styles.container}>
      <TodoInput onAdd={handleAdd} />
      <FilterToggleList tasks={tasks} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
  },
});
