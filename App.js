import React, { useState, useEffect } from "react";
import { supabase } from "./lib/supabase";
import { View, StyleSheet } from "react-native";

// Import components
import Auth from "./screens/Auth";
import Navigator from "./components/Navigator";

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

    return () => {
      listener.unsubscribe();
    };
  }, []);

  return (
    <View style={styles.container}>
      {session && session.user ? <Navigator session={session} /> : <Auth />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
