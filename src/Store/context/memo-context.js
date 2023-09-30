import { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const MemoCtx = createContext({
  getMemo: (id)=>{},
  setMemo: (memo)=>{}
});

export default function MemoCtxProvider({children}) {

  async function getMemo(id) {
    try {
      return JSON.parse(await AsyncStorage.getItem(id));
    } catch (err) {
      console.error(err);
    }
  }
  
  async function setMemo(memo) {
    try {
      await AsyncStorage.setItem(memo.id, JSON.stringify(memo.content));
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <MemoCtx.Provider 
      value={{
        getMemo: getMemo,
        setMemo: setMemo
      }}>
      {children}
    </MemoCtx.Provider>
  );
}