"use client";
import useAudioRecorder from "@/hooks/use-audio-recorder";
import useElapsedTime from "@/hooks/use-elaped-time";
import { Trash } from "iconsax-react";
import WaveSurferAudioRecord from "./wavesurfer-record";

export default function VoiceRecorder() {
  const { elapsedTime, toggleTimer, isRunning } = useElapsedTime();
  const { audioURL, isRecording, startRecording, stopRecording, deleteRecording } = useAudioRecorder();
  const duration = elapsedTime

  const handleStart = () => {
    startRecording();
    toggleTimer();
  };

  const handleStop = () => {
    stopRecording();
    toggleTimer();
  };

  return (
    <div className="flex flex-col items-center w-full gap-4">
      {audioURL ? (
        <div className="flex gap-2 items-center justify-center w-full">
          <WaveSurferAudioRecord className="w-full" duration={duration} selector="dced" url={audioURL} />
          <Trash size={24} color="#dc2626" onClick={deleteRecording} className="cursor-pointer" />
        </div>
      ) : isRecording ? (
        <div className="flex gap-4 items-center">
          <button onClick={handleStop} className="bg-red-600 rounded-sm size-4 min-w-4"></button>
          <p className="text-sm text-gray-800">{isRunning ? elapsedTime : "00:00:00"}</p>
          <span className="size-2 min-w-2 animate-ping bg-red-600 rounded-full"></span>
        </div>
      ) : (
        <button onClick={handleStart} className="px-4 py-2 bg-blue-600 text-white rounded-md">
          رکورد صدا
        </button>
      )}
    </div>
  );
}
