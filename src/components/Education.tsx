import type { Education } from "../types/cv"

interface EducationProps {
  data: Education[]
}

export function Education({ data }: EducationProps) {
  if (data.length === 0) return null

  return (
    <section id="education" className="py-10 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-black dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
        Educación
      </h2>
      <div className="space-y-4">
        {data.map((edu) => (
          <div key={edu.id} className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 pb-4 transition-colors hover:border-gray-400 dark:hover:border-gray-500">
            <h3 className="text-xl font-bold text-black dark-text-white mb-1">
              {edu.program}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-1">
              {edu.institution}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-1">
              {edu.location}
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              {edu.startDate} - {edu.endDate}
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Estado: {edu.status}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}