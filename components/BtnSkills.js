import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles";

export default BtnSkills = ({ skillName, skillLevel }) => {
  return (
    <View style={styles.divSkills}>
      <TouchableOpacity style={styles.buttonSkills}>
        <Text style={styles.align20}>{skillLevel}</Text>
      </TouchableOpacity>
      <Text style={styles.align20}>{skillName}</Text>
    </View>
  );
};
