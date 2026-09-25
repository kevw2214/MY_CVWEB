import { useEffect, useMemo, useState } from "react"
import { ThemeToggle } from "./ThemeToggle"

const NAV_ITEMS = [
  { id: "about", label: "Perfil" },
  { id: "experience", label: "Experiencia" },
  { id: "education", label: "Formación" },
  { id: "skills", label: "Habilidades" },
  { id: "certifications", label: "Certificaciones" },
  { id: "languages", label: "Idiomas" },
  { id: "contact", label: "Contacto" },
] as const

interface SideNavProps {
  name: string
  availableSections: string[]
}

export function SideNav({ name, availableSections }: SideNavProps) {
  const items = useMemo(
    () => NAV_ITEMS.filter((item) => availableSections.includes(item.id)),
    [availableSections]
  )
  const [active, setActive] = useState<string>(items[0]?.id ?? "about")

  const nameParts = name.trim().split(/\s+/).filter(Boolean)
  const shortName =
    nameParts.length > 2
      ? `${nameParts[0] ?? ""} ${nameParts[nameParts.length - 2] ?? ""}`
      : name
  const initials = `${nameParts[0]?.[0] ?? ""}${nameParts[nameParts.length > 2 ? nameParts.length - 2 : 1]?.[0] ?? ""}`.toUpperCase()

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [items])

  return (
    <nav aria-label="Navegación principal" className="site-nav">
      <div className="site-nav__inner">
        <a className="site-brand" href="#top" aria-label={`${name}, volver al inicio`}>
          <span aria-hidden="true" className="site-brand__mark">
            {initials}
          </span>
          <span className="site-brand__name">{shortName}</span>
        </a>

        <div className="site-nav__scroll">
          <div className="site-nav__links">
            {items.map((item) => {
              const isActive = active === item.id
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={isActive ? "location" : undefined}
                  className={`site-nav__link${isActive ? " is-active" : ""}`}
                >
                  {item.label}
                </a>
              )
            })}
          </div>
        </div>

        <ThemeToggle />
      </div>
    </nav>
  )
}
