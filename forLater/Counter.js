import { View, Text, TouchableOpacity } from "react-native";

export default Counter = () => {
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
        23
      </Text>
    </TouchableOpacity>
  );
};
