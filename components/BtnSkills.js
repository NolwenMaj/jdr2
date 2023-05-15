import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default BtnSkills = ({ skill }) => {
  return (
    <View style={styles.divSkills} key={skill.id}>
      <TouchableOpacity style={styles.buttonSkills}>
        <Text style={styles.align30} key={skill.id}>
          {skill.level}
        </Text>
      </TouchableOpacity>
      <Text style={styles.align30} key={skill.id}>
        {skill.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  align30: { fontSize: 30, textAlign: "center" },
  divSkills: {
    width: 250,
    flex: 0.12,
    flexDirection: "row",
    alignContent: "center",
    gap: 20,
  },
  buttonSkills: {
    width: 40,
    height: 40,
    borderRadius: 1000,
    backgroundColor: "grey",
    justifyContent: "center",
  },
});
