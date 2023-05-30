import React from "react";
import SlidingBarView from "./SlidingBarView";
import update from "../crud/update";

export default SlidingBarController = ({
  session,
  value,
  characteristic,
  table
}) => {
  const updateCharacteristic = async (newValue) => {
    const updates = {
      [characteristic]: newValue,
    };
    await update(table, updates, { session });
  };

  const handleUpdateCharacteristic = (newValue) => {
    updateCharacteristic(newValue);
  };

  return (
    <SlidingBarView initialValue={value} onUpdate={handleUpdateCharacteristic} />
  );
};
