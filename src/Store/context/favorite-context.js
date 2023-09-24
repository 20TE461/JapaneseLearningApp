import { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavoriteCtx = createContext({
  favoriteWordIds: [],
  addFavoriteWordId: (wordId) => {},
  removeFavoriteWordId: (wordId) => {}
});

export default function FavoriteCtxProvider({children}) {
  const [favoriteWordIds, setFavoriteWordIds] = useState();

  useEffect(()=>{
    getCachedFavoriteWordIds('fav-ids').then((res)=>{
      res ? setFavoriteWordIds(res) : setFavoriteWordIds([]);
    });
  },[]);

  useEffect(()=>{
    if(favoriteWordIds) {
      setCachedFavoriteWordIds(favoriteWordIds, 'fav-ids');
    };
  },[favoriteWordIds]);
  
  async function getCachedFavoriteWordIds(key) {
    try {
      return JSON.parse(await AsyncStorage.getItem(key));
    } catch (err) {
      console.error(err);
    }
  }

  async function setCachedFavoriteWordIds(ids, key) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(ids));
    } catch (err) {
      console.error(err)
    };
  }

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