import type { PersonalInfo } from "../types/cv"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Section } from "./Section"

interface ContactProps {
  data: PersonalInfo
}

export function Contact({ data }: ContactProps) {
  const items = [
    { icon: Mail, label: "Correo electrónico", value: data.email, href: `mailto:${data.email}`, show: data.email !== "" },
    { icon: Phone, label: "Teléfono", value: data.phone, href: `tel:${data.phone.replace(/\s/g, "")}`, show: data.phone !== "" },
    { icon: MapPin, label: "Ubicación", value: data.location, href: "", show: data.location !== "" },
  ]

  return (
    <Section id="contact" title="Contacto">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {items
          .filter((item) => item.show)
          .map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  {item.label}
                </p>
                {item.href !== "" ? (
                  <a href={item.href} className="block truncate text-sm font-medium text-ink hover:text-primary">
                    {item.value}
                  </a>
                ) : (
                  <p className="truncate text-sm font-medium text-ink">{item.value}</p>
                )}
              </div>
            </div>
          ))}
      </div>

      {data.email !== "" && (
        <a
          href={`mailto:${data.email}`}
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          <Send className="h-4 w-4" />
          Enviar correo electrónico
        </a>
      )}
    </Section>
  )
}
