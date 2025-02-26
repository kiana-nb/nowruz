import VectorEggShells from "@/vectors/egg-shells";
import React from "react";
import { FinishModal } from "./finish-modal";
import Image from "next/image";
import BackButton from "@/components/back-button";
import ProgressBar from "../../_components/progress-bar";
import TinyFish from "@/vectors/tiny-fish";

export default function Eggs() {
  return (
    <div className="bg-[url('/watercolor-bg1.svg')] w-full min-h-dvh bg-no-repeat bg-cover relative overflow-hidden">
      <div className="absolute right-4 top-4 flex gap-4 items-center">
        <BackButton />
        <ProgressBar
          className="bg-[#FAC821] border-[#F19C25]"
          icon={<TinyFish />}
          progress={50}
        />
      </div>
      <div className="overflow-y-scroll h-full w-full px-5 py-10 pt-20 gap-20 flex flex-col items-center">
        <div className="relative">
          <VectorEggShells />
          <div className="absolute top-1/2 -ml-4 w-[200px] -translate-y-[70px] text-sm font-[600] left-1/2 -translate-x-1/2 text-[#744C3D] bg-white p-3 rounded-lg flex items-center justify-center">
            میدونی ترکیب رنگ زرد و قرمز چه رنگی میشه؟ رنگ رو انتخابش کن
          </div>
          <div className="absolute top-1/2 -ml-4 min-w-[200px] translate-y-[40px] text-sm font-[600] left-1/2 -translate-x-1/2 text-white flex gap-2 p-3 rounded-lg  items-center justify-center">
            <FinishModal>
              <div className="rounded-lg bg-orange-600 px-4 py-2 w-[50px] flex items-center justify-center h-full">
                نارنجی
              </div>
            </FinishModal>
            <FinishModal>
              <div className="rounded-lg bg-purple-600 px-4 py-2 w-[50px] flex items-center justify-center h-full">
                بنفش
              </div>
            </FinishModal>
            <FinishModal>
              <div className="rounded-lg bg-yellow-600 px-4 py-2 w-[50px] flex items-center justify-center h-full">
                زرد
              </div>
            </FinishModal>
          </div>
        </div>
      </div>

      <Image
        src="/eggs.svg"
        alt=""
        width={200}
        height={100}
        className="absolute bottom-2 left-2"
      />
    </div>
  );
}
