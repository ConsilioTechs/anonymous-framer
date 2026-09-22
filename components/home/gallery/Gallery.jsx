import { galleryImages } from "../data";
import ImageMosaic from "../image-mosaic/ImageMosaic";

export default function Gallery() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <p className="lg:text-[20px] text-[16px]  text-[#FF3B1F] uppercase mb-4">Selected work</p>
        <h2 className="mt-6 text-4xl font-black uppercase leading-none md:text-5xl">
          Gallery
        </h2>
        <ImageMosaic images={galleryImages} />
        <div className="mt-10 text-center">
          <a
            href="/gallery"
            className="inline-flex bg-ink px-7 py-5 rounded-xl text-xs font-medium uppercase text-white transition hover:bg-[#FF3B1F]"
          >
            Explore Our Gallery
          </a>
        </div>
      </div>
    </section>
  );
}
