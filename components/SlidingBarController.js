import React from "react";
import SlidingBarView from "./SlidingBarView";
import update from "../crud/update";

const SlidingBarController = ({
  session,
  initialValue,
  characteristic,
  table,
}) => {
  const updateCharacteristic = async (newValue) => {
    const updates = {
      [characteristic]: newValue,
    };
    await update(table, updates, { session });
  };

  return (
    <SlidingBarView
      initialValue={initialValue}
      onUpdate={updateCharacteristic}
    />
  );
};

export default SlidingBarController;
