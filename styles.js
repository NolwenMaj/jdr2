import { StyleSheet } from "react-native";

export default Styles = StyleSheet.create({
  divButtons: {
    flexDirection: "row",
    bottom: 20,
    position: "absolute",
    justifyContent: "space-evenly",
  },
  dice: {
    width: 100,
    height: 100,
    borderRadius: 20,
    margin: 20,
    padding: 5,
    backgroundColor: "black",
    justifyContent: "center",
    opacity: 10,
  },
  container: {
    flex: 1,
    marginTop: 40,
    padding: 12,
  },
  px4_stretch: {
    paddingVertical: 4,
    alignSelf: "stretch",
  },
  mt20: {
    marginTop: 20,
  },
  px20: {
    paddingVertical: 20,
  },
  avatar: {
    height: 250,
    width: 250,
    borderRadius: 1000,
  },
  map_center: { flex: 1, opacity: 0.5, alignItems: "center" },
  map: { flex: 1, opacity: 0.5 },
  align30_italic: { fontSize: 30, fontStyle: "italic", textAlign: "center" },
  align20: { fontSize: 20, textAlign: "center" },
  align30: { fontSize: 30, textAlign: "center" },
  align40: { fontSize: 40, textAlign: "center" },
  align40_white: { fontSize: 40, textAlign: "center", color: "white" },
  btns: {
    width: 60,
    height: 60,
    borderRadius: 1000,
    justifyContent: "center",
  },
  bg_black: {
    backgroundColor: "black",
  },
  bg_white: {
    backgroundColor: "white",
  },
  btns_sm_grey: {
    width: 30,
    height: 30,
    borderRadius: 1000,
    backgroundColor: "grey",
    justifyContent: "center",
  },
  container: {
    marginTop: 40,
    padding: 12,
  },
  mt20: {
    marginTop: 20,
  },
  divSkills: {
    flexDirection: "row",
    alignContent: "center",
    gap: 20,
  },
});
