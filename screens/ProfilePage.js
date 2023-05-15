import {
  Image,
  ImageBackground,
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";

import BtnCapacities from "../components/BtnCapacities";
import mapBackground from "../assets/map.png";
import Tabatha from "../assets/Tabatha.jpg";

const Data = require("../datas.js");

export default function ProfilePage() {
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
        <View style={styles.maindivs}>
          <Image source={Tabatha} resizeMode="cover" style={styles.avatar} />
          <View style={{ position: "absolute", top: 10, right: 6 }}>
            <TouchableOpacity style={styles.buttonLifePoints}>
              <Text style={styles.align40}>{Data.profile.lifePoints}</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.name}>{Data.profile.name}</Text>
          <Text style={styles.classe}>{Data.profile.classe}</Text>
          <Text style={styles.age}>{Data.profile.age}</Text>
        </View>
        <View>
          {Data.caracteristics.map((data) => {
            return <BtnCapacities capacity={data} />;
          })}
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  maindivs: {
    paddingVertical: 20,
  },
  avatar: {
    height: 250,
    width: 250,
    borderRadius: 1000,
  },
  age: { fontSize: 20, textAlign: "center" },
  name: {
    fontSize: 40,
    textAlign: "center",
  },
  classe: {
    fontSize: 30,
    fontStyle: "italic",
    textAlign: "center",
  },
  align40: { fontSize: 40, textAlign: "center", color: "white" },
  divSkills: {
    width: 250,
    flex: 0.12,
    flexDirection: "row",
    alignContent: "center",
    gap: 20,
  },
  buttonLifePoints: {
    width: 60,
    height: 60,
    borderRadius: 1000,
    backgroundColor: "black",
    justifyContent: "center",
  },
});

{
  /* <View
style={{
  flex: 1,
  flexDirection: "row",
  columnGap: 20,
  margin: 10,
}}
> */
}
