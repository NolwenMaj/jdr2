import React from "react";
import { Text, TouchableHighlight } from "react-native";
import Sensor from "./Sensor";
import styles from "../../assets/styles";

export default ButtonDices = ({ maxDice, setResult, setDicePosition }) => {
  return (
    <TouchableHighlight
      style={styles.dices}
      onPress={() => Sensor(maxDice, setResult, setDicePosition)}
      underlayColor="white"
    >
      <Text style={[styles.align20, styles.beige]}>D{maxDice + 1}</Text>
    </TouchableHighlight>
  );
};
