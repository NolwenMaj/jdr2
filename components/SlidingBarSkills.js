import React, { useState } from "react";
import { View, PanResponder, Animated, Text } from "react-native";
import styles from "../styles";
import { supabase } from "../lib/supabase";

export default SlidingBarSkills = ({ session, initialValue, skill }) => {
  const SKILL_INCREMENT = 1;
  const [value, setValue] = useState(initialValue);
  const pan = useState(new Animated.Value(0))[0];

  const setSkill = (skill, newValue) => {
    setValue(newValue);
    updateValueInDatabase(skill, newValue);
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gesture) => {
      const offsetX = gesture.dx;
      pan.setValue(offsetX);
    },
    onPanResponderRelease: (_, gesture) => {
      const offsetX = gesture.dx;
      if (offsetX > 50) {
        const newValue = value + SKILL_INCREMENT;
        setSkill(skill, newValue <= 99 ? newValue : 99);
      } else if (offsetX < -50) {
        const newValue = value - SKILL_INCREMENT;
        setSkill(skill, newValue >= 0 ? newValue : 0);
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

  const updateValueInDatabase = async (skill, newValue) => {
    try {
      const { data, error } = await supabase
        .from("skills")
        .update({ [skill]: newValue })
        .eq("user_id", session.user.id);

      if (error) {
        throw error;
      }
    } catch (error) {
      console.error("Error updating value in the database:", error);
    }
  };

  return (
  
      <View
        style={{
          height: 30,
          backgroundColor: "lightgray",
          margin: 4,
          borderRadius: 1000,
        }}
        {...panResponder.panHandlers}
      >
        <Animated.View
          style={[
            styles.btns_sm_grey,
            {
              transform: [{ translateX }],
            },
          ]}
        >
          <Text style={styles.align20}>{value}</Text>
        </Animated.View>
      </View>

  );
};
