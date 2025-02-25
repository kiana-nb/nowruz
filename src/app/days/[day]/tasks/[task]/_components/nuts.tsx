import BackButton from "@/components/back-button";
import Image from "next/image";
import ProgressBar from "../../_components/progress-bar";
import TinyFish from "@/vectors/tiny-fish";

export default function Nuts() {
  return (
    <div className="bg-[url('/watercolor-bg1.svg')] w-screen h-dvh bg-no-repeat bg-cover relative overflow-hidden">
      <div className="absolute right-4 top-4 flex gap-4 items-center">
                    <BackButton />
                    <ProgressBar className="bg-[#FAC821] border-[#F19C25]" icon={<TinyFish/>} progress={50}/>
                  </div>
      <div className="overflow-y-scroll h-full w-full px-5 py-10 gap-20 flex flex-col items-center">
        <div className="absolute w-[200px] h-[200px] top-6 translate-y-1/4 text-xs font-[600] left-1/2 -translate-x-1/2 text-[#744C3D] bg-white p-3 px-6 rounded-xl flex text-center justify-center">
          <p className="mt-14">
            میدونی ترکیب رنگ زرد و قرمز چه رنگی میشه؟ رنگ رو انتخابش کن
          </p>
        </div>
        <div className="absolute top-1/2 grid grid-cols-1 gap-4 my-1">
          <div className="bg-white border rounded-[20px] border-[#759E43] min-h-12 min-w-72"></div>
          <div className="bg-white border rounded-[20px] border-[#759E43] min-h-12 min-w-72"></div>
          <div className="bg-white border rounded-[20px] border-[#759E43] min-h-12 min-w-72"></div>
          <div className="bg-white border rounded-[20px] border-[#759E43] min-h-12 min-w-72"></div>
        </div>
      </div>

      <Image
        src="/nuts-ring.svg"
        alt=""
        width={300}
        height={200}
        className="absolute top-16 left-1/2 -translate-x-1/2"
      />
    </div>
  );
}
