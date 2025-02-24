import Link from "next/link";
import React from "react";

export default function Task() {
  return (
    <div className="rounded-[28px] flex justify-between w-full p-4 bg-white">
        <div>عنوان تسک</div>
      <Link href="tasks/1" className="text-sm text-white font-[600] rounded-full bg-[#B3590F] py-2 px-5">
        بزن بریم
      </Link>
    </div>
  );
}
