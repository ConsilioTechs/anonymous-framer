import DealBanner from "@/components/home/deal-banner/DealBanner";
import Faq from "@/components/home/faq/Faq";
import Footer from "@/components/footer/Footer";
import Gallery from "@/components/home/gallery/Gallery";
import Hero from "@/components/home/hero/Hero";
import LogoStrip from "@/components/home/logo-strip/LogoStrip";
import Partners from "@/components/home/partners/Partners";
import Process from "@/components/home/process/Process";
import Projects from "@/components/home/projects/Projects";
import Services from "@/components/home/services/Services";
import Stats from "@/components/home/stats/Stats";
import Subscribe from "@/components/home/subscribe/Subscribe";
import Testimonials from "@/components/home/testimonials/Testimonials";
import WhyWork from "@/components/home/why-work/WhyWork";

export default function Home() {
  return (
    <main className="bg-paper text-ink">
      <Hero />
      <Stats />
      <LogoStrip />
      <Partners />
      <Projects />
      <Services />
      <Gallery />
      <WhyWork />
      <Process />
      <Testimonials />
      <DealBanner />
      <Subscribe />
      <Faq />
      <Footer />
    </main>
  );
}
