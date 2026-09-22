import type { Experience } from "../types/cv"
import { Section } from "./Section"

interface ExperienceProps {
  data: Experience[]
}

export function Experience({ data }: ExperienceProps) {
  if (data.length === 0) return null

  return (
    <Section id="experience" title="Experiencia">
      <ol className="relative ml-1.5 space-y-8 border-l border-line">
        {data.map((exp) => (
          <li key={exp.id} className="relative pl-6">
            <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-primary/15" />

            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-lg font-semibold text-ink">{exp.position}</h3>
              <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                {exp.startDate} – {exp.endDate || "Presente"}
              </span>
            </div>

            <p className="mt-0.5 text-sm font-medium text-muted">
              {exp.company} · {exp.location}
            </p>

            {exp.description !== "" && (
              <p className="mt-2 text-sm text-muted">{exp.description}</p>
            )}

            {exp.responsibilities.length > 0 && (
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted marker:text-primary">
                {exp.responsibilities.map((responsibility, i) => (
                  <li key={i}>{responsibility}</li>
                ))}
              </ul>
            )}

            {exp.achievements.length > 0 && (
              <p className="mt-2 text-sm text-ink">
                <span className="font-semibold">Logros: </span>
                {exp.achievements.join(", ")}
              </p>
            )}
          </li>
        ))}
      </ol>
    </Section>
  )
}
