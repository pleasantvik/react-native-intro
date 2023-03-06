import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  console.log(navigation);
  return (
    <View>
      <Text style={styles.text}>React Native</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="component"
      />
      <Button onPress={() => navigation.navigate("List")} title="List" />
      <Button
        onPress={() => navigation.navigate("Image")}
        title="Image screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "red",
  },
});

export default HomeScreen;
