import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={styles.home}>
      <Text>HOME PAGE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: "blue",
    width: 500,
    height: 500,
  },
});
