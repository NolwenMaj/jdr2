import { useState, useEffect } from "react";
import read from "../../crud/read";

import Profile_View from "./Profile_View";
import ProfileCreate from "../../components/ProfileCreate";

export default function ProfilePage({ session, navigation }) {
  const [character, setCharacter] = useState(null);

  const readCharacter = async () => {
    try {
      let response = await read("characters", "*", { session });
      setCharacter(response);
    } catch (error) {
      console.error("Error reading character:", error);
    }
  };

  useEffect(() => {
    readCharacter();
  }, [session]);

  const handleCharacterCreated = () => {
    readCharacter();
  };

  return (
    <>
      {character ? (
        <Profile_View session={session} navigation={navigation} />
      ) : (
        <ProfileCreate
          session={session}
          handleCharacterCreated={handleCharacterCreated}
        />
      )}
    </>
  );
}
