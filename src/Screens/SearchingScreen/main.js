import { useState } from 'react';
import { View, TextInput, Text, Pressable, Button } from 'react-native';
import { styles } from './styles';
import { FontAwesome, AntDesign } from '@expo/vector-icons'; 
import { FlatList } from 'react-native';

const dictionary = require('../../../Data/dictionary.json');

export default function SearchingScreen({navigation, lang}) {

  const [searchInput, setSearchInput] = useState(null);

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
    navigation.navigate('InfoScreen', {...params, lang:lang});
  }

  function getOutputRender(itemData) {
    return (
      <Pressable 
        style={({pressed})=>{
          return pressed ? {...styles.outputTile.container, opacity: 0.25} : styles.outputTile.container;
        }}
        onPress={navigateHandler.bind(this, itemData.item)}>
        <Text style={styles.outputTile.hatsuonText}>[{itemData.item.hatsuon}]</Text>
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
            {/* <FontAwesome name = "star" style={styles.outputTile.noteIcon}/> */}
          </View>
          <AntDesign name="right" style={styles.outputTile.detailIcon}/>
        </View>
      </Pressable>
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