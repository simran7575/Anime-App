import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { customStyles } from "../constants/Color";

function LoadingOverlay({ message }) {
  return (
    <View style={customStyles.rootContainer}>
      <ActivityIndicator size="large" />
      <Text style={customStyles.message}>{message}</Text>
    </View>
  );
}

export default LoadingOverlay;

const styles = StyleSheet.create({});
