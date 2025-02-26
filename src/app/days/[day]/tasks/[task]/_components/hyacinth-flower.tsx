import BackButton from "@/components/back-button";
import VectorFlowerCard from "@/vectors/flower-card";
import Image from "next/image";
import ProgressBar from "../../_components/progress-bar";
import TinyFish from "@/vectors/tiny-fish";

export default function HyacinthFlower() {
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

      <section className="flex flex-col gap-5 items-center overflow-y-scroll h-full w-full px-5 pt-20 py-10">
        <div className="min-w-[300px] min-h-[200px] text-sm font-[600] text-[#744C3D] bg-[#D9D9D9] p-2 rounded-[20px] flex text-center justify-center"></div>
        <div className="mx-auto grid grid-cols-2 gap-4">
          <div className="p-1 ">
            <VectorFlowerCard />
          </div>
          <div className="p-1">
            <VectorFlowerCard />
          </div>
          <div className="p-1">
            <VectorFlowerCard />
          </div>
          <div className="p-1">
            <VectorFlowerCard />
          </div>
        </div>
      </section>
      <Image
        src="/hyacinth-flower.svg"
        alt=""
        width={150}
        height={60}
        className="absolute bottom-2 left-2"
      />
    </div>
  );
}
