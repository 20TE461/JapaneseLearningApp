import KarutaCard from "../../Components/KarutaCard";
import { styles } from "./style";
import KarutaGameFootBar from "../../Components/KarutaGameFootBar";
import GameOverScreen from "../GameOverScreen/GameOverScreen";
import { View, FlatList} from "react-native"
import KarutaGameHeaderBar from "../../Components/KarutaGameHeaderBar";
import { useState, useEffect } from "react";

function getJpWordList(pairs) {
  let holder = [];

  for (id in pairs) {
    holder.push({
      'id': id,
      'phrase': pairs[id].jp,
    });
  }
  return holder;
}

function getTransWordList(pairs, lang) {
  let holder = [];

  for (id in pairs) {
    holder.push({
      'id': id,
      'phrase': pairs[id].trans[lang],
    });
  }
  return holder;
}

function shuffle(array) {
  return array.sort(()=>Math.random()-Math.random());
}

function getPairList(jpList, transList) {
  let shuffledJpList = shuffle(jpList);
  let shuffledTransList = shuffle(transList);
  let holder = [];

  for (i in shuffledJpList) {
    holder.push({
      'jp': shuffledJpList[i],
      'trans': shuffledTransList[i]
    })
  }
  return holder;
}

const raw = require('../../../Data/pairs.json');

export default function KarutaGameScreen({setGameScreen, lang}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [pairList, setPairList] = useState(null);
  const [isReset, setIsReset] = useState(false);
  const [isNext, setIsNext] = useState(false);
  const [isPlus, setIsPlus] = useState(false);
  const [stagingCard, setStagingCard] = useState(null);
  const [isOver, setIsOver] = useState(false);
  const [score, setScore] = useState(0)
  const [level, setLevel] = useState("1");

  const data = shuffle(raw[level].pairs).slice(0,6);

  const jpWordList = getJpWordList(data, 'jp');
  const transWordList = getTransWordList(data, lang);
  const timeLimit = 300;

  useEffect(()=>{
    const reset = setInterval(() => { 
      setPairList(getPairList(jpWordList, transWordList));
      clearInterval(reset);
    }, 250);
    updateLevel(score, raw[level].goal);
  }, [score, lang]);

  function updateLevel(score, goal) {
    if (score >= goal) {
      let nextLevel = parseInt(level)+1;
      setLevel(String(nextLevel));
    }
  }

  function checkMatch(res) {
    if (res) {
      setIsPlus(true);
    }
  }
  
  function getMatch(card) {
    if (stagingCard === null) {
      setStagingCard(card)
      setIsNext(false);
      setIsPlus(false);
      return true;
    } else {
      let res = card.id === stagingCard.id;
      checkMatch(res);
      setStagingCard(null);
      setIsNext(true);
      return res;
    }
  }

  function getPairRender(itemData) {
    return (
      <View style={styles.pairContainer}>
        <KarutaCard isMatch = {getMatch.bind(this, itemData.item.jp)}
                    isReset={isReset}
                    isPlaying={isPlaying}
                    isNext={isNext}
                    >
          {isPlaying ? itemData.item.jp.phrase:null}</KarutaCard>

        <KarutaCard isMatch={getMatch.bind(this, itemData.item.trans)}
                    isReset={isReset}
                    isPlaying={isPlaying}
                    isNext={isNext}
                    >
          {isPlaying ? itemData.item.trans.phrase : null}</KarutaCard>
      </View>
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
      <View style={styles.body}>
        {/* Header */}
        <KarutaGameHeaderBar  isPlaying={isPlaying}
                              timeLimit={timeLimit}
                              isReset={isReset}
                              plus={isPlus}
                              setIsOver={setIsOver} 
                              score={score}
                              setScore={setScore}
                              level={level}
                              /> 
        {/* Body */}
        <FlatList data={pairList}
                  renderItem={getPairRender}
                  />  
        {/* Footer */}
        <KarutaGameFootBar  setIsPlaying={setIsPlaying}
                      isPlaying={isPlaying}
                      setIsReset={setIsReset}
                      setGameScreen={setGameScreen}
                      lang={lang}
                      />
      </View>

    </View>
  );
}