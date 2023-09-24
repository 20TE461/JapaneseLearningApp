import { useEffect, useState, useRef } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

function getTimeLimit(secondSpan) {
  const minutes = Math.floor(secondSpan/60);
  const seconds = secondSpan%60;
  return seconds < 10 ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`;
}

export default function Timer({stop, timeSpan, isReset, setIsOver, style}) {
  const [timeLimit, setTimeLimit] = useState(timeSpan);
  const timeRef = useRef(timeLimit);
  const styles = style ? style : defaultStyles;

  useEffect(() => {
    const timerId = stop ? null : setInterval(() => {
      timeRef.current -= 1;
      if (timeRef.current < 0) {
        clearInterval(timerId);
      } else {
      setTimeLimit(timeRef.current);
      }
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  },[stop])

  useEffect(()=>{
    if (isReset) {
      setTimeLimit(timeSpan);
      timeRef.current = timeSpan;
    }
  }, [isReset]);

  useEffect(()=>{
    if(timeLimit === 0) {
      setIsOver(true);
    }
  }, [timeLimit]);

  return (
    <Pressable style={styles.timer}>
      <Text style={styles.timerText}>{getTimeLimit(timeLimit)}</Text>
    </Pressable>
  );
}

const defaultStyles = StyleSheet.create({
  timer: {
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    width: '25%',
    marginVertical: 5,
  },
  timerText: {
    textAlign:'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
})