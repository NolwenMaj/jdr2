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
    <Stack.Navigator>
      <Stack.Screen name="Profile" options={() => ({ session: session })}>
        {(props) => <ProfilePage {...props} session={session} />}
      </Stack.Screen>
      <Stack.Screen name="Account" options={() => ({ session: session })}>
        {(props) => <Account {...props} session={session} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const MyTabs = ({ session }) => {
  return (
    <Tab.Navigator screenOptions={{}} initialRouteName="Dice">
      <Tab.Screen name="MyStack" options={() => ({ session: session })}>
        {(props) => <MyStack {...props} session={session} />}
      </Tab.Screen>
      <Tab.Screen name="Dice" options={() => ({ session: session })}>
        {(props) => <RollDicePage {...props} session={session} />}
      </Tab.Screen>
      <Tab.Screen name="Stats" options={() => ({ session: session })}>
        {(props) => <StatsPage {...props} session={session} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default function Navigator({ session }) {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
