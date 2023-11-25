import { Modal, StyleSheet, View, Text, SafeAreaView } from "react-native";
import PrimaryButton from "../../Components/PrimaryButton";

export default function GameOverScreen({
  onOverHandler,
  isOver,
  score,
  statics,
}) {
  return (
    <Modal animationType="slide" transparent={true} visible={isOver}>
      <View style={styles.innerView}>
        <Text style={styles.modalText}>Game Over!</Text>
        <Text style={styles.modalText}>{score}点</Text>
        <Text style={styles.modalText}>{statics}</Text>
        <PrimaryButton
          onPress={onOverHandler}
          style={styles.button}
          textStyle={styles.buttonText}
        >
          OK
        </PrimaryButton>
      </View>
    </Modal>
    // </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  innerView: {
    marginHorizontal: 50,
    marginVertical: "50%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalText: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#e3242b",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
