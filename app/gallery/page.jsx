import Footer from "@/components/footer/Footer";
import { GalleryCta, GalleryHero, GalleryTabs } from "@/components/gallery";

export default function GalleryPage() {
  return (
    <main className="bg-paper text-ink">
      <GalleryHero />
      <GalleryTabs />
      <GalleryCta />
      <Footer />
    </main>
  );
}
