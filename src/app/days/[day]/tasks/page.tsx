import DayBanner from "./_components/day-banner";
import Quote from "./_components/quote-of-the-day";
import Task1 from "./_components/task1";
import Task2 from "./_components/task2";
import Task3 from "./_components/task3";

export default function page() {
  return (
    <div className="bg-[url('/watercolor-bg2.svg')] w-full px-5 py-6 flex gap-12 flex-col items-center justify-center overflow-y-scroll h-dvh bg-no-repeat bg-cover relative overflow-hidden">
        <DayBanner />

        <div className="flex flex-col gap-4 w-full">
          <Task1 />
          <Task2 />
          <Task3 />
        </div>
      <Quote />
    </div>
  );
}
