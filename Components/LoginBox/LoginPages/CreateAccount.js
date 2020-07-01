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
      <Text style={styles.plainText}>Choose a username and password.</Text>
      <RoundShape>
        <LoginInputBox
          icon={<FontAwesome5 name="user-alt" size={24} color="#00A142" />}
          placeholder="Create Username"
        />
      </RoundShape>
      <RoundShape>
        <LoginInputBox
          icon={<FontAwesome5 name="lock" size={24} color="#F76819" />}
          placeholder="Create Password"
        />
      </RoundShape>
      <RoundShape>
        <LoginInputBox
          icon={<FontAwesome5 name="lock" size={24} color="#F76819" />}
          placeholder="Confirm Password"
        />
      </RoundShape>
      <RoundShape onPress={props.newAccountButtonHandler}>
        <LoginButton />
      </RoundShape>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={props.preLoginButtonHandler}
      >
        <Text style={styles.plainText}>
          <Entypo name="arrow-long-left" size={14} color="black" />
          {"  "}Already have an account?
        </Text>
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
