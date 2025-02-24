import VectorFlower from "@/vectors/flower";
import Image from "next/image";
import React from "react";
import { DayChallenge } from "../page";
import Link from "next/link";

export default function DayChallenges({ challenge }: { challenge: DayChallenge }) {
  return (
    <section className="flex gap-4 group">
      <VectorFlower className="z-20" />
      <h2 className="whitespace-nowrap group-odd:text-[#15509D] group-even:text-[#BE235A] text-xs font-[600]">{challenge.day}</h2>

      <section className="rounded-[25px] group-odd:bg-[#D9F0FF] group-even:bg-[#FBEFF3] p-4 flex flex-col gap-4">
        <h3 className="font-[600] text-sm group-odd:text-[#2763B0] group-even:text-[#BE235A]">{challenge.title}</h3>
        <div className="flex group-even:flex-row group-odd:flex-row-reverse justify-between items-center">
          <Image alt="" src={challenge.image} width={55} height={55} />
          <Link href="/days/1/tasks" className="rounded-full group-odd:bg-[#4385DB] group-even:bg-[#D24E7D] px-4 py-2 font-[700] text-white text-sm">{challenge.cta}</Link>
        </div>
      </section>
    </section>
  );
}
