import { useContext } from "react";
import { Text, View } from "react-native";
import { FavoriteCtx } from "../../Store/context/favorite-context";

export default function FavoriteListScreen() {
  const favoriteCtx = useContext(FavoriteCtx);

  return (
    <View>
      <Text>Favorites</Text>
    </View>
  );
}