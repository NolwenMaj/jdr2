import { supabase } from "../../lib/supabase";
import { Alert } from "react-native";

export default function signInWithEmail(password, email) {
  return new Promise(async (resolve, reject) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        Alert.alert(error.message);
        reject(error);
      } else {
        resolve();
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Il y a eu un problème lors de la connexion.");
      reject(error);
    }
  });
}
