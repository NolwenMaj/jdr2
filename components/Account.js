import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { View, Alert, ImageBackground, Text } from "react-native";
import { Button, Input } from "react-native-elements";
import { Session } from "@supabase/supabase-js";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import styles from "../styles";
import mapBackground from "../assets/map.png";

export default function Account({ session }) {
  const [loading, setLoading] = useState(true);
  const [character_name, setCharacterName] = useState();
  const [character_class, setCharacterClass] = useState();
  const [character_age, setCharacterAge] = useState();
  // const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    if (session) getCharacter();
  }, [session]);

  async function getCharacter() {
    try {
      setLoading(true);
      if (!session?.user) throw new Error("No user on the session!");

      const { data, error, status } = await supabase
        .from("characters")
        .select("*")
        .eq("user_id", session?.user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setCharacterName(data.name);
        setCharacterClass(data.class);
        setCharacterAge(data.age);
        /*  setAvatarUrl(data.avatar_url); */
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }
  async function updateCharacter({
    character_name,
    character_class,
    character_age,
    // avatar_url,
  }) {
    try {
      setLoading(true);
      if (!session?.user) throw new Error("No user on the session!");

      const updates = {
        name: character_name,
        class: character_class,
        age: character_age,
        // avatar_url,
      };

      const { error } = await supabase
        .from("characters")
        .update(updates)
        .eq("user_id", session?.user.id);

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
    <>
      <ImageBackground
        source={mapBackground}
        resizeMode="cover"
        style={styles.map}
      >
        <KeyboardAwareScrollView>
          <View>
            <View style={[styles.px4_stretch, styles.mt20]}>
              <Input label="Email" value={session?.user?.email} disabled />
            </View>
            <Text>Personnage :</Text>
            <View style={styles.px4_stretch}>
              <Input
                label="Nom"
                value={character_name || ""}
                onChangeText={(text) => setCharacterName(text)}
              />
            </View>
            <View style={styles.px4_stretch}>
              <Input
                label="Class"
                value={character_class || ""}
                onChangeText={(text) => setCharacterClass(text)}
              />
            </View>
            <View style={styles.px4_stretch}>
              <Input
                label="Age"
                value={character_age}
                keyboardType="numeric"
                onChangeText={(number) => setCharacterAge(number)}
              />
            </View>

            <View style={[styles.px4_stretch, styles.mt20]}>
              <Button
                title={loading ? "Loading ..." : "Update"}
                onPress={() =>
                  updateCharacter({
                    character_name,
                    character_class,
                    character_age,
                    // avatar_url: avatarUrl,
                  })
                }
                disabled={loading}
              />
            </View>

            <View style={styles.px4_stretch}>
              <Button
                title="Sign Out"
                onPress={() => supabase.auth.signOut()}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </ImageBackground>
    </>
  );
}
