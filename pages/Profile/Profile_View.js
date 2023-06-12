import { Image, ImageBackground, Text, View, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import read from "../../crud/read";
import styles from "../../lib/styles.js";
import SlidingBar_Controller from "../../components/SlidingBar_Controller";
import mapBackground from "../../assets/map.png";
import Tabatha from "../../assets/Tabatha.jpg";

export default function Profile_View({ session, navigation }) {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    if (session) {
      const readCharacter = async () => {
        try {
          let characterFromBDD = await read("characters", "*", { session });
          setCharacter(characterFromBDD);
          setLoading(false);
        } catch (error) {
          console.error("Error reading skills:", error);
        }
      };

      readCharacter();
    }
  }, [session]);

  return (
    <>
      <ImageBackground
        source={mapBackground}
        resizeMode="cover"
        style={[styles.map_center]}
        imageStyle={{ opacity: 0.5 }}
      >
        <View style={{ position: "absolute", top: 20, right: 20 }}>
          <AntDesign
            name="setting"
            size={60}
            color="white"
            onPress={() => {
              navigation.navigate("Account", {
                session: { session },
              });
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
                <SlidingBar_Controller
                  session={session}
                  initialValue={character.life_points}
                  characteristic="life_points"
                  table="characters"
                />
              </View>
              <Text style={styles.align40}>{character.name}</Text>
              <Text style={styles.align30_italic}>{character.class}</Text>
              <Text style={styles.align20}>{character.age} ans</Text>
            </View>
            <View>
              <View style={styles.row_alignCenter_gap20}>
                <SlidingBar_Controller
                  session={session}
                  initialValue={character.strength}
                  characteristic="strength"
                  table="characters"
                />
                <Text style={styles.align30}>Force</Text>
              </View>
              <View style={styles.row_alignCenter_gap20}>
                <SlidingBar_Controller
                  session={session}
                  initialValue={character.dexterity}
                  characteristic="dexterity"
                  table="characters"
                />
                <Text style={styles.align30}>Dextérité</Text>
              </View>
              <View style={styles.row_alignCenter_gap20}>
                <SlidingBar_Controller
                  session={session}
                  initialValue={character.stamina}
                  characteristic="stamina"
                  table="characters"
                />
                <Text style={styles.align30}>Endurance</Text>
              </View>
              <View style={styles.row_alignCenter_gap20}>
                <SlidingBar_Controller
                  session={session}
                  initialValue={character.intelligence}
                  characteristic="intelligence"
                  table="characters"
                />
                <Text style={styles.align30}>Intelligence</Text>
              </View>
              <View style={styles.row_alignCenter_gap20}>
                <SlidingBar_Controller
                  session={session}
                  initialValue={character.charisma}
                  characteristic="charisma"
                  table="characters"
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
