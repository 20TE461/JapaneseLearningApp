import { memo, useCallback, useContext, useState } from 'react';
import { View, TextInput } from 'react-native';
import { styles } from './styles';
import { FontAwesome } from '@expo/vector-icons'; 
import { FlatList } from 'react-native';
import { FavoriteCtx } from '../../Store/context/favorite-context';
import SearchOutput from './SearchOutput';

const dictionary = require('../../../Data/dictionary.json');

function SearchingScreen({navigation, lang}) {

  const [searchInput, setSearchInput] = useState(null);
  const favoriteWordIds = useContext(FavoriteCtx).favoriteWordIds;
  const hasMemoIds = useContext(FavoriteCtx).hasMemoIds;

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

  const getOutputRender = useCallback((data) =>{
    return (
      <View key={data.itemData.id}>
        <SearchOutput 
          favoriteWordIds={data.favoriteWordIds}
          itemData={data.itemData}                
          navigateHandler={data.navigateHandler}
          lang={data.lang}
          hasMemoIds={data.hasMemoIds}
          />
      </View>
    );
  },[]);

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
        <FlatList data={getOutputList(searchInput, dictionary.jisho)}
                  renderItem={(itemData)=>getOutputRender({
                    itemData, 
                    favoriteWordIds, 
                    lang, 
                    navigateHandler, 
                    hasMemoIds
                  })}
                  keyExtractor={(item, index)=>item.id}
                  removeClippedSubviews={true}
                  />
      </View>
    </View>
  );
}

export default memo(SearchingScreen);