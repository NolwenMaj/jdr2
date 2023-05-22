import {
  Image,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

import styles from "../styles";

import mapBackground from "../assets/map.png";
import Tabatha from "../assets/Tabatha.jpg";

export default function ProfilePage({ session, navigation }) {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    if (session) getProfile();
  }, [session]);

  async function getProfile() {
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
        setCharacter(data);
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
              navigation.navigate("Account", { session: { session } });
            }}
          >
            <Text style={{ fontSize: 15, textAlign: "center" }}>compte</Text>
          </TouchableOpacity>
        </View>
        <View key={character.id}>
          <View style={styles.maindivs}>
            <Image source={Tabatha} resizeMode="cover" style={styles.avatar} />
            <View style={{ position: "absolute", bottom: 110, right: 6 }}>
              <TouchableOpacity style={styles.buttonLifePoints}>
                <Text style={styles.align40}>{character.life_points}</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.name}>{character.name}</Text>
            <Text style={styles.classe}>{character.class}</Text>
            <Text style={styles.age}>{character.age}</Text>
          </View>
          <View>
            <View style={styles.divSkills}>
              <TouchableOpacity style={styles.buttonSkills}>
                <Text style={styles.align30}>{character.strength}</Text>
              </TouchableOpacity>
              <Text style={styles.align30}>Force</Text>
            </View>
            <View style={styles.divSkills}>
              <TouchableOpacity style={styles.buttonSkills}>
                <Text style={styles.align30}>{character.dexterity}</Text>
              </TouchableOpacity>
              <Text style={styles.align30}>Dextérité</Text>
            </View>
            <View style={styles.divSkills}>
              <TouchableOpacity style={styles.buttonSkills}>
                <Text style={styles.align30}>{character.stamina}</Text>
              </TouchableOpacity>
              <Text style={styles.align30}>Endurance</Text>
            </View>
            <View style={styles.divSkills}>
              <TouchableOpacity style={styles.buttonSkills}>
                <Text style={styles.align30}>{character.intelligence}</Text>
              </TouchableOpacity>
              <Text style={styles.align30}>Intelligence</Text>
            </View>
            <View style={styles.divSkills}>
              <TouchableOpacity style={styles.buttonSkills}>
                <Text style={styles.align30}>{character.charisma}</Text>
              </TouchableOpacity>
              <Text style={styles.align30}>Charisme</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}
