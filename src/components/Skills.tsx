import type { Skills } from "../types/cv"

interface SkillsProps {
  data: Skills
}

export function Skills({ data }: SkillsProps) {
  return (
    <section id="skills" className="py-10 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-black dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
        Habilidades
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">

        <div className="sm:col-span-2">
          <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-3">Habilidades técnicas</h3>
          <div className="flex flex-wrap gap-2">
            {data.technical.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded text-xs font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="sm:col-span-2">
          <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-3">Habilidades profesionales</h3>
          <div className="flex flex-wrap gap-2">
            {data.professional.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded text-xs font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}