import { supabase } from "../../lib/supabase";
import styles from "../../assets/styles.js";
import { View, TouchableOpacity, Text } from "react-native";

export default SignOut = () => {
  return (
    <View style={[styles.px4_stretch, styles.mt40]}>
      <TouchableOpacity
        style={[styles.btnForms, styles.bg_black]}
        onPress={() => supabase.auth.signOut()}
      >
        <Text style={[styles.align20_white, styles.bold]}>Déconnexion</Text>
      </TouchableOpacity>
    </View>
  );
};
