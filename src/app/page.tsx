import AboutPage from "./about/page";
import ProjectsPage from "./projects/page";
import SkillsPage from "./skills/page";
import FloatingArrowBtn from "@/components/common/FloatingArrowBtn";

export default function Home() {
  return (
    <section id="home static">
      <FloatingArrowBtn />
      <AboutPage />
      <SkillsPage />
      <ProjectsPage />
    </section>
  );
}
