import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ContactHero from "@/components/contact-page/ContactHero";
import BookingSection from "@/components/contact-page/BookingSection";
import ContactAlternative from "@/components/contact-page/ContactAlternative";

export const metadata = {
  title: "Contact & Book a Session | L2M Coaching & Mentoring",
  description:
    "Book a free 30-minute coaching conversation with Lloyd Munyaviri, ICF Certified Coach. Start the conversation today — no pressure, no obligation.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactHero />
        <BookingSection />
        <ContactAlternative />
      </main>
      <Footer />
    </>
  );
}
