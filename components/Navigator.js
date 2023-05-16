import * as React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// import screens
import RollDicePage from "../screens/RollDicePage";
import StatsPage from "../screens/StatsPage";
import ProfilePage from "../screens/ProfilePage";
import Account from "./Account";

const MyStack = ({ session }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "grey",
        headerTitleStyle: {
          fontSize: 15,
        },
      }}
    >
      <Stack.Screen name="Profile" options={() => ({ session: session })}>
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
          name="MyStack"
          options={() => ({
            title: "Profile",
            headerShown: false,
            session: session,
          })}
        >
          {(props) => <MyStack {...props} session={session} />}
        </Tab.Screen>
        <Tab.Screen
          name="Dice"
          options={() => ({ title: "Dés", session: session })}
        >
          {(props) => <RollDicePage {...props} session={session} />}
        </Tab.Screen>
        <Tab.Screen
          name="Stats"
          options={() => ({ title: "Compétences", session: session })}
        >
          {(props) => <StatsPage {...props} session={session} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
