import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import TimerScreen from './screens/TimerScreen';
import TodoScreen from './screens/TodoScreen';



const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				{/* 초기 화면 */}
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{ title: '홈' }}
				/>
				<Stack.Screen
					name="Detail"
					component={DetailScreen}
					options={{ title: '상세' }}
				/>
				<Stack.Screen
					name="Timer"
					component={TimerScreen}
					options={{ title: '타이머' }}
				/>
				<Stack.Screen
					name="TodoList"
					component={TodoScreen}
					options={{ title: '할일 목록'}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

