import React, { useState } from "react";
import {
  ImageBackground,
  View,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import { Input } from "react-native-elements";
import styles from "../../assets/styles";
import mapBackground from "../../assets/map.jpg";
import signUpWithEmail from "./SignUp";
import signInWithEmail from "./SignIn";
import { color } from "react-native-elements/dist/helpers";

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
          placeholder=" Email"
          leftIcon={{
            type: "font-awesome",
            name: "envelope",
            color: "#736A65",
          }}
          style={{ color: "#736A65" }}
          onChangeText={(text) => setEmail(text)}
          value={email}
          color="#736A65"
          autoCapitalize={"none"}
          inputStyle={{ color: "#736A65" }}
          labelStyle={styles.align20_chestnut}
          containerStyle={"color: '#736A65'"}
        />
      </View>
      <View style={styles.px4_stretch}>
        <Input
          placeholder="Mot de passe"
          leftIcon={{ type: "font-awesome", name: "lock", color: "#736A65" }}
          inputStyle={{ color: "#736A65" }}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          autoCapitalize={"none"}
        />
      </View>
      <View style={styles.px4_stretch}>
        <TouchableOpacity
          title="Sign in"
          style={styles.btnBackground}
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
          <Text style={[styles.align20, styles.bold, styles.beige]}>
            Connexion
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.px4_stretch}>
        <TouchableOpacity
          title="Sign up"
          style={styles.btnBorder}
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
          <Text style={[styles.align20_chestnut]}>Inscription</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
