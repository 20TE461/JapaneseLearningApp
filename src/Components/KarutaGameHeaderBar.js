import { StyleSheet, View } from "react-native";
import Timer from "./Timer";
import ScoreView from "./ScoreView";
import LanguageSelectButton from "./LanguageSelectButton";

export default function KarutaGameHeaderBar(
  {isPlaying, timeLimit, isReset, lang, setLang, plus, setIsOver, score, setScore}) {
  return (
    <View style={styles.mainContainer}>
      <Timer  style={styles.timer} 
              fontStyle={styles.timerText}
              timeSpan={timeLimit}
              stop={!isPlaying}
              isReset={isReset}
              setIsOver={setIsOver}
              />
      <ScoreView  style={styles.scoreContainer}
                  isPlus={plus}
                  isReset={isReset}
                  score={score}
                  setScore={setScore}
                />
      <LanguageSelectButton style={styles.languageButton}
                            lang={lang}
                            setLang={setLang}
                            />
    </View>
  );
}


const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#8ecae6',
    margin: 10,
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderRadius: 10
  },
})