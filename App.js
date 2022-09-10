import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import StackNav from "./navigation/StackNav";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  const fontFamilies = {
    "bubblegum-regular": require("./assets/fonts/BubblegumSans-Regular.ttf"),
  };

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(fontFamilies);
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        //await SplashScreen.hideAsync();
      }
    }
    prepare();
  }, []);

  async function onNavigationReady() {
    await SplashScreen.hideAsync(); // just hide the splash screen after navigation ready
  }

  if (!appIsReady) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <NavigationContainer onReady={onNavigationReady}>
        <StackNav />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
