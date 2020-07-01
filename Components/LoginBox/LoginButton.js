import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function LoginButton() {
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
    borderRadius: 20,
    borderColor: "#000",
    borderWidth: 1,
  },
  text: {
    fontSize: 25,
    fontFamily: "Raleway-ExtraBold",
    color: "#EC3023",
  },
});
