interface FooterProps {
  name: string
  linkedin: string
  github: string
}

export function Footer({ name, linkedin, github }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 py-6 max-w-7xl mx-auto">
      <p className="text-center text-sm text-gray-600 dark:text-gray-300">
        {name} - {currentYear}
      </p>
      <div className="mt-3 flex justify-center sm:justify-start gap-3">
        {linkedin && (
          <a
            href={`https://linkedin.com/${linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-300 transition-colors text-sm"
          >
            LinkedIn
          </a>
        )}

        {github && (
          <a
            href={`https://github.com/${github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-300 transition-colors text-sm"
          >
            GitHub
          </a>
        )}
      </div>
    </footer>
  )
}