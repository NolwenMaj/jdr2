import { supabase } from "../../lib/supabase";
import { Alert } from "react-native";

export default function signUpWithEmail(password, email) {
  return new Promise(async (resolve, reject) => {
    try {
      const { error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (error) {
        Alert.alert(error.message);
        reject(error);
      } else {
        Alert.alert("Tu peux aller voir ta boite mail !");
        resolve();
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Il y a eu un problème lors de l'inscription.");
      reject(error);
    }
  });
}
