import { createContext, useContext, useState } from "react";
import { View } from "react-native";

export const LanguageCtx = createContext({
  langs: [
    {
      label: 'vn',
    },
    {
      label: 'cn',
    },
    {
      label: 'uzb',
    },
    {
      label: 'uyghur'
    }
  ],
  currentLang: null,
  setCurrentLang: (langLabel) => {}
})

export default function LanguageCtxProvider({children}) {
  const [currentLang, setCurrentLang] = useState(null);
  const langCtx = useContext(LanguageCtx);

  function setLang(langLabel) {
    setCurrentLang(
      langCtx.langs.find(lang => lang.label === langLabel)
      );
  }

  return (
    <LanguageCtx.Provider 
      value={{
        currentLang: currentLang,
        setCurrentLang: setLang
      }}>
      {children}
    </LanguageCtx.Provider>
  );
}