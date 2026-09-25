import type { Experience } from "../types/cv"
import { Section } from "./Section"

interface ExperienceProps {
  data: Experience[]
}

export function Experience({ data }: ExperienceProps) {
  if (data.length === 0) return null

  return (
    <Section id="experience" title="Experiencia">
      <ol className="experience-list">
        {data.map((exp) => (
          <li key={exp.id} className="experience-item">
            <p className="experience-period">
              {exp.startDate} — {exp.endDate || "Presente"}
            </p>

            <div className="experience-entry">
              <h3>{exp.position}</h3>
              <p className="experience-company">
                <span>{exp.company}</span>
                {exp.location !== "" && <span>{exp.location}</span>}
              </p>

              {exp.description !== "" && (
                <p className="experience-description">{exp.description}</p>
              )}

              {(exp.responsibilities.length > 0 || exp.achievements.length > 0) && (
                <div className="experience-details">
                  {exp.responsibilities.length > 0 && (
                    <div>
                      <h4>Responsabilidades</h4>
                      <ul className="resume-list">
                        {exp.responsibilities.map((responsibility) => (
                          <li key={responsibility}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {exp.achievements.length > 0 && (
                    <div>
                      <h4>Aportes clave</h4>
                      <ul className="resume-list">
                        {exp.achievements.map((achievement) => (
                          <li key={achievement}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
