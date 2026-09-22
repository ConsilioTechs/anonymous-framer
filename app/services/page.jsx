import Footer from "@/components/footer/Footer";
import {
  ServicesCta,
  ServicesHero,
  ServicesList,
} from "@/components/services";

export default function ServicesPage() {
  return (
    <main className="bg-paper text-ink">
      <ServicesHero />
      <ServicesList />
      <ServicesCta />
      <Footer />
    </main>
  );
}
