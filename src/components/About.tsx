import type { Profile } from "../types/cv"
import { Section } from "./Section"

interface AboutProps {
  profile: Profile
}

export function About({ profile }: AboutProps) {
  return (
    <Section id="about" title="Perfil profesional">
      <p className="profile-summary">{profile.summary}</p>
    </Section>
  )
}
