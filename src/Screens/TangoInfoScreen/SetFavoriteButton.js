import { FontAwesome } from '@expo/vector-icons'
import { FavoriteCtx } from '../../Store/context/favorite-context';
import { useContext } from 'react';

export default function SetFavoriteButton(wordId) {
  const favoriteCtx = useContext(FavoriteCtx);
  const isFavorite = favoriteCtx.favoriteWordIds.includes(wordId);

  return <FontAwesome color={"gold"} 
                      size={22}
                      name={isFavorite ? "star":"star-o"}
                      onPress={() => {
                        isFavorite ? 
                        favoriteCtx.removeFavoriteWordId(wordId)
                        :
                        favoriteCtx.addFavoriteWordId(wordId);
                      }}
                      />;
}
