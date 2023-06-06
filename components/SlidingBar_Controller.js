import React from "react";
import SlidingBarView from "./SlidingBar_View";
import update from "../crud/update";

export default SlidingBar_Controller = ({
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
