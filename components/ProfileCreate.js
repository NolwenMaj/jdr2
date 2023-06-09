import React, { useState } from "react";
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";
import create from "../crud/create";
import styles from "../assets/styles";
import mapBackground from "../assets/map.png";
import generateSkills from "../lib/generateSkills";

export default ProfileCreate = ({ session, handleCharacterCreated }) => {
  const [loading, setLoading] = useState(false);
  const [characterName, setCharacterName] = useState("");
  const [characterClasse, setCharacterClasse] = useState("");
  const [characterAge, setCharacterAge] = useState(0);
  const [characterStrength, setCharacterStrength] = useState(0);
  const [characterIntelligence, setCharacterIntelligence] = useState(0);
  const [characterStamina, setCharacterStamina] = useState(0);
  const [characterDexterity, setCharacterDexterity] = useState(0);
  const [characterCharisma, setCharacterCharisma] = useState(0);
  const [open, setOpen] = useState(false);
  const classes = [
    "Alchimiste",
    "Assassin.e",
    "Barde",
    "Chamane",
    "Chevalier/ Chevaleresse",
    "Druide.sse",
    "Eclaireur/ Eclaireuse",
    "Etudiant.e",
    "Faussaire",
    "Guerrier/ Guerrière",
    "Inquisiteur/ Inquisitrice",
    "Joueur/ Joueuse",
    "Magicien.ne",
    "Marchand.e",
    "Médecin",
    "Nécromancien.ne",
    "Pirate",
    "Sorcier/ Sorcière",
    "Voleur/ Voleuse",
  ];

  const [objClasses, setObjClasses] = useState(
    classes.map((classe) => ({
      label: classe,
      value: classe,
    }))
  );
  const navigation = useNavigation();

  const createCharacteristic = async () => {
    const characteristics = {
      name: characterName,
      class: characterClasse,
      age: characterAge,
      life_points: characterStamina,
      strength: characterStrength,
      charisma: characterCharisma,
      stamina: characterStamina,
      intelligence: characterIntelligence,
      dexterity: characterDexterity,
    };
    await create("characters", characteristics, { session });
    generateSkills(characteristics, { session });
    handleCharacterCreated();
  };

  return (
    <ImageBackground
      source={mapBackground}
      resizeMode="cover"
      style={[styles.map_center]}
      imageStyle={{ opacity: 0.5 }}
    >
      <KeyboardAvoidingView style={styles.keyboardContainer} behavior="padding">
        <View style={{ width: 300, paddingTop: 20 }}>
          <Text style={styles.align30}>Création du personnage </Text>
          <View style={{ width: 300, paddingTop: 20 }}>
            <Input
              color="#736A65"
              value={characterName || ""}
              placeholder="Prénom et Nom "
              onChangeText={(text) => setCharacterName(text)}
            />
          </View>
          <DropDownPicker
            style={styles.beige_noBorder}
            open={open}
            value={characterClasse}
            items={objClasses}
            setOpen={setOpen}
            setValue={setCharacterClasse}
            setItems={setObjClasses}
            dropDownContainerStyle={[styles.beige_noBorder]}
            textStyle={styles.chestnut}
            placeholder="Classe du personnage"
          />
          <View style={[styles.row, { paddingTop: 20 }]}>
            <View style={{ minWidth: 100 }}>
              <Input
                color="#736A65"
                placeholder="Age"
                keyboardType="numeric"
                onChangeText={(text) => {
                  const numericValue = parseInt(text, 10);
                  setCharacterAge(
                    Number.isNaN(numericValue) ? 0 : numericValue
                  );
                }}
              />
            </View>
            <View style={{ minWidth: 100 }}>
              <Input
                color="#736A65"
                placeholder="Force"
                keyboardType="numeric"
                onChangeText={(text) => {
                  const numericValue = parseInt(text, 10);
                  setCharacterStrength(
                    Number.isNaN(numericValue) ? 0 : numericValue
                  );
                }}
              />
            </View>
            <View style={{ minWidth: 100 }}>
              <Input
                color="#736A65"
                placeholder="Dextérité"
                keyboardType="numeric"
                onChangeText={(text) => {
                  const numericValue = parseInt(text, 10);
                  setCharacterDexterity(
                    Number.isNaN(numericValue) ? 0 : numericValue
                  );
                }}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={{ minWidth: 100 }}>
              <Input
                color="#736A65"
                placeholder="Endurance"
                keyboardType="numeric"
                onChangeText={(text) => {
                  const numericValue = parseInt(text, 10);
                  setCharacterStamina(
                    Number.isNaN(numericValue) ? 0 : numericValue
                  );
                }}
              />
            </View>
            <View style={{ minWidth: 100 }}>
              <Input
                color="#736A65"
                placeholder="Intelligence"
                keyboardType="numeric"
                onChangeText={(text) => {
                  const numericValue = parseInt(text, 10);
                  setCharacterIntelligence(
                    Number.isNaN(numericValue) ? 0 : numericValue
                  );
                }}
              />
            </View>
            <View style={{ minWidth: 100 }}>
              <Input
                color="#736A65"
                placeholder="Charisme"
                keyboardType="numeric"
                onChangeText={(text) => {
                  const numericValue = parseInt(text, 10);
                  setCharacterCharisma(
                    Number.isNaN(numericValue) ? 0 : numericValue
                  );
                }}
              />
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={styles.btnBackground}
              onPress={() => {
                setLoading(true);
                createCharacteristic()
                  .then(() => {
                    setLoading(false);
                  })
                  .catch(() => {
                    setLoading(false);
                  });
              }}
            >
              <Text style={[styles.align20, styles.bold, styles.beige]}>
                {loading ? "Chargement ..." : "Valider"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};
