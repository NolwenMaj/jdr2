import { TextInput, View, Text } from "react-native";
import { useState } from "react";

import BtnValidationForm from "./BtnValidationForm";

export default FormJournal = () => {
  const [posts, setPosts] = useState("");
  return (
    <View>
      <TextInput
        placeholder=""
        multiline={true}
        style={{
          height: 100,
          width: 250,
          backgroundColor: "white",
          borderRadius: 5,
          padding: 10,
        }}
        onChangeText={(text) => {
          setPosts(text);
          console.log(posts);
        }}
        value={posts}
      />
      <BtnValidationForm />
    </View>
  );
};
