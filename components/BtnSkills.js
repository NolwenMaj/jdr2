import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles";

export default BtnSkills = ({ skillName, skillLevel }) => {
  return (
    <View style={styles.divSkills}>
      <TouchableOpacity
        style={styles.btns_sm_grey}
        // onPress={(value) => {
        //   const updatedSkills = [...skills];
        //   updatedSkills[index].skillName = value + 1;
        //   setSkills(updatedSkills);
        // }}
      >
        <Text style={styles.align20}>{skillLevel}</Text>
      </TouchableOpacity>
      <Text style={styles.align20}>{skillName}</Text>
    </View>
  );
};
