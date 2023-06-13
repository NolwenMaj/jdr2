import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfilePage from "../pages/Profile/index";
import EditProfilePage from "../pages/EditProfile/index";

const Stack = createNativeStackNavigator();

export default StackProfile = ({ session }) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
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
          title: "",
          session: session,
          headerShown: true,
          headerTransparent: true,
          headerTintColor: "#736A65",
        })}
      >
        {(props) => <EditProfilePage {...props} session={session} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
