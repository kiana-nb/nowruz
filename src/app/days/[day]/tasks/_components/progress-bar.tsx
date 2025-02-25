import React from "react";

interface ProgressBarProps {
  progress: number;
  className: string;
  icon: React.ReactNode;
}

export default function ProgressBar({ progress, className, icon }: ProgressBarProps) {
  return (
    <div className="relative w-full max-w-[210px]">
      {/* Progress Bar Background */}
      <div className="w-full h-6 bg-white border-b-2 border-[#C1C1C1] rounded-full shadow-inner" />

      {/* Progress Fill */}
      <div
        className={`absolute top-0 right-0 h-6 border-b-2 rounded-r-full transition-all duration-300 shadow-inner shadow-white/50
          ${className}`}
        style={{ width: `${progress}%` }}
      />

      {/* Floating Icon */}
      <div
        className={`
          absolute top-1/2 shadow-inner mr-4 -translate-y-1/2 rounded-full w-10 h-10 !bg-white flex items-center justify-center text-white text-lg border-b-4
          ${className}
          ${progress > 90 && "-mr-2"}
          
        `}
        style={{ right: `calc(${progress}% - 20px)` }} // Adjust icon position
      >
        {icon}
      </div>
    </div>
  );
}
