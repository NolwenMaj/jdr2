import React from "react";
import { Text, TouchableHighlight } from "react-native";
import Sensor from "./Sensor";

export default ButtonDices = ({ maxDice, setResult, setDicePosition }) => {
  return (
    <TouchableHighlight
      style={{
        backgroundColor: "grey",
        padding: 5,
        margin: 5,
        borderRadius: 5,
        height: 50,
        width: 50,
        justifyContent: "center",
      }}
      onPress={() => Sensor(maxDice, setResult, setDicePosition)}
      underlayColor="white"
    >
      <Text style={{ textAlign: "center", color: "white" }}>
        D{maxDice + 1}
      </Text>
    </TouchableHighlight>
  );
};


