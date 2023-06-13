import { StyleSheet } from "react-native";
const darkBlue = "#029E98";
const lightBlue = "#BFFFFD";
const superLightBlue = "#CFE8E7";
const chestnut = "#736A65";
const beige = "#F4EFE8";
export default styles = StyleSheet.create({
  //colors
  superLightBlue: {
    color: superLightBlue,
  },
  beige: {
    color: beige,
  },
  chestnut: {
    color: chestnut,
  },

  // background
  map_center: {
    flex: 1,
    alignItems: "center",
    paddingTop: 30,
  },
  map: { flex: 1 },
  bg_black: {
    backgroundColor: "black",
  },
  bg_white: {
    backgroundColor: "white",
  },
  beige_noBorder: {
    backgroundColor: beige,
    borderWidth: 0,
  },

  //image
  avatar: {
    height: 250,
    width: 250,
    borderRadius: 1000,
  },

  //text
  align30_italic: {
    fontSize: 30,
    fontStyle: "italic",
    textAlign: "center",
    color: chestnut,
  },
  align20_white: { fontSize: 20, textAlign: "center", color: "white" },
  align20: { fontSize: 20, textAlign: "center", color: chestnut },
  align20_chestnut: { fontSize: 20, textAlign: "center", color: chestnut },
  left20: { fontSize: 20, textAlign: "left", color: chestnut },
  align30: { fontSize: 30, textAlign: "center", color: chestnut },
  align40: { fontSize: 40, textAlign: "center", color: chestnut },
  align40_white: { fontSize: 40, textAlign: "center", color: "white" },
  bold: { fontWeight: "500" },

  //btns
  btnBackground: {
    padding: 12,
    borderRadius: 12,
    backgroundColor: chestnut,
  },
  btnBorder: {
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: chestnut,
  },
  roundBtns: {
    width: 60,
    height: 60,
    borderRadius: 1000,
    justifyContent: "center",
    backgroundColor: superLightBlue,
  },
  bgRoundBtns: {
    height: 60,
    backgroundColor: lightBlue,
    margin: 5,
    borderRadius: 1000,
  },

  //display

  px4_stretch: {
    paddingVertical: 4,
    alignSelf: "stretch",
  },
  mt20: {
    marginTop: 20,
  },
  mt40: {
    marginTop: 40,
  },
  px20: {
    paddingVertical: 20,
  },
  row_alignCenter_gap20: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    gap: 20,
  },
  row_alignCenter_gap10: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    gap: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  p30: {
    padding: 30,
    paddingTop: 120,
  },
  input: {
    flexBasis: "auto",
    minWidth: 150,
  },
  flex_end: {
    flex: 1,
    justifyContent: "flex-end",
  },

  // dice
  dice: {
    width: 100,
    height: 100,
    borderRadius: 20,
    margin: 20,
    padding: 5,
    backgroundColor: chestnut,
    justifyContent: "center",
    opacity: 1,
  },
  diceBoard: {
    marginTop: 50,
    backgroundColor: superLightBlue,
    borderRadius: 10,
    borderWidth: 10,
    borderColor: superLightBlue,
    opacity: 0.5,
  },
  dices: {
    backgroundColor: chestnut,
    padding: 5,
    margin: 5,
    borderRadius: 5,
    height: 50,
    width: 50,
    justifyContent: "center",
  },
});
