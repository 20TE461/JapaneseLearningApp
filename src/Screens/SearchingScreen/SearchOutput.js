import { memo, useContext, useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { styles } from "./styles";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { FavoriteCtx } from "../../Store/context/favorite-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

function SearchOutput({
  kanji,
  navigateHandler,
  honyaku,
  searchK,
  memoK,
  hatsuon,
  item,
  id,
}) {
  const [searchNum, setSearchNum] = useState(null);
  const favoriteCtx = useContext(FavoriteCtx);

  const favoriteWordIds = favoriteCtx.favoriteWordIds;
  const hasMemoIds = favoriteCtx.hasMemoIds;

  async function getSearchNum(searchK) {
    try {
      const n = JSON.parse(await AsyncStorage.getItem(searchK));
      setSearchNum(n);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getSearchNum(searchK);
  }, []);

  return (
    <Pressable
      style={({ pressed }) => {
        return pressed
          ? { ...styles.outputTile.container, opacity: 0.25 }
          : {
              ...styles.outputTile.container,
              borderColor: hasMemoIds.find((ids) => ids === memoK)
                ? "green"
                : "#999999",
            };
      }}
      onPress={navigateHandler.bind(this, item)}
    >
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "column", marginHorizontal: 10 }}>
          <View>
            <Text>[{hatsuon}]</Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.outputTile.kanjiText}>{kanji}</Text>
            <Text style={styles.outputTile.honyakuText}> - {honyaku}</Text>
            {favoriteWordIds.includes(id) ? (
              <FontAwesome name="star" style={styles.outputTile.noteIcon} />
            ) : null}
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.outputTile.detailIcon}>{searchNum}</Text>
          <AntDesign name="eyeo" style={styles.outputTile.detailIcon} />
          <AntDesign name="right" style={styles.outputTile.detailIcon} />
        </View>
      </View>
    </Pressable>
  );
}

export default memo(SearchOutput);
