import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Splash from "./Components/Splash/Splash";
import Home from "./Components/HomePage/Home";

const fetchFonts = () => {
  // loading custom fonts
  return Font.loadAsync({
    Neucha: require("./assets/fonts/Neucha-Regular.ttf"),
    LeckreliOne: require("./assets/fonts/LeckerliOne-Regular.ttf"),
    "Raleway-ExtraBold": require("./assets/fonts/Raleway-ExtraBold.ttf"),
    "Raleway-Regular": require("./assets/fonts/Raleway-Regular.ttf"),
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState("splash");

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  // const routeHandler = () => {
  //   console.log("this works");
  // };

  if (currentPage === "splash") {
    return <Splash />;
  }
  if (currentPage === "home") {
    return <Home />;
  }
  return { currentPage };
}
