import { FlatList, Pressable, Text, View } from "react-native";
import { memo, useState } from "react";
import { styles } from "./style";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import KarutaGameScreen from "../KarutaGameScreen/main";
import BakudanGameScreen from "../BakudanGameScreen/main";

function GameSelectionScreen({lang}) {
  const [gameScreen, setGameScreen] = useState(null);

  const screenList = [
    {
      id: 1, 
      name: "無限カルタ", 
      backgroundColor: '#F28500', 
      icon: 'cards',
      screen: <KarutaGameScreen setGameScreen={setGameScreen} lang={lang}/>
    },
    {
      id: 2, 
      name: "爆弾漢字", 
      backgroundColor: '#222E50', 
      icon: 'bomb',
      screen: <BakudanGameScreen setGameScreen={setGameScreen}/>
    },
  ];

  function getScreenRender(itemData) {
    return (
      <Pressable 
        onPress={setGameScreen.bind(this, itemData.item.screen)}
        style={({pressed}) => {
          if(pressed)
            return {
              ...styles.screenGridTile, 
              backgroundColor: '#fff',
              opacity: 0.75,
            };
          else 
            return {
              ...styles.screenGridTile, 
              backgroundColor: itemData.item.backgroundColor
            };
        }}
        >
        <Text style={styles.screenGridTileText}>{itemData.item.name}</Text>
        <MaterialCommunityIcons name={itemData.item.icon} color='white' size={30}/>
      </Pressable>
    );
  }
  const defaultScreen = (
    <View style={styles.mainContainer}>
      <View style={styles.screenGrid}>
        <FlatList data={screenList}
                  renderItem={getScreenRender}
                  numColumns={2}
                  />
      </View>
    </View>
  );

  return gameScreen ? gameScreen : defaultScreen;
}

export default memo(GameSelectionScreen);