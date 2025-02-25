import { useState, useRef, useCallback } from "react";

const formatTime = (seconds: number) => {
  const hrs = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, "0");
  const mins = Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  return `${hrs}:${mins}:${secs}`;
};

const useElapsedTime = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const startTimeRef = useRef<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const toggleTimer = useCallback(() => {
    if (isRunning) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsRunning(false);
      setElapsedTime(0);
    } else {
      startTimeRef.current = Date.now() - elapsedTime * 1000;
      intervalRef.current = setInterval(() => {
        if (startTimeRef.current) setElapsedTime(Math.floor((Date.now() - startTimeRef.current) / 1000));
      }, 1000);
      setIsRunning(true);
    }
  }, [isRunning, elapsedTime]);

  return { elapsedTime: formatTime(elapsedTime), toggleTimer, isRunning };
};

export default useElapsedTime;
