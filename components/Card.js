import { View, StyleSheet, Pressable } from "react-native";
import { customStyles } from "../constants/Color";

// create a component
function Card({ children, style, innerStyle, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [
        customStyles.cardOuterContainer,
        { ...style },
        pressed && customStyles.pressed,
      ]}
      onPress={onPress}
    >
      <View style={[customStyles.cardInnerContainer, { ...innerStyle }]}>
        {children}
      </View>
    </Pressable>
  );
}

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default Card;
