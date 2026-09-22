const capabilities = [
  "Brand strategy",
  "Identity systems",
  "Logo design",
  "Art direction",
  "Editorial design",
  "Packaging",
  "Large format print",
  "Letter press and foil",
  "Merch and apparel",
  "Signage",
  "Print production",
];

export default function AboutCapabilities() {
  return (
    <section className="bg-paper pb-20 md:pb-28">
      <div className="container-x">
        <p className="text-[16px] lg:text-[20px] text-[#FF3B1F]">Our capabilities</p>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item) => (
            <div
              key={item}
              className="flex min-h-12 items-center justify-center rounded-lg border border-neutral-200  px-3 py-4 text-center text-xs lg:text-[16px] font-semibold  text-neutral-800"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
