import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  title: {
    fontSize: 25, 
    marginHorizontal: 20, 
    marginTop: 5,
    fontWeight: 'bold',
  },
  screenGrid: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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