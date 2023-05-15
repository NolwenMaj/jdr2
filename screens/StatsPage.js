import {
  Image,
  ImageBackground,
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";

import mapBackground from "../assets/map.png";
import BtnSkills from "../components/BtnSkills";

const Data = require("../datas");

export default function StatsPage() {
  return (
    <>
      <ImageBackground
        source={mapBackground}
        resizeMode="cover"
        style={{
          flex: 1,
          opacity: 0.5,
          alignItems: "center",
        }}
      >
        {Data.skills.map((data) => {
          return <BtnSkills skill={data} />;
        })}
      </ImageBackground>
    </>
  );
}
