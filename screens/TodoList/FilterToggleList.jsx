// TodoList/FilterToggleList.jsx
import React , { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native'; 
import SearchInput from './TextInput';
import TodoList from './TodoList'; 


export default function FilterToggleList({ tasks, onToggle, onRemove }) {
  const [showCompleted,setShowCompleted] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');


  const filtered = tasks
  .filter(task =>{
    if (showCompleted === null) return true;

    if (showCompleted=== true) return task.done;
    return !task.done;
})
  .filter(task => task.text.includes(searchTerm));

  return (
    <View style={styles.container}>
      <SearchInput value={searchTerm} onChange={setSearchTerm}/>

      <Button
        title={ showCompleted === null ? '전체보기' : showCompleted ===false ? 
          '미완료만 보기' : '완료된 항목 보기'}
        onPress={() => setShowCompleted(showCompleted === null 
          ? false : showCompleted
          === false ? true : null
        )}
      />
      
      <TodoList data={filtered} onToggle={onToggle} onRemove={onRemove} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1, 
  },
});