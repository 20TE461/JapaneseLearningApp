import { SafeAreaView, StyleSheet, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import KarutaGameScreen from './src/Screens/KarutaGameScreen/main';
import BakudanGameScreen from './src/Screens/BakudanGameScreen/main';
import GameSelectionScreen from './src/Screens/GameSelectionScreen/main';

export default function App() {

  const [gameScreenId, setGameScreenId] = useState(0);

  const gameScreenList = {
    1: {name: "無限カルタ", screen: <KarutaGameScreen setGameScreenId={setGameScreenId}/>},
    2: {name: "爆弾ゲーム", screen: <BakudanGameScreen setGameScreenId={setGameScreenId}/>},
  };

  return (
    <View style={styles.appContainer}>
      <StatusBar style='dark'/>
      <SafeAreaView style={styles.innerContainer}>
        {
          gameScreenId ? 
          gameScreenList[gameScreenId].screen
          :
          <GameSelectionScreen setGameScreenId={setGameScreenId}/>
        }
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  innerContainer: {
    flex: 1
  } 
});
