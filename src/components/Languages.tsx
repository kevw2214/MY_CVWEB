import type { Language } from "../types/cv"
import { Section } from "./Section"

interface LanguagesProps {
  data: Language[]
}

export function Languages({ data }: LanguagesProps) {
  if (data.length === 0) return null

  return (
    <Section id="languages" title="Idiomas">
      <dl className="language-list">
        {data.map((lang) => (
          <div key={lang.id} className="language-entry">
            <dt>{lang.language}</dt>
            <dd>{lang.level}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
