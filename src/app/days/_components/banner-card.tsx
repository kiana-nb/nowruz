import Image from "next/image";
import React from "react";

export default function BannerCard() {
  return (
    <section className=" bg-[url('/cyan-dots-bg.svg')] bg-no-repeat bg-cover min-h-[180px] relative rounded-[40px] p-4 flex overflow-hidden">
      <div className="flex flex-col">
        <Image alt="" src="/branches.svg" className="min-w-[115px] -mr-10 -mt-10" width={115} height={55} />
        <Image alt="" src="/fish.svg" className="-mt-4" width={70} height={55} />
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="font-[800] text-[18px] text-[#644610]">۵ روز رو به خوبی انجام دادی!</h1>
        <p className="font-[500] text-[14px] text-[#644610]">تا اینجا مثل یه ستاره درخشیدی! نصف ماجراجویی تموم شد!</p>
      </div>
      <Image alt="" src="/bird-branches.svg" className="min-w-[131px] -ml-10 -mb-28" width={131} height={55} />
    </section>
  );
}
