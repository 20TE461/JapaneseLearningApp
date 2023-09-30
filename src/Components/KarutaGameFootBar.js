import { Alert, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import PrimaryButton from "./PrimaryButton";

export default function KarutaGameFootBar({isPlaying, setIsPlaying, setIsReset, lang, setGameScreen}) {

  const styles = StyleSheet.create({
    mainContainer: {
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      paddingVertical: 10,
    },
    icon: {
      fontSize: 30,
      color: '#FFF',
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
