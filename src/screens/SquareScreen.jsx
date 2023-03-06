import { useReducer } from "react";
import { View, StyleSheet } from "react-native";
import { ColorAdjuster } from "../components/ColorAdjuster";

const COLOR_INCREMENT = 10;
const reducerFn = (state, action) => {
  switch (action.type) {
    case "red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
      break;
    case "green":
      return state.green + action.payload > 255 ||
        state.red + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };

      break;
    case "blue":
      return state.blue + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };

      break;

    default:
      return state;
  }
};
export const SquareScreen = () => {
  const initialState = {
    red: 0,
    blue: 0,
    green: 0,
  };
  const [state, dispatch] = useReducer(reducerFn, initialState);
  console.log(state);

  const { red, green, blue } = state;

  const increment = (type) => {
    return { type, payload: COLOR_INCREMENT };
  };
  const decrement = (type) => {
    return { type, payload: -COLOR_INCREMENT };
  };
  return (
    <View>
      <ColorAdjuster
        onIncrease={() => dispatch(increment("red"))}
        onDecrease={() => dispatch(decrement("red"))}
        color="Red"
      />
      <ColorAdjuster
        color="Green"
        onIncrease={() => dispatch(increment("green"))}
        onDecrease={() => dispatch(decrement("green"))}
      />
      <ColorAdjuster
        color="Blue"
        onIncrease={() => dispatch(increment("blue"))}
        onDecrease={() => dispatch(decrement("blue"))}
      />

      <View
        style={{
          width: 150,
          height: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
