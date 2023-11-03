import { StyleSheet, View, Text } from "react-native";
import Timer from "./Timer";
import ScoreView from "./ScoreView";
import { FontAwesome } from '@expo/vector-icons'

export default function KarutaGameHeaderBar(
  {isPlaying, timeLimit, isReset, plus, setIsOver, score, setScore, level}) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.timerContainer}>
        <FontAwesome name = "clock-o" size={25} color='#fff'/>
        <Timer  style={styles.timer} 
                timeSpan={timeLimit}
                stop={!isPlaying}
                isReset={isReset}
                setIsOver={setIsOver}
                />
      </View>
    
      <View style={{flex:1}}>
      <Text style={styles.timer.timerText}>{"LV-"+level}</Text>
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
    alignItems:'center',
    marginTop: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timer: {
    timer: {
      justifyContent: 'center',
    },
    timerText: {
      textAlign:'center',
      fontWeight: 'bold',
      fontSize: 20,
      color: "#FFF",
      marginLeft: 3,
    },
  },
  scoreContainer: {
    mainContainer: {
      justifyContent: 'center',
    },
    scoreText: {
      textAlign:'center',
      fontWeight: 'bold',
      fontSize: 20,
      color: '#FFF'
    },
  }
})