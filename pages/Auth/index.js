import React, { useState } from "react";
import { ImageBackground, View, TouchableOpacity, Text } from "react-native";
import { Input } from "react-native-elements";
import styles from "../../assets/styles";
import mapBackground from "../../assets/map.jpg";
import signUpWithEmail from "./SignUp";
import signInWithEmail from "./SignIn";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <ImageBackground
      source={mapBackground}
      resizeMode="cover"
      style={[styles.map_center, styles.p30]}
      imageStyle={{ opacity: 0.5 }}
    >
      <View style={[styles.px4_stretch, styles.mt20]}>
        <Input
          label={<Text style={styles.align20}>Email</Text>}
          leftIcon={{ type: "font-awesome", name: "envelope" }}
          onChangeText={(text) => setEmail(text)}
          value={email}
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
