import type { PersonalInfo } from "../types/cv"

interface HeaderProps {
  data: PersonalInfo
}

export function Header({ data }: HeaderProps) {
  const showPhoto = data.photo !== ""

  return (
    <header className="border-b border-gray-200 dark:border-gray-700 pb-6 min-h-[80px]">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 max-w-7xl mx-auto px-4">
        <div className="flex-1">

          {showPhoto && (
            <img
              src={data.photo}
              alt={ `${data.name} perfil` }
              className="w-20 h-20 rounded-full object-cover sm:w-24 sm:h-20 mb-4 sm:mb-0"
            />
          )}

          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-1">
              {data.name}
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
              {data.profession}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {data.location}
            </p>
          </div>
        </div>

        <div className="self-center sm:self-start">

          <div className="mt-2 sm:mt-0 flex flex-col sm:flex-row gap-2">
            <a href={`mailto:${data.email}`} className="text-gray-600 dark:text-gray-300 hover:underline text-sm">
              {data.email}
            </a>
            <a href={`tel:${data.phone}`} className="text-gray-600 dark:text-gray-300 hover:underline text-sm">
              {data.phone}
            </a>
          </div>

          <div className="mt-2 sm:mt-0 flex flex-col sm:flex-row gap-2">
            {data.linkedin && (
              <a href={`https://linkedin.com/${data.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-300 transition-colors text-sm">
                LinkedIn
              </a>
            )}

            {data.github && (
              <a href={`https://github.com/${data.github}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-300 transition-colors text-sm">
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}