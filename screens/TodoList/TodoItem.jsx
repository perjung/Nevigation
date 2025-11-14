// TodoList/TodoItem.jsx 
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default function TodoItem({ item, onToggle, onRemove }) {
  return (
    <TouchableOpacity onPress={() => onToggle(item.id)}>
        <View style={styles.itemContainer}>

            <Text style={[styles.itemText, item.done && styles.completedText]}>
                {item.done ? '✓' : '•'} {item.text}
            </Text>

            <TouchableOpacity onPress={() => onRemove(item.id)}>
                <Text style={styles.delete}>삭제</Text>
            </TouchableOpacity>

        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemText: {
    flex: 1, 
    fontSize: 18,
  },
  completedText: {
    color: 'gray',
    textDecorationLine: 'line-through',
  },
  delete: {
    color: 'red',
    fontSize: 14,
    marginLeft: 10,
  },
});