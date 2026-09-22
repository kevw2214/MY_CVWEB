import type { ReactNode } from "react"

interface SectionProps {
  id: string
  title: string
  children: ReactNode
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 rounded-2xl border border-line bg-surface p-6 shadow-sm sm:p-8"
    >
      <h2 className="text-xl font-bold text-ink sm:text-2xl">{title}</h2>
      <div className="mb-6 mt-2 h-1 w-10 rounded bg-primary" />
      {children}
    </section>
  )
}
