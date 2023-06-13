import { supabase } from "../../lib/supabase";
import styles from "../../assets/styles.js";
import { View, TouchableOpacity, Text } from "react-native";

export default SignOut = () => {
  return (
    <View style={[styles.px4_stretch, styles.mt40]}>
      <TouchableOpacity
        style={{
          padding: 12,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: "#736A65",
        }}
        onPress={() => supabase.auth.signOut()}
      >
        <Text style={[styles.align20_chestnut]}>Déconnexion</Text>
      </TouchableOpacity>
    </View>
  );
};
