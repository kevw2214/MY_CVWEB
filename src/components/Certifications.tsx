import type { Certification } from "../types/cv"

interface CertificationsProps {
  data: Certification[]
}

export function Certifications({ data }: CertificationsProps) {
  if (data.length === 0) return null

  return (
    <section id="certifications" className="py-10 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-black dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
        Certificaciones
      </h2>
      <div className="space-y-3">
        {data.map((cert) => (
          <div key={cert.id} className="border-l-4 border-gray-300 dark:border-gray-600 pl-3 pb-3 transition-colors hover:border-gray-400 dark:hover:border-gray-500">
            <h3 className="text-xl font-bold text-black dark-text-white">
              {cert.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {cert.institution}
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              {cert.date}
            </p>
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:underline text-sm"
              >
                Ver certificado
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}