import create from "../crud/create";
export default generateSkills = async (characteristics, { session }) => {
  const skillsGenerated = {
    arts_and_crafts:
      (characteristics.dexterity + characteristics.intelligence) * 2,
    ranged_combat:
      (characteristics.dexterity + characteristics.intelligence) * 2,
    close_combat: (characteristics.dexterity + characteristics.strength) * 2,
    nature_knowledge:
      (characteristics.dexterity + characteristics.intelligence) * 2,
    secrets_knowledge:
      (characteristics.charisma + characteristics.intelligence) * 2,
    running_jumping: (characteristics.dexterity + characteristics.stamina) * 2,
    discretion: (characteristics.dexterity + characteristics.charisma) * 2,
    dodging: (characteristics.dexterity + characteristics.intelligence) * 2,
    intimidating: (characteristics.strength + characteristics.charisma) * 2,
    reading_writing:
      (characteristics.charisma + characteristics.intelligence) * 2,
    lying_convincing:
      (characteristics.charisma + characteristics.intelligence) * 2,
    perception: (characteristics.charisma + characteristics.intelligence) * 2,
    psychology: (characteristics.dexterity + characteristics.intelligence) * 2,
    reflexes: (characteristics.dexterity + characteristics.intelligence) * 2,
    locks_and_traps: (characteristics.dexterity + characteristics.stamina) * 2,
    treating: (characteristics.charisma + characteristics.intelligence) * 2,
    stealing: (characteristics.dexterity + characteristics.intelligence) * 2,
  };
  await create("skills", skillsGenerated, { session });
};
