import VectorFishTank from "@/vectors/fish-tank";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 bg-[url('/watercolor-bg2.svg')] w-screen h-dvh bg-no-repeat bg-cover relative overflow-hidden">
      <section className="flex flex-col items-center justify-center gap-10 px-[34px]">
        <p className="mb-12 text-center text-sm font-medium text-[#565656]">
          امروز خیلی خوشحالم که هشتمین نشان رو <br /> بدست آوردی، آفرین.
        </p>

        <div className="relative flex aspect-square max-h-[279px] flex-col items-center justify-center rounded-[28px] border border-[#77B2FF] bg-white">
          <div className="absolute -top-12 w-fit rounded-[38px] border border-[#77B2FF] bg-[#DAEFFF] p-5">
            <VectorFishTank />
          </div>
          <p className="text-center text-base font-medium px-6 text-[#15509D]">
            معمای سبزه رو حل کردی قصه‌ی تخم‌مرغ رنگی رو تموم کردی نقاشی کارت تبریک نوروزی رو کشیدیکلی موفق شدی!
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <div className="h-10 w-10 rounded-full border-b-2 bg-[#AAD59F]"></div>
          <div className="h-10 w-10 rounded-full border-b-2 bg-[#AAD59F]"></div>
          <div className="h-10 w-10 rounded-full border-b-2 bg-[#AAD59F]"></div>
          <div className="h-10 w-10 rounded-full border-b-2 bg-[#F26C63]"></div>
          <div className="h-10 w-10 rounded-full border-b-2 bg-[#AAD59F]"></div>
          <div className="h-10 w-10 rounded-full border-b-2 bg-[#AAD59F]"></div>
          <div className="h-10 w-10 rounded-full border-b-2 bg-[#AAD59F]"></div>
          <div className="h-10 w-10 rounded-full border-b-2 bg-[#FDD849]"></div>
          <div className="h-10 w-10 rounded-full border-b-2 bg-[#AAD59F]"></div>
          <div className="h-10 w-10 rounded-full border-b-2 bg-[#AAD59F]"></div>
          <div className="h-10 w-10 rounded-full border-b-2 bg-[#DCC4DE]"></div>
          <div className="h-10 w-10 rounded-full border-b-2 bg-[#AAD59F]"></div>
          <div className="h-10 w-10 rounded-full border-b-2 bg-[#AAD59F]"></div>
        </div>
      </section>
    </div>
  );
}
