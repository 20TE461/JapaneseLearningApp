import { View, FlatList } from "react-native"
import { styles } from "./style";
import KarutaGameHeaderBar from "../../Components/KarutaGameHeaderBar";
import GameFootBar from "../../Components/GameFootBar";
import { useState, useEffect } from "react";
import KarutaCard from "../../Components/KarutaCard";
import GameOverScreen from "../GameOverScreen/GameOverScreen";

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

export default function KarutaGameScreen({setGameScreenId}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [pairList, setPairList] = useState(null);
  const [isReset, setIsReset] = useState(false);
  const [isNext, setIsNext] = useState(false);
  const [isPlus, setIsPlus] = useState(false);
  const [stagingCard, setStagingCard] = useState(null);
  const [lang, setLang] = useState();
  const [isOver, setIsOver] = useState(false);
  const [score, setScore] = useState(0)

  const data = shuffle(raw.pairs).slice(0,6);
  const jpWordList = getJpWordList(data, 'jp');
  const transWordList = getTransWordList(data, lang);
  const timeLimit = 300;

  useEffect(()=>{
    const reset = setInterval(() => { 
      setPairList(getPairList(jpWordList, transWordList));
      clearInterval(reset);
    }, 250);
  }, [score, lang]);

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

          >{isPlaying ? itemData.item.jp.phrase:null}</KarutaCard>

        <KarutaCard isMatch={getMatch.bind(this, itemData.item.trans)}
                    isReset={isReset}
                    isPlaying={isPlaying}
                    isNext={isNext}
          >{isPlaying ? itemData.item.trans.phrase : null}</KarutaCard>
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
      {/* Header */}
      <KarutaGameHeaderBar  isPlaying={isPlaying}
                            timeLimit={timeLimit}
                            isReset={isReset}
                            lang={lang}
                            setLang={setLang}
                            plus={isPlus}
                            setIsOver={setIsOver} 
                            score={score}
                            setScore={setScore}
                            /> 

      {/* Body */}
      <View style={styles.body}>
        <FlatList data={pairList}
                  renderItem={getPairRender}
                  />  
                  
      </View>

      {/* Footer */}
      <GameFootBar  setIsPlaying={setIsPlaying}
                    isPlaying={isPlaying}
                    setIsReset={setIsReset}
                    setGameScreenId={setGameScreenId}
                    lang={lang}
                    />
    </View>
  );
}