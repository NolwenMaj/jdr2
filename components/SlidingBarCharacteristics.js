import React from "react";
import SlidingBarView from "./SlidingBarView";
import update from "../crud/update";

export default SlidingBarCharacteristics = ({
  session,
  value,
  characteristic,
}) => {
  const updateCharacteristic = async (newValue) => {
    const updates = {
      [characteristic]: newValue,
    };
    await update("characters", updates, { session });
  };

  const handleUpdateCharacteristic = (newValue) => {
    updateCharacteristic(newValue);
  };

  return (
    <SlidingBarView initialValue={value} onUpdate={handleUpdateCharacteristic} />
  );
};
