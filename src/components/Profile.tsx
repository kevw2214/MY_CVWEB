import type { Profile } from "../types/cv"

interface ProfileProps {
  data: Profile
}

export function Profile({ data }: ProfileProps) {
  return (
    <section id="profile" className="py-12 max-w-7xl mx-auto">
      <div className="border-b border-gray-200 dark:border-gray-700 pb-8 mb-8">
        <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
          Perfil profesional
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relax">
          {data.summary}
        </p>
      </div>
    </section>
  )
}