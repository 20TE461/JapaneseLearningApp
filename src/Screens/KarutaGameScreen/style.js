import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    // borderWidth: 1,
    // borderColor: 'red',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
  },
  body: {
    backgroundColor: '#F28500',
    flex: 1,
    paddingTop: 8,
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    paddingHorizontal: 5,
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.25,
  },
  pairContainer: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10
  },
});