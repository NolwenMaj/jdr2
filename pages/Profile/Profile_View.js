import { Image, ImageBackground, Text, View, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import read from "../../crud/read";
import styles from "../../assets/styles.js";
import SlidingBar_Controller from "../../components/SlidingBar_Controller";
import mapBackground from "../../assets/mapLeft.jpg";
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
    <ImageBackground
      source={mapBackground}
      resizeMode="cover"
      imageStyle={{ opacity: 0.5 }}
    >
      <ScrollView>
        <View style={[styles.map_center, { marginTop: 10 }]}>
          <View style={{ position: "absolute", right: 30, top: 40 }}>
            <AntDesign
              name="setting"
              size={40}
              color="#736A65"
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
                <View style={{ position: "absolute", bottom: 80, right: 0 }}>
                  <SlidingBar_Controller
                    session={session}
                    initialValue={character.life_points}
                    characteristic="life_points"
                    table="characters"
                  />
                </View>
                <Text style={styles.align40}>{character.name}</Text>
                <Text style={styles.align20}>
                  {character.class}, {character.age} ans
                </Text>
              </View>
              <View>
                <View style={styles.row_alignCenter_gap20}>
                  <SlidingBar_Controller
                    session={session}
                    initialValue={character.strength}
                    characteristic="strength"
                    table="characters"
                  />
                  <Text style={[styles.align30, styles.bold]}>Force</Text>
                </View>
                <View style={styles.row_alignCenter_gap20}>
                  <SlidingBar_Controller
                    session={session}
                    initialValue={character.dexterity}
                    characteristic="dexterity"
                    table="characters"
                  />
                  <Text style={[styles.align30, styles.bold]}>Dextérité</Text>
                </View>
                <View style={styles.row_alignCenter_gap20}>
                  <SlidingBar_Controller
                    session={session}
                    initialValue={character.stamina}
                    characteristic="stamina"
                    table="characters"
                  />
                  <Text style={[styles.align30, styles.bold]}>Endurance</Text>
                </View>
                <View style={styles.row_alignCenter_gap20}>
                  <SlidingBar_Controller
                    session={session}
                    initialValue={character.intelligence}
                    characteristic="intelligence"
                    table="characters"
                  />
                  <Text style={[styles.align30, styles.bold]}>
                    Intelligence
                  </Text>
                </View>
                <View style={styles.row_alignCenter_gap20}>
                  <SlidingBar_Controller
                    session={session}
                    initialValue={character.charisma}
                    characteristic="charisma"
                    table="characters"
                  />
                  <Text style={[styles.align30, styles.bold]}>Charisme</Text>
                </View>
              </View>
            </View>
          ) : (
            <Text>Loading character...</Text>
          )}
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
