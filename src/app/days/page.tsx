import VectorFlowerBorder from "@/vectors/flower-border";
import BannerCard from "./_components/banner-card";
import Day1 from "./_components/day1";
import Day2 from "./_components/day2";

export default function page() {
  return (
    <div className="bg-[url('/watercolor-bg1.svg')] w-screen min-h-dvh bg-no-repeat bg-cover relative overflow-hidden">
      <VectorFlowerBorder className="absolute bottom-0 -right-7" />
      
      <div className="overflow-y-scroll h-full w-full px-5 py-10 gap-20 flex flex-col">
        <BannerCard />
        <section className="flex flex-col gap-4">
          <Day1 />
          <Day2 />
          <Day2 />
          <Day2 />
          <Day2 />
          <Day2 />
          <Day2 />
        </section>
      </div>
    </div>
  );
}
