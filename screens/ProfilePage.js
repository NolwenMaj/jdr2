import {
  Image,
  ImageBackground,
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";

import mapBackground from "../assets/map.png";
import Tabatha from "../assets/Tabatha.jpg";

const Data = require("../datas.js");

export default function ProfilePage({
  session,
  navigation,
  username,
  character_age,
  character_class,
  character_force,
  character_intelligence,
  character_endurance,
  character_charisme,
  character_dexterite,
}) {
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
        <View style={styles.maindivs}>
          <Image source={Tabatha} resizeMode="cover" style={styles.avatar} />
          <View style={{ position: "absolute", bottom: 110, right: 6 }}>
            <TouchableOpacity style={styles.buttonLifePoints}>
              <Text style={styles.align40}>{Data.profile.lifePoints}</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.name}>{username}</Text>
          <Text style={styles.classe}>{character_class}</Text>
          <Text style={styles.age}>{character_age}</Text>
        </View>
        <View>
          <View style={styles.divSkills}>
            <TouchableOpacity style={styles.buttonSkills}>
              <Text style={styles.align30}>{character_force}</Text>
            </TouchableOpacity>
            <Text style={styles.align30}>Force</Text>
          </View>
          <View style={styles.divSkills}>
            <TouchableOpacity style={styles.buttonSkills}>
              <Text style={styles.align30}>{character_dexterite}</Text>
            </TouchableOpacity>
            <Text style={styles.align30}>Dextérité</Text>
          </View>
          <View style={styles.divSkills}>
            <TouchableOpacity style={styles.buttonSkills}>
              <Text style={styles.align30}>{character_endurance}</Text>
            </TouchableOpacity>
            <Text style={styles.align30}>Endurance</Text>
          </View>
          <View style={styles.divSkills}>
            <TouchableOpacity style={styles.buttonSkills}>
              <Text style={styles.align30}>{character_intelligence}</Text>
            </TouchableOpacity>
            <Text style={styles.align30}>Intelligence</Text>
          </View>
          <View style={styles.divSkills}>
            <TouchableOpacity style={styles.buttonSkills}>
              <Text style={styles.align30}>{character_charisme}</Text>
            </TouchableOpacity>
            <Text style={styles.align30}>Charisme</Text>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  maindivs: {
    paddingVertical: 20,
  },
  avatar: {
    height: 250,
    width: 250,
    borderRadius: 1000,
  },
  age: { fontSize: 20, textAlign: "center" },
  name: {
    fontSize: 40,
    textAlign: "center",
  },
  classe: {
    fontSize: 30,
    fontStyle: "italic",
    textAlign: "center",
  },
  align40: { fontSize: 40, textAlign: "center", color: "white" },
  divSkills: {
    width: 250,
    flex: 0.12,
    flexDirection: "row",
    alignContent: "center",
    gap: 20,
  },
  buttonLifePoints: {
    width: 60,
    height: 60,
    borderRadius: 1000,
    backgroundColor: "black",
    justifyContent: "center",
  },
  buttonOptions: {
    width: 60,
    height: 60,
    borderRadius: 1000,
    backgroundColor: "white",
    justifyContent: "center",
  },
  align30: { fontSize: 30, textAlign: "center" },
  divSkills: {
    width: 250,
    flex: 0.12,
    flexDirection: "row",
    gap: 20,
  },
  buttonSkills: {
    width: 40,
    height: 40,
    borderRadius: 1000,
    backgroundColor: "grey",
    justifyContent: "center",
  },
});
