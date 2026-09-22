const logos = ["Customizing", "Banner", "Logo", "Business Card", "Branding"];
const marqueeLogos = Array.from({ length: 3 }, () => logos).flat();

export default function LogoStrip() {
  return (
    <section className="bg-ink">
      <div className="logo-marquee overflow-hidden bg-black py-3 text-white">
        <div className="logo-marquee-track flex w-max items-center">
          {[0, 1].map((groupIndex) => (
            <div
              key={groupIndex}
              className="logo-marquee-group flex shrink-0 items-center"
              aria-hidden={groupIndex === 1}
            >
              {marqueeLogos.map((logo, index) => (
                <span
                  key={`${logo}-${groupIndex}-${index}`}
                  className="logo-marquee-item flex shrink-0 items-center gap-3 whitespace-nowrap text-[22px] font-black leading-none md:text-[24px]"
                >
                  <span className="h-2.5 w-2.5 rotate-45 bg-ember" />
                  {logo}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
