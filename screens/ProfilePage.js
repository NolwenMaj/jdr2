import { useState, useEffect } from "react";
import read from "../crud/read";

import ProfileShow from "../components/ProfileShow";
import ProfileCreate from "../components/ProfileCreate";

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
        <ProfileShow session={session} navigation={navigation} />
      ) : (
        <ProfileCreate
          session={session}
          handleCharacterCreated={handleCharacterCreated}
        />
      )}
    </>
  );
}
