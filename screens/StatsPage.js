import {
  ImageBackground,
  Text,
  View,
  Alert,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

import mapBackground from "../assets/map.png";
// import BtnSkills from "../components/BtnSkills";

export default function StatsPage({ session , navigation}) {
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
              navigation.navigate("SkillsUpdate", { session: { session } });
            }}
          >
            <Text style={{ fontSize: 15, textAlign: "center" }}>Update</Text>
          </TouchableOpacity>
        </View>
        <View>
          {skills.map((item) => (
            <Text key={item.id}>
              {item.skill_level} {item.skill_name}
            </Text>
          ))}
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  buttonOptions: {
    width: 60,
    height: 60,
    borderRadius: 1000,
    backgroundColor: "white",
    justifyContent: "center",
  },
});
