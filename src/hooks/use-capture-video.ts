import { useState } from "react";

export const useCaptureVideo = () => {
  const [capturedVideo, setCapturedVideo] = useState<string | null>(null);

  const captureVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      const chunks: Blob[] = [];

      mediaRecorder.ondataavailable = (event) => chunks.push(event.data);
      mediaRecorder.onstop = () => {
        const videoBlob = new Blob(chunks, { type: "video/mp4" });
        setCapturedVideo(URL.createObjectURL(videoBlob));
      };

      mediaRecorder.start();
      setTimeout(() => {
        mediaRecorder.stop();
        stream.getTracks().forEach((track) => track.stop());
      }, 5000);
    } catch (error) {
      console.error("Error capturing video:", error);
    }
  };

  return { capturedVideo, captureVideo };
};
