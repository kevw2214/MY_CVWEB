import type { PersonalInfo, Profile } from "../types/cv"
import { Section } from "./Section"

interface AboutProps {
  profile: Profile
  personal: PersonalInfo
}

export function About({ profile, personal }: AboutProps) {
  const info = [
    { label: "Ubicación", value: personal.location, show: personal.location !== "" },
    { label: "Email", value: personal.email, show: personal.email !== "" },
    { label: "Teléfono", value: personal.phone, show: personal.phone !== "" },
    { label: "LinkedIn", value: personal.linkedin, show: personal.linkedin !== "" },
    { label: "GitHub", value: personal.github, show: personal.github !== "" },
  ]

  return (
    <Section id="about" title="Sobre mí">
      <p className="leading-relaxed text-muted">{profile.summary}</p>

      <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
        {info
          .filter((item) => item.show)
          .map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <dt className="shrink-0 rounded-md bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                {item.label}
              </dt>
              <dd className="truncate text-sm text-ink">{item.value}</dd>
            </div>
          ))}
      </dl>
    </Section>
  )
}
