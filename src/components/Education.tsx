import type { Education } from "../types/cv"
import { Section } from "./Section"

interface EducationProps {
  data: Education[]
}

export function Education({ data }: EducationProps) {
  if (data.length === 0) return null

  return (
    <Section id="education" title="Formación">
      <div className="education-list">
        {data.map((edu) => (
          <article key={edu.id} className="education-entry">
            <p className="education-period">
              {edu.startDate} — {edu.endDate}
            </p>
            <h3>{edu.program}</h3>
            <p className="education-institution">
              {edu.institution}
              {edu.location !== "" && `, ${edu.location}`}
            </p>
            {edu.status !== "" && <p className="education-status">{edu.status}</p>}
          </article>
        ))}
      </div>
    </Section>
  )
}
