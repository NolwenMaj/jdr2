import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import {
  View,
  Alert,
  ImageBackground,
  Text,
  PanResponder,
  Animated,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Button, Input } from "react-native-elements";
import { Session } from "@supabase/supabase-js";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DropDownPicker from "react-native-dropdown-picker";

import styles from "../styles";
import mapBackground from "../assets/map.png";

export default function Account({ session }) {
  const [loading, setLoading] = useState(true);
  const [character_name, setCharacterName] = useState("");
  const [character_class, setCharacterClass] = useState("");
  const [character_age, setCharacterAge] = useState();
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
  const pan = useState(new Animated.Value(0))[0];

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
        setCharacterName(data.name);
        setCharacterClass(data.class);
        setCharacterAge(data.age);
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  async function updateCharacter({
    character_name,
    character_class,
    character_age,
  }) {
    try {
      setLoading(true);
      if (!session?.user) throw new Error("No user on the session!");

      const updates = {
        name: character_name,
        class: character_class,
        age: character_age,
      };

      const { error } = await supabase
        .from("characters")
        .update(updates)
        .eq("user_id", session?.user.id);

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

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gesture) => {
      const offsetX = gesture.dx;
      pan.setValue(offsetX);
    },
    onPanResponderRelease: (_, gesture) => {
      const offsetX = gesture.dx;
      if (offsetX > 50) {
        const newAge = character_age + 1;
        setCharacterAge(newAge <= 99 ? newAge : 99);
      } else if (offsetX < -50) {
        const newAge = character_age - 1;
        setCharacterAge(newAge >= 0 ? newAge : 0);
      }
      Animated.spring(pan, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    },
  });

  const translateX = pan.interpolate({
    inputRange: [-200, 0, 200],
    outputRange: [-40, 0, 40],
    extrapolate: "clamp",
  });

  return (
    <>
      <ImageBackground
        source={mapBackground}
        resizeMode="cover"
        style={[styles.map, styles.center_p30]}
      >
        <View>
          <View style={styles.px4_stretch}>
            <Input
              label={<Text style={styles.align20}>Email</Text>}
              value={session?.user?.email}
              disabled
            />
          </View>
          <View style={[styles.row]}>
            <View style={styles.input}>
              <Text style={styles.align20}>Nom</Text>
              <Input
                value={character_name || ""}
                onChangeText={(text) => setCharacterName(text)}
              />
            </View>
            <View style={styles.flexBasis}>
              <Text style={styles.align20}>Age</Text>
              <View style={styles.row_alignCenter_gap20}>
                <View
                  style={{
                    height: 60,
                    width: 60,
                    backgroundColor: "lightgray",
                    margin: 10,
                    borderRadius: 1000,
                  }}
                  {...panResponder.panHandlers}
                >
                  <Animated.View
                    style={[
                      styles.roundBtns,
                      {
                        transform: [{ translateX }],
                      },
                    ]}
                  >
                    <Text style={styles.align30}>{character_age}</Text>
                  </Animated.View>
                </View>
              </View>
            </View>
          </View>
          <Text style={styles.align20}>Classe</Text>
          <DropDownPicker
            style={{ backgroundColor: "lightgray", borderWidth : 0}}
            open={open}
            value={character_class}
            items={objClasses}
            setOpen={setOpen}
            setValue={setCharacterClass}
            setItems={setObjClasses}
            dropDownContainerStyle={{
              backgroundColor: "lightgray",
              borderWidth : 0,
              margin :10
             
            }}
          />

          <View style={[styles.px4_stretch]}>
            <TouchableOpacity
              style={styles.btnForms}
              onPress={() =>
                updateCharacter({
                  character_name,
                  character_class,
                  character_age,
                })
              }
              disabled={loading}
            >
              <Text style={[styles.align20, styles.bold]}>
                {loading ? "Chargement ..." : "Valider"}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.px4_stretch, styles.mt40]}>
            <TouchableOpacity
              style={[styles.btnForms, styles.bg_black]}
              onPress={() => supabase.auth.signOut()}
            >
              <Text style={[styles.align20_white, styles.bold]}>
                Déconnexion
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}
