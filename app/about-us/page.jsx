import {
  AboutApproach,
  AboutBeliefs,
  AboutCapabilities,
  AboutCta,
  AboutHero,
  AboutIntro,
} from "@/components/about";
import Footer from "@/components/footer/Footer";

export default function AboutUsPage() {
  return (
    <main className="bg-paper text-ink">
      <AboutHero />
      <AboutIntro />
      <AboutBeliefs />
      <AboutApproach />
      <AboutCapabilities />
      <AboutCta />
      <Footer />
    </main>
  );
}
