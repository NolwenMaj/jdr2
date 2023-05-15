import { View, Text } from "react-native";

import Counter from "./Counter";

export default Coins = () => {
  return (
    <View
      style={{
        width: 80,
        height: 80,
        backgroundColor: "white",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          textAlign: "center",
        }}
      >
        Pièces
      </Text>
      <Counter />
    </View>
  );
};
