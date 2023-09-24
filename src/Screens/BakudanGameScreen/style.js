import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#8ecae6',
    paddingVertical: 10,
    borderRadius: 10,
  },
  gameView: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  kanjiContainer: {
    flex: 1,
    backgroundColor: '#222e50',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2}, 
    shadowOpacity: 0.5,
  },
  kanjiText: {
    color: '#fff',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    // width: '100%',
    // borderColor: '#777',
    // borderWidth: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderColor: '#000',
    margin: 10,
    borderRadius: 10,
    fontSize: 20,
    // shadowColor: '#000',
    // shadowOffset: {width: 2, height: 2}, 
    // shadowOpacity: 0.5,
  },
  timerText: {
    fontSize: 20,
    color: '#FF6347',
    marginBottom: 20,
  },
  answerButton: {
    alignItems: 'center',
    padding: 10,
    flex: 1,
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2}, 
    shadowOpacity: 0.25,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
  }
});