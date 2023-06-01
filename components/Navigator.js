import * as React from "react";
import "react-native-gesture-handler";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState, useEffect } from "react";
import read from "../crud/read";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

import RollDicePage from "../screens/RollDicePage";
import SkillsPage from "../screens/SkillsPage";
import ProfilePage from "../screens/ProfilePage";
import Account from "../screens/Account";
import FormCharacter from "../screens/FormCharacter";

const StackProfile = ({ session }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "grey",
        headerTitleStyle: {
          fontSize: 15,
        },
      }}
    >
      <Stack.Screen
        name="Profile"
        options={() => ({
          session: session,
        })}
      >
        {(props) => <ProfilePage {...props} session={session} />}
      </Stack.Screen>
      <Stack.Screen
        name="Account"
        options={() => ({
          title: "Compte",
          session: session,
        })}
      >
        {(props) => <Account {...props} session={session} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default function Navigator({ session }) {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    if (session) {
      const readCharacter = async () => {
        try {
          let characterFromBDD = await read("characters", "*", { session });
          setCharacter(characterFromBDD);
          setLoading(false);
        } catch (error) {
          console.error("Error reading skills:", error);
        }
      };

      readCharacter();
    }
  }, [session]);

  if (character === undefined) {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerTintColor: "grey",
          }}
          initialRouteName="FormCharacter"
        >
          <Tab.Screen
            name="FormCharacter"
            options={() => ({
              title: "Bienvenue",
              session: session,
            })}
          >
            {(props) => <FormCharacter {...props} session={session} />}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerTintColor: "grey",
        }}
        initialRouteName="Dice"
      >
        <Tab.Screen
          name="StackProfile"
          options={() => ({
            title: "Profile",
            headerShown: false,
            session: session,
          })}
        >
          {(props) => <StackProfile {...props} session={session} />}
        </Tab.Screen>
        <Tab.Screen
          name="Dice"
          options={() => ({ title: "Dés", session: session })}
        >
          {(props) => <RollDicePage {...props} session={session} />}
        </Tab.Screen>
        <Tab.Screen
          name="Skills"
          options={() => ({
            title: "Compétences",
            session: session,
          })}
        >
          {(props) => <SkillsPage {...props} session={session} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
