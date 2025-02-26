import BackButton from "@/components/back-button";
import VectorBranchOfFlower from "@/vectors/branch-of-flower";
import Image from "next/image";
import ProgressBar from "../../_components/progress-bar";
import TinyFish from "@/vectors/tiny-fish";
import IconSeda from "@/icons/icon-seda";

export default function MahiP1() {
  return (
    <div className="bg-[url('/watercolor-bg1.svg')] w-screen h-dvh bg-no-repeat bg-cover relative overflow-hidden">
      <div className="flex w-full p-4 gap-x-4 items-center">
        <BackButton />
        <ProgressBar
          className="bg-[#FAC821] border-[#F19C25]"
          icon={<TinyFish />}
          progress={50}
        />
      </div>

      <div className="px-5 gap-10 flex flex-col items-center">
        <div className="bg-white flex items-center rounded-[20px] w-full shadow p-4"></div>
        <IconSeda />
        <p className="text-sm font-medium">
          میتونی برامون یه شعر از بهار بخونی؟
        </p>
        <div className="min-w-[300px] min-h-[180px] text-sm font-[600] text-[#744C3D] bg-[#D9D9D9] p-3 rounded-[20px] flex text-center justify-center">
          54
        </div>
      </div>
      <div className="absolute bottom-0 rotate-180 left-0">
        <VectorBranchOfFlower />
      </div>
      <div className="absolute bottom-8 z-10 right-0">
        <VectorBranchOfFlower />
      </div>
      <Image
        src="/fish-tank.svg"
        alt=""
        width={170}
        height={100}
        className="absolute bottom-2 left-1/2 -translate-x-1/2"
      />
    </div>
  );
}
