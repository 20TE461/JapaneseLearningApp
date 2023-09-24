import { View, Text, ScrollView } from 'react-native';
import { styles } from './styles';
import { useEffect } from 'react';
import SetFavoriteButton from './SetFavoriteButton';

function getSetsumei(naiyou) {
  return (
    <View style={styles.setsumeiContainer}>
      <Text style={styles.setsumeiText}>{"<説明>\n"}  {naiyou}</Text>
    </View>
  );
}

export default function TangoInfoScreen({route, navigation}) {
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
        <Text style={{fontSize: 20}}>[{params.hatsuon}]</Text>
      </View>
      <View style = {styles.headInfoMainContainer}>
        <View style={styles.headInfoInnerContainer}>
          <Text style={styles.honyakuText}>{params.honyaku[lang]}</Text>
        </View>
      </View>
    </View>
    {params.setsumei[lang] ? getSetsumei(params.setsumei[lang]):null}
    </ScrollView>
  );
}