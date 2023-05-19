import { ImageBackground, Text, View, Alert } from "react-native";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

import mapBackground from "../assets/map.png";
// import BtnSkills from "../components/BtnSkills";

export default function StatsPage({ session }) {
  const [loading, setLoading] = useState(true);
  const [skill_name, setSkillName] = useState([]);
  const [skill_level, setSkillLevel] = useState([]);
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
        .select("skill_name, skill_level")
        .eq("user_id", session?.user.id);

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setSkills(data);
        setSkillName(data.map((item) => item.skill_name));
        setSkillLevel(data.map((item) => item.skill_level));
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
        <View>
          {skills.map((item) => (
            <Text>
              {item.skill_level} {item.skill_name}
            </Text>
          ))}
        </View>
      </ImageBackground>
    </>
  );
}
