import VectorApple from "@/vectors/apple";
import Image from "next/image";

export default function Apple() {
  return (
    <div className="bg-[url('/watercolor-bg1.svg')] w-screen h-dvh bg-no-repeat bg-cover relative overflow-hidden">
      <div className="overflow-y-scroll h-full w-full px-5 py-10 gap-20 flex flex-col items-center">
        <div className="absolute w-[200px] h-[200px] top-10 translate-y-1/4 text-xs font-[600] left-1/2 -translate-x-1/2 text-[#744C3D] bg-white p-3 px-6 rounded-full flex text-center justify-center">
          <p className="mt-14">
            میدونی ترکیب رنگ زرد و قرمز چه رنگی میشه؟ رنگ رو انتخابش کن
          </p>
        </div>
        <div className="absolute top-1/2 grid grid-cols-2 gap-4 my-1">
          <div>
            <VectorApple />
            <VectorApple />
          </div>
          <div>
            <VectorApple />
            <VectorApple />
          </div>
        </div>
      </div>

      <Image
        src="/apple-ring.svg"
        alt=""
        width={300}
        height={200}
        className="absolute top-7 left-1/2 -translate-x-1/2"
      />
    </div>
  );
}
