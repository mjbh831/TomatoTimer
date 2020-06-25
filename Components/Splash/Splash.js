import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

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

      <View style={{ ...styles.children }}>{props.children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#EC3023",
    alignItems: "center",
    justifyContent: "space-around",
  },
  logoContainer: {
    alignItems: "center",
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
    textShadowColor: "rgba(0, 0, 0, 0.55)",
    textShadowOffset: { width: 2, height: 3 },
    textShadowRadius: 10,
  },
  logoTextTimer: {
    color: "#fff",
    fontSize: 45,
    fontFamily: "LeckreliOne",
    textShadowColor: "rgba(0, 0, 0, 0.55)",
    textShadowOffset: { width: 2, height: 3 },
    textShadowRadius: 10,
  },
});
export default Splash;
