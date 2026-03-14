import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Trust from "@/components/trust/Trust";
import Problem from "@/components/problem/Problem";
import Process from "@/components/process/Process";
import Services from "@/components/services/Services";
import Testimonials from "@/components/testimonials/Testimonials";
import About from "@/components/about/About";
import LeadMagnet from "@/components/lead-magnet/LeadMagnet";
import CTA from "@/components/cta/CTA";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Problem />
        <Process />
        <Services />
        <Testimonials />
        <About />
        <LeadMagnet />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
