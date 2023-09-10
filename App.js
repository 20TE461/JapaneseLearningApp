import { SafeAreaView, StyleSheet, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import GameSelectionScreen from './src/Screens/GameSelectionScreen/main';

export default function App() {

  const [gameScreen, setGameScreen] = useState(null);

  return (
    <View style={styles.appContainer}>
      <StatusBar style='dark'/>
      <SafeAreaView style={styles.innerContainer}>
        {
          gameScreen ? 
          gameScreen
          :
          <GameSelectionScreen setGameScreen={setGameScreen}/>
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
