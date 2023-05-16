import * as React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState, useEffect } from "react";
import { Alert } from "react-native";
import { supabase } from "../lib/supabase";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// import screens
import RollDicePage from "../screens/RollDicePage";
import StatsPage from "../screens/StatsPage";
import ProfilePage from "../screens/ProfilePage";
import Account from "./Account";

const MyStack = ({
  session,
  username,
  character_age,
  character_class,
  character_force,
  character_intelligence,
  character_endurance,
  character_charisme,
  character_dexterite,
}) => {
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
          username: username,
          character_age: character_age,
          character_class: character_class,
          character_charisme: character_charisme,
          character_dexterite: character_dexterite,
          character_force: character_force,
          character_intelligence: character_intelligence,
          character_endurance: character_endurance,
        })}
      >
        {(props) => (
          <ProfilePage
            {...props}
            session={session}
            username={username}
            character_age={character_age}
            character_class={character_class}
            character_charisme={character_charisme}
            character_dexterite={character_dexterite}
            character_force={character_force}
            character_intelligence={character_intelligence}
            character_endurance={character_endurance}
          />
        )}
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
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [character_class, setCharacterClass] = useState("");
  const [character_age, setCharacterAge] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [character_force, setCharacterForce] = useState("");
  const [character_intelligence, setCharacterIntelligence] = useState("");
  const [character_endurance, setCharacterEndurance] = useState("");
  const [character_charisme, setCharacterCharisme] = useState("");
  const [character_dexterite, setCharacterDexterite] = useState("");

  useEffect(() => {
    if (session) getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);
      if (!session?.user) throw new Error("No user on the session!");

      const { data, error, status } = await supabase
        .from("profiles")
        .select(
          `username, character_class, character_age,character_force,character_intelligence ,character_endurance,character_charisme,character_dexterite, avatar_url`
        )
        .eq("id", session?.user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setCharacterClass(data.character_class);
        setCharacterAge(data.character_age);
        setAvatarUrl(data.avatar_url);
        setCharacterForce(data.character_force);
        setCharacterIntelligence(data.character_intelligence);
        setCharacterEndurance(data.character_endurance);
        setCharacterCharisme(data.character_charisme);
        setCharacterDexterite(data.character_dexterite);
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
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
          name="MyStack"
          options={() => ({
            title: "Profile",
            headerShown: false,
            username: username,
            session: session,
            character_age: character_age,
            character_class: character_class,
            character_charisme: character_charisme,
            character_dexterite: character_dexterite,
            character_force: character_force,
            character_intelligence: character_intelligence,
            character_endurance: character_endurance,
          })}
        >
          {(props) => (
            <MyStack
              {...props}
              session={session}
              username={username}
              character_age={character_age}
              character_class={character_class}
              character_charisme={character_charisme}
              character_dexterite={character_dexterite}
              character_force={character_force}
              character_intelligence={character_intelligence}
              character_endurance={character_endurance}
            />
          )}
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
