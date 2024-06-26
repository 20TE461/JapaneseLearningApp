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

export default function ScoreView({isPlus, isReset, score, setScore, style}) {

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

  const styles = style ? style : defaultStyles;

  return (
    <View style={styles.mainContainer}>
      <Text style = {styles.scoreText}>
        {getScore(score)+"点"}
      </Text>
    </View>
  );
}

const defaultStyles = StyleSheet.create({
  mainContainer: {
    padding: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 10,
    width: '30%',
  },
  scoreText: {
    textAlign:'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
})