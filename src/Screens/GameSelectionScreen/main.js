import { FlatList, Pressable, Text, View } from "react-native";
import { styles } from "./style";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import KarutaGameScreen from "../KarutaGameScreen/main";
import BakudanGameScreen from "../BakudanGameScreen/main";

export default function GameSelectionScreen({setGameScreen}) {

  const screenList = [
    {
      id: 1, 
      name: "無限カルタ", 
      backgroundColor: '#ffb703', 
      icon: 'cards',
      screen: <KarutaGameScreen setGameScreen={setGameScreen}/>
    },
    {
      id: 2, 
      name: "爆弾漢字", 
      backgroundColor: '#222e50', 
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

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Game List</Text>
      <View style={styles.screenGrid}>
        <FlatList data={screenList}
                  renderItem={getScreenRender}
                  numColumns={2}
                  />
      </View>
    </View>
  );
}