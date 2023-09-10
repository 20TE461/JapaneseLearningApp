import { useEffect} from "react";
import { StyleSheet, Text, View } from "react-native";

function getScore(score) {
  if (score >= 0 && score <= 9) 
    return `000${score}`;    
  else if (score >= 10 && score <= 99) 
    return `00${score}`;    
  else if (score >= 100 && score <= 999) 
    return `0${score}`;    
  else 
    return `${score}`;
}

export default function ScoreView({isPlus, isReset, score, setScore}) {

  useEffect(
    () => {
      if(isPlus) {
        setScore(score+10);
      }
    },[isPlus]
  );

  useEffect(
    () => {
      if(isReset) {
        setScore(0);
      }
    },[isReset]
  );

  return (
    <View style={styles.mainContainer}>
      <Text style = {styles.scoreText}>
        {getScore(score)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 15,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 10,
    width: '40%',
  },
  scoreText: {
    textAlign:'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
})