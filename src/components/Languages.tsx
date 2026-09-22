import type { Language } from "../types/cv"

interface LanguagesProps {
  data: Language[]
}

export function Languages({ data }: LanguagesProps) {
  if (data.length === 0) return null

  return (
    <section id="languages" className="py-10 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-black dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
        Idiomas
      </h2>
      <div className="space-y-3">
        {data.map((lang) => (
          <div key={lang.id} className="border-l-4 border-gray-300 dark:border-gray-600 pl-3 pb-3 transition-colors hover:border-gray-400 dark:hover:border-gray-500">
            <p className="text-xl font-bold text-black dark-text-white">
              {lang.language}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              {lang.level}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}