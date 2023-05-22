import { View, Text, TouchableOpacity } from "react-native";

export default RemoveItemButton = () => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        borderRadius: 1000,
        backgroundColor: "grey",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
        }}
      >
        x
      </Text>
    </TouchableOpacity>
  );
};
