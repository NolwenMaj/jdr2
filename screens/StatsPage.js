import {
  ImageBackground,
  Text,
  View,
  Alert,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
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

  async function updateSkills({ skills }) {
    try {
      setLoading(true);
      if (!session?.user) throw new Error("No user on the session!");

      const updates = {
        user_id: session?.user.id,
        updated_at: new Date(),
        skills,
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
    <>
      <ImageBackground
        source={mapBackground}
        resizeMode="cover"
        style={styles.map_center}
      >
        <View style={{ position: "absolute", top: 20, right: 20 }}>
          <AntDesign
            name="setting"
            size={60}
            color="white"
            onPress={() => {
              navigation.navigate("SkillsUpdate", {
                session: { session },
                skills: { skills },
              });
            }}
          />
        </View>
        <View >
          {skills.map((skill) => (
            <View>
              <BtnSkills
                skillLevel={skill.arts_and_crafts}
                skillName="Artisanat/Construction"
              />
              <BtnSkills
                skillLevel={skill.ranged_combat}
                skillName="Combat à distance"
              />
              <BtnSkills
                skillLevel={skill.close_combat}
                skillName="Combat rapproché"
              />
              <BtnSkills
                skillLevel={skill.nature_knowledge}
                skillName="Connaissance de la nature"
              />
              <BtnSkills
                skillLevel={skill.secrets_knowledge}
                skillName="Connaissance des secrets"
              />
              <BtnSkills
                skillLevel={skill.running_jumping}
                skillName="Courir/Sauter"
              />
              <BtnSkills skillLevel={skill.discretion} skillName="Discrétion" />
              <BtnSkills skillLevel={skill.dodging} skillName="Esquiver" />
              <BtnSkills
                skillLevel={skill.intimidating}
                skillName="Intimider"
              />
              <BtnSkills
                skillLevel={skill.reading_writing}
                skillName="Lire/Ecrire"
              />
              <BtnSkills
                skillLevel={skill.lying_convincing}
                skillName="Mentir/Convaincre"
              />
              <BtnSkills skillLevel={skill.perception} skillName="Perception" />
              <BtnSkills
                skillLevel={skill.psychology}
                skillName="Psychologie"
              />
              <BtnSkills skillLevel={skill.reflexes} skillName="Réflexes" />
              <BtnSkills
                skillLevel={skill.locks_and_traps}
                skillName="Serrures et pièges"
              />
              <BtnSkills skillLevel={skill.treating} skillName="Soigner" />
              <BtnSkills skillLevel={skill.stealing} skillName="Voler" />
            </View>
          ))}
        </View>
        {/* {skills.map((item) => (
            <BtnSkills
              key={item.id}
              skillLevel={item.skill_level}
              skillName={item.skill_name}
          />*/}
      </ImageBackground>
    </>
  );
}
