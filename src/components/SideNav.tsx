import { useEffect, useMemo, useRef, useState } from "react"
import { X } from "lucide-react"
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
  photo: string
  availableSections: string[]
}

export function SideNav({ name, photo, availableSections }: SideNavProps) {
  const items = useMemo(
    () => NAV_ITEMS.filter((item) => availableSections.includes(item.id)),
    [availableSections]
  )
  const [active, setActive] = useState<string>(items[0]?.id ?? "about")
  const photoDialogRef = useRef<HTMLDialogElement>(null)

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
        <div className="site-brand">
          {photo !== "" ? (
            <button
              type="button"
              className="site-brand__mark site-brand__avatar"
              aria-label={`Ampliar foto de perfil de ${name}`}
              aria-haspopup="dialog"
              onClick={() => photoDialogRef.current?.showModal()}
            >
              <img src={photo} alt="" />
            </button>
          ) : (
            <a className="site-brand__mark" href="#top" aria-label={`${name}, volver al inicio`}>
              {initials}
            </a>
          )}
          <a className="site-brand__name" href="#top">
            {shortName}
          </a>
        </div>

        {photo !== "" && (
          <dialog
            ref={photoDialogRef}
            className="profile-photo-dialog"
            aria-labelledby="profile-photo-title"
            onClick={(event) => {
              if (event.target === event.currentTarget) event.currentTarget.close()
            }}
          >
            <h2 id="profile-photo-title" className="sr-only">
              Foto de perfil de {name}
            </h2>
            <img
              src={photo}
              alt={`Foto de perfil de ${name}`}
              className="profile-photo-dialog__image"
            />
            <button
              type="button"
              autoFocus
              className="profile-photo-dialog__close"
              aria-label="Cerrar foto ampliada"
              onClick={() => photoDialogRef.current?.close()}
            >
              <X aria-hidden="true" className="h-5 w-5" />
            </button>
          </dialog>
        )}

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
