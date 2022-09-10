//import liraries
import React, { useLayoutEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  Text,
} from "react-native";
import DetailContainer from "../components/DetailContainer";
import Divider from "../components/Divider";
import { customStyles } from "../constants/Color";

// create a component
const AnimeDetailScreen = ({ navigation, route }) => {
  const item = route.params.item;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: item.title,
    });
  });

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.image }} style={customStyles.image} />
          </View>
          <View style={customStyles.mainContainer}>
            <View style={customStyles.titleAndYear}>
              <Text style={customStyles.titleTextLarge}>
                {item.original_title}
              </Text>
              <Text style={customStyles.yearTextLarge}>
                {`(${item.release_date})`}
              </Text>
            </View>

            <Text style={customStyles.originalTitleLarge}>
              {item.original_title_romanised}
            </Text>
            <View style={customStyles.titleContainer}>
              <DetailContainer
                source={require("../assets/images/director.png")}
                label="Director"
                description={item.director}
              ></DetailContainer>
              <DetailContainer
                source={require("../assets/images/producer.png")}
                label="Producer"
                description={item.producer}
              ></DetailContainer>
            </View>
            <Divider style={customStyles.divider} />
            <Text style={customStyles.yearTextMedium}>{item.description}</Text>
            <Divider style={customStyles.divider} />
            <View style={customStyles.background}>
              <Text style={customStyles.titleTextLarge}>Movie Highlights</Text>
              <View style={customStyles.titleContainerPadding}>
                <View style={customStyles.titleAndYear}>
                  <Image
                    source={require("../assets/images/tomato.png")}
                    style={customStyles.tomatoIconLarge}
                  />

                  <Text style={customStyles.yearTextLarge}>
                    {item.rt_score}
                  </Text>
                </View>
                <View style={customStyles.titleAndYear}>
                  <Image
                    source={require("../assets/images/runningtime.png")}
                    style={customStyles.clockIconLarge}
                  />

                  <Text style={customStyles.yearTextLarge}>
                    {item.running_time} days
                  </Text>
                </View>
              </View>
            </View>
            <Divider style={customStyles.dividerShort} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: 30,
    //paddingHorizontal: 12,
  },

  imageContainer: {
    width: Dimensions.get("window").width,
    height: 230,
  },
});

//make this component available to the app
export default AnimeDetailScreen;
