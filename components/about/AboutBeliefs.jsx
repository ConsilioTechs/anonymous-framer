const beliefs = [
  {
    number: "01",
    title: "Creative thinking",
    body: "We do not just make things look good. We create visual systems with purpose.",
    color: "bg-[#fb8a2e]",
  },
  {
    number: "02",
    title: "Print ready craft",
    body: "Design and production work together, so what you see on screen translates beautifully into physical form.",
    color: "bg-[#8a3ac8]",
  },
  {
    number: "03",
    title: "Attention to details",
    body: "From typography to paper, layout and finishing, every detail has a role.",
    color: "bg-[#27b43e]",
  },
  {
    number: "04",
    title: "Build to be remembered",
    body: "We do not just make things look good. We create visual systems with purpose.",
    color: "bg-[#b8860b]",
  },
];

export default function AboutBeliefs() {
  return (
    <section className="about-beliefs relative overflow-hidden bg-black py-20 text-white md:py-28">
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="container-x relative z-10">
        <p className="about-beliefs-kicker text-[16px] font-medium uppercase text-[#FF3B1F] lg:text-[20px]">
          What we believe
        </p>
        <h2 className="about-beliefs-title mt-5 max-w-4xl text-3xl font-black uppercase lg:text-[48px] lg:leading-[60px]">
          Good design is invincible until it's in your hands. Then it's{" "}
          <span className="about-beliefs-typewriter">unforgettable</span>
        </h2>

        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {beliefs.map((item, index) => (
            <article
              key={item.number}
              className="about-belief-card group relative overflow-hidden px-1 pb-2"
              style={{
                "--belief-delay": `${1.25 + index * 0.11}s`,
                "--belief-line-delay": `${1.45 + index * 0.11}s`,
              }}
            >
              <div className={`about-belief-line mb-8 h-0.5 w-full ${item.color}`} />
              <p className="text-sm font-black text-white">{item.number}</p>
              <h3 className="mt-9 text-base font-black uppercase leading-snug transition group-hover:text-[#FF3B1F]">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/55">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
