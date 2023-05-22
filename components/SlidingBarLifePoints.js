import React, { useState } from "react";
import { View, PanResponder, Animated, Text } from "react-native";
import styles from "../styles";
import { supabase } from "../lib/supabase";

export default SlidingBarLifePoints = ({ session, life_points }) => {
  const LIFE_POINT_INCREMENT = 1; // Number of life points to add or remove with each slide
  const [value, setValue] = useState(life_points);
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
        const newValue = value + LIFE_POINT_INCREMENT;
        setLifePoints(newValue <= 99 ? newValue : 99);
      } else if (offsetX < -50) {
        const newValue = value - LIFE_POINT_INCREMENT;
        setLifePoints(newValue >= 0 ? newValue : 0);
      }
      Animated.spring(pan, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    },
  });

  const translateX = pan.interpolate({
    inputRange: [-200, 0, 200],
    outputRange: [-40, 0, 40], // Adjust the output range based on the desired width of the sliding bar
    extrapolate: "clamp",
  });

  const updateValueInDatabase = async (newValue) => {
    try {
      const { data, error } = await supabase
        .from("characters")
        .update({ life_points: newValue })
        .eq("user_id", session.user.id);

      if (error) {
        throw error;
      }
    } catch (error) {
      console.error("Error updating value in the database:", error);
    }
  };

  const setLifePoints = (newValue) => {
    setValue(newValue);
    updateValueInDatabase(newValue);
  };

  return (
    <View>
      <View
        style={{
          height: 60,
          backgroundColor: "lightgray",
          margin: 10,
          borderRadius: 1000,
        }}
        {...panResponder.panHandlers}
      >
        <Animated.View
          style={[
            styles.btns,
            {
              transform: [{ translateX }],
            },
          ]}
        >
          <Text style={styles.align30}>{value}</Text>
        </Animated.View>
      </View>
    </View>
  );
};
