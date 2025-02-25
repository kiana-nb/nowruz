import IconInfo from "@/icons/info";
import Confetti from "@/vectors/confetti";
import Link from "next/link";
import ProgressBar from "./progress-bar";

export default function Task2() {
  return (
    <section className="rounded-[28px] flex flex-col gap-5 border-b-2 border-[#F5772D] justify-between w-full p-3 bg-white shadow-[inset_4px_4px_12px_0px_#00000017,3px_2px_15px_0px_#00000026,inset_1px_-4px_10px_0px_#3F3F3F26]">
      <div className="flex gap-3 items-center">
        <Confetti />
        <div className="flex flex-col gap-1 grow text-[#532D07]">
          <h3 className="font-[700] text-[16px]">اسم تسک</h3>
          <p className="font-[500] text-[12px]">توضیح کوتاه تسک</p>
        </div>

        <div
          className="rounded-full border-b-4 self-start border-[#F5772D] min-w-8 size-8 flex items-center justify-center text-[#FAC821] shadow-[inset_3px_3px_4px_0px_#FFFFFF26,inset_0px_-1px_4px_0px_#00000026]
"
        >
          <IconInfo />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <ProgressBar className="border-[#F5772D] bg-[#FAC821]" progress={30} icon={<Confetti />} />
        <Link
          href="tasks/1"
          className="text-sm shadow-inner shadow-white/40 whitespace-nowrap text-white font-[600] rounded-full bg-[#FAC821] h-max flex items-center justify-center py-2 px-5 border-b-4 border-[#F5772D]"
        >
          بزن بریم
        </Link>
      </div>
    </section>
  );
}
