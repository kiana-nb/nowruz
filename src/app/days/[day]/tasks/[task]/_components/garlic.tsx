import VectorHugeGarlic from "@/vectors/huge-garlic";
import VectorGarlic from "@/vectors/garlic";

export default async function Garlic() {
  return (
    <div className="flex min-h-dvh flex-col items-center gap-10 bg-[url('/watercolor-bg2.svg')] w-screen h-dvh bg-no-repeat bg-cover relative overflow-hidden">
      <section className="mt-10 flex flex-col items-center gap-5">
        <div className="h-[268px] w-[335px] rounded-[20px] bg-[#D9D9D9]">
          <p>میدونی ترکیب رنگ زرد و قرمز چه رنگی میشه؟ رنگ رو انتخابش کن</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-3">
          <VectorGarlic />
          <VectorGarlic />
          <VectorGarlic />
          <VectorGarlic />
        </div>
        <VectorHugeGarlic />
      </section>
    </div>
  );
}
