import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FullAnimeListScreen from "../screens/FullAnimeListScreen";
import AnimeDetailScreen from "../screens/AnimeDetailScreen";

const Stack = createNativeStackNavigator();

// create a component
const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FullAnimeList"
        component={FullAnimeListScreen}
        options={{
          headerTitle: "Anime",
          headerTitleStyle: {
            fontSize: 24,
            fontFamily: "bubblegum-regular",
          },
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="AnimeDetails"
        component={AnimeDetailScreen}
        options={{
          headerTitleStyle: {
            fontSize: 24,
            fontFamily: "bubblegum-regular",
          },
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
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
export default StackNav;
