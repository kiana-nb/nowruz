import React from "react";
import Lottie from "lottie-react";
import AnimationVoiceWaves from "../../public/animations/voice-waves.json";

export default function VoiceWaves() {
  return <Lottie animationData={AnimationVoiceWaves} loop={true} className="w-[32px]" />;
}
