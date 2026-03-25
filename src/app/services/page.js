import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ServicesHero from "@/components/services-page/ServicesHero";
import ServicesLeadershipNudge from "@/components/services-page/ServicesLeadershipNudge";
import ServicesSection from "@/components/services-page/ServicesSection";
import ServicesCTA from "@/components/services-page/ServicesCTA";

export const metadata = {
  title: "Services | L2M Coaching & Mentoring",
  description:
    "Professional coaching, leadership development, and family support from L2M Coaching. Explore 1:1 coaching, team coaching, family connection coaching, and the Level 7 Leadership Development Programme.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesHero />
        <ServicesLeadershipNudge />
        <ServicesSection />
        <ServicesCTA />
      </main>
      <Footer />
    </>
  );
}
