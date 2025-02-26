import BackButton from "@/components/back-button";
import VectorFlowerCard from "@/vectors/flower-card";
import Image from "next/image";
import ProgressBar from "../../_components/progress-bar";
import TinyFish from "@/vectors/tiny-fish";

export default function HyacinthFlower() {
  return (
    <div className="bg-[url('/watercolor-bg2.svg')] w-screen h-dvh bg-no-repeat bg-cover relative overflow-hidden">
      <div className=" flex w-full p-4 gap-x-4 items-center">
        <BackButton />
        <ProgressBar
          className="bg-[#FAC821] border-[#F19C25]"
          icon={<TinyFish />}
          progress={50}
        />
      </div>

      <div className=" px-5 gap-10 flex flex-col items-center">
        <div className=" min-w-[300px] min-h-[200px] text-sm font-[600] text-[#744C3D] bg-[#D9D9D9] p-3 rounded-[20px] flex text-center justify-center"></div>
        <div className=" mx-auto grid grid-cols-2 gap-4">
          <VectorFlowerCard />
          <VectorFlowerCard />

          <VectorFlowerCard />
          <VectorFlowerCard />
        </div>
      </div>
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
