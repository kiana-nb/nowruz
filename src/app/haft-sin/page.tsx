import Image from "next/image";

export default function page() {
  return (
    <div className="bg-[url('/watercolor-bg1.svg')] w-screen h-dvh bg-no-repeat bg-cover relative overflow-hidden">
      <div className="overflow-y-scroll h-full w-full px-5 py-10 gap-20 flex flex-col items-center">
        <div className="flex flex-col justify-center items-center absolute top-1/2 gap-6 my-5">
          <div className="bg-[#FAFFB2] h-32 w-72  rounded-[21px]"></div>
          <div className="flex flex-col gap-3">
            <div className="bg-[#FAFFB2] h-10 w-72 p-4 rounded-[21px]"></div>
            <div className="bg-[#FAFFB2] h-10 w-72 p-4 rounded-[21px]"></div>
          </div>
        </div>
      </div>

      <Image
        src="/haft-sin.svg"
        alt=""
        width={300}
        height={200}
        className="absolute top-10 left-1/2 -translate-x-1/2 "
      />
    </div>
  );
}
