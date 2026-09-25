import type { Skills } from "../types/cv"
import { Section } from "./Section"

interface SkillsProps {
  data: Skills
}

export function Skills({ data }: SkillsProps) {
  if (data.technical.length === 0 && data.professional.length === 0) return null

  const groups = [
    { title: "Técnicas", skills: data.technical },
    { title: "Profesionales", skills: data.professional },
  ]

  return (
    <Section id="skills" title="Habilidades">
      <div className="skill-groups">
        {groups
          .filter((group) => group.skills.length > 0)
          .map((group) => (
            <div key={group.title} className="skill-group">
              <h3>{group.title}</h3>
              <ul className="skill-list">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </Section>
  )
}
