import { Dropdown } from "react-native-element-dropdown";
import { StyleSheet } from 'react-native';
import { LanguageCtx } from "../Store/context/language-context";
import { useContext } from "react";

export default function LanguageSelectButton({lang, setLang, customStyles}) {
  const styles = customStyles ? customStyles : defaultStyles;
  const langCtx = useContext(LanguageCtx);

  return (
    <Dropdown 
      style={styles.mainContainer}
      placeholder="言語"
      data={langCtx.langs}
      value={lang}
      valueField="label"
      labelField="label"
      placeholderStyle={styles.buttonText}
      selectedTextStyle={styles.buttonText}
      onChange={(item)=>{
        setLang(item.label);
      }}
      iconColor="#FFF"
      />
  );
}

const defaultStyles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginVertical: 5,
    width: '25%',
  },
  buttonText: {
    textAlign:'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
})