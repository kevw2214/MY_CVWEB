import type { PersonalInfo } from "../types/cv"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Section } from "./Section"
import { GithubIcon, LinkedinIcon } from "./icons"

interface ContactProps {
  data: PersonalInfo
}

export function Contact({ data }: ContactProps) {
  const items = [
    {
      icon: Mail,
      label: "Correo electrónico",
      value: data.email,
      href: `mailto:${data.email}`,
      show: data.email !== "",
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: data.phone,
      href: `tel:${data.phone.replace(/\s/g, "")}`,
      show: data.phone !== "",
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: data.location,
      href: "",
      show: data.location !== "",
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      value: data.linkedin,
      href: `https://linkedin.com/${data.linkedin}`,
      show: data.linkedin !== "",
    },
    {
      icon: GithubIcon,
      label: "GitHub",
      value: data.github,
      href: `https://github.com/${data.github}`,
      show: data.github !== "",
    },
  ]

  return (
    <Section id="contact" title="Contacto" className="resume-section--contact">
      <div className="contact-layout">
        <p className="contact-intro">
          Escríbeme para conversar sobre proyectos de desarrollo, datos u oportunidades.
        </p>

        <div className="contact-detail-list">
          {items
            .filter((item) => item.show)
            .map((item) => (
              <div key={item.label} className="contact-detail">
                <div className="contact-detail__icon" aria-hidden="true">
                  <item.icon className="h-4 w-4" />
                </div>
                <div className="contact-detail__copy">
                  <p>{item.label}</p>
                  {item.href !== "" ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </div>
              </div>
            ))}
        </div>

        {data.email !== "" && (
          <a href={`mailto:${data.email}`} className="contact-cta">
            <Send aria-hidden="true" className="h-4 w-4" />
            Enviar correo
          </a>
        )}
      </div>
    </Section>
  )
}
