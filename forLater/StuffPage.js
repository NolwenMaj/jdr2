import {
  Image,
  ImageBackground,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";

// import Components
import mapBackground from "../assets/map.png";
import FormStuff from "../components/FormStuff";
import Item from "../components/Item";
import Coins from "../components/Coins";

const RowItems = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        paddingTop: 25,
        paddingHorizontal: 25,
      }}
    >
      <Item />
      <Item />
      <Item />
    </View>
  );
};

export default function StuffPage() {
  return (
    <>
      <ScrollView>
        <ImageBackground
          source={mapBackground}
          resizeMode="cover"
          style={{
            flex: 1,
            opacity: 0.5,
          }}
        >
          <View
            style={{
              flex: 1,
              marginTop: 10,
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "space-evenly",
            }}
          >
            <FormStuff />
            <Coins />
          </View>
          <View
            style={{
              flex: 0.5,
              alignContent: "center",
              justifyContent: "center",
              paddingVertical: 25,
            }}
          >
            <RowItems />
            <RowItems />
            <RowItems />
            <RowItems />
            <RowItems />
            <RowItems />
            <RowItems />
            <RowItems />
            <RowItems />
            <RowItems />
          </View>
        </ImageBackground>
      </ScrollView>
    </>
  );
}
