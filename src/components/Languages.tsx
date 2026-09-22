import type { Language } from "../types/cv"
import { Languages as LanguagesIcon } from "lucide-react"
import { Section } from "./Section"

interface LanguagesProps {
  data: Language[]
}

export function Languages({ data }: LanguagesProps) {
  if (data.length === 0) return null

  return (
    <Section id="languages" title="Idiomas">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {data.map((lang) => (
          <article
            key={lang.id}
            className="flex items-center gap-4 rounded-xl border border-line bg-background p-4 transition-colors hover:border-primary"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <LanguagesIcon className="h-5 w-5" />
            </div>
            <div className="flex min-w-0 flex-1 items-center justify-between gap-2">
              <h3 className="truncate text-base font-semibold text-ink">{lang.language}</h3>
              <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                {lang.level}
              </span>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
