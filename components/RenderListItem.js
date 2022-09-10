import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image } from "react-native";
import { customStyles } from "../constants/Color";

import Card from "./Card";

// create a component
const RenderListItem = ({ item }) => {
  const navigation = useNavigation();

  const moveToDetailScreen = () => {
    navigation.navigate("AnimeDetails", { item });
  };

  return (
    <Card
      style={styles.card}
      innerStyle={styles.innerCard}
      onPress={moveToDetailScreen}
    >
      <View style={customStyles.imageContainer}>
        <Image source={{ uri: item.image }} style={customStyles.image} />
      </View>
      <View style={customStyles.titleContainer}>
        <View style={customStyles.titleAndYear}>
          <Text style={customStyles.titleText}>{item.title}</Text>
          <Text style={customStyles.yearText}>{`(${item.release_date})`}</Text>
        </View>
        <View style={customStyles.scoreContainer}>
          <Image
            source={require("../assets/images/tomato.png")}
            style={customStyles.tomatoIcon}
          />
          <Text style={customStyles.ratingText}>{item.rt_score}</Text>
        </View>
      </View>
      <Text style={customStyles.originalTitle}>{item.original_title}</Text>
    </Card>
  );
};

// define your styles
const styles = StyleSheet.create({
  card: {
    marginVertical: 12,
    justifyContent: "flex-start",
    position: "relative",
  },
  innerCard: {
    paddingVertical: 12,
  },
});

//make this component available to the app
export default RenderListItem;
