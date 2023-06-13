import React, { useState } from "react";
import { View, Text, useWindowDimensions, ImageBackground } from "react-native";
import styles from "../../assets/styles";
import mapBackground from "../../assets/mapCenter.jpg";
import ButtonDices from "./ButtonDices";

export default DicePage = () => {
  const [result, setResult] = useState("");
  const [dicePosition, setDicePosition] = useState({ x: 2.65, y: -6 });

  return (
    <>
      <ImageBackground
        source={mapBackground}
        resizeMode="cover"
        style={[styles.map_center]}
        imageStyle={{ opacity: 0.5 }}
      >
        <View
          style={[
            styles.diceBoard,
            {
              height: useWindowDimensions().height * 0.55,
              width: useWindowDimensions().width * 0.8,
              marginBottom: 20,
            },
          ]}
        >
          <View
            style={[
              styles.dice,
              { left: dicePosition.x * 30, top: dicePosition.y * -30 },
            ]}
          >
            <Text style={[styles.align40, styles.beige]}>{result}</Text>
          </View>
        </View>
        <View style={styles.row_alignCenter_gap20}>
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
        </View>
        <View style={styles.row_alignCenter_gap20}>
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
