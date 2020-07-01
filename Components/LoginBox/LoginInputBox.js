import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

export default function LoginInputBox(props) {
  return (
    <View style={styles.container}>
      <View>{props.icon}</View>
      <TextInput style={styles.input} placeholder={props.placeholder} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    paddingLeft: 12,
    fontSize: 15,
    width: "80%",
    height: 50,
  },
});
