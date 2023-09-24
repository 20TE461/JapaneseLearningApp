import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },

  headContainer: {
    flexDirection: 'row',
    borderColor: '#bebebe',
    borderBottomWidth: 1,
    marginHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 20,
  },
  headInfoMainContainer: {
    flex: 1,
    marginLeft: 15,
  },
  kanjiContainer: {
    alignItems: 'center',
    backgroundColor: '#fff1d7',
    shadowColor: '#000',
    shadowOffset: {height: 2, width: 2},
    shadowOpacity: 0.25,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 20
  },
  headInfoInnerContainer: {
    // flex: 1,
    marginBottom: 8,
  },
  setsumeiContainer: {
    borderColor: '#bebebe',
    borderBottomWidth: 1,
    marginHorizontal: 10,
    paddingVertical: 10
  },
  honyakuText: {
    fontSize: 18,
    marginVertical: 5,
    color: 'blue',
  },
  setsumeiText: {
    fontSize: 18,
    marginHorizontal: 10
  },
  kanjiText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});