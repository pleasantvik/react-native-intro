import { View, Text, StyleSheet } from "react-native";
import { ImageDetail } from "../components/ImageDetail";

export const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSource={require("../../assets/forest.jpg")}
        score={"6"}
      />
      <ImageDetail
        title="Beach"
        imageSource={require("../../assets/beach.jpg")}
        score={"8"}
      />
      <ImageDetail
        title="Mountains"
        imageSource={require("../../assets/mountain.jpg")}
        score={"9"}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
