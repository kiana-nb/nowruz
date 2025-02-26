import BackButton from "@/components/back-button";
import Image from "next/image";
import ProgressBar from "../../_components/progress-bar";
import TinyFish from "@/vectors/tiny-fish";

export default function Grass() {
  return (
    <div className="bg-[url('/watercolor-bg2.svg')] w-full min-h-dvh bg-no-repeat bg-cover relative overflow-hidden">
      <div className="absolute right-4 top-4 flex gap-4 items-center">
        <BackButton />
        <ProgressBar
          className="bg-[#FAC821] border-[#F19C25]"
          icon={<TinyFish />}
          progress={50}
        />
      </div>
      <section className="flex flex-col gap-5 items-center overflow-y-scroll h-full w-full px-5 py-10 pt-20">
        <div className="min-w-[300px] min-h-[200px] text-sm font-[600] text-[#744C3D] bg-[#D9D9D9] p-3 rounded-[20px] flex text-center justify-center"></div>
        <div className="grid grid-cols-1 gap-4 my-1">
          <div className="bg-[#D9D9D9] border rounded-[20px] min-h-12 min-w-72"></div>
        </div>
      </section>

      <Image
        src="/grass.svg"
        alt=""
        width={300}
        height={200}
        className="absolute bottom-2 left-1/2 -translate-x-1/2"
      />
    </div>
  );
}
