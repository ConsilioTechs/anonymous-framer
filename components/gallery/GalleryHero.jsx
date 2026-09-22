export default function GalleryHero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_55%,rgba(255,255,255,0.18),rgba(9,9,9,0)_42%)]" />
      <div className="container-x relative z-10 grid min-h-[420px] items-center gap-10 py-14 md:grid-cols-[0.9fr_1fr] md:py-16">
        <div>
          <h1 className="text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-[58px]">
            Our <span className="text-ember">gallery</span>
          </h1>
          <p className="mt-6 max-w-md text-sm leading-7 text-white/75 sm:text-base">
            A look at the brands, designs and printed pieces we have brought to
            life.
          </p>
        </div>

        <div className="md:justify-self-end">
          <div className="aspect-[16/9] w-full overflow-hidden bg-white md:w-[520px]">
            <img
              src="/framework/Frame 1686553016 (2).png"
              alt="Framed gallery artwork"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
