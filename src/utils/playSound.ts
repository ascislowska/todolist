import positive from "../assets/sounds/positive-sound.wav";
import negative from "../assets/sounds/negative-sound.wav";

type playSound = (type: "positive" | "negative") => void;

export const playSound: playSound = (type) => {
  let soundToPlay = positive;
  let volume = 1;

  if (type === "positive") {
    soundToPlay = positive;
    volume = 0.9;
  }
  if (type === "negative") {
    soundToPlay = negative;
    volume = 1;
  }
  const audio = new Audio(soundToPlay);
  audio.volume = volume;
  audio.play();
};
