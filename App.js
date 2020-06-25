import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Splash from "./Components/Splash/Splash";
import RoundLoginButton from "./Components/Buttons/RoundLoginButtons";

const fetchFonts = () => {
  return Font.loadAsync({
    Neucha: require("./assets/fonts/Neucha-Regular.ttf"),
    LeckreliOne: require("./assets/fonts/LeckerliOne-Regular.ttf"),
    Raleway: require("./assets/fonts/Raleway-VariableFont_wght.ttf"),
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
  return (
    <View style={styles.container}>
      <Splash>
        <RoundLoginButton />
      </Splash>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
