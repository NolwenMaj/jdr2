import { Text, View, TextInput } from "react-native";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import BtnValidationForm from "./BtnValidationForm";

export default FormStuff = () => {
  const [stuffs, setStuffs] = useState("");
  return (
    <View style={{}}>
      <TextInput
        placeholder="objet à ajouter "
        multiline={true}
        style={{
          height: 100,
          width: 150,
          backgroundColor: "white",
          borderRadius: 5,
          padding: 10,
        }}
        onChangeText={(text) => {
          setStuffs(text);
          console.log(stuffs);
        }}
        value={stuffs}
      />
      <BtnValidationForm />
    </View>
  );
};
