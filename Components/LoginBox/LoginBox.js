import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LoginButton from "./LoginButton";

export default function LoginBox() {
  return (
    <View style={styles.box}>
      <LoginButton />
      <LoginButton />
      <LoginButton />
      <Text>Create New Account --></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#fff",
    width: "80%",
    height: "50%",
    top: "25%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
