import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gridContainer: {
    flex: 1,
  },
  gridTileContainer: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#daa520',
    shadowColor: '#000',
    shadowOffset: {height: 2, width: 0},
    shadowOpacity: 0.25,
  },
  renderItem: {
    flexDirection: 'row',
    alignItems: 'center',
  } 
});