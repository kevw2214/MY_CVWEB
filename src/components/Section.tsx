import type { ReactNode } from "react"

interface SectionProps {
  id: string
  title: string
  children: ReactNode
  className?: string
}

export function Section({ id, title, children, className }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`resume-section${className ? ` ${className}` : ""}`}
    >
      <h2 id={`${id}-heading`} className="resume-section__heading">
        {title}
      </h2>
      <div className="resume-section__body">{children}</div>
    </section>
  )
}
