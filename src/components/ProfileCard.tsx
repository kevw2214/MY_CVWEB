import type { PersonalInfo } from "../types/cv"
import { Download, Mail, MapPin, Phone, Send } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "./icons"

interface ProfileCardProps {
  data: PersonalInfo
}

export function ProfileCard({ data }: ProfileCardProps) {
  const initials = data.name
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()

  const socials = [
    { href: `mailto:${data.email}`, icon: Mail, label: "Email", show: data.email !== "" },
    { href: `tel:${data.phone.replace(/\s/g, "")}`, icon: Phone, label: "Teléfono", show: data.phone !== "" },
    { href: `https://linkedin.com/${data.linkedin}`, icon: LinkedinIcon, label: "LinkedIn", show: data.linkedin !== "" },
    { href: `https://github.com/${data.github}`, icon: GithubIcon, label: "GitHub", show: data.github !== "" },
  ]

  return (
    <aside className="overflow-hidden rounded-2xl border border-line bg-surface shadow-sm">
      {data.photo !== "" ? (
        <img
          src={data.photo}
          alt={`${data.name} perfil`}
          className="aspect-square w-full object-cover"
        />
      ) : (
        <div className="flex aspect-square w-full items-center justify-center bg-primary/10">
          <span className="text-6xl font-extrabold text-primary">{initials}</span>
        </div>
      )}

      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold text-ink">{data.name}</h1>
        <p className="mt-1 text-sm font-semibold text-primary">{data.profession}</p>
        <p className="mt-2 flex items-center justify-center gap-1.5 text-sm text-muted">
          <MapPin className="h-4 w-4" />
          {data.location}
        </p>

        <div className="mt-4 flex justify-center gap-2">
          {socials
            .filter((social) => social.show)
            .map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-primary hover:text-primary"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
        </div>
      </div>

      <div className="grid grid-cols-2 border-t border-line">
        <button
          onClick={() => window.print()}
          className="flex items-center justify-center gap-2 border-r border-line py-3.5 text-xs font-semibold uppercase tracking-wider text-ink transition-colors hover:bg-primary hover:text-white"
        >
          <Download className="h-4 w-4" />
          Descargar CV
        </button>
        <a
          href="#contact"
          className="flex items-center justify-center gap-2 py-3.5 text-xs font-semibold uppercase tracking-wider text-ink transition-colors hover:bg-primary hover:text-white"
        >
          <Send className="h-4 w-4" />
          Contáctame
        </a>
      </div>
    </aside>
  )
}
