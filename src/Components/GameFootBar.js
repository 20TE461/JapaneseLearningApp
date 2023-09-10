import { Alert, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import PrimaryButton from "./PrimaryButton";

export default function GameFootBar({isPlaying, setIsPlaying, setIsReset, lang, setGameScreenId}) {

  const styles = StyleSheet.create({
    mainContainer: {
      marginHorizontal: 20,
      marginVertical: 10,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      paddingVertical: 20,
      shadowColor: '#000',
      shadowOffset: {width: 2, height: 2}, 
      shadowOpacity: 0.5,
      backgroundColor: 'white',
      borderRadius: 20,
    },
    icon: {
      fontSize: 30,
      color: 'black',
      // marginRight: 20
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
                    onPress={setGameScreenId.bind(this, 0)}
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
