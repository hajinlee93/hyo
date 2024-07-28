import SkillGrid from "@/components/skills/SkillGrid";
import { skills } from "../../../data/skills/skillData";
export default function SkillsPage() {
  return (
    <section id="pray" className="h-full py-24 selection:bg-brown_color">
      <h2 className="text-center font-dohyeon text-brown_color text-xl md:text-3xl mb-10 selection:bg-redbrown_color">
        이번주 기도 제목
      </h2>
      <SkillGrid skills={skills} />
    </section>
  );
}
