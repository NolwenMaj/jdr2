import React from "react";
import SlidingBarView from "./SlidingBarView";
import update from "../crud/update";

export default SlidingBarLifePoints = ({ session, life_points }) => {
  const updateLifePoints = async (newValue) => {
    const updates = {
      life_points: newValue,
    };
    await update("characters", updates, { session });
  };

  const handleLifePointsUpdate = (newValue) => {
    updateLifePoints(newValue);
  };

  return (
    <SlidingBarView
      initialValue={life_points}
      onUpdate={handleLifePointsUpdate}
    />
  );
};
