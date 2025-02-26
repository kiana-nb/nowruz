import BackButton from "@/components/back-button";
import VectorApple from "@/vectors/apple";
import Image from "next/image";
import ProgressBar from "../../_components/progress-bar";
import TinyFish from "@/vectors/tiny-fish";

export default function Apple() {
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
      <section className="flex flex-col gap-5 items-center overflow-y-scroll h-full w-full px-5 py-10 pt-20 ">
        <div className="relative flex justify-center items-center">
          <Image
            src="/apple-ring.svg"
            alt=""
            width={300}
            height={200}
            className=""
          />
          <p className="absolute p-16 text-sm font-[600] text-[#744C3D] rounded-full text-center">
            میدونی ترکیب رنگ زرد و قرمز چه رنگی میشه؟ رنگ رو انتخابش کن
          </p>
        </div>
        <div className=" grid grid-cols-2 gap-4">
          <VectorApple />
          <VectorApple />
          <VectorApple />
          <VectorApple />
        </div>
      </section>
    </div>
  );
}
