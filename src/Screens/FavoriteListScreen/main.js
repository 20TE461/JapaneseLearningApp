import { useContext } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { FavoriteCtx } from "../../Store/context/favorite-context";
import { styles } from "./styles";

const dictionary = require('../../../Data/dictionary.json');

export default function FavoriteListScreen({navigation, lang}) {
  const favoriteCtx = useContext(FavoriteCtx);

  const favoriteWords = dictionary.jisho.filter(
    (word) => favoriteCtx.favoriteWordIds.includes(word.id)
  );

  function navigateHandler(params) {
    navigation.navigate('TangoInfoScreen', {...params, lang:lang});
  }

  function getRenderItem(itemData) {
    return (
      <Pressable 
        style={({pressed})=>{
          return pressed ? 
            [styles.gridTileContainer, {opacity: 0.5}]
            :
            styles.gridTileContainer;
          }}
          onPress={navigateHandler.bind(this,itemData.item)}
          >
        <Text style={{fontSize: 25, fontWeight:'bold', color:'#fff'}}>{itemData.item.kanji}</Text>
        <Text style={{fontSize: 17, color: '#fff'}}>{itemData.item.honyaku[lang]}</Text>
      </Pressable>
    );
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.gridContainer}>
      <FlatList data={favoriteWords}
                renderItem={getRenderItem}
                />
      </View>
    </View>
  );
}