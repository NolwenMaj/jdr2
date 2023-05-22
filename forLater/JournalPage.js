import {
  Image,
  ImageBackground,
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

import FormJournal from "../components/FormJournal";
import mapBackground from "../assets/map.png";

export default function JournalPage() {
  return (
    <>
      <ImageBackground
        source={mapBackground}
        resizeMode="cover"
        style={{ flex: 1, width: useWindowDimensions().width, opacity: 0.5 }}
      >
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <FormJournal />
        </View>
      </ImageBackground>
    </>
  );
}
