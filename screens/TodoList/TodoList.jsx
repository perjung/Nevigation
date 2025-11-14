// TodoList/TodoList.jsx 
import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import TodoItem from './TodoItem'; 


export default function TodoList({ data, onToggle, onRemove }) {
  return (
    <View style={styles.list}>
        <FlatList 
            data={data}
            renderItem={({ item }) => (
                <TodoItem item={item} onToggle={onToggle} onRemove={onRemove} />
            )}
            keyExtractor={item => item.id}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    list: {
        marginTop: 16,
    },
});