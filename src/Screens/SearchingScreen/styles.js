import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    // marginBottom: ,
  },
  inputBar: {
    flex: 3,
    fontSize: 22,
    paddingVertical: 5,
    marginVertical: 10,
    marginRight: 20,
    borderColor: '#bebebe',
    borderBottomWidth: 1,
  },
  searchIcon: {
    paddingHorizontal: 20,
    fontSize: 22,
  },
  outputContainer: {
    flex: 1,
  },
  outputTile: {
    container: {
      backgroundColor: '#fff',
      marginTop: 5,
      shadowColor: '#000',
      shadowOpacity: '0.25',
      shadowOffset: {height: 0, width: 0},
      paddingVertical: 5,
      borderColor: 'green',
      borderLeftWidth: 5,
    },
    kanjiText: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#000',
      marginLeft: 10,
      marginBottom: 5,
    },
    hatsuonText: {
      fontSize: 15,
      color: '#000',
      marginLeft: 10,
      color: '#777',
    },
    honyakuText: {
      fontSize: 18,
    },
    detailIcon: {
      marginHorizontal: 10,
      fontSize: 20,
      color: '#bebebe'
    },
    noteIcon: {
      fontSize: 20,
      color: 'gold',
      margin: 10
    }
  },
})