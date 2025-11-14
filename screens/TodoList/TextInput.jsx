//TodoList/TextInput.jsx
import React from 'react';
import { TextInput as Tinput, StyleSheet } from 'react-native';

export default function SearchInput({ value, onChange}) {
    return (
        <Tinput
        style = {styles.input}
        placeholder="검색어를 입력하세요"
        value={value}
        onChangeText={onChange}
        />
    );
}

const styles = StyleSheet.create({
    input : {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding:8,
        marginBottom:12,
    },
});