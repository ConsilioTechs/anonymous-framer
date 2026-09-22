import Link from "next/link";

export default function GalleryCta() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-center text-white md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.14),rgba(9,9,9,0)_42%)]" />
      <div className="container-x relative z-10">
        <p className="section-label">Your project next</p>
        <h2 className="mx-auto mt-8 max-w-3xl text-3xl font-black uppercase lg:leading-[64px] sm:text-4xl lg:text-[52px]">
          Let's add your brand to the list.
        </h2>
        <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/65">
          Have a brand, campaign or print project in mind? Let's turn the idea
          into something worth seeing.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex rounded-lg bg-ember px-7 py-4 text-xs font-medium uppercase text-white transition hover:bg-white hover:text-ink"
          >
            Contact us
          </Link>
          <Link
            href="/services"
            className="inline-flex rounded-lg bg-white px-7 py-4 text-xs font-medium uppercase text-ink transition hover:bg-ember hover:text-white"
          >
            View our work
          </Link>
        </div>
      </div>
    </section>
  );
}
