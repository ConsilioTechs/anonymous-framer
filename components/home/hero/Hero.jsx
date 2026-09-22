import { heroImage } from "../data";

export default function Hero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-ink pt-20 text-white md:min-h-[690px]">
      <div className="hero-glow" aria-hidden="true" />
      <span className="hero-icon hero-spinner" aria-hidden="true" />
      <span className="hero-icon hero-ring-left" aria-hidden="true" />
      <span className="hero-icon hero-ring-right" aria-hidden="true" />
      <span className="hero-icon hero-triangle" aria-hidden="true" />

      <div className="container-x relative z-10 grid min-h-[680px] items-center gap-12 pb-16 pt-16 md:min-h-[610px] md:grid-cols-[1fr_1.05fr] md:pt-12">
        <div className="hero-copy max-w-xl">
          <h1 className="text-[2.75rem] font-black uppercase leading-[1.1] sm:text-6xl lg:text-[64px] lg:leading-[80px]">
            We Build <br />
            Brands That <br />
             <span className="text-[#FF3B1F]"> Get Noticed.</span>
          </h1>
          <p className="mt-7 max-w-md text-sm leading-[32px] text-[#ffffff] lg:text-[18px]">
            From bold brand identities to beautifully finished print materials,
            Anonymous Framer turns ideas into memorable experiences you can
            hold.
          </p>
          <div className="hero-actions mt-8 flex flex-wrap gap-4">
             <a
              href="/contact"
              className="hero-button inline-flex items-center gap-2 rounded-lg border border-white/40 px-10 py-4 text-xs font-black uppercase text-white transition hover:border-white"
            >
             Contact Us
            </a>
            <a
              href="#services"
              className="hero-button inline-flex items-center gap-2 rounded-lg bg-white px-10 py-4 text-xs font-black uppercase text-ink transition hover:bg-ember hover:text-white"
            >
              View Our Work 
            </a>
           
          </div>
        </div>

        <div className="relative">
          <div className="hero-image-frame h-[330px] overflow-hidden sm:h-[440px] lg:h-[470px]">
            <img className="hero-image image-cover" src={heroImage} alt="Creative wall artwork placeholder" />
          </div>
        </div>
      </div>
    </section>
  );
}
