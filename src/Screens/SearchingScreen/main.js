import { useContext, useState } from 'react';
import { View, TextInput, Text, Pressable} from 'react-native';
import { styles } from './styles';
import { FontAwesome, AntDesign } from '@expo/vector-icons'; 
import { FlatList } from 'react-native';
import { FavoriteCtx } from '../../Store/context/favorite-context';
import MemoCtxProvider, { MemoCtx } from '../../Store/context/memo-context';

const dictionary = require('../../../Data/dictionary.json');

export default function SearchingScreen({navigation, lang}) {

  const [searchInput, setSearchInput] = useState(null);
  const favoriteWordIds = useContext(FavoriteCtx).favoriteWordIds;

  function sortByKanjiLength(array) {
    return array.sort((left,right)=>{
      return left.kanji.length-right.kanji.length});
  }

  function getOutputList(input, searchPool) {
    return input ? sortByKanjiLength(searchPool.filter((tango)=>(
      tango.hatsuon.startsWith(input) || tango.kanji.startsWith(input)
    ))) : []; 
  }

  function navigateHandler(params) {
    navigation.navigate('TangoInfoScreen', {...params, lang:lang});
  }

  function getCurrentMemo() {
    const memoCtx = useContext(MemoCtx);
    return memoCtx.currentMemo;
  }

  function getOutputRender(itemData) {
    const memoK= `memo_tango_${itemData.item.id}`;
    
    return (
      <MemoCtxProvider memoKey={memoK}>
      <Pressable 
        style={({pressed})=>{
          return (
            pressed ? 
            {...styles.outputTile.container, opacity: 0.25} 
            : 
            {...styles.outputTile.container, 
              borderColor: getCurrentMemo() ? 'green': '#BEBEBE'
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
          <AntDesign name="right" style={styles.outputTile.detailIcon}/>
        </View>
      </Pressable>
      </MemoCtxProvider>
    );
  }

  function getOutputListRender(searchInput, inputList) {
    return (
      <FlatList data={getOutputList(searchInput, inputList)}
                renderItem={getOutputRender}
                />
    );
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <FontAwesome  name="search"
                      style={styles.searchIcon}
                      />
        <TextInput  style={styles.inputBar} 
                    placeholder='検索'
                    onChangeText={(input)=>{setSearchInput(input)}}
                    clearButtonMode="while-editing"
                    inputMode='search'
                    autoCapitalize="none"
                    autoCorrect={false}
                    spellCheck={false}
                    autoCompleteType="off"
                    />
      </View>
      <View style={styles.outputContainer}>
        {getOutputListRender(searchInput, dictionary.jisho)}
      </View>
    </View>
  );
}