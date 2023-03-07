import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function BoxScreen() {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.textOneStyle} />
      <View style={styles.textTwoStyle} />
      <View style={styles.textThreeStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textOneStyle: {
    backgroundColor: "pink",
    height: 50,
    width: 50,
  },
  textTwoStyle: {
    backgroundColor: "green",
    height: 50,
    width: 50,
    // alignSelf: "center",
    top: 50,
  },
  textThreeStyle: {
    backgroundColor: "yellow",
    height: 50,
    width: 50,
  },
});
