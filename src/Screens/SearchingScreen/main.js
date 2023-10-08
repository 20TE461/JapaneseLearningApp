import { useContext, useEffect, useState } from 'react';
import { View, TextInput } from 'react-native';
import { styles } from './styles';
import { FontAwesome } from '@expo/vector-icons'; 
import { FlatList } from 'react-native';
import { FavoriteCtx } from '../../Store/context/favorite-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SearchOutput from './SearchOutput';

const dictionary = require('../../../Data/dictionary.json');

export default function SearchingScreen({navigation, lang, route}) {

  const [ASKeys, setASKeys] = useState([]);
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

  function getOutputRender(itemData) {
    return <SearchOutput favoriteWordIds={favoriteWordIds}
                         ASKeys={ASKeys}
                         itemData={itemData}                
                         navigateHandler={navigateHandler}
                         lang={lang}
                         />
  }

  function getOutputListRender(searchInput, inputList) {

    useEffect(()=>{
      const init = async () => {
        await AsyncStorage.getAllKeys().then(
          (res)=>{setASKeys(res)}
        );
      };
      init();
    },[ASKeys]);

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