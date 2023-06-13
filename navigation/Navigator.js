import * as React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import DicePage from "../pages/Dice/index";
import SkillsPage from "../pages/Skills/index";
import StackProfile from "./StackProfile";
import ProfilePage from "../pages/Profile";

export default function Navigator({ session }) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#029E98",
          tabBarInactiveTintColor: "#736A65",
          tabBarHideOnKeyboard: true,
          tabBarStyle: { backgroundColor: "#F4EFE8" },
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="StackProfile"
          options={() => ({
            title: "Profile",
            session: session,
          })}
        >
          {(props) => <StackProfile {...props} session={session} />}
        </Tab.Screen>
        <Tab.Screen
          name="Dice"
          options={() => ({
            title: "Dés",
            session: session,
          })}
        >
          {(props) => <DicePage {...props} session={session} />}
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
