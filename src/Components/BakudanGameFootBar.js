import { Alert, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import PrimaryButton from "./PrimaryButton";

export default function BakudanGameFootBar({isPlaying, setIsPlaying, setIsReset, lang, setGameScreen}) {

  const styles = StyleSheet.create({
    mainContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      paddingBottom: 20,
    },
    icon: {
      fontSize: 30,
      color: '#000',
    }
  })

  function onPressHandler() {
    setIsReset(false);
    setIsPlaying(!isPlaying);
  }

  function resetHandler() {
    setIsReset(true);
    setIsPlaying(false);
  }

  return (
    <View style={styles.mainContainer}>
      <FontAwesome  name="home" 
                    style={styles.icon}
                    onPress={setGameScreen.bind(this, null)}
                    />
      <FontAwesome  name ={isPlaying ? "pause" : "play"} 
                    style={styles.icon}
                    onPress={()=>{
                      lang === undefined ? Alert.alert('言語を選択してください！') : onPressHandler()}
                    }/>
      <FontAwesome name="refresh" onPress={resetHandler} style={styles.icon}/>
    </View>
  );
}
