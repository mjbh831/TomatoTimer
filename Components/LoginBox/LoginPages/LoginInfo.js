import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import LoginButton from "../LoginButton";
import RoundShape from "../RoundShape";
import LoginInputBox from "../LoginInputBox";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export default function LoginInfo(props) {
  return (
    <View style={styles.box}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={props.newAccountButtonHandler}
      >
        <Text style={styles.plainText}>Create New Account{"  "}</Text>
      </TouchableOpacity>

      <RoundShape>
        <LoginInputBox
          icon={<FontAwesome5 name="user-alt" size={24} color="#00A142" />}
          placeholder="Username"
        />
      </RoundShape>
      <RoundShape>
        <LoginInputBox
          icon={<FontAwesome5 name="lock" size={24} color="#F76819" />}
          placeholder="Password"
        />
      </RoundShape>
      <RoundShape onPress={props.loginButtonHandler}>
        <LoginButton />
      </RoundShape>
      <TouchableOpacity activeOpacity={0.9}>
        <Text style={styles.plainText}>Forgot Username / Password?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: "80%",
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
