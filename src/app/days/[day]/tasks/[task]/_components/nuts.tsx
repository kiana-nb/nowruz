import BackButton from "@/components/back-button";
import Image from "next/image";
import ProgressBar from "../../_components/progress-bar";
import TinyFish from "@/vectors/tiny-fish";

export default function Nuts() {
  return (
    <div className="bg-[url('/watercolor-bg1.svg')] w-screen h-dvh bg-no-repeat bg-cover relative overflow-hidden">
      <div className="absolute right-4 top-4 flex gap-4 items-center">
        <BackButton />
        <ProgressBar
          className="bg-[#FAC821] border-[#F19C25]"
          icon={<TinyFish />}
          progress={50}
        />
      </div>
      <Image
        src="/nuts-ring.svg"
        alt=""
        width={300}
        height={200}
        className="mx-auto"
      />
      <section className="flex flex-col gap-5 items-center overflow-y-scroll h-full w-full px-5 py-10 pt-20 ">
        <div className="  grid grid-cols-1 gap-4 ">
          <div className="bg-white border rounded-[20px] border-[#759E43] min-h-12 min-w-72"></div>
          <div className="bg-white border rounded-[20px] border-[#759E43] min-h-12 min-w-72"></div>
          <div className="bg-white border rounded-[20px] border-[#759E43] min-h-12 min-w-72"></div>
          <div className="bg-white border rounded-[20px] border-[#759E43] min-h-12 min-w-72"></div>
        </div>
      </section>
    </div>
  );
}
