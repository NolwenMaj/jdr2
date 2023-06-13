import React, { useState, useEffect } from "react";
import { supabase } from "./lib/supabase";
import { View, StyleSheet } from "react-native";
import styles from "./assets/styles";

import Auth from "./pages/Auth/index";
import Navigator from "./navigation/Navigator";

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
      }
    );

    supabase.auth.getSession().then(({ data: session }) => {
      setSession(session);
    });

    /* return () => {
      listener.unsubscribe();
    }; */
  }, []);

  return (
    <View style={styles.flex_end}>
      {session && session.user ? <Navigator session={session} /> : <Auth />}
    </View>
  );
}
