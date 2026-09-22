import { projectImages } from "../data";
import ImageMosaic from "../image-mosaic/ImageMosaic";

export default function Projects() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container-x">
        <p className="text-[16px] lg:text-[20px] text-[#FF3B1F] mb-2 uppercase">Printing showcase</p>
        <h2 className="mt-4 max-w-2xl text-4xl font-extrabold uppercase lg:leading-[70px] md:text-[56px]">
          Design to be seen, <br />
          made <span className="text-[#FF3B1F]">to be held</span>
        </h2>
        <ImageMosaic images={projectImages} />
      </div>
    </section>
  );
}
