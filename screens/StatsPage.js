import { ImageBackground, Text, View, Alert } from "react-native";

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import SlidingBarSkills from "../components/SlidingBarSkills";

import styles from "../styles";
import mapBackground from "../assets/map.png";

export default function StatsPage({ session }) {
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
        style={styles.map_center}
      >
        {skills && (
          <View key={skills.id}>
            <View style={styles.divSkills}>
              <SlidingBarSkills
                session={session}
                initialValue={skills.arts_and_crafts}
                skill="arts_and_crafts"
              />
              <Text style={styles.align20}>Artisanat/Construction</Text>
            </View>
            <View style={styles.divSkills}>
              <SlidingBarSkills
                session={session}
                initialValue={skills.ranged_combat}
                skill="ranged_combat"
              />
              <Text style={styles.align20}>Combat à distance</Text>
            </View>
            <View style={styles.divSkills}>
              <SlidingBarSkills
                session={session}
                initialValue={skills.close_combat}
                skill="close_combat"
              />
              <Text style={styles.align20}>Combat rapproché</Text>
            </View>
            <View style={styles.divSkills}>
              <SlidingBarSkills
                session={session}
                initialValue={skills.nature_knowledge}
                skill="nature_knowledge"
              />
              <Text style={styles.align20}>Connaissance de la nature</Text>
            </View>
            <View style={styles.divSkills}>
              <SlidingBarSkills
                session={session}
                initialValue={skills.secrets_knowledge}
                skill="secrets_knowledge"
              />
              <Text style={styles.align20}>Connaissance des secrets</Text>
            </View>
            <View style={styles.divSkills}>
              <SlidingBarSkills
                session={session}
                initialValue={skills.running_jumping}
                skill="running_jumping"
              />
              <Text style={styles.align20}>Courir/Sauter</Text>
            </View>
            <View style={styles.divSkills}>
              <SlidingBarSkills
                session={session}
                initialValue={skills.discretion}
                skill="discretion"
              />
              <Text style={styles.align20}>Discrétion</Text>
            </View>
            <View style={styles.divSkills}>
              <SlidingBarSkills
                session={session}
                initialValue={skills.dodging}
                skill="dodgingr"
              />
              <Text style={styles.align20}>Esquiver</Text>
            </View>
            <View style={styles.divSkills}>
              <SlidingBarSkills
                session={session}
                initialValue={skills.intimidating}
                skill="intimidating"
              />
              <Text style={styles.align20}>Intimider</Text>
            </View>
            <View style={styles.divSkills}>
              <SlidingBarSkills
                session={session}
                initialValue={skills.reading_writing}
                skill="reading_writing"
              />
              <Text style={styles.align20}>Lire/Ecrire</Text>
            </View>
            <View style={styles.divSkills}>
              <SlidingBarSkills
                session={session}
                initialValue={skills.lying_convincing}
                skill="lying_convincing"
              />
              <Text style={styles.align20}>Mentir/Convaincre</Text>
            </View>
            <View style={styles.divSkills}>
              <SlidingBarSkills
                session={session}
                initialValue={skills.perception}
                skill="perception"
              />
              <Text style={styles.align20}>Perception</Text>
            </View>
            <View style={styles.divSkills}>
              <SlidingBarSkills
                session={session}
                initialValue={skills.psychology}
                skill="psychology"
              />
              <Text style={styles.align20}>Psychologie</Text>
            </View>
            <View style={styles.divSkills}>
              <SlidingBarSkills
                session={session}
                initialValue={skills.reflexes}
                skill="reflexes"
              />
              <Text style={styles.align20}>Réflexes</Text>
            </View>
            <View style={styles.divSkills}>
              <SlidingBarSkills
                session={session}
                initialValue={skills.locks_and_traps}
                skill="locks_and_traps"
              />
              <Text style={styles.align20}>Serrures et pièges</Text>
            </View>
            <View style={styles.divSkills}>
              <SlidingBarSkills
                session={session}
                initialValue={skills.treating}
                skill="treating"
              />
              <Text style={styles.align20}>Soigner</Text>
            </View>
            <View style={styles.divSkills}>
              <SlidingBarSkills
                session={session}
                initialValue={skills.stealing}
                skill="stealing"
              />
              <Text style={styles.align20}>Voler</Text>
            </View>
          </View>
        )}
      </ImageBackground>
    </>
  );
}
