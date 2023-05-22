import * as React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

import RollDicePage from "../screens/RollDicePage";
import StatsPage from "../screens/StatsPage";
import ProfilePage from "../screens/ProfilePage";
import Account from "./Account";
import SkillsUpdatePage from "../screens/SkillsUpdatePage";

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
        options={() => ({ title: "Compte", session: session })}
      >
        {(props) => <Account {...props} session={session} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const StackSkills = ({ session }) => {
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
        name="Skills"
        options={() => ({
          session: session,
        })}
      >
        {(props) => <StatsPage {...props} session={session} />}
      </Stack.Screen>
      <Stack.Screen
        name="SkillsUpdate"
        options={() => ({ title: "SkillsUpdate", session: session })}
      >
        {(props) => <SkillsUpdatePage {...props} session={session} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default function Navigator({ session }) {
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
          name="Compétences"
          options={() => ({
            title: "Compétences",
            headerShown: false,
            session: session,
          })}
        >
          {(props) => <StackSkills {...props} session={session} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
