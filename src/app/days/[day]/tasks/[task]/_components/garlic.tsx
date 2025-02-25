import VectorGarlic from "@/vectors/garlic";
import VectorHugeGarlic from "@/vectors/huge-garlic";


export default function Garlic() {
  return (
    <div className="bg-[url('/watercolor-bg2.svg')] w-screen h-dvh bg-no-repeat bg-cover relative overflow-hidden">
      <div className="overflow-y-scroll h-full w-full px-5 py-10 gap-20 flex flex-col items-center">
        <div className="absolute min-w-[300px] min-h-[200px] top-3 translate-y-1/4 text-sm font-[600] left-1/2 -translate-x-1/2 text-[#744C3D] bg-[#D9D9D9] p-3 rounded-[20px] flex text-center justify-center">
          <p className="mt-14">
            میدونی ترکیب رنگ زرد و قرمز چه رنگی میشه؟ رنگ رو انتخابش کن
          </p>
        </div>
        <div className="absolute top-1/2 grid grid-cols-2 gap-4 my-1 -mt-5">
          <div>
            <VectorGarlic />
            <VectorGarlic />
          </div>
          <div>
            <VectorGarlic />
            <VectorGarlic />
          </div>
        </div>
      </div>

      <div className="absolute bottom-2 right-0 mt-10">
        <VectorHugeGarlic />
      </div>
    </div>
  );
}
