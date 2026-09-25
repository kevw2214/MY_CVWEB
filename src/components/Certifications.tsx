import type { Certification } from "../types/cv"
import { ExternalLink } from "lucide-react"
import { Section } from "./Section"

interface CertificationsProps {
  data: Certification[]
}

export function Certifications({ data }: CertificationsProps) {
  if (data.length === 0) return null

  return (
    <Section id="certifications" title="Certificaciones">
      <div className="certification-list">
        {data.map((cert) => (
          <article key={cert.id} className="certification-entry">
            <h3>{cert.name}</h3>
            <p className="certification-institution">
              {cert.institution}
              {cert.date !== "" && `, ${cert.date}`}
            </p>
            {cert.link !== "" && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Ver certificado
                <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}
