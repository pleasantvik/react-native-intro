import { useState } from "react";
import { View, Button, StyleSheet, FlatList } from "react-native";

export const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  const handleColor = () => {
    setColors((prev) => [...prev, randomRgb()]);
  };
  return (
    <View>
      <Button title="Add a Color" onPress={() => handleColor()} />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: randomRgb(),
        }}
      />
      <FlatList
        data={colors}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: item,
            }}
          />
        )}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red},${green},${blue})`;
};
const styles = StyleSheet.create({});
