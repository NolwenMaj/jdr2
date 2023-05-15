import { View, Text } from "react-native";

import RemoveItemButton from "./RemoveItemButton";

export default Item = () => {
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
        Objet
      </Text>
      <RemoveItemButton />
    </View>
  );
};
