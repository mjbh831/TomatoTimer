import React from "react";
import { Text, StyleSheet } from "react-native";

export default function LoginButton() {
  return <Text style={styles.text}>login</Text>;
}
const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontFamily: "Raleway-ExtraBold",
    color: "#EC3023",
    textTransform: "uppercase",
  },
});
