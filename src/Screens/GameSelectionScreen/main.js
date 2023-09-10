import { FlatList, Pressable, Text, View } from "react-native";
import { styles } from "./style";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const screenList = [
  {id: 1, name: "無限カルタ", backgroundColor: '#ffb703', icon: 'cards'},
  {id: 2, name: "爆弾ゲーム", backgroundColor: '#222e50', icon: 'bomb'},
];


export default function GameSelectionScreen({setGameScreenId}) {
  function getScreenRender(itemData) {
    return (
      <Pressable 
        onPress={setGameScreenId.bind(this, itemData.item.id)}
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