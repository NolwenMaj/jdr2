import { DeviceMotion } from "expo-sensors";
import { supabase } from "../lib/supabase";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Vibration,
  useWindowDimensions,
  ImageBackground,
} from "react-native";
import React, { useState, useEffect } from "react";

import mapBackground from "../assets/map.png";

export default function RollDicePage({}) {
  const ButtonsDices = ({ maxDice }) => (
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
      onPress={() => {
        _subscribe(maxDice);
      }}
      underlayColor="white"
    >
      <Text style={{ textAlign: "center", color: "white" }}>
        D{maxDice + 1}
      </Text>
    </TouchableHighlight>
  );

  const [result, SetResult] = useState("D100");
  const [dicePosition, setDicePosition] = useState({ x: 2.65, y: -6 });

  const _subscribe = (diceMax) => {
    setDicePosition({ x: 2.65, y: -6 });
    switch (diceMax) {
      case 99:
        SetResult("D100");
        break;
      case 11:
        SetResult("D12");
        break;
      case 9:
        SetResult("D10");
        break;
      case 7:
        SetResult("D8");
        break;
      case 5:
        SetResult("D6");
        break;
      case 3:
        SetResult("D4");
        break;
    }
    DeviceMotion.addListener((deviceMotionData) => {
      const { x, y } = deviceMotionData.accelerationIncludingGravity;
      DeviceMotion.setUpdateInterval(60);
      if (x < 6 && x > -0.5 && y < 0) {
        setDicePosition({ x: x, y: y });
        if (deviceMotionData.rotation.beta < 0.3) {
          SetResult(getRandomInt(diceMax));
          Vibration.vibrate();
          _unsubscribe();
        }
      }
    });
  };

  const _unsubscribe = () => {
    DeviceMotion.removeAllListeners();
  };

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  return (
    <>
      <ImageBackground
        source={mapBackground}
        resizeMode="cover"
        style={{
          flex: 1,
          opacity: 0.5,
          alignItems: "center",
        }}
      >
        <View
          style={[
            {
              marginTop: 50,
              backgroundColor: "white",
              height: useWindowDimensions().height * 0.6,
              width: useWindowDimensions().width * 0.8,
              borderRadius: 10,
              borderWidth: 10,
              borderColor: "white",
              opacity: 0.5,
            },
          ]}
        >
          <View
            style={[
              styles.dice,
              { left: dicePosition.x * 30, top: dicePosition.y * -30 },
            ]}
          >
            {/*  <Text> x : {dicePosition.x} </Text>
            <Text> y : {dicePosition.y}</Text> */}
            <Text style={styles.text}>{result}</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.divButtons}>
        <ButtonsDices maxDice={3} />
        <ButtonsDices maxDice={5} />
        <ButtonsDices maxDice={7} />
        <ButtonsDices maxDice={9} />
        <ButtonsDices maxDice={11} />
        <ButtonsDices maxDice={99} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  divButtons: {
    flexDirection: "row",
    bottom: 20,
    position: "absolute",
    justifyContent: "space-evenly",
  },
  dice: {
    width: 100,
    height: 100,
    borderRadius: 20,
    margin: 20,
    padding: 5,
    backgroundColor: "black",
    justifyContent: "center",
    opacity: 10,
  },
  text: {
    fontSize: 40,
    textAlign: "center",
    color: "white",
  },
});
