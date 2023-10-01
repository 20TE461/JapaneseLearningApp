import { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const MemoCtx = createContext({
  currentMemo: null,
  getMemo: (id)=>{},
  setMemo: (content)=>{}
});

export default function MemoCtxProvider({children, memoKey}) {
  const [currentMemo, setCurrentMemo] = useState(null);

  useEffect(()=>{
    if(memoKey) {
      getMemo(memoKey).then((res)=>{
        setCurrentMemo(res);
      });
    }
  },[]);

  useEffect(()=>{
    if(memoKey) {
      setMemo(currentMemo);
    }
  },[currentMemo]);
  
  async function getMemo(id) {
    try {
      return JSON.parse(await AsyncStorage.getItem(id));
    } catch (err) {
      console.error(err);
    }
  }
  
  async function setMemo(content) {
    try {
      await AsyncStorage.setItem(memoKey, JSON.stringify(content));
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <MemoCtx.Provider 
      value={{
        currentMemo: currentMemo,
        getMemo: getMemo,
        setMemo: setCurrentMemo
      }}>
      {children}
    </MemoCtx.Provider>
  );
}