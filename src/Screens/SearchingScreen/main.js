import { memo, useCallback, useContext, useState } from "react";
import { View, TextInput, Text } from "react-native";
import { styles } from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { FlatList } from "react-native";
import SearchOutput from "./SearchOutput";

const dictionary = require("../../../Data/dictionary.json");

function SearchingScreen({ navigation, lang }) {
  const [searchInput, setSearchInput] = useState(null);

  const sortByKanjiLength = (array) => {
    return array.sort((left, right) => {
      return left.kanji.length - right.kanji.length;
    });
  };

  const getOutputList = (input, searchPool, lang) => {
    return input
      ? sortByKanjiLength(
          searchPool.filter(
            (tango) =>
              tango.hatsuon.startsWith(input) ||
              tango.kanji.startsWith(input) ||
              (lang ? tango.honyaku[lang].startsWith(input) : null)
          )
        )
      : [];
  };

  function navigateHandler(params) {
    navigation.navigate("TangoInfoScreen", { ...params, lang: lang });
  }

  const getOutputRender = (data) => {
    return (
      <View>
        <SearchOutput
          kanji={data.item.kanji}
          honyaku={data.item.honyaku[lang]}
          hatsuon={data.item.hatsuon}
          navigateHandler={navigateHandler}
          searchK={`search_tango_${data.item.id}`}
          memoK={`memo_tango_${data.item.id}`}
          item={data.item}
          id={data.item.id}
        />
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <FontAwesome name="search" style={styles.searchIcon} />
        <TextInput
          style={styles.inputBar}
          placeholder="検索"
          onChangeText={(input) => {
            setSearchInput(input);
          }}
          clearButtonMode="while-editing"
          inputMode="search"
          autoCapitalize="none"
          autoCorrect={false}
          spellCheck={false}
          autoCompleteType="off"
        />
      </View>
      <View style={styles.outputContainer}>
        <FlatList
          data={getOutputList(searchInput, dictionary.jisho, lang)}
          renderItem={getOutputRender}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

export default memo(SearchingScreen);
