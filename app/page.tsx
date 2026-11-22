import Navbar from "@/components/layout/Navbar";
import { AboutSection } from "@/components/Section/AboutSection";
import { ContactSection } from "@/components/Section/ContactSection";
import { EducationSection } from "@/components/Section/EducationSection";
import HeroSection from "@/components/Section/HeroSection";
import { ProjectsSection } from "@/components/Section/ProjectsSection";
import { SkillsSection } from "@/components/Section/SkillsSections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
    </>
  );
}
