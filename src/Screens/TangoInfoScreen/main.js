import { View, Text, ScrollView } from 'react-native';
import { styles } from './styles';
import { useEffect, useState } from 'react';
import SetFavoriteButton from './SetFavoriteButton';
import { FontAwesome } from '@expo/vector-icons'
import TangoMemoScreen from './TangoMemoScreen';

function getSetsumei(naiyou) {
  return (
    <View style={styles.setsumeiContainer}>
      <Text style={styles.setsumeiText}>{"<説明>\n"}{naiyou}</Text>
    </View>
  );
}

export default function TangoInfoScreen({route, navigation}) {
  const [showMemo, setShowMemo] = useState(false);
  const params = route.params;
  const lang = params.lang;

  useEffect(()=>{
    navigation.setOptions({
      headerRight: SetFavoriteButton.bind(this, params.id)
    })
  },[navigation]);
  
  return (
    <ScrollView style={styles.mainContainer}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                >
      <View style = {styles.headContainer}>
        <View style = {styles.kanjiContainer}>
          <Text style={styles.kanjiText}>{params.kanji}</Text>
          <Text style={{fontSize: 18, color: 'green'}}>[{params.hatsuon}]</Text>
        </View>
        <View style = {styles.headInfoMainContainer}>
          <View style={styles.headInfoInnerContainer}>
            <Text style={styles.honyakuText}>{params.honyaku[lang]}</Text>
          </View>
        </View>
        <FontAwesome name={'pencil-square-o'} 
                     size={25}
                     onPress={setShowMemo.bind(this,true)}
                    />
      </View>
      <TangoMemoScreen isShow={showMemo} setIsShow={setShowMemo} tangoId={params.id}/>
    {params.setsumei[lang] ? getSetsumei(params.setsumei[lang]):null}
    </ScrollView>
  );
}