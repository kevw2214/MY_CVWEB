import type { PersonalInfo, Profile } from "../types/cv"
import { Download, Mail, MapPin } from "lucide-react"
import heroBackground from "../assets/hero-background.jpg"
import cvPdf from "../assets/cv/CV - FULLSTACK.pdf"

interface IdentityHeroProps {
  data: PersonalInfo
  profile: Profile
}

export function IdentityHero({ data, profile }: IdentityHeroProps) {
  return (
    <section
      id="top"
      aria-labelledby="profile-name"
      className="identity-hero"
    >
      <div
        aria-hidden="true"
        className="identity-hero__art"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />

      <div className="identity-hero__content">
        {data.location !== "" && (
          <p className="identity-hero__location">
            <MapPin aria-hidden="true" className="h-4 w-4" />
            {data.location}
          </p>
        )}

        <h1 id="profile-name" className="identity-hero__name">
          {data.name}
        </h1>
        <p className="identity-hero__profession">{data.profession}</p>
        <p className="identity-hero__summary">{profile.heroSummary}</p>

        <div className="identity-hero__actions">
          {data.email !== "" && (
            <a className="hero-action hero-action--primary" href="#contact">
              <Mail aria-hidden="true" className="h-4 w-4" />
              Contactar
            </a>
          )}
          <a
            href={cvPdf}
            download="CV - FULLSTACK.pdf"
            className="hero-action hero-action--quiet"
          >
            <Download aria-hidden="true" className="h-4 w-4" />
            Descargar CV
          </a>
        </div>
      </div>

      <aside className="identity-hero__focus" aria-label="Áreas de trabajo">
        {data.photo !== "" && (
          <img
            src={data.photo}
            alt={`${data.name}, foto de perfil`}
            className="identity-hero__portrait"
          />
        )}
        <h2>Trabajo entre</h2>
        <ul>
          {profile.focusAreas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </aside>
    </section>
  )
}
