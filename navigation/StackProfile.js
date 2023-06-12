import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfilePage from "../pages/Profile";
import EditProfilePage from "../pages/EditProfile/index";
const Stack = createNativeStackNavigator();

export default StackProfile = ({ session }) => {
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
        {(props) => <EditProfilePage {...props} session={session} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
