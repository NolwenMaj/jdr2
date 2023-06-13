import React, { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import { View, ImageBackground, Text, TouchableOpacity } from "react-native";
import { Input } from "react-native-elements";
import { Session } from "@supabase/supabase-js";
import DropDownPicker from "react-native-dropdown-picker";
import read from "../../crud/read";
import update from "../../crud/update";
import SignOut from "./SignOut";
import styles from "../../assets/styles.js";
import mapBackground from "../../assets/mapLeft.jpg";

export default function EditProfilePage({ session }) {
  const [loading, setLoading] = useState(true);
  const [characterName, setCharacterName] = useState(null);
  const [characterClasse, setCharacterClasse] = useState(null);
  const [characterAge, setCharacterAge] = useState(0);
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

  useEffect(() => {
    if (session) {
      const readCharacter = async () => {
        try {
          let character = await read("characters", "*", { session });
          setCharacterName(character.name);
          setCharacterClasse(character.classe);
          setCharacterAge(character.age);
          setLoading(false);
        } catch (error) {
          console.error("Error reading skills:", error);
        }
      };

      readCharacter();
    }
  }, [session]);

  const updateCharacteristic = async () => {
    const updates = {
      name: characterName,
      class: characterClasse,
      age: characterAge,
    };
    await update("characters", updates, { session });
  };

  return (
    <ImageBackground
      source={mapBackground}
      resizeMode="cover"
      style={[styles.map, styles.p30]}
      imageStyle={{ opacity: 0.5 }}
    >
      <View>
        <View style={styles.px4_stretch}>
          <Input
            label={<Text style={styles.left20}>Email</Text>}
            value={session?.user?.email}
            disabled
          />
        </View>
        <View style={[styles.row]}>
          <View style={styles.input}>
            <Text style={styles.left20}>Nom</Text>
            <Input
              value={characterName || ""}
              onChangeText={(text) => setCharacterName({ text })}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.align20}>Age</Text>
            <Input
              value={characterAge.toString()}
              keyboardType="numeric"
              onChangeText={(text) => {
                const numericValue = parseInt(text, 10);
                setCharacterAge(Number.isNaN(numericValue) ? 0 : numericValue);
              }}
            />
          </View>
        </View>

        <Text style={styles.left20}>Classe</Text>
        <DropDownPicker
          style={styles.lightgray_noBorder}
          open={open}
          value={characterClasse}
          items={objClasses}
          setOpen={setOpen}
          setValue={setCharacterClasse}
          setItems={setObjClasses}
          dropDownContainerStyle={[styles.lightgray_noBorder]}
        />
        <View style={[styles.px4_stretch]}>
          <TouchableOpacity
            style={styles.btnForms}
            onPress={() => {
              setLoading(true);
              updateCharacteristic();
              setLoading(false);
            }}
          >
            <Text style={[styles.left20]}>
              {loading ? "Chargement ..." : "Valider"}
            </Text>
          </TouchableOpacity>
        </View>
        <SignOut />
      </View>
    </ImageBackground>
  );
}
