import { supabase } from "../lib/supabase";
import { Alert } from "react-native";

export default function create(table, datas, { session }) {
  if (!session?.user) throw new Error("No user on the session!");

  return supabase
    .from(table)
    .insert([{ ...datas, user_id: session?.user.id }])
    .then(({ data, error, status }) => {
      if (error && status !== 406) {
        throw error;
      }
    })
    .catch((error) => {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    });
}
