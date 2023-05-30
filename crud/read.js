import { supabase } from "../lib/supabase";
import { Alert } from "react-native";

export default function read(table, column, { session }) {
  if (!session?.user) throw new Error("No user on the session!");

  return supabase
    .from(table)
    .select(column)
    .eq("user_id", session?.user.id)
    .single()
    .then(({ data, error, status }) => {
      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        return data;
      }
    })
    .catch((error) => {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    });
}
