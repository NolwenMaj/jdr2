import React, { useState } from "react";
import { View, Animated, PanResponder, Text } from "react-native";
import styles from "../assets/styles";

export default SlidingBar_View = ({ initialValue, onUpdate }) => {
  const [value, setValue] = useState(initialValue);
  const pan = useState(new Animated.Value(0))[0];

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gesture) => {
      const offsetX = gesture.dx;
      pan.setValue(offsetX);
    },
    onPanResponderRelease: (_, gesture) => {
      const offsetX = gesture.dx;
      if (offsetX > 50) {
        const newValue = value + 1;
        setValue(newValue);
        onUpdate(newValue);
      } else if (offsetX < -50) {
        const newValue = value - 1;
        setValue(newValue);
        onUpdate(newValue);
      }
      Animated.spring(pan, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    },
  });

  const translateX = pan.interpolate({
    inputRange: [-200, 0, 200],
    outputRange: [-40, 0, 40],
    extrapolate: "clamp",
  });

  return (
    <View>
      <View style={styles.bgRoundBtns} {...panResponder.panHandlers}>
        <Animated.View
          style={[
            styles.roundBtns,
            {
              transform: [{ translateX }],
            },
          ]}
        >
          <Text style={[styles.align30, styles.bold]}>{value}</Text>
        </Animated.View>
      </View>
    </View>
  );
};
