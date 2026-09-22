import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_48%,rgba(255,255,255,0.18),rgba(9,9,9,0)_44%)]" />
      <span className="hero-icon hero-ring-left" aria-hidden="true" />
      <span className="hero-icon hero-ring-right" aria-hidden="true" />
      <span className="hero-icon hero-triangle" aria-hidden="true" />

      <div className="container-x relative z-10 grid min-h-[560px] items-center gap-12 py-16 md:grid-cols-[1fr_0.95fr] md:py-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-[62px] lg:leading-[1.05]">
            A studio built <br />
            on <span className="text-ember">craft.</span>
          </h1>
          <p className="mt-6 max-w-md text-sm leading-7 text-white/75 lg:text-[18px]">
            Anonymous Framer is a creative studio and print house in one place,
            helping brands move from the first idea to the finished physical
            piece.
          </p>
          
        </div>

        <div className="relative">
          <div className="h-[290px] rounded-lg overflow-hidden sm:h-[380px] lg:h-[490px]">
            <img
              src="/images/serv3.png"
              alt="Framed artwork in the Anonymous Framer studio"
              className="h-full w-full object-cover"
            />
          </div>
          <span className="corner-mark top-right" aria-hidden="true" />
          <span className="corner-mark bottom-left" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
