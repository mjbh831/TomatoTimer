import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Splash from "./Components/Splash/Splash";

const fetchFonts = () => {
  return Font.loadAsync({
    Neucha: require("./assets/fonts/Neucha-Regular.ttf"),
    LeckreliOne: require("./assets/fonts/LeckerliOne-Regular.ttf"),
    "Raleway-ExtraBold": require("./assets/fonts/Raleway-ExtraBold.ttf"),
    "Raleway-Regular": require("./assets/fonts/Raleway-Regular.ttf"),
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return <Splash />;
}
