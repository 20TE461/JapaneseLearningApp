import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gameView: {
    flex: 1,
  },
  kanjiContainer: {
    flex: 1,
    backgroundColor: '#222e50',
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  kanjiContainerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
    marginHorizontal: 10,
  },
  kanjiContainerBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  kanjiText: {
    color: '#fff',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#bebebe',
    borderBottomWidth: 1,
    marginHorizontal: 15,
    paddingHorizontal: 5,
    marginVertical: 10,
    paddingBottom: 5,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    fontSize: 20,
  },
  scoreView: {
    scoreText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 20,
      marginHorizontal: 5,
    },
  },
  timerView: {
    timerText: {
      marginHorizontal: 5,
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 20,
    },
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
    borderRadius: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
  }
});