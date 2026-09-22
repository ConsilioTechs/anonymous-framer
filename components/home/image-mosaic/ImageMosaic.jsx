export default function ImageMosaic({ images }) {
  if (!images || images.length < 5) {
    return (
      <div className="relative mt-12 grid gap-5 md:grid-cols-2">
        {images?.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className={`overflow-hidden bg-neutral-200 ${image.className}`}
          >
            <img className="image-cover" src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    );
  }

  const [img1, img2, img3, img4, img5] = images;

  return (
    <div className="relative mt-12 flex flex-col gap-5">
      <span className="corner-mark top-right" />
      <span className="corner-mark bottom-left" />

      {/* Row 1: Full-width Landscape Image (1st image) */}
      <div className="w-full overflow-hidden bg-neutral-200 h-64 sm:h-80 md:h-[440px]">
        <img
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          src={img1.src}
          alt={img1.alt}
        />
      </div>

      {/* Row 2: 2nd and 3rd Images on the Same Line (50% / 50%) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
        <div className="overflow-hidden bg-neutral-200 h-60 sm:h-72 md:h-[320px]">
          <img
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            src={img2.src}
            alt={img2.alt}
          />
        </div>
        <div className="overflow-hidden bg-neutral-200 h-60 sm:h-72 md:h-[320px]">
          <img
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            src={img3.src}
            alt={img3.alt}
          />
        </div>
      </div>

      {/* Row 3: 4th (35% width) and 5th (65% width) Images on the Same Line */}
      <div className="flex flex-col md:flex-row gap-5 w-full">
        {/* 4th Image - 35% */}
        <div className="w-full md:w-[calc(35%-0.625rem)] overflow-hidden bg-neutral-200 h-60 sm:h-72 md:h-[340px] shrink-0">
          <img
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            src={img4.src}
            alt={img4.alt}
          />
        </div>

        {/* 5th Image - 65% */}
        <div className="w-full md:w-[calc(65%-0.625rem)] overflow-hidden bg-neutral-200 h-60 sm:h-72 md:h-[340px] shrink-0">
          <img
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            src={img5.src}
            alt={img5.alt}
          />
        </div>
      </div>
    </div>
  );
}
