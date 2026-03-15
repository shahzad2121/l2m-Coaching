import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import CTA from "@/components/cta/CTA";
import AboutHero from "@/components/about-page/AboutHero";
import AboutMission from "@/components/about-page/AboutMission";
import AboutServices from "@/components/about-page/AboutServices";
import FounderStory from "@/components/about-page/FounderStory";
import CoachingApproach from "@/components/about-page/CoachingApproach";
import WhoIWorkWith from "@/components/about-page/WhoIWorkWith";
import MeetTheCoach from "@/components/about-page/MeetTheCoach";

export const metadata = {
  title: "About Lloyd Munyaviri | L2M Coaching & Mentoring",
  description:
    "Meet Lloyd Munyaviri — ICF certified coach, EMCC Senior Practitioner, Chartered Manager, and founder of L2M Coaching. Over 1800 coaching hours helping professionals and managers unlock their potential.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <AboutMission />
        <AboutServices />
        <FounderStory />
        <CoachingApproach />
        <WhoIWorkWith />
        <MeetTheCoach />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
