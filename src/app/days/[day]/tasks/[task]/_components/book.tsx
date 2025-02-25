import Vectorpaper from "@/vectors/paper";
import Image from "next/image";

export default function Book() {
  return (
    <div className="bg-[url('/watercolor-bg2.svg')] w-screen h-dvh bg-no-repeat bg-cover relative overflow-hidden">
      <div className="h-full w-full px-5 py-10 flex flex-col items-center justify-center relative">
      
        <div className="absolute top-[160px]  left-1/2 transform -translate-x-1/2 z-10 w-[200px] text-sm font-[600] text-white p-3 rounded-lg flex items-center justify-center">
          میدونی ترکیب رنگ زرد و قرمز چه رنگی میشه؟ رنگ رو انتخابش کن
        </div>

        
        <div className="absolute top-2/3 grid grid-cols-1 gap-4 my-1">
          <div className="flex flex-row gap-6">
            <Vectorpaper />
            <Vectorpaper />
          </div>
        </div>

        <Image
          src="/book-sky.svg"
          alt=""
          width={400}
          height={100}
          className="absolute left-1/2 -translate-x-1/2 top-2 pl-4"
        />
      </div>
    </div>
  );
}