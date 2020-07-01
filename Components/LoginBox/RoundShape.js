import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

export default function RoundShape(props) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={{ ...styles.roundShape, ...props.style }}
      onPress={props.onPress}
    >
      {props.children}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  roundShape: {
    backgroundColor: "#fff",
    width: 225,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    borderColor: "#000",
    borderWidth: 1,
    marginVertical: 5,
  },
});
