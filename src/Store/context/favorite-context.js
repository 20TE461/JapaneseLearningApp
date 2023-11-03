import { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { current } from "@reduxjs/toolkit";

export const FavoriteCtx = createContext({
  favoriteWordIds: [],
  hasMemoIds: [],
  addFavoriteWordId: (wordId) => {},
  removeFavoriteWordId: (wordId) => {},
  addMemoId: (memoId) => {},
  removeMemoId: (memoId) => {},
});

export default function FavoriteCtxProvider({children}) {
  const [favoriteWordIds, setFavoriteWordIds] = useState();
  const [hasMemoIds, setHasMemoIds] = useState();

  useEffect(()=>{
    getCachedFavoriteWordIds('fav-ids').then((res)=>{
      res ? setFavoriteWordIds(res) : setFavoriteWordIds([]);
    });
    
    getCachedFavoriteWordIds('memo-ids').then((res)=>{
      setHasMemoIds(res ? res : [])
    })
  },[]);

  useEffect(()=>{
    if(favoriteWordIds) {
      setCachedFavoriteWordIds(favoriteWordIds, 'fav-ids');
    };
  },[favoriteWordIds]);

  useEffect(()=>{
    if(hasMemoIds) {
      setCachedFavoriteWordIds(hasMemoIds, 'memo-ids');
    }
  }, [hasMemoIds]);
  
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

  function addMemoId(memoId) {
    setHasMemoIds((currentMemoIds)=>[...currentMemoIds, memoId]);
  }

  function removeMemoId(memoId) {
    setHasMemoIds((currentMemoIds)=>(
      currentMemoIds.filter(
        (currentId) => currentId !== memoId
      )
    ));
  }

  const values = {
    favoriteWordIds: favoriteWordIds,
    hasMemoIds: hasMemoIds,
    addFavoriteWordId: addFavoriteWordId,
    removeFavoriteWordId: removeFavoriteWordId,
    addMemoId: addMemoId,
    removeMemoId: removeMemoId,
  }

  return (
    <FavoriteCtx.Provider value={values}>
      {children}
    </FavoriteCtx.Provider>
  );
}