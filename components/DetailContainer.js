import { View, Text, Image, StyleSheet } from "react-native";
import { customStyles } from "../constants/Color";

// create a component
const DetailContainer = ({ source, label, description }) => {
  return (
    <View style={customStyles.highlightContainer}>
      <View>
        <Image source={source} style={customStyles.icon} />
      </View>
      <View>
        <Text style={customStyles.detailText}> {label}</Text>

        <Text style={[customStyles.yearTextLarge, { flexWrap: "wrap" }]}>
          {description}
        </Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default DetailContainer;
