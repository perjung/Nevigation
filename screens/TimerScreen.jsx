import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function TimerScreen() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const timerIdRef = useRef(null);

  useEffect(() => {
    if (running){
      timerIdRef.current = setInterval(()=> {
        setSeconds((s) => s+1);
      }, 1000);
    }else{
      clearInterval(timerIdRef.current);
    }

    return () => clearInterval(timerIdRef.current);
  },[running]);

  const resetTimer = () => {
    setSeconds(0);
    setRunning(false);
  }


  return (
    <View style={styles.box}>
      <View style = {styles.txt}>
        <Text style={styles.timertxt}> 타이머: {seconds}초</Text>

        <TouchableOpacity onPress ={resetTimer} style = {styles.resetbutton}>
        <Text style = {[styles.resetButton]}>리셋</Text>
        </TouchableOpacity>
        </View>
      
      <TouchableOpacity onPress = {() => setRunning(!running)}>
          <Text style={styles.button}>{running ? "멈추기":"시작하기"}</Text>
      </TouchableOpacity>


   
    </View>
  );
}

const styles = StyleSheet.create({
  box: { padding: 16, alignItems: 'center' },
  txt: { 
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f4a7ecff',
    borderRadius: 12,
  },
  timertxt:{
    fontSize: 18,
    fontWeight: '600',
    marginRight: 12,
  },

  button: { 
    flexDirection: 'row',
    fontSize: 18,
    fontWeight: '400',
    padding: 10,
    backgroundColor: '#f0f0f0',
  },

  resetbutton:{
    backgroundColor: '#ff0000ff',
    padding: 3,
  },

  resetButton:{
    Color: '#f0f0f0',
    fontWeight: '600',
    fontSize: 10,
  }
});
