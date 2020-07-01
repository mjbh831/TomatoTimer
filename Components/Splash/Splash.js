import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import LoginBox from "../LoginBox/LoginBox";

const Splash = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.splashLogo}
          source={require("../../assets/tomatoTimer.png")}
        />
        <View style={styles.logoText}>
          <Text style={styles.logoTextTomato}>Tomato</Text>
          <Text style={styles.logoTextTimer}>Timer</Text>
        </View>
      </View>
      <LoginBox loginButtonHandler={props.loginButtonHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#EC3023",
    alignItems: "center",
    position: "relative",
  },
  logoContainer: {
    alignItems: "center",
    position: "relative",
    top: "15%",
  },
  splashLogo: {
    width: 125,
    height: 125,
  },
  logoText: {
    display: "flex",
    flexDirection: "row",
  },
  logoTextTomato: {
    color: "#fff",
    fontSize: 45,
    fontFamily: "Neucha",
    textShadowColor: "rgba(0, 0, 0, 0.4)",
    textShadowOffset: { width: -2, height: 3 },
    textShadowRadius: 5,
  },
  logoTextTimer: {
    color: "#fff",
    fontSize: 45,
    fontFamily: "LeckreliOne",
    textShadowColor: "rgba(0, 0, 0, 0.4)",
    textShadowOffset: { width: -2, height: 3 },
    textShadowRadius: 5,
  },
});
export default Splash;
