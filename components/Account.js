import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { StyleSheet, View, Alert, ImageBackground } from "react-native";
import { Button, Input } from "react-native-elements";
import { Session } from "@supabase/supabase-js";

import mapBackground from "../assets/map.png";

export default function Account({ session }) {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [character_class, setCharacterClass] = useState("");
  const [character_age, setCharacterAge] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  /* const [capacities,setCapacities]=useState ("") */

  useEffect(() => {
    if (session) getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);
      if (!session?.user) throw new Error("No user on the session!");

      const { data, error, status } = await supabase
        .from("profiles")
        .select(`username, character_class, character_age, avatar_url`)
        .eq("id", session?.user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setCharacterClass(data.character_class);
        setCharacterAge(data.character_age);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }
  async function updateProfile({
    username,
    character_class,
    character_age,
    avatar_url,
  }) {
    try {
      setLoading(true);
      if (!session?.user) throw new Error("No user on the session!");

      const updates = {
        id: session?.user.id,
        username,
        character_class,
        character_age,
        avatar_url,
        updated_at: new Date(),
      };

      const { error } = await supabase.from("profiles").upsert(updates);

      if (error) {
        throw error;
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <ImageBackground
      source={mapBackground}
      resizeMode="cover"
      style={{
        flex: 1,
        opacity: 0.5,
      }}
    >
      <View>
        <View style={[styles.verticallySpaced, styles.mt20]}>
          <Input label="Email" value={session?.user?.email} disabled />
        </View>
        <View style={styles.verticallySpaced}>
          <Input
            label="Username"
            value={username || ""}
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        <View style={styles.verticallySpaced}>
          <Input
            label="Class"
            value={character_class || ""}
            onChangeText={(text) => setCharacterClass(text)}
          />
        </View>
        <View style={styles.verticallySpaced}>
          <Input
            label="Age"
            value={character_age || ""}
            keyboardType="numeric"
            onChangeText={(number) => setCharacterAge(number)}
          />
        </View>

        <View style={[styles.verticallySpaced, styles.mt20]}>
          <Button
            title={loading ? "Loading ..." : "Update"}
            onPress={() =>
              updateProfile({
                username,
                character_class,
                character_age,
                avatar_url: avatarUrl,
              })
            }
            disabled={loading}
          />
        </View>

        <View style={styles.verticallySpaced}>
          <Button title="Sign Out" onPress={() => supabase.auth.signOut()} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: "stretch",
  },
  mt20: {
    marginTop: 20,
  },
});
