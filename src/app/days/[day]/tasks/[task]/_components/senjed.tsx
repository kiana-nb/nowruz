import BackButton from "@/components/back-button";
import Image from "next/image";
import ProgressBar from "../../_components/progress-bar";
import TinyFish from "@/vectors/tiny-fish";

export default function Senjed() {
  return (
    <div className="bg-[url('/watercolor-bg1.svg')] w-screen h-dvh bg-no-repeat bg-cover relative overflow-hidden">
      <div className=" flex w-full p-4 gap-x-4 items-center">
        <BackButton />
        <ProgressBar
          className="bg-[#FAC821] border-[#F19C25]"
          icon={<TinyFish />}
          progress={50}
        />
      </div>

      <div className="px-5 py-10 gap-10 flex flex-col items-center">
        <div className=" min-w-[300px] min-h-[200px] text-sm font-[600] text-[#744C3D] bg-[#D9D9D9] p-3 rounded-[20px] flex text-center justify-center"></div>
        <div className="  grid grid-cols-1 gap-4 ">
          <div className="bg-white border rounded-[20px] border-[#6F1717] min-h-12 min-w-72"></div>
        </div>
      </div>
      <Image
        src="/senjed.svg"
        alt=""
        width={120}
        height={80}
        className="absolute bottom-2 left-0"
      />
    </div>
  );
}
