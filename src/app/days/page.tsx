import VectorFlowerBorder from "@/vectors/flower-border";
import DayChallenges from "./_components/day-challenges";
import BannerCard from "./_components/banner-card";

export default function page() {
  return (
    <div className="bg-[url('/watercolor-bg1.svg')] w-screen h-dvh bg-no-repeat bg-cover relative overflow-hidden">
      <VectorFlowerBorder className="absolute bottom-0 -right-7" />

      <div className="overflow-y-scroll h-full w-full px-5 py-10 gap-20 flex flex-col">
        <BannerCard />
        <section className="flex flex-col gap-4">
          {dayChallenges.map((item, index) => (
            <DayChallenges key={index} challenge={item} />
          ))}
        </section>
      </div>
    </div>
  );
}

export interface DayChallenge {
  day: string;
  cta: string;
  title: string;
  image: string;
  theme: "aquatic" | "festive";
}

const dayChallenges: DayChallenge[] = [
  {
    day: "روز اول",
    cta: "بریم حلش کنیم",
    title: "ماهی عید از سین‌سین یه چیستان شنیده، می‌تونی جواب بدی؟",
    image: "/fish-tank.svg",
    theme: "aquatic",
  },
  {
    day: "روز دوم",
    cta: "بریم رنگ کنیم",
    title: "می‌خوام تخم‌مرغ رنگی درست کنم، ولی رنگاش قاطی شده، بهم کمک میدی؟",
    image: "/colored-eggs.svg",

    theme: "festive",
  },
  {
    day: "روز سوم",
    cta: "بریم حلش کنیم",
    title: "ماهی عید از سین‌سین یه چیستان شنیده، می‌تونی جواب بدی؟",
    image: "/fish-tank.svg",

    theme: "aquatic",
  },
];
