import { useEffect, useState } from "react"
import { Briefcase, GraduationCap, Mail, User, Wrench } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"

const NAV_ITEMS = [
  { id: "about", label: "Sobre mí", icon: User },
  { id: "experience", label: "Experiencia", icon: Briefcase },
  { id: "education", label: "Educación", icon: GraduationCap },
  { id: "skills", label: "Habilidades", icon: Wrench },
  { id: "contact", label: "Contacto", icon: Mail },
] as const

export function SideNav() {
  const [active, setActive] = useState<string>(NAV_ITEMS[0].id)

  useEffect(() => {
    const sections = NAV_ITEMS
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null)

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
  }, [])

  return (
    <nav
      aria-label="Navegación principal"
      className="fixed z-40 flex bg-surface border-line top-0 left-0 right-0 h-16 flex-row items-center px-3 border-b lg:bottom-0 lg:right-auto lg:h-auto lg:w-20 lg:flex-col lg:border-b-0 lg:border-r lg:px-0 lg:py-4"
    >
      <div className="flex flex-1 items-center gap-1 overflow-x-auto lg:w-full lg:flex-col lg:justify-center lg:gap-2 lg:overflow-visible">
        {NAV_ITEMS.map((item) => {
          const isActive = active === item.id
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={isActive ? "true" : undefined}
              className={`flex shrink-0 flex-col items-center gap-1 rounded-lg px-3 py-2 transition-colors lg:w-14 ${
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted hover:bg-primary/10 hover:text-primary"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="hidden text-[10px] font-medium leading-tight lg:block lg:text-center">
                {item.label}
              </span>
            </a>
          )
        })}
      </div>
      <ThemeToggle />
    </nav>
  )
}
