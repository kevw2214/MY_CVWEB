import type { Skills } from "../types/cv"
import { Code2, Users } from "lucide-react"
import { Section } from "./Section"

interface SkillsProps {
  data: Skills
}

export function Skills({ data }: SkillsProps) {
  if (data.technical.length === 0 && data.professional.length === 0) return null

  const groups = [
    { title: "Habilidades técnicas", icon: Code2, skills: data.technical },
    { title: "Habilidades profesionales", icon: Users, skills: data.professional },
  ]

  return (
    <Section id="skills" title="Habilidades">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {groups
          .filter((group) => group.skills.length > 0)
          .map((group) => (
            <article
              key={group.title}
              className="rounded-xl border border-line bg-background p-5 transition-colors hover:border-primary"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <group.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-ink">{group.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-muted transition-colors hover:border-primary hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
      </div>
    </Section>
  )
}
