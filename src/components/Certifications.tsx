import type { Certification } from "../types/cv"
import { Award, ExternalLink } from "lucide-react"
import { Section } from "./Section"

interface CertificationsProps {
  data: Certification[]
}

export function Certifications({ data }: CertificationsProps) {
  if (data.length === 0) return null

  return (
    <Section id="certifications" title="Certificaciones">
      <div className="space-y-4">
        {data.map((cert) => (
          <article key={cert.id} className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Award className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <h3 className="text-base font-semibold text-ink">{cert.name}</h3>
              <p className="text-sm text-muted">
                {cert.institution} · {cert.date}
              </p>
              {cert.link !== "" && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  Ver certificado
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
