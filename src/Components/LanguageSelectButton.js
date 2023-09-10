import { Dropdown } from "react-native-element-dropdown";
import { StyleSheet } from 'react-native';

const languages = [
    {
      id: '1',
      lable: 'vn',
    },
    {
      id: '2',
      lable: 'cn',
    },
    {
      id: '3',
      lable: 'uzb',
    },
    {
      id: '4',
      lable: 'mg',
    },
    {
      id: '5',
      lable: 'np',
    },
    {
      id: '6',
      lable: 'en'
    }
  ];
export default function LanguageSelectButton({lang, setLang}) {
  return (
    <Dropdown 
      style={styles.mainContainer}
      placeholder="言語"
      data={languages}
      value={lang}
      valueField="lable"
      labelField="lable"
      placeholderStyle={styles.buttonText}
      selectedTextStyle={styles.buttonText}
      onChange={(item)=>{
        setLang(item.lable)
      }}
    />
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    backgroundColor: 'white',
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