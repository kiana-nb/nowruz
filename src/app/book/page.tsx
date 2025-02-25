import Vectorpaper from "@/vectors/paper";
import Image from "next/image";

export default function page() {
  return (
    <div className="bg-[url('/watercolor-bg2.svg')] w-screen h-dvh bg-no-repeat bg-cover relative overflow-hidden">
      <div className="overflow-y-scroll h-full w-full px-5 py-10 gap-20 flex flex-col items-center justify-center">
        <div className="relative">
          <div className="absolute  z-10 ml-12 w-[200px] -translate-y-[150px] text-sm font-[600] -left-1/2 -translate-x-1/2 text-white p-3 rounded-lg flex items-center justify-center">
            میدونی ترکیب رنگ زرد و قرمز چه رنگی میشه؟ رنگ رو انتخابش کن
          </div>
        </div>
        <div className="absolute top-2/3 grid grid-cols-1 gap-4 my-1">
          <div className="flex flex-row gap-6">
            <Vectorpaper />
            <Vectorpaper />
          </div>
        </div>
      </div>

      <Image
        src="/book-sky.svg"
        alt=""
        width={400}
        height={100}
        className="absolute left-1/2 -translate-x-1/2 top-2  pl-4 "
      />
    </div>
  );
}
