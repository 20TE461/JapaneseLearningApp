import { StyleSheet, View } from "react-native";
import Timer from "./Timer";
import ScoreView from "./ScoreView";
import { FontAwesome } from '@expo/vector-icons'

export default function KarutaGameHeaderBar(
  {isPlaying, timeLimit, isReset, plus, setIsOver, score, setScore}) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.timerContainer}>
        <FontAwesome name = "clock-o" size={25} color='#fff'/>
        <Timer  style={styles.timer} 
                fontStyle={styles.timerText}
                timeSpan={timeLimit}
                stop={!isPlaying}
                isReset={isReset}
                setIsOver={setIsOver}
                />
      </View>
      <ScoreView  style={styles.scoreContainer}
                  isPlus={plus}
                  isReset={isReset}
                  score={score}
                  setScore={setScore}
                />
    </View>
  );
}


const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  timer: {
    timer: {
      justifyContent: 'center',
      width: '25%',
      marginVertical: 5,
    },
    timerText: {
      textAlign:'center',
      fontWeight: 'bold',
      fontSize: 20,
      color: "#FFF",
    },
  },
  scoreContainer: {
    mainContainer: {
      padding: 5,
      justifyContent: 'center',
      width: '30%',
    },
    scoreText: {
      textAlign:'center',
      fontWeight: 'bold',
      fontSize: 20,
      color: '#FFF'
    },
  }
})