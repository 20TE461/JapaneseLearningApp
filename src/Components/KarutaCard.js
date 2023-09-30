import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

export default function KarutaCard({children, isReset, isMatch, isPlaying, isNext}) {
  const [activating, setActive] = useState(false);
  const [activeColor, setActiveColor] = useState(null);

  const styles = StyleSheet.create({
    cardContainer: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: activating ? activeColor:'#fcfbf4',
      margin: 5,
      padding: 20,
      borderRadius: 5,
      // shadowColor: activating ? 'white':'black',
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.25,
    },
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      color: activating ? '#ffffff' : '#000000',
    },
    onPress: {
      opacity: 0.75,
    }
  });

  useEffect (()=>{
    if(isReset) {
      setActive(false);
    }
  }, [isReset])

  useEffect(() => {
    const count = setInterval(
      () => {
        if(isNext) {
          setActive(false)
        }
      }, 300
    );
    return () => {
      clearInterval(count);
    };
  },[isNext])

  return (
    <Pressable  
      onPress={()=>{
        setActive(true);
        isMatch() ? setActiveColor('green'):setActiveColor('red');
      }}
      disabled={activating || !isPlaying}
      style={
        ({pressed}) => {
          if (pressed) {
            return [styles.onPress, styles.cardContainer]
          }
          else {
            return styles.cardContainer;
          }
        }
      }>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}