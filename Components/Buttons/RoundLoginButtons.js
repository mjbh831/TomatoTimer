import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function RoundLoginButtons() {
  return (
    <View style={styles.loginButton}>
      <Text style={styles.text}>LOGIN</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: "#fff",
    width: 225,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    borderColor: "#000",
    borderWidth: 1,
  },
  text: {
    fontFamily: "Raleway",
    fontSize: 25,
  },
});
