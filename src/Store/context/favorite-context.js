import { createContext, useState } from "react";

export const FavoriteCtx = createContext({
  favoriteWordIds: [],
  addFavoriteWordId: (wordId) => {},
  removeFavoriteWordId: (wordId) => {}
});

export default function FavoriteCtxProvider({children}) {
  const [favoriteWordIds, setFavoriteWordIds] = useState([]);
  
  function addFavoriteWordId(wordId) {
    setFavoriteWordIds((currentWordIds)=>[...currentWordIds, wordId]);
  }

  function removeFavoriteWordId(wordId) {
    setFavoriteWordIds((currentWordIds)=>(
      currentWordIds.filter(
        (currentId) => currentId !== wordId
      )
    ));
  }

  const values = {
    favoriteWordIds: favoriteWordIds,
    addFavoriteWordId: addFavoriteWordId,
    removeFavoriteWordId: removeFavoriteWordId
  }

  return (
    <FavoriteCtx.Provider value={values}>
      {children}
    </FavoriteCtx.Provider>
  );
}