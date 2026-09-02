import { skillData } from "../locales/skills";
import { getTranslation } from "../locales/translate";
import SectionHeader from "./SectionHeader";

export default function SkillsSection({ locale }) {
  const skills = skillData[locale] || skillData.en;

  return (
    <section id="skills" className="section content-section alt-bg reveal-section">
      <SectionHeader
        eyebrow={getTranslation("skills_label", locale)}
        title={getTranslation("skills_title", locale)}
        align="center"
      />

      <div className="container skill-list">
        {skills.map((skill) => (
          <span key={skill} className="skill-pill">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
