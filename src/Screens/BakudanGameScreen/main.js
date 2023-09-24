import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import Timer from '../../Components/Timer';
import ScoreView from '../../Components/ScoreView';
import GameFootBar from '../../Components/GameFootBar';
import { FontAwesome } from '@expo/vector-icons'; 
import { styles } from './style';
import GameOverScreen from '../GameOverScreen/GameOverScreen';

const kanjiList = require('../../../Data/reading.json');

export default function BakudanGameScreen({setGameScreen}) {
  const [currentKanji, setCurrentKanji] = useState(getRandomKanji());
  const [userInput, setUserInput] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReset, setIsReset] = useState(false);
  const [isNext, setIsNext] = useState(false);
  const [fontSize, setFontSize] = useState(20);
  const [isOver, setIsOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isPlus,setIsPlus] = useState(false);

  const timeLimit = 30;

  useEffect(() => {
    if(isPlaying) {
      const timer = setInterval(() => {
        setFontSize(prevSize => prevSize + 0.45); // ここでフォントサイズを増加
      }, 100);

      return () => {
        clearInterval(timer);
      };
    } else {
      setCurrentKanji(getRandomKanji());
    }
  }, [isPlaying]);

  useEffect(()=>{
    if(isReset || isNext) {
      setUserInput('');
      setFontSize(20);
      setIsReset(false);
      setIsNext(false);
      setIsPlus(false);
    }
  }, [isReset, isNext]);

  function getRandomKanji() {
    const index = Math.floor(Math.random() * kanjiList.length);
    return kanjiList[index];
  }

  function checkAnswer() {
    if (userInput === currentKanji.reading) {
      setCurrentKanji(getRandomKanji());
      setIsPlus(true);
      setIsNext(true);
      // setIsReset(true);
      
    } else {
      setIsNext(false);
      setIsPlus(false);
    }
  }

  function getHeaderRender() {
    return (
      <View style={styles.header}>
        <ScoreView  isPlus={isPlus}
                    isReset={isReset}
                    score={score}
                    setScore={setScore}
                    />
      </View>
    );
  }

  function getFooterRender() {
    return (
      <GameFootBar  lang={null}
                    setIsReset={setIsReset}
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying} 
                    setGameScreen={setGameScreen}
                    /> 
    );
  }
  
  function onOverHandler() {
    setIsOver(false);
    setIsReset(true);
    setIsPlaying(false);
  }

  return (
    isOver ?  
    <GameOverScreen onOverHandler={onOverHandler}
                    isOver={isOver}
                    score={score}
                    /> 
    :
    <View style={styles.mainContainer}>
      {getHeaderRender()}
      <View style={styles.gameView}>
        <View style={styles.kanjiContainer}>
          <View></View>
          <Timer  fontStyle={styles.timerText}
                timeSpan={timeLimit}
                stop={!isPlaying}
                isReset={isReset || isNext}
                setIsOver={setIsOver}
                />
          <Text style={{...styles.kanjiText, fontSize: fontSize}}>
            {isPlaying ? currentKanji.kanji:null}
          </Text>
        </View>
        {<View style={{flex:1}}>
          <TextInput  value={userInput} 
                      onChangeText={text => setUserInput(text)} 
                      placeholder="読み方を入力せよ！"
                      style={styles.input}
                      />
          <View style={styles.buttonContainer}>
            <Pressable  
              style={({pressed})=>{
                if(pressed)
                  return {...styles.answerButton, backgroundColor: "#e3242b", opacity: 0.75};
                else 
                  return {...styles.answerButton, backgroundColor: "#e3242b"};
                }}
              onPress={()=>{setUserInput('')}}
              >
              <FontAwesome name="close" color='#fff' size={25}/>
            </Pressable>
            <Pressable  
              style={({pressed})=>{
                if(pressed)
                  return {...styles.answerButton, backgroundColor: "#03c04a", opacity: 0.75};
                else 
                  return {...styles.answerButton, backgroundColor: "#03c04a"};
                }}
              onPress={checkAnswer}
              >
              <FontAwesome name="check" color='#fff' size={25}/>
            </Pressable>
          </View>
        </View>}
      </View>
      {getFooterRender()}
    </View>
  );
}
