import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
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

  mt40_p12: {
    marginTop: 40,
    padding: 12,
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
  center_p30: {
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  test: {
    borderWidth: 0,
  },

  p30: {
    padding: 30,
    paddingTop: 120,
  },

  bold: {
    fontWeight: "600",
  },

  // VALIDEES

  //bg
  map_center: { flex: 1, alignItems: "center" },
  map: { flex: 1 },
  bg_black: {
    backgroundColor: "black",
  },
  bg_white: {
    backgroundColor: "white",
  },

  //text
  align30_italic: { fontSize: 30, fontStyle: "italic", textAlign: "center" },
  align20_white: { fontSize: 20, textAlign: "center", color: "white" },
  align20: { fontSize: 20, textAlign: "center" },
  left20: { fontSize: 20, textAlign: "left" },
  align30: { fontSize: 30, textAlign: "center" },
  align40: { fontSize: 40, textAlign: "center" },
  align40_white: { fontSize: 40, textAlign: "center", color: "white" },

  //btns
  btnForms: {
    padding: 12,
    borderRadius: 12,
    backgroundColor: "grey",
  },
  roundBtns: {
    width: 60,
    height: 60,
    borderRadius: 1000,
    justifyContent: "center",
    backgroundColor: "grey",
  },

  bgRoundBtns: {
    height: 60,
    backgroundColor: "lightgray",
    margin: 5,
    borderRadius: 1000,
  },
  btns_sm_grey: {
    width: 30,
    height: 30,
    borderRadius: 1000,
    backgroundColor: "grey",
    justifyContent: "center",
  },

  //margin /padding
  mt10: {
    marginTop: 10,
  },
  mt40: {
    marginTop: 40,
  },

  // specific
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    flexBasis: "auto",
    minWidth: 200,
  },
  flexBasis: {
    flexBasis: 80,
  },
  lightgray_noBorder: {
    backgroundColor: "lightgray",
    borderWidth: 0,
  },
  diceBoard: {
    marginTop: 50,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 10,
    borderColor: "white",
    opacity: 0.5,
  },

  flex_end: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
