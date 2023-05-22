import {
  ImageBackground,
  Text,
  View,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

import styles from "../styles";
import mapBackground from "../assets/map.png";
import BtnSkills from "../components/BtnSkills";

export default function StatsPage({ session, navigation }) {
  const [loading, setLoading] = useState(true);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    if (session) getSkills();
  }, [session]);

  async function getSkills() {
    try {
      setLoading(true);
      if (!session?.user) throw new Error("No user on the session!");

      const { data, error, status } = await supabase
        .from("skills")
        .select("*")
        .eq("user_id", session?.user.id);

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setSkills(data);
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
        style={{
          flex: 1,
          opacity: 0.5,
          alignItems: "center",
        }}
      >
        <View style={{ position: "absolute", top: 20, right: 20 }}>
          <TouchableOpacity
            style={styles.buttonOptions}
            onPress={() => {
              navigation.navigate("SkillsUpdate", { session: { session } ,skills:{skills }});
            }}
          >
            <Text style={{ fontSize: 15, textAlign: "center" }}>Update</Text>
          </TouchableOpacity>
        </View>
        <View>
          {skills.map((item) => (
            <BtnSkills
              key={item.id}
              skillLevel={item.skill_level}
              skillName={item.skill_name}
            />
          ))}
        </View>
      </ImageBackground>
    </>
  );
}
