import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { View, Alert, ImageBackground } from "react-native";
import { Button, Input } from "react-native-elements";
import { Session } from "@supabase/supabase-js";

import styles from "../styles";
import mapBackground from "../assets/map.png";

export default function SkillsUpdate({ session, skills }) {
  const [loading, setLoading] = useState(true);
  const [newSkills, setNewSkills] = useState(skills);

  async function updateSkills() {
    try {
      setLoading(true);
      if (!session?.user) throw new Error("No user on the session!");

      const updates = {
        user_id: session?.user.id,
        updated_at: new Date(),
        ...newSkills,
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
    <ImageBackground
      source={mapBackground}
      resizeMode="cover"
      style={styles.map_center}
    >
      {newSkills.map((skill, index) => (
        <View key={index}>
          <Input
            value={skill.arts_and_crafts || ""}
            keyboardType="numeric"
            label="Artisanat/Construction"
            onChangeText={(value) => {
              const updatedSkills = [...newSkills];
              updatedSkills[index].arts_and_crafts = value;
              setNewSkills(updatedSkills);
            }}
          />
          <Input
            value={skill.ranged_combat || ""}
            keyboardType="numeric"
            label="Combat à distance"
            onChangeText={(value) => {
              const updatedSkills = [...newSkills];
              updatedSkills[index].ranged_combat = value;
              setNewSkills(updatedSkills);
            }}
          />
          {/* Add other skills inputs similarly */}
        </View>
      ))}

      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Button
          title={loading ? "Loading ..." : "Update"}
          onPress={updateSkills}
          disabled={loading}
        />
      </View>
    </ImageBackground>
  );
}

//           <Input
//             value={skill.close_combat || ""}
//             keyboardType="numeric"
//             label="Combat rapproché"
//           />
//           <Input
//             value={skill.nature_knowledge || ""}
//             keyboardType="numeric"
//             label="Connaissance de la nature"
//           />
//           <Input
//             value={skill.secrets_knowledge || ""}
//             keyboardType="numeric"
//             label="Connaissance des secrets"
//           />
//           <Input
//             value={skill.running_jumping || ""}
//             keyboardType="numeric"
//             label="Courir/Sauter"
//           />
//           <Input
//             value={skill.discretion || ""}
//             keyboardType="numeric"
//             label="Discrétion"
//           />
//           <Input
//             value={skill.dodging || ""}
//             keyboardType="numeric"
//             label="Esquiver"
//           />
//           <Input
//             value={skill.intimidating || ""}
//             keyboardType="numeric"
//             label="Intimider"
//           />
//           <Input
//             value={skill.reading_writing || ""}
//             keyboardType="numeric"
//             label="Lire/Ecrire"
//           />
//           <Input
//             value={skill.lying_convincing || ""}
//             keyboardType="numeric"
//             label="Mentir/Convaincre"
//           />
//           <Input
//             value={skill.perception || ""}
//             keyboardType="numeric"
//             label="Perception"
//           />
//           <Input
//             value={skill.psychology || ""}
//             keyboardType="numeric"
//             label="Psychologie"
//           />
//           <Input
//             value={skill.reflexes || ""}
//             keyboardType="numeric"
//             label="Réflexes"
//           />
//           <Input
//             value={skill.locks_and_traps || ""}
//             keyboardType="numeric"
//             label="Serrures et pièges"
//           />
//           <Input
//             value={skill.treating || ""}
//             keyboardType="numeric"
//             label="Soigner"
//           />
//           <Input
//             value={skill.stealing || ""}
//             keyboardType="numeric"
//             label="Voler"
//           />
//         </View>
//       ))}

//       <View style={[styles.verticallySpaced, styles.mt20]}>
//         <Button
//           title={loading ? "Loading ..." : "Update"}
//           onPress={() =>
//             updateSkills({
//               newSkills,
//             })
//           }
//           disabled={loading}
//         />
//       </View>
//     </ImageBackground>
//   );
// }
