import type { Experience } from "../types/cv"

interface ExperienceProps {
  data: Experience[]
}

export function Experience({ data }: ExperienceProps) {
  if (data.length === 0) return null

  return (
    <section id="experience" className="py-10 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-black dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
        Experiencia
      </h2>
      <div className="space-y-4">
        {data.map((exp) => (
          <div key={exp.id} className="border-l-4 border-gray-300 dark:border-gray-600 pl-6 pb-4 transition-colors hover:border-gray-400 dark:hover:border-gray-500">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-black dark:text-white">
                {exp.position}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {exp.startDate} - {exp.endDate || "Presente"}
              </p>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-1">
              {exp.company}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-1">
              {exp.location}
            </p>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li className="font-medium">{exp.description}</li>
              {exp.responsibilities.map((res, i) => (
                <li key={i} className="pl-2">
                  {res}
                </li>
              ))}
              {exp.achievements.length > 0 && (
                <li className="text-gray-800 dark:text-gray-200 font-semibold">
                  Logros: {exp.achievements.join(", ")}
                </li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}