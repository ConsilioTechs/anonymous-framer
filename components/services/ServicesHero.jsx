export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-20 text-white">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container-x relative z-10 flex min-h-[240px] flex-col items-center justify-center py-14 text-center md:min-h-[280px] md:py-16">
        <h1 className="text-3xl font-black uppercase leading-tight sm:text-4xl lg:text-[48px]">
          What we <span className="text-ember">make</span>
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70">
          Eight core disciplines, one studio. Design and production working
          together from concept to finished print.
        </p>
      </div>
    </section>
  );
}
