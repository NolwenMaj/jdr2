import React, { useState } from "react";
import {
  Alert,
  ImageBackground,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { supabase } from "../lib/supabase";
import { Input } from "react-native-elements";

import styles from "../styles";
import mapBackground from "../assets/map.png";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) Alert.alert(error.message);
    } catch (error) {
      console.error(error);
      Alert.alert("An error occurred while signing in.");
    }
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (error) Alert.alert(error.message);
    } catch (error) {
      console.error(error);
      Alert.alert("An error occurred while signing up.");
    }
    setLoading(false);
  }

  return (
    <ImageBackground
      source={mapBackground}
      resizeMode="cover"
      style={[styles.map, styles.p30]}
    >
      <View style={[styles.px4_stretch, styles.mt20]}>
        <Input
          label={<Text style={styles.align20}>Email</Text>}
          leftIcon={{ type: "font-awesome", name: "envelope" }}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={"none"}
          labelStyle=""
        />
      </View>
      <View style={styles.px4_stretch}>
        <Input
          label={<Text style={styles.align20}>Mot de passe</Text>}
          leftIcon={{ type: "font-awesome", name: "lock" }}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize={"none"}
        />
      </View>
      <View style={styles.px4_stretch}>
        <TouchableOpacity
          title="Sign in"
          style={styles.btnForms}
          disabled={loading}
          onPress={() => signInWithEmail()}
        >
          <Text style={[styles.align20, styles.bold]}>Connexion</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.px4_stretch}>
        <TouchableOpacity
          title="Sign up"
          style={{
            padding: 12,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "gray",
          }}
          disabled={loading}
          onPress={() => signUpWithEmail()}
        >
          <Text style={[styles.align20]}>Inscription</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
