import VectorCoin from "@/vectors/coins";
import Image from "next/image";

export default function page() {
  return (
    <div className="bg-[url('/watercolor-bg1.svg')] w-screen h-dvh bg-no-repeat bg-cover relative overflow-hidden">
      <div className="overflow-y-scroll h-full w-full px-5 py-10 gap-20 flex flex-col items-center">
        <div className="absolute min-w-[300px] min-h-[200px] top-10 translate-y-1/4 text-sm font-[600] left-1/2 -translate-x-1/2 text-[#744C3D] bg-[#D9D9D9] p-3 rounded-[20px] flex text-center justify-center">
         <p className="mt-10">میدونی ترکیب رنگ زرد و قرمز چه رنگی میشه؟ رنگ رو انتخابش کن</p> 
        </div>
        <div className="absolute top-1/2 grid grid-cols-2 gap-4 my-1">
            <VectorCoin />
            <VectorCoin />

        </div>
      </div>

      <Image
        src="/coins-bag.svg"
        alt=""
        width={150}
        height={70}
        className="absolute bottom-2 left-1/2 -translate-x-1/2"
      />
    </div>
  );
}
