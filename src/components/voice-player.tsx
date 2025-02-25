import generateRRandomSelector from "@/utils/generate-random-selector";
import WaveSurferAudio from "./wavesurfer";

export default function VoicePlayer() {
  return <WaveSurferAudio duration={"9:32"} selector={generateRRandomSelector()} url={"/audio.mp3"} />;
}
