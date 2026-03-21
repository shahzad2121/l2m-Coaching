import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import TestimonialsHero from "@/components/testimonials-page/TestimonialsHero";
import FeaturedCaseStudies from "@/components/testimonials-page/FeaturedCaseStudies";
import TestimonialsGrid from "@/components/testimonials-page/TestimonialsGrid";
import VisualBreak from "@/components/testimonials-page/VisualBreak";
import TransformationThemes from "@/components/testimonials-page/TransformationThemes";
import WhoThisIsFor from "@/components/testimonials-page/WhoThisIsFor";
import TestimonialsCTA from "@/components/testimonials-page/TestimonialsCTA";

export const metadata = {
  title: "Testimonials & Case Studies | L2M Coaching & Mentoring",
  description:
    "Discover real client transformations through L2M Coaching. Read case studies and testimonials from professionals, leaders, and families who found clarity, confidence, and direction.",
};

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main>
        <TestimonialsHero />
        <FeaturedCaseStudies />
        <TestimonialsGrid />
        <VisualBreak />
        <TransformationThemes />
        <WhoThisIsFor />
        <TestimonialsCTA />
      </main>
      <Footer />
    </>
  );
}
