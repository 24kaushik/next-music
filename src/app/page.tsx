import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import MeetInstructors from "@/components/MeetInstructors";
import { Testimonials } from "@/components/Testimonials";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <Testimonials />
      <UpcomingWebinars />
      <MeetInstructors/>
    </main>
  );
}
