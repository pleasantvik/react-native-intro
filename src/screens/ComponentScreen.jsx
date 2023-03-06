import React from "react";
import { Text, StyleSheet, View } from "react-native";

export const ComponentScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native</Text>
      <Text>Hi there</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});
