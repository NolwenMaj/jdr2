import React, { useState } from "react";
import { ImageBackground, View, TouchableOpacity, Text } from "react-native";
import { Input } from "react-native-elements";
import styles from "../styles";
import mapBackground from "../assets/map.png";

import signUpWithEmail from "../components/SignUp";
import signInWithEmail from "../components/SignIn";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

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
          onPress={() => {
            setLoading(true);
            signInWithEmail(password, email)
              .then(() => {
                setLoading(false);
              })
              .catch(() => {
                setLoading(false);
              });
          }}
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
          onPress={() => {
            setLoading(true);
            signUpWithEmail(password, email)
              .then(() => {
                setLoading(false);
              })
              .catch(() => {
                setLoading(false);
              });
          }}
        >
          <Text style={[styles.align20]}>Inscription</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
