import VectorFish1 from "@/vectors/fish1";
import React from "react";

export default function DayBanner() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="flex flex-col items-center justify-center">
        <VectorFish1 className="z-10" />
        <h1
          className="text-[#2763B0] shadow-[inset_3px_3px_4px_0px_#FFFFFF26,inset_0px_-1px_4px_0px_#00000026]
              bg-white rounded-full text-center py-1.5 px-4 -mt-1.5 mr-6 border-r-2 border-b-2 border-[#2763B0] font-[600] text-[14px]"
        >
          روز دوم
        </h1>
      </div>
      <h2 className="text-[#2763B0] font-[700] text-[18px]">روز سبزه‌های جادویی</h2>
    </div>
  );
}
