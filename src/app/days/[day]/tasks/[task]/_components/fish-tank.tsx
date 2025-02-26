import BackButton from "@/components/back-button";
import VectorBranchOfFlower from "@/vectors/branch-of-flower";
import Image from "next/image";
import ProgressBar from "../../_components/progress-bar";
import TinyFish from "@/vectors/tiny-fish";

export default function FishTank() {
  return (
    <div className="bg-[url('/watercolor-bg1.svg')] w-screen h-dvh bg-no-repeat bg-cover relative overflow-hidden">
      <div className="absolute right-4 top-4 flex gap-4 items-center">
        <BackButton />
        <ProgressBar className="bg-[#FAC821] border-[#F19C25]" icon={<TinyFish />} progress={50} />
      </div>
      <section className="flex flex-col gap-5  items-center overflow-y-scroll h-full w-full px-5 py-10 pt-20">
        <div className="p-4 text-sm font-[600] text-[#DC8D1D] bg-white rounded-[20px] flex  justify-center">
          علی یه جعبه مدادرنگی داره، ۳ تاشو داده به دوستش، چندتا براش مونده؟
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white border rounded-[20px] border-[#C1C1C1] min-h-20 min-w-32 shadow-[inset_4px_4px_10px_0px_#0000000A]"></div>
          <div className="bg-white border rounded-[20px] border-[#C1C1C1] min-h-20 min-w-32 shadow-[inset_4px_4px_10px_0px_#0000000A]"></div>
          <div className="bg-white border rounded-[20px] border-[#C1C1C1] min-h-20 min-w-32 shadow-[inset_4px_4px_10px_0px_#0000000A]"></div>
          <div className="bg-white border rounded-[20px] border-[#C1C1C1] min-h-20 min-w-32 shadow-[inset_4px_4px_10px_0px_#0000000A]"></div>
        </div>
      </section>

      <div className="absolute bottom-0 rotate-180 left-0">
        <VectorBranchOfFlower />
      </div>
      <div className="absolute bottom-20 z-10 right-0">
        <VectorBranchOfFlower />
      </div>

      <Image src="/fish-tank.svg" alt="" width={170} height={100} className="absolute bottom-4 left-1/2 -translate-x-1/2" />
    </div>
  );
}
