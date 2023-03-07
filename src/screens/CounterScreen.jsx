import React, { useReducer } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const reducerFn = (state, action) => {
  switch (action.type) {
    case "increase":
      return { ...state, count: state.count + 1 };

      break;
    case "decrease":
      return { ...state, count: state.count - 1 };

      break;

    default:
      break;
  }
};
export const CounterScreen = () => {
  // const [counter, setCounter] = useState(0);
  const initialState = { count: 0 };

  const [state, dispatch] = useReducer(reducerFn, initialState);

  const { count } = state;

  const increment = () => {
    dispatch({ type: "increase" });
    // setCounter((prev) => prev + 1);
  };
  const decrement = () => {
    // if (counter === 0) return;
    dispatch({ type: "decrease" });

    // setCounter((prev) => prev - 1);
  };
  return (
    <View>
      <Button title="Increment" onPress={() => increment()} />
      <Button title="Decrement" onPress={decrement} />
      <Text
        style={{
          textAlign: "center",
        }}
      >
        Current count: {count}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});
