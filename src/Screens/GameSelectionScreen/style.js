import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  title: {
    fontSize: 30, 
    marginHorizontal: 20, 
    marginTop: 5,
    fontWeight: 'bold',
  },
  screenGrid: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3ded97',
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: {width: 2, height: 2},
  },
  screenGridTile: {
    height: 130,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20, 
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: {width: 2, height: 2},
  },
  screenGridTileText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    margin: 5,
  }
})