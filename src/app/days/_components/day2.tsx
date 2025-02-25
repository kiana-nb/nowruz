import VectorFlower from "@/vectors/flower";
import Image from "next/image";
import Link from "next/link";

export default function Day2() {
  return (
    <section className="flex gap-4 group">
      <VectorFlower className="z-20" />
      <h2 className="whitespace-nowrap text-[#BE235A] text-xs font-[600]">روز دوم</h2>

      <section className="rounded-[25px] bg-[#FBEFF3] p-4 flex flex-col gap-4">
        <h3 className="font-[600] text-sm text-[#BE235A]">می‌خوام تخم‌مرغ رنگی درست کنم، ولی رنگاش قاطی شده، بهم کمک میدی؟</h3>
        <div className="flex flex-row justify-between items-center">
          <Image alt="" src="/colored-eggs.svg" width={55} height={55} />
          <Link href="/days/1/tasks" className="rounded-full bg-[#D24E7D] px-4 py-2 font-[700] text-white text-sm">
            بریم رنگ کنیم
          </Link>
        </div>
      </section>
    </section>
  );
}
