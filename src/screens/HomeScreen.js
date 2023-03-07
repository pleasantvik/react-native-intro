import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
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
      <Button
        title="Counter screen"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Color screen"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        title="Square screen"
        onPress={() => navigation.navigate("Square")}
      />
      <Button title="Text screen" onPress={() => navigation.navigate("Text")} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "red",
    textAlign: "center",
  },
});

export default HomeScreen;
