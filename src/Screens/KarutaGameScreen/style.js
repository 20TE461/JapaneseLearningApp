import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    // borderWidth: 1,
    // borderColor: 'red',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  body: {
    backgroundColor: '#ffb703',
    flex: 1,
    paddingTop: 8,
    marginHorizontal: 20,
    borderRadius: 10,
    paddingHorizontal: 5,
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
  },
  pairContainer: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10
  },
});