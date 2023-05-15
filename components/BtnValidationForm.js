import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default BtnValidationForm = () => {
  return (
    <TouchableOpacity style={styles.buttonSkills}>
      <Text style={styles.align20}>ok</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  align20: { fontSize: 20, textAlign: "center" },
  buttonSkills: {
    width: 40,
    height: 40,
    borderRadius: 1000,
    backgroundColor: "grey",
    justifyContent: "center",
  },
});
