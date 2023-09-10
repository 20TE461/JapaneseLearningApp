import { View, Text, Pressable, StyleSheet } from "react-native";


export default function PrimaryButton({style, textStyle, children, onPress}) {

  return (
    <Pressable 
      style={
        ({pressed}) => {
          if (style === undefined) {
            return pressed ? [styles.defaultContainer, styles.onPress] : styles.defaultContainer;
          }
          else {
            return pressed ? [styles.onPress, style] : style;
          }
        }} 
      onPress={onPress}
      >
      <View>
        <Text 
          style={
            (() => textStyle === undefined ? styles.defaultText : textStyle)()
          }
          // style={props.textStyle}
          >
          {children}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  defaultContainer: {
    backgroundColor: '#bebebe',
    width: 'auto',
    alignItems: 'center',
    paddingVertical: 5,
  },
  defaultText: {
    fontSize: 18,
    color: 'blue',
  },
  onPress: {
    opacity: 0.75,
  }
})