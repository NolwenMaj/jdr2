// import React, { useState } from "react";
// import {
//   View,
//   ImageBackground,
//   Text,
//   TouchableOpacity,
//   KeyboardAvoidingView,
// } from "react-native";
// import { Input } from "react-native-elements";
// import DropDownPicker from "react-native-dropdown-picker";
// import create from "../crud/create";
// import styles from ".../lib/styles.js";
// import mapBackground from "../assets/map.png";

// export default FormCharacter = ({ session }) => {
//   const [loading, setLoading] = useState(false);
//   const [characterName, setCharacterName] = useState("");
//   const [characterClasse, setCharacterClasse] = useState("");
//   const [characterAge, setCharacterAge] = useState(0);
//   const [characterStrength, setCharacterStrength] = useState(0);
//   const [characterIntelligence, setCharacterIntelligence] = useState(0);
//   const [characterStamina, setCharacterStamina] = useState(0);
//   const [characterDexterity, setCharacterDexterity] = useState(0);
//   const [characterCharisma, setCharacterCharisma] = useState(0);
//   const [open, setOpen] = useState(false);
//   const classes = [
//     "Alchimiste",
//     "Assassin.e",
//     "Barde",
//     "Chamane",
//     "Chevalier/ Chevaleresse",
//     "Druide.sse",
//     "Eclaireur/ Eclaireuse",
//     "Etudiant.e",
//     "Faussaire",
//     "Guerrier/ Guerrière",
//     "Inquisiteur/ Inquisitrice",
//     "Joueur/ Joueuse",
//     "Magicien.ne",
//     "Marchand.e",
//     "Médecin",
//     "Nécromancien.ne",
//     "Pirate",
//     "Sorcier/ Sorcière",
//     "Voleur/ Voleuse",
//   ];

//   const [objClasses, setObjClasses] = useState(
//     classes.map((classe) => ({
//       label: classe,
//       value: classe,
//     }))
//   );
//   const createCharacteristic = async () => {
//     const datas = {
//       name: characterName,
//       class: characterClasse,
//       age: characterAge,
//       life_points: characterStamina,
//       strength: characterStrength,
//       charisma: characterCharisma,
//       stamina: characterStamina,
//       intelligence: characterIntelligence,
//       dexterity: characterDexterity,
//     };
//     await create("characters", datas, { session });
//   };

//   return (
//     <>
//      <ImageBackground
//       source={mapBackground}
//       resizeMode="cover"
//       style={[styles.map_center]}
//       imageStyle={{ opacity: 0.5 }}
//     >
//         <KeyboardAvoidingView
//           style={styles.keyboardContainer}
//           behavior="padding"
//         >
//           <View style={{ width: 350 }}>
//             <View>
//               <Text style={styles.left20}>Nom</Text>
//               <Input
//                 value={characterName || ""}
//                 onChangeText={(text) => setCharacterName(text)}
//               />
//             </View>
//             <View>
//               <Text style={styles.left20}>Age</Text>
//               <Input
//                 value={characterAge.toString()}
//                 keyboardType="numeric"
//                 onChangeText={(text) => {
//                   const numericValue = parseInt(text, 10);
//                   setCharacterAge(
//                     Number.isNaN(numericValue) ? 0 : numericValue
//                   );
//                 }}
//               />
//             </View>
//             <Text style={styles.left20}>Classe</Text>
//             <DropDownPicker
//               style={styles.beige_noBorder}
//               open={open}
//               value={characterClasse}
//               items={objClasses}
//               setOpen={setOpen}
//               setValue={setCharacterClasse}
//               setItems={setObjClasses}
//               dropDownContainerStyle={[styles.beige_noBorder]}
//             />
//             <View>
//               <Text style={styles.left20}>Force</Text>
//               <Input
//                 value={characterStrength.toString()}
//                 keyboardType="numeric"
//                 onChangeText={(text) => {
//                   const numericValue = parseInt(text, 10);
//                   setCharacterStrength(
//                     Number.isNaN(numericValue) ? 0 : numericValue
//                   );
//                 }}
//               />
//             </View>
//             <View>
//               <Text style={styles.left20}>Dextérité</Text>
//               <Input
//                 value={characterDexterity.toString()}
//                 keyboardType="numeric"
//                 onChangeText={(text) => {
//                   const numericValue = parseInt(text, 10);
//                   setCharacterDexterity(
//                     Number.isNaN(numericValue) ? 0 : numericValue
//                   );
//                 }}
//               />
//             </View>
//             <View>
//               <Text style={styles.left20}>Endurance</Text>
//               <Input
//                 value={characterStamina.toString()}
//                 keyboardType="numeric"
//                 onChangeText={(text) => {
//                   const numericValue = parseInt(text, 10);
//                   setCharacterStamina(
//                     Number.isNaN(numericValue) ? 0 : numericValue
//                   );
//                 }}
//               />
//             </View>
//             <View>
//               <Text style={styles.left20}>Intelligence</Text>
//               <Input
//                 value={characterIntelligence.toString()}
//                 keyboardType="numeric"
//                 onChangeText={(text) => {
//                   const numericValue = parseInt(text, 10);
//                   setCharacterIntelligence(
//                     Number.isNaN(numericValue) ? 0 : numericValue
//                   );
//                 }}
//               />
//             </View>
//             <View>
//               <Text style={styles.left20}>Charisme</Text>
//               <Input
//                 value={characterCharisma.toString()}
//                 keyboardType="numeric"
//                 onChangeText={(text) => {
//                   const numericValue = parseInt(text, 10);
//                   setCharacterCharisma(
//                     Number.isNaN(numericValue) ? 0 : numericValue
//                   );
//                 }}
//               />
//             </View>
//             <View>
//               <TouchableOpacity
//                 style={styles.btnBackground}
//                 onPress={() => {
//                   setLoading(true);
//                   createCharacteristic()
//                     .then(() => {
//                       setLoading(false);
//                     })
//                     .catch(() => {
//                       setLoading(false);
//                     });
//                 }}
//               >
//                 <Text style={[styles.left20, ]}>
//                   {loading ? "Chargement ..." : "Valider"}
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </KeyboardAvoidingView>
//       </ImageBackground>
//     </>
//   );
// };
