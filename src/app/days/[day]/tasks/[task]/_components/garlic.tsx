import BackButton from "@/components/back-button";
import VectorGarlic from "@/vectors/garlic";
import VectorHugeGarlic from "@/vectors/huge-garlic";
import ProgressBar from "../../_components/progress-bar";
import TinyFish from "@/vectors/tiny-fish";

export default function Garlic() {
  return (
    <div className="bg-[url('/watercolor-bg2.svg')] w-screen h-dvh bg-no-repeat bg-cover relative overflow-hidden">
      <div className="absolute right-4 top-4 flex gap-4 items-center">
        <BackButton />
        <ProgressBar
          className="bg-[#FAC821] border-[#F19C25]"
          icon={<TinyFish />}
          progress={50}
        />
      </div>
      <section className="flex flex-col gap-5 items-center overflow-y-scroll h-full w-full px-5 py-10 pt-20 ">
        <div className="p-4 py-16 text-sm font-[600] text-[#744C3D] bg-[#D9D9D9] rounded-[20px] text-center justify-center">
          میدونی ترکیب رنگ زرد و قرمز چه رنگی میشه؟ رنگ رو انتخابش کن
        </div>
        <div className=" grid grid-cols-2 gap-4">
          <VectorGarlic />
          <VectorGarlic />
          <VectorGarlic />
          <VectorGarlic />
        </div>
      </section>

      <div className="absolute bottom-2 right-0 mt-10">
        <VectorHugeGarlic />
      </div>
    </div>
  );
}
