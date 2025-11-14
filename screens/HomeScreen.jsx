// screens/HomeScreen.jsx
import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Button } from 'react-native';
import { StyleSheet } from 'react-native';

const DATA = [
	{ id: '1', title: ' 봄' },
	{ id: '2', title: '여름' },
	{ id: '3', title: '가을' },
    { id: '4', title: '겨울'},
];

export default function HomeScreen({ navigation }) {
	return (
		<View style={{ flex: 1, paddingTop: 60 }}>
			{/* 3-1. 단순 화면 전환 버튼 */}
			<View style={{ alignItems: 'center', marginBottom: 12 }}>
				<Text style={{ marginBottom: 8 }}>홈 화면</Text>
			</View>

            <View style = {{ alignItems: 'center', marginBottom: 12}}>
                <Button title="타이머" onPress ={()=> navigation.navigate('Timer')}/>
            </View>

			{/* 3-2. 리스트 → 상세로 데이터 전달 */}
			<FlatList
				data={DATA}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => navigation.navigate('Detail', { item })}
					>
						<Text style={{ padding: 10, fontSize: 18 }}>
							• {item.title}
						</Text>
					</TouchableOpacity>
				)}
				keyExtractor={(item) => item.id}
			/>


            <TouchableOpacity
                style = {styles.TodoButton} 
                onPress ={()=> navigation.navigate('TodoList')}>
                <Text style = {styles.ButtonText}>할 일 목록</Text>
            </TouchableOpacity>


            </View>
	);
}

const styles = StyleSheet.create({
    TodoButton: {
        backgroundColor: '#ffaefcff',
        padding: 15,                
        alignItems: 'center',       
        margin: 16,                 
        borderRadius: 8,            
    },
  
    ButtonText: {
        color: 'white',             
        fontSize: 18,
        fontWeight: 'bold',
    }
});