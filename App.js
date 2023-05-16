import * as React from "react";
import { useState, useEffect } from "react";
import { supabase } from "./lib/supabase";
import { View, StyleSheet } from "react-native";
import { Session } from "@supabase/supabase-js";

// import composants
import Auth from "./components/Auth";
import Account from "./components/Account";
import Navigator from "./components/Navigator";

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <View style={styles.container}>
      {session && session.user ? <Navigator /> : <Auth />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "flex-end",
  },
});
