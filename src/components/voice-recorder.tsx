"use client";
import useAudioRecorder from "@/hooks/use-audio-recorder";
import useElapsedTime from "@/hooks/use-elaped-time";
import IconMicrophone from "@/icons/microphone";
import { Pause } from "iconsax-react";
import dynamic from "next/dynamic";
import WaveSurferAudioRecord from "./wavesurfer-record";
import IconCross from "@/icons/cross";
import IconVoicePlaying from "@/icons/voice-playing";

const VoiceWaves = dynamic(() => import("@/vectors/voice-waves"), {
  ssr: false,
});

export default function VoiceRecorder() {
  const { elapsedTime, toggleTimer } = useElapsedTime();
  const { audioURL, isRecording, startRecording, stopRecording, deleteRecording } = useAudioRecorder();
  const duration = elapsedTime;

  const handleStart = () => {
    startRecording();
    toggleTimer();
  };

  const handleStop = () => {
    stopRecording();
    toggleTimer();
  };

  return (
    <div className="p-3 max-w-[300px] flex gap-3 items-center w-full bg-[#FAC821] text-white text-sm font-semibold rounded-[20px] border-b-4 border-[#F19C25] shadow-[inset_4px_4px_10px_0px_#0000000A,3px_2px_5px_0px_#0000001A,inset_1px_-4px_11px_0px_#3F3F3F1F]">
      {audioURL ? (
        <div className="flex gap-2 items-center justify-center w-full">
          <WaveSurferAudioRecord className="w-full" duration={duration} selector="dced" url={audioURL} />
          <div
            onClick={deleteRecording}
            className="size-[30px] min-w-[30px] bg-[#FF450D] rounded-[10px] border-b-[3px] flex justify-center items-center border-[#B11E1E] shadow-[inset_3px_3px_4px_0px_#FFFFFF26,inset_0px_-1px_4px_0px_#00000026]"
          >
            <IconCross />
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <div
            onClick={handleStart}
            className="w-[56px] h-[46px] min-w-[56px] rounded-[20px] shadow-[inset_3px_3px_4px_0px_#FFFFFF26,inset_0px_-1px_4px_0px_#00000026]
 bprder-[3px] border-[#C1C1C1] bg-white flex justify-center items-center text-[#FAC821]"
          >
            {isRecording ? <IconVoicePlaying /> : <IconMicrophone />}
          </div>
          {isRecording ? (
            <div className="flex gap-2 items-center">
              <VoiceWaves />

              <div
                onClick={handleStop}
                className="size-[30px] min-w-[30px] bg-[#FF450D] rounded-[10px] border-b-[3px] flex justify-center items-center border-[#B11E1E] shadow-[inset_3px_3px_4px_0px_#FFFFFF26,inset_0px_-1px_4px_0px_#00000026]"
              >
                <Pause variant="Bold" size={16} color="white" />
              </div>
            </div>
          ) : (
            <span> رکورد صدا</span>
          )}
        </div>
      )}
    </div>
  );
}
