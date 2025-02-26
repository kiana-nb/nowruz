import BackButton from "@/components/back-button";
import VectorBranchOfFlower from "@/vectors/branch-of-flower";
import Image from "next/image";
import ProgressBar from "../../_components/progress-bar";
import TinyFish from "@/vectors/tiny-fish";
import IconSeda from "@/icons/icon-seda";
import VoiceRecorder from "@/components/voice-recorder";

export default function MahiP2() {
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
      <section className="flex flex-col gap-5 items-center overflow-y-scroll h-full w-full px-5 py-10 pt-20 ">
        <div className="p-4 w-full items-center text-sm font-[600] text-[#DC8D1D] bg-white rounded-[28px] flex gap-x-2 border-b-2 border-[#C1C1C1] shadow-[3px_2px_15px_0px_#00000026]">
          <div className="w-[44px] min-w-[46px] flex justify-center items-center rounded-[20px] h-[46px] bg-[#FAC821] border-b-[3px] border-[#F19C25] text-white shadow-inner shadow-white/40">
            <IconSeda />
          </div>
          <p>میتونی برامون یه شعر از بهار بخونی؟</p>
        </div>
         <VoiceRecorder />
      </section>

      <div className="absolute bottom-0 rotate-180 left-0">
        <VectorBranchOfFlower />
      </div>
      <div className="absolute bottom-20 z-10 right-0">
        <VectorBranchOfFlower />
      </div>

      <Image
        src="/fish-tank.svg"
        alt=""
        width={170}
        height={100}
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
      />
    </div>
  );
}
