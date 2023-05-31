import React, { useState } from "react";
import { View, Text, useWindowDimensions, ImageBackground } from "react-native";
import styles from "../styles";
import mapBackground from "../assets/map.png";
import ButtonDices from "../components/ButtonDices";

export default RollDicePage = () => {
  const [result, setResult] = useState("");
  const [dicePosition, setDicePosition] = useState({ x: 2.65, y: -6 });

  return (
    <>
      <ImageBackground
        source={mapBackground}
        resizeMode="cover"
        style={styles.map_center}
      >
        <View
          style={[
            styles.diceBoard,
            {
              height: useWindowDimensions().height * 0.6,
              width: useWindowDimensions().width * 0.8,
            },
          ]}
        >
          <View
            style={[
              styles.dice,
              { left: dicePosition.x * 30, top: dicePosition.y * -30 },
            ]}
          >
            <Text style={styles.align40_white}>{result}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <ButtonDices
            maxDice={3}
            setResult={setResult}
            setDicePosition={setDicePosition}
          />
          <ButtonDices
            maxDice={5}
            setResult={setResult}
            setDicePosition={setDicePosition}
          />
          <ButtonDices
            maxDice={7}
            setResult={setResult}
            setDicePosition={setDicePosition}
          />
          <ButtonDices
            maxDice={9}
            setResult={setResult}
            setDicePosition={setDicePosition}
          />
          <ButtonDices
            maxDice={11}
            setResult={setResult}
            setDicePosition={setDicePosition}
          />
          <ButtonDices
            maxDice={99}
            setResult={setResult}
            setDicePosition={setDicePosition}
          />
        </View>
      </ImageBackground>
    </>
  );
};
