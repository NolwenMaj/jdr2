import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { View, Alert, ImageBackground } from "react-native";
import { Button, Input } from "react-native-elements";
import { Session } from "@supabase/supabase-js";

import styles from "../styles";
import mapBackground from "../assets/map.png";

export default function SkillsUpdate({ session, skills }) {
  const [loading, setLoading] = useState(true);
  const [newSkills, setNewSkills] = useState(skills);

  async function updateSkills({ newSkills }) {
    try {
      setLoading(true);
      if (!session?.user) throw new Error("No user on the session!");

      const updates = {
        newSkills,
      };

      const { error } = await supabase.from("skills").upsert(updates);

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
      <View style={styles.verticallySpaced}>
        <Input
          label="Age"
          value={character_age || ""}
          keyboardType="numeric"
          onChangeText={(number) => setNewSkills(number)}
        />
      </View>

      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Button
          title={loading ? "Loading ..." : "Update"}
          onPress={() =>
            updateSkills({
              newSkills,
            })
          }
          disabled={loading}
        />
      </View>
    </ImageBackground>
  );
}
