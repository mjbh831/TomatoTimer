import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import LoginButton from "../LoginButton";
import RoundShape from "../RoundShape";
import { Entypo } from "@expo/vector-icons";

export default function Login(props) {
  return (
    <View style={styles.box}>
      <RoundShape onPress={props.preLoginButtonHandler}>
        <LoginButton />
      </RoundShape>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={props.newAccountButtonHandler}
      >
        <Text style={styles.plainText}>
          Create New Account{"  "}
          <Entypo name="arrow-long-right" size={14} color="black" />
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  box: {
    height: "50%",
    top: "25%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  plainText: {
    fontSize: 15,
    fontFamily: "Raleway-Regular",
    paddingVertical: 10,
  },
});
