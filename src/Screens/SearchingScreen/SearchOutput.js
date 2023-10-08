import { useEffect, useState } from 'react';
import { View, Text, Pressable} from 'react-native';
import { styles } from './styles';
import { FontAwesome, AntDesign } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SearchOutput({itemData, navigateHandler, favoriteWordIds, ASKeys, lang}) {
  const searchK = `search_tango_${itemData.item.id}`;
  const memoK = `memo_tango_${itemData.item.id}`;
  const [searchNum, setSearchNum] = useState(null);

  async function getSearchNum(searchK) {
    try {
      const n = JSON.parse(await AsyncStorage.getItem(searchK));
      setSearchNum(n);
    } catch(err) {
      console.error(err);
    }
  }

  useEffect(()=>{
    getSearchNum(searchK);
  },[]);

  return (
    <Pressable 
      style={({pressed})=>{
        return (
          pressed ? 
          {...styles.outputTile.container, opacity: 0.25} 
          : 
          {...styles.outputTile.container, 
            borderColor: ASKeys.find((key)=>key === memoK) ? 'green':'#999999'
          });
      }}
      onPress={navigateHandler.bind(this, itemData.item)}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.outputTile.hatsuonText}>[{itemData.item.hatsuon}]</Text>
        {
          favoriteWordIds.includes(itemData.item.id) ?
          <FontAwesome name = "star" style={styles.outputTile.noteIcon}/>
          :
          null
        }
      </View>
      <View 
        style={{        
          justifyContent: 'space-between', 
          flexDirection: 'row', 
        }}>
        <View 
          style={{
            flexDirection: 'row', 
            alignItems: 'center',
          }}>
          <Text style={styles.outputTile.kanjiText}>{itemData.item.kanji}</Text>
          <Text style={styles.outputTile.honyakuText}> - {itemData.item.honyaku[lang]}</Text> 
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <AntDesign name="eyeo" style={styles.outputTile.detailIcon}> {searchNum}</AntDesign>
          <AntDesign name="right" style={styles.outputTile.detailIcon}/>
        </View>
      </View>
    </Pressable>
  );
}