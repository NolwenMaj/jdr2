import { ImageBackground, Text, View, ScrollView } from "react-native";
import SlidingBar_Controller from "../../components/SlidingBar_Controller";
import styles from "../../assets/styles.js";
import mapBackground from "../../assets/mapRight.jpg";

export default Skills_View = ({ skills, session, navigation }) => {
  return (
    <ImageBackground
      source={mapBackground}
      resizeMode="cover"
      imageStyle={{ opacity: 0.5 }}
    >
      <ScrollView>
        <View style={[styles.map_center]}>
          {skills ? (
            <View key={skills.id}>
              <View style={styles.row_alignCenter_gap10}>
                <SlidingBar_Controller
                  session={session}
                  table="skills"
                  initialValue={skills.arts_and_crafts}
                  characteristic="arts_and_crafts"
                />
                <Text style={[styles.align20, styles.bold]}>
                  Artisanat/Construction
                </Text>
              </View>
              <View style={styles.row_alignCenter_gap10}>
                <SlidingBar_Controller
                  session={session}
                  table="skills"
                  initialValue={skills.ranged_combat}
                  characteristic="ranged_combat"
                />
                <Text style={[styles.align20, styles.bold]}>
                  Combat à distance
                </Text>
              </View>
              <View style={styles.row_alignCenter_gap10}>
                <SlidingBar_Controller
                  session={session}
                  table="skills"
                  initialValue={skills.close_combat}
                  characteristic="close_combat"
                />
                <Text style={[styles.align20, styles.bold]}>
                  Combat rapproché
                </Text>
              </View>
              <View style={styles.row_alignCenter_gap10}>
                <SlidingBar_Controller
                  session={session}
                  table="skills"
                  initialValue={skills.nature_knowledge}
                  characteristic="nature_knowledge"
                />
                <Text style={[styles.align20, styles.bold]}>
                  Connaissance de la nature
                </Text>
              </View>
              <View style={styles.row_alignCenter_gap10}>
                <SlidingBar_Controller
                  session={session}
                  table="skills"
                  initialValue={skills.secrets_knowledge}
                  characteristic="secrets_knowledge"
                />
                <Text style={[styles.align20, styles.bold]}>
                  Connaissance des secrets
                </Text>
              </View>
              <View style={styles.row_alignCenter_gap10}>
                <SlidingBar_Controller
                  session={session}
                  table="skills"
                  initialValue={skills.running_jumping}
                  characteristic="running_jumping"
                />
                <Text style={[styles.align20, styles.bold]}>Courir/Sauter</Text>
              </View>
              <View style={styles.row_alignCenter_gap10}>
                <SlidingBar_Controller
                  session={session}
                  table="skills"
                  initialValue={skills.discretion}
                  characteristic="discretion"
                />
                <Text style={[styles.align20, styles.bold]}>Discrétion</Text>
              </View>
              <View style={styles.row_alignCenter_gap10}>
                <SlidingBar_Controller
                  session={session}
                  table="skills"
                  initialValue={skills.dodging}
                  characteristic="dodging"
                />
                <Text style={[styles.align20, styles.bold]}>Esquiver</Text>
              </View>
              <View style={styles.row_alignCenter_gap10}>
                <SlidingBar_Controller
                  session={session}
                  table="skills"
                  initialValue={skills.intimidating}
                  characteristic="intimidating"
                />
                <Text style={[styles.align20, styles.bold]}>Intimider</Text>
              </View>
              <View style={styles.row_alignCenter_gap10}>
                <SlidingBar_Controller
                  session={session}
                  table="skills"
                  initialValue={skills.reading_writing}
                  characteristic="reading_writing"
                />
                <Text style={[styles.align20, styles.bold]}>Lire/Ecrire</Text>
              </View>
              <View style={styles.row_alignCenter_gap10}>
                <SlidingBar_Controller
                  session={session}
                  table="skills"
                  initialValue={skills.lying_convincing}
                  characteristic="lying_convincing"
                />
                <Text style={[styles.align20, styles.bold]}>
                  Mentir/Convaincre
                </Text>
              </View>
              <View style={styles.row_alignCenter_gap10}>
                <SlidingBar_Controller
                  session={session}
                  table="skills"
                  initialValue={skills.perception}
                  characteristic="perception"
                />
                <Text style={[styles.align20, styles.bold]}>Perception</Text>
              </View>
              <View style={styles.row_alignCenter_gap10}>
                <SlidingBar_Controller
                  session={session}
                  table="skills"
                  initialValue={skills.psychology}
                  characteristic="psychology"
                />
                <Text style={[styles.align20, styles.bold]}>Psychologie</Text>
              </View>
              <View style={styles.row_alignCenter_gap10}>
                <SlidingBar_Controller
                  session={session}
                  table="skills"
                  initialValue={skills.reflexes}
                  characteristic="reflexes"
                />
                <Text style={[styles.align20, styles.bold]}>Réflexes</Text>
              </View>
              <View style={styles.row_alignCenter_gap10}>
                <SlidingBar_Controller
                  session={session}
                  table="skills"
                  initialValue={skills.locks_and_traps}
                  characteristic="locks_and_traps"
                />
                <Text style={[styles.align20, styles.bold]}>
                  Serrures et pièges
                </Text>
              </View>
              <View style={styles.row_alignCenter_gap10}>
                <SlidingBar_Controller
                  session={session}
                  table="skills"
                  initialValue={skills.treating}
                  characteristic="treating"
                />
                <Text style={[styles.align20, styles.bold]}>Soigner</Text>
              </View>
              <View style={styles.row_alignCenter_gap10}>
                <SlidingBar_Controller
                  session={session}
                  table="skills"
                  initialValue={skills.stealing}
                  characteristic="stealing"
                />
                <Text style={[styles.align20, styles.bold]}>Voler</Text>
              </View>
            </View>
          ) : (
            <Text>Loading skills...</Text>
          )}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
