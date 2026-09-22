import Link from "next/link";

export default function AboutApproach() {
  return (
    <section className="relative overflow-hidden bg-paper py-20 md:py-28">
      <span
        className="absolute lg:block hidden left-[7%] top-1/2 h-8 w-8 rounded-full border-4 border-[#8a3ac8] border-r-transparent"
        aria-hidden="true"
      />
      <span
        className="absolute right-[7%] top-10 h-7 w-7 border-r-4 border-t-4 border-[#27b43e]"
        aria-hidden="true"
      />

      <div className="container-x grid gap-12 md:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="text-[16px] lg:text-[20px] text-[#FF3B1F]">Our approach</p>
        </div>
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold uppercase lg:leading-[60px] text-neutral-800 sm:text-4xl lg:text-[46px]">
            Strategy first. Beauty always. Production sweated to the last
            details
          </h2>
          <p className="mt-6 text-sm lg:text-[18px] leading-7 text-neutral-500">
            Every project starts with understanding the business, the audience,
            the objective. Then we design with production in mind, so nothing is
            lost between the screen and the press.
          </p>
          <Link
            href="/services"
            className="mt-7 inline-flex rounded-md bg-ink px-6 py-3 text-xs font-semibold text-white transition hover:bg-[#FF3B1F]"
          >
            Explore our services
          </Link>
        </div>
      </div>
    </section>
  );
}
