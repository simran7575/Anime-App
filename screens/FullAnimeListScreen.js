//import liraries
import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  ImageBackground,
  Dimensions,
} from "react-native";
import { getAllAnimeList } from "../api-services/ApiServices";
import AnimeList from "../components/AnimeList";
import LoadingOverlay from "../components/LoadingOverlay";

// create a component
function FullAnimeListScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [animeList, setAnimeList] = useState([]);

  //Loading the full list of anime on mounting
  useEffect(() => {
    let cancel = false;
    async function loadAllAnime() {
      try {
        const response = await getAllAnimeList();

        if (cancel) {
          return;
        }
        if (response.data) {
          setAnimeList(response.data);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          return;
        }
      } catch (error) {
        console.log(error);
        Alert.alert("Error in loading Anime List!", " please try again later!");
        setIsLoading(false);
      }
    }

    loadAllAnime();
    return () => {
      cancel = true;
    };
  }, []);

  if (isLoading) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.container}>
      <AnimeList data={animeList} />
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

//make this component available to the app
export default FullAnimeListScreen;
