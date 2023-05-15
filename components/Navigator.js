import * as React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

// import screens
import RollDicePage from "../screens/RollDicePage";
import StatsPage from "../screens/StatsPage";
import ProfilePage from "../screens/ProfilePage";
import Account from "./Account";

export default function Navigator({ session }) {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Dice"
        >
          <Tab.Screen name="Account" options={() => ({ session: session })}>
            {(props) => <Account {...props} session={session} />}
          </Tab.Screen>
          <Tab.Screen name="Profile" component={ProfilePage} />
          <Tab.Screen name="Dice" component={RollDicePage} />
          <Tab.Screen name="Stats" component={StatsPage} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
