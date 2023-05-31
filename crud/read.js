import { supabase } from "../lib/supabase";
import { Alert } from "react-native";

export default async function read(table, column, { session }) {
  if (!session?.user) throw new Error("No user on the session!");

  try {
    const { data, error, status } = await supabase
      .from(table)
      .select(column)
      .eq("user_id", session?.user.id)
      .single();

    if (error && status !== 406) {
      throw error;
    }

    if (data) {
      return data;
    }
  } catch (error) {
    if (error instanceof Error) {
      Alert.alert(error.message);
      throw error; // Rethrow the error to propagate it to the caller
    }
  }
}
