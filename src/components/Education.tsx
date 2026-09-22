import type { Education } from "../types/cv"
import { GraduationCap } from "lucide-react"
import { Section } from "./Section"

interface EducationProps {
  data: Education[]
}

export function Education({ data }: EducationProps) {
  if (data.length === 0) return null

  return (
    <Section id="education" title="Educación">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {data.map((edu) => (
          <article
            key={edu.id}
            className="rounded-xl border border-line bg-background p-5 transition-colors hover:border-primary"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <GraduationCap className="h-5 w-5" />
            </div>
            <h3 className="text-base font-semibold text-ink">{edu.program}</h3>
            <p className="mt-0.5 text-sm text-muted">
              {edu.institution} · {edu.location}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                {edu.startDate} – {edu.endDate}
              </span>
              <span className="rounded-full border border-line px-2.5 py-0.5 text-xs font-medium text-muted">
                {edu.status}
              </span>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
