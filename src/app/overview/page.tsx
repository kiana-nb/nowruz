import VectorRouletteWheel from "@/vectors/roulette-wheel";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-10 bg-[url('/watercolor-bg2.svg')] w-screen h-dvh bg-no-repeat bg-cover relative overflow-hidden">
      <section className="flex flex-col items-center gap-4 justify-between h-full py-20 px-5">
        <p className="text-center text-sm font-medium text-[#565656]">
          <br /> سلام قهرمان! آفرین، امروز هشتمین ماجراجویی رو انجام دادی.
        </p>

        <VectorRouletteWheel className="-my-6"/>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <div className="h-10 w-10 rounded-full border-b-2 bg-[#AAD59F]"></div>
          <div className="h-10 w-10 rounded-full border-b-2 bg-[#AAD59F]"></div>
          <div className="h-10 w-10 rounded-full border-b-2 bg-[#AAD59F]"></div>
          <div className="h-10 w-10 rounded-full border-b-2 bg-[#F26C63]"></div>
          <div className="h-10 w-10 rounded-full border-b-2 bg-[#AAD59F]"></div>
          <div className="h-10 w-10 rounded-full border-b-2 bg-[#AAD59F]"></div>
          <div className="h-10 w-10 rounded-full border-b-2 bg-[#AAD59F]"></div>
        </div>
        <div className="flex flex-col items-center justify-center rounded-[28px] border border-[#76AE6C] bg-white px-3 py-6 text-[#355E2A]">
          <p className="text-center text-sm font-normal">میخوای خلاصه فعالیت های پیک رو ببینی؟ روی هر روز یا نشان هات بزنی میتونی واردش بشی</p>
        </div>
        <Link href="/badges" className="rounded-full bg-[#F5772D] px-6 py-4 text-sm font-normal text-white">
          بیا ببینیم چه ماجراجویی‌هایی انجام دادی!
        </Link>
      </section>
    </div>
  );
}
