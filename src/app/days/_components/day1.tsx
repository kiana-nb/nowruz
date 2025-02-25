import VectorFlower from "@/vectors/flower";
import Image from "next/image";
import Link from "next/link";

export default function Day1() {
  return (
    <section className="flex gap-4 group">
      <VectorFlower className="z-20" />
      <h2 className="whitespace-nowrap text-[#15509D] text-xs font-[600]">روز اول</h2>

      <section className="rounded-[25px] bg-[#D9F0FF]  p-4 flex flex-col gap-4">
        <h3 className="font-[600] text-sm text-[#2763B0]">ماهی عید از سین‌سین یه چیستان شنیده، می‌تونی جواب بدی؟</h3>
        <div className="flex flex-row-reverse justify-between items-center">
          <Image alt="" src="/fish-tank.svg" width={55} height={55} />
          <Link href="/days/1/tasks" className="rounded-full bg-[#4385DB] px-4 py-2 font-[700] text-white text-sm">
            بریم حلش کنیم
          </Link>
        </div>
      </section>
    </section>
  );
}
