import { SafeAreaView, StyleSheet, Text, View, ScrollView} from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView,DrawerItemList, DrawerItem} from '@react-navigation/drawer'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome } from '@expo/vector-icons'

import GameSelectionScreen from './src/Screens/GameSelectionScreen/main';
import SearchingScreen from './src/Screens/SearchingScreen/main';
import TangoInfoScreen from './src/Screens/TangoInfoScreen/main';
import SetFavoriteButton from './src/Screens/TangoInfoScreen/SetFavoriteButton';
import LanguageSelectButton from './src/Components/LanguageSelectButton';
import FavoriteCtxProvider from './src/Store/context/favorite-context';
import FavoriteListScreen from './src/Screens/FavoriteListScreen/main';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function CustomDrawerContent(props) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <DrawerItem label = {()=>(<Text style={styles.drawerTitle}>日本語学習アプリ</Text>)} 
                  style={styles.drawerTitle}
                  />
      <ScrollView {...props}>
        <DrawerItemList {...props}/>
      </ScrollView>
      <DrawerItem label="@DITU 平田研究室 - 2023" 
                  style={{borderTopWidth: 1, borderColor:'#bebebe'}}
                  />
    </SafeAreaView>
  );
}

export default function App() {
  const [lang, setLang] = useState(null);

  function DrawerNavigator() {
    return (
        <Drawer.Navigator 
          screenOptions={{
            headerTintColor: '#fff',
            headerTitleAlign: 'left',
            drawerActiveBackgroundColor: '#fff',
            headerStyle: {
              backgroundColor: '#59788e',
            },
          }}
          drawerContent={CustomDrawerContent}
          >
          <Drawer.Screen  name = "DictSearch" 
                          options={{
                            title: "辞書",
                            drawerLabel: "辞書",
                            headerRight: LangButton.bind(this,styles.langButton),
                            drawerIcon: ({color,size}) => (
                              <FontAwesome name="book" color={color} size={size}/>
                            )}}
                          >
          {({navigation}) => <SearchingScreen lang={lang} navigation={navigation}/>}
          </Drawer.Screen>
          <Drawer.Screen  name = "FavoriteList"
                          component = {FavoriteListScreen}
                          options = {{
                            title: "お気に入り",
                            drawerLabel: "お気に入り", 
                            drawerIcon: ({color,size}) => (
                              <FontAwesome name="star" color={color} size={size}/>
                            )}}
                          />
          <Drawer.Screen  name = "GameList" 
                          component={GameSelectionScreen}
                          options={{
                            title: "ゲーム一覧",
                            drawerLabel: "ミニゲーム",
                            drawerIcon: ({color,size}) => (
                              <FontAwesome name="gamepad" color={color} size={size}/>
                            )}}
                          />
        </Drawer.Navigator>
    );
  }

  function LangButton(styles) {
    return(
      <LanguageSelectButton 
        customStyles={styles}
        lang={lang}
        setLang={setLang}
        />
      );
  }

  return (
    <FavoriteCtxProvider>
    <View style={styles.appContainer}>
      <StatusBar style='light'/>
      <NavigationContainer>
      <Stack.Navigator
          screenOptions={{
            headerTintColor: '#fff',
            headerTitleAlign: 'left',
            headerStyle: {
              backgroundColor: '#59788e',
            },
          }}>
        <Stack.Screen name = "DrawerNavigator"
                      options={{
                        headerShown: false,
                      }}
                      >
          {DrawerNavigator}
        </Stack.Screen>
        <Stack.Screen name = "InfoScreen" component={TangoInfoScreen}
                      options={{
                        title: "詳細",
                        headerRight: SetFavoriteButton
                        }}
                      />
      </Stack.Navigator>
      </NavigationContainer>
    </View>
    </FavoriteCtxProvider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  innerContainer: {
    flex: 1
  },
  langButton: {
    mainContainer: {
      flex: 1,
      width: '30%',
      // backgroundColor: 'white',
      marginRight: 5,
    },
    buttonText: {
      textAlign:'right',
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold'
    },
  },
  drawerTitle: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#fff',
    backgroundColor: '#59788e',
  }
});
