// screens/DetailScreen.jsx
import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { ActivityIndicator, StyleSheet } from 'react-native';

export default function DetailScreen({ route, navigation }) {
	// 홈에서 보낸 { item } 혹은 { name: '홍길동' } 등 받기
	const item = route?.params?.item;
    const [word, setWord] = useState('');
    const [author, setAuthor] = useState('');
    const [authorProfile, setAuthorProfile] = useState('');
    const [loading, setLoading] = useState(true);

        useEffect(() => {
        let aborted = false;

        async function load() {
            try {
                const res = await fetch(
                    'https://korean-advice-open-api.vercel.app/api/advice'
                );
                if (!res.ok) throw new Error('네트워크 오류');
                const data = await res.json();
                if (!aborted) {
                    setWord(data.message);
                    setAuthor(data.author);
                    setAuthorProfile(data.authorProfile || '');
                    setLoading(false);
                }
            } catch (e) {
                console.log(e.message);
                setLoading(false);
            }
        }

        load();
        return () => {
        aborted = true;};
    }, []);

	return (
		<View
			style={{ flex: 1, paddingTop: 60, alignItems: 'center', gap: 12 }}
		>
			<Text style={{ fontSize: 22, fontWeight: '600' }}>
				{`선택한 항목: ${item.title}`}
			</Text>

            <View style={styles.box}>
            <Text style={styles.title}> {item.title} 별자리 명언</Text>

            {loading ? (<Text>기다려 주세요!</Text>) : 
            (<>
           
            <Text style={styles.word}>{word}</Text>
            <Text style={styles.meta}>
                {author}
                {authorProfile ? ` (${authorProfile})` : ''}
            </Text>
            </>)}
        </View>
			{route?.params?.name && (
				<Text style={{ color: '#555' }}>
					{route.params.name}님 안녕하세요!
				</Text>
			)}

			<Button title="뒤로 가기" onPress={() => navigation.goBack()} />
		</View>
	);
}

const styles = StyleSheet.create({
    box: { padding: 16, gap: 8 },
    title: { fontSize: 20, fontWeight: '700' },
    word: { fontSize: 16, lineHeight: 22 },
    meta: { color: '#666' },
    error: { color: 'red', padding: 16 },
});





