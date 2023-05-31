import { ImageBackground, Text, View, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import SlidingBarController from "../components/SlidingBarController";
import styles from "../styles";
import mapBackground from "../assets/map.png";
import read from "../crud/read";

export default function StatsPage({ session }) {
  const [loading, setLoading] = useState(true);
  const [skills, setSkills] = useState(null);

  useEffect(() => {
    if (session) {
      const readSkills = async () => {
        try {
          let skillsFromBDD = await read("skills", "*", { session });
          setSkills(skillsFromBDD);
          setLoading(false);
        } catch (error) {
          console.error("Error reading skills:", error);
        }
      };

      readSkills();
    }
  }, [session]);

  return (
    <>
      <ImageBackground
        source={mapBackground}
        resizeMode="cover"
        style={styles.map}
      >
        <ScrollView>
          <View style={{ margin: 20 }}>
            {skills ? (
              <View key={skills.id}>
                <View style={styles.row_alignCenter_gap10}>
                  <SlidingBarController
                    session={session}
                    table="skills"
                    initialValue={skills.arts_and_crafts}
                    characteristic="arts_and_crafts"
                  />
                  <Text style={styles.align20}>Artisanat/Construction</Text>
                </View>
                <View style={styles.row_alignCenter_gap10}>
                  <SlidingBarController
                    session={session}
                    table="skills"
                    initialValue={skills.ranged_combat}
                    characteristic="ranged_combat"
                  />
                  <Text style={styles.align20}>Combat à distance</Text>
                </View>
                <View style={styles.row_alignCenter_gap10}>
                  <SlidingBarController
                    session={session}
                    table="skills"
                    initialValue={skills.close_combat}
                    characteristic="close_combat"
                  />
                  <Text style={styles.align20}>Combat rapproché</Text>
                </View>
                <View style={styles.row_alignCenter_gap10}>
                  <SlidingBarController
                    session={session}
                    table="skills"
                    initialValue={skills.nature_knowledge}
                    characteristic="nature_knowledge"
                  />
                  <Text style={styles.align20}>Connaissance de la nature</Text>
                </View>
                <View style={styles.row_alignCenter_gap10}>
                  <SlidingBarController
                    session={session}
                    table="skills"
                    initialValue={skills.secrets_knowledge}
                    characteristic="secrets_knowledge"
                  />
                  <Text style={styles.align20}>Connaissance des secrets</Text>
                </View>
                <View style={styles.row_alignCenter_gap10}>
                  <SlidingBarController
                    session={session}
                    table="skills"
                    initialValue={skills.running_jumping}
                    characteristic="running_jumping"
                  />
                  <Text style={styles.align20}>Courir/Sauter</Text>
                </View>
                <View style={styles.row_alignCenter_gap10}>
                  <SlidingBarController
                    session={session}
                    table="skills"
                    initialValue={skills.discretion}
                    characteristic="discretion"
                  />
                  <Text style={styles.align20}>Discrétion</Text>
                </View>
                <View style={styles.row_alignCenter_gap10}>
                  <SlidingBarController
                    session={session}
                    table="skills"
                    initialValue={skills.dodging}
                    characteristic="dodging"
                  />
                  <Text style={styles.align20}>Esquiver</Text>
                </View>
                <View style={styles.row_alignCenter_gap10}>
                  <SlidingBarController
                    session={session}
                    table="skills"
                    initialValue={skills.intimidating}
                    characteristic="intimidating"
                  />
                  <Text style={styles.align20}>Intimider</Text>
                </View>
                <View style={styles.row_alignCenter_gap10}>
                  <SlidingBarController
                    session={session}
                    table="skills"
                    initialValue={skills.reading_writing}
                    characteristic="reading_writing"
                  />
                  <Text style={styles.align20}>Lire/Ecrire</Text>
                </View>
                <View style={styles.row_alignCenter_gap10}>
                  <SlidingBarController
                    session={session}
                    table="skills"
                    initialValue={skills.lying_convincing}
                    characteristic="lying_convincing"
                  />
                  <Text style={styles.align20}>Mentir/Convaincre</Text>
                </View>
                <View style={styles.row_alignCenter_gap10}>
                  <SlidingBarController
                    session={session}
                    table="skills"
                    initialValue={skills.perception}
                    characteristic="perception"
                  />
                  <Text style={styles.align20}>Perception</Text>
                </View>
                <View style={styles.row_alignCenter_gap10}>
                  <SlidingBarController
                    session={session}
                    table="skills"
                    initialValue={skills.psychology}
                    characteristic="psychology"
                  />
                  <Text style={styles.align20}>Psychologie</Text>
                </View>
                <View style={styles.row_alignCenter_gap10}>
                  <SlidingBarController
                    session={session}
                    table="skills"
                    initialValue={skills.reflexes}
                    characteristic="reflexes"
                  />
                  <Text style={styles.align20}>Réflexes</Text>
                </View>
                <View style={styles.row_alignCenter_gap10}>
                  <SlidingBarController
                    session={session}
                    table="skills"
                    initialValue={skills.locks_and_traps}
                    characteristic="locks_and_traps"
                  />
                  <Text style={styles.align20}>Serrures et pièges</Text>
                </View>
                <View style={styles.row_alignCenter_gap10}>
                  <SlidingBarController
                    session={session}
                    table="skills"
                    initialValue={skills.treating}
                    characteristic="treating"
                  />
                  <Text style={styles.align20}>Soigner</Text>
                </View>
                <View style={styles.row_alignCenter_gap10}>
                  <SlidingBarController
                    session={session}
                    table="skills"
                    initialValue={skills.stealing}
                    characteristic="stealing"
                  />
                  <Text style={styles.align20}>Voler</Text>
                </View>
              </View>
            ) : (
              <Text>Loading skills...</Text>
            )}
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
}
