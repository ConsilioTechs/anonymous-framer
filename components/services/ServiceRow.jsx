export default function ServiceRow({ service, index, revealDelay = "0ms" }) {
  const imageFirst = index % 2 === 1;
  const rowBackground = index % 2 === 0 ? "bg-paper" : "bg-white";

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const shiftX = (x / bounds.width - 0.5) * -12;
    const shiftY = (y / bounds.height - 0.5) * -12;

    event.currentTarget.style.setProperty("--pointer-x", `${x}px`);
    event.currentTarget.style.setProperty("--pointer-y", `${y}px`);
    event.currentTarget.style.setProperty("--image-shift-x", `${shiftX}px`);
    event.currentTarget.style.setProperty("--image-shift-y", `${shiftY}px`);
  };

  const handlePointerLeave = (event) => {
    event.currentTarget.style.setProperty("--pointer-x", "50%");
    event.currentTarget.style.setProperty("--pointer-y", "50%");
    event.currentTarget.style.setProperty("--image-shift-x", "0px");
    event.currentTarget.style.setProperty("--image-shift-y", "0px");
  };

  return (
    <article
      data-service-row
      className={`service-row border-b border-neutral-100 ${rowBackground}`}
      style={{ "--reveal-delay": revealDelay }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 md:items-center md:gap-20 md:py-20">
        <div className={`service-row__content ${imageFirst ? "md:order-2" : ""}`}>
          <h2 className="service-row__title text-3xl font-black uppercase leading-none text-neutral-800 sm:text-4xl lg:text-[42px]">
            {service.title}
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-neutral-500">
            {service.description}
          </p>

          <div className="mt-8">
            <p className="text-[0.64rem] font-black uppercase tracking-wide text-neutral-500">
              What we deliver
            </p>
            <ul className="mt-4 grid gap-x-10 gap-y-3 text-sm font-semibold text-neutral-700 sm:grid-cols-2">
              {service.details.map((detail) => (
                <li key={detail} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 shrink-0 bg-ember" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className={`service-row__image-wrap flex ${
            imageFirst ? "md:order-1 md:justify-start" : "md:justify-end"
          }`}
        >
          <div className="aspect-[4/3] w-full max-w-[520px] overflow-hidden bg-white">
            <img
              src={service.image}
              alt={service.alt}
              className="service-row__image h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
