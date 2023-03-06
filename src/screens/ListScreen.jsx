import { FlatList, StyleSheet, Text } from "react-native";

export const ListScreen = () => {
  const friends = [
    { name: "Seun", age: 20 },
    { name: "Bola", age: 21 },
    { name: "Funmi", age: 22 },
    { name: "Joyce", age: 23 },
    { name: "Vivian", age: 24 },
    { name: "Bose", age: 25 },
    { name: "Dayo", age: 26 },
    { name: "Chris", age: 27 },
    { name: "Jomi", age: 28 },
    { name: "Ivvy", age: 29 },
  ];
  return (
    <FlatList
      //   horizontal
      //   showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => (
        <>
          <Text style={styles.textStyle}>
            {item.name} - {item.age}{" "}
          </Text>
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 20,
  },
});
