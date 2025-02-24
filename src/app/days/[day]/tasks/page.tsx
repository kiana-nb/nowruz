import DayBanner from "./_components/day-banner";
import Quote from "./_components/quote-of-the-day";
import Tabs from "./_components/tabs";
import Task from "./_components/task";

export default function page() {
  return (
    <div className="bg-[url('/watercolor-bg2.svg')] w-screen h-dvh bg-no-repeat bg-cover relative overflow-hidden">
      <div className="overflow-y-scroll h-full w-full px-5 py-20 pb-40 gap-20 flex flex-col items-center">
        <div className="flex flex-col gap-20 grow w-full">
          <DayBanner />
          <Tabs />
          <Task />
        </div>
        <Quote />
      </div>
    </div>
  );
}
