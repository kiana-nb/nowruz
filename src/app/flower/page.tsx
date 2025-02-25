import VectorFlowerCard from "@/vectors/flower-card";
import Image from "next/image";

export default function page() {
  return (
    <div className="bg-[url('/watercolor-bg2.svg')] w-screen h-dvh bg-no-repeat bg-cover relative overflow-hidden">
      <div className="overflow-y-scroll h-full w-full px-5 py-10 gap-20 flex flex-col items-center">
        <div className="absolute min-w-[300px] min-h-[200px] top-10 translate-y-1/4 text-sm font-[600] left-1/2 -translate-x-1/2 text-[#744C3D] bg-[#D9D9D9] p-3 rounded-[20px] flex text-center justify-center"></div>
        <div className="absolute top-1/2 grid grid-cols-2 gap-4 my-1 px-3">
          <div>
            <VectorFlowerCard />
            <VectorFlowerCard />
          </div>
          <div>
            <VectorFlowerCard />
            <VectorFlowerCard />
          </div>
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
