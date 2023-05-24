import {
  Image,
  ImageBackground,
  Text,
  View,
  Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

import styles from "../styles";
import SlidingBarLifePoints from "../components/SlidingBarLifePoints";
import SlidingBarCharacteristics from "../components/SlidingBarCharacteristics";

import mapBackground from "../assets/map.png";
import Tabatha from "../assets/Tabatha.jpg";

export default function ProfilePage({ session, navigation }) {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState(null);

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
        style={styles.map_center}
      >
        <View style={{ position: "absolute", top: 20, right: 20 }}>
          <AntDesign
            name="setting"
            size={60}
            color="white"
            onPress={() => {
              navigation.navigate("Account", { session: { session } });
            }}
          />
        </View>
        {character ? (
          <View key={character.id}>
            <View style={styles.px20}>
              <Image
                source={Tabatha}
                resizeMode="cover"
                style={styles.avatar}
              />
              <View style={{ position: "absolute", bottom: 110, right: 0 }}>
                <SlidingBarLifePoints
                  session={session}
                  life_points={character.life_points}
                />
              </View>
              <Text style={styles.align40}>{character.name}</Text>
              <Text style={styles.align30_italic}>{character.class}</Text>
              <Text style={styles.align20}>{character.age} ans</Text>
            </View>
            <View>
              <View style={styles.row_alignCenter_gap20}>
                <SlidingBarCharacteristics
                  session={session}
                  initialValue={character.strength}
                  characteristic="strength"
                />
                <Text style={styles.align30}>Force</Text>
              </View>
              <View style={styles.row_alignCenter_gap20}>
                <SlidingBarCharacteristics
                  session={session}
                  initialValue={character.dexterity}
                  characteristic="dexterity"
                />
                <Text style={styles.align30}>Dextérité</Text>
              </View>
              <View style={styles.row_alignCenter_gap20}>
                <SlidingBarCharacteristics
                  session={session}
                  initialValue={character.stamina}
                  characteristic="stamina"
                />
                <Text style={styles.align30}>Endurance</Text>
              </View>
              <View style={styles.row_alignCenter_gap20}>
                <SlidingBarCharacteristics
                  session={session}
                  initialValue={character.intelligence}
                  characteristic="intelligence"
                />
                <Text style={styles.align30}>Intelligence</Text>
              </View>
              <View style={styles.row_alignCenter_gap20}>
                <SlidingBarCharacteristics
                  session={session}
                  initialValue={character.charisma}
                  characteristic="charisma"
                />
                <Text style={styles.align30}>Charisme</Text>
              </View>
            </View>
          </View>
        ) : (
          <Text>Loading character...</Text>
        )}
      </ImageBackground>
    </>
  );
}
