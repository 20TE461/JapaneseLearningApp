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
    alignItems: 'center',
    paddingVertical: 10,
  },
  headInfoMainContainer: {
    flex: 1,
    marginLeft: 15,
  },
  kanjiContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  headInfoInnerContainer: {
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
    color: 'blue'
  },
  setsumeiText: {
    fontSize: 18,
  },
  kanjiText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ce2029'
  },
});