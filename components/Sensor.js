import { DeviceMotion } from "expo-sensors";
import GetRandomInt from "./GetRandomInt";
import { Vibration } from "react-native";

export default Sensor = (maxDice, setResult, setDicePosition) => {
  setDicePosition({ x: 2.65, y: -6 });
  setResult(`D${maxDice + 1}`);

  const unsubscribeSensor = () => {
    DeviceMotion.removeAllListeners();
  };

  DeviceMotion.addListener((deviceMotionData) => {
    const { x, y } = deviceMotionData.accelerationIncludingGravity;
    DeviceMotion.setUpdateInterval(60);
    if (x < 6 && x > -0.5 && y < 0) {
      setDicePosition({ x: x, y: y });
      if (deviceMotionData.rotation.beta < 0.3) {
        setResult(GetRandomInt(maxDice));
        Vibration.vibrate();
        unsubscribeSensor();
      }
    }
  });
};
