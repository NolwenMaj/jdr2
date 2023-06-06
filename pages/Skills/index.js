import { useState, useEffect } from "react";
import read from "../../crud/read";
import ProfileCreate from "../../components/ProfileCreate";
import Skills_View from "./Skills_View";

export default function SkillsPage({ session, navigation }) {
  const [loading, setLoading] = useState(true);
  const [skills, setSkills] = useState(undefined);

  const readSkills = async () => {
    try {
      let response = await read("skills", "*", { session });
      setSkills(response);
    } catch (error) {
      console.error("Error reading skills:", error);
    }
  };

  useEffect(() => {
    readSkills();
  }, [session]);

  const handleCharacterCreated = () => {
    readSkills();
  };

  return (
    <>
      {skills ? (
        <Skills_View
          session={session}
          navigation={navigation}
          skills={skills}
        />
      ) : (
        <ProfileCreate
          session={session}
          handleCharacterCreated={handleCharacterCreated}
        />
      )}
    </>
  );
}
