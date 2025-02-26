import { useState } from "react";

export const useCaptureImage = () => {
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  const captureImage = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const video = document.createElement("video");
      video.srcObject = stream;
      video.play();

      setTimeout(() => {
        const canvas = document.createElement("canvas");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext("2d");

        if (ctx) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          setCapturedImage(canvas.toDataURL("image/png"));
        }

        stream.getTracks().forEach((track) => track.stop());
      }, 1000);
    } catch (error) {
      console.error("Error capturing image:", error);
    }
  };

  return { capturedImage, captureImage };
};
