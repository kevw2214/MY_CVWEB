import type { PersonalInfo } from "../types/cv"
import { Mail, Phone, MapPin } from "lucide-react"

interface ContactProps {
  data: PersonalInfo
}

export function Contact({ data }: ContactProps) {
  return (
    <section id="contact" className="py-10 max-w-7xl mx-auto border-t border-gray-200 dark:border-gray-700 pt-8">
      <div className="flex flex-col sm:flex-row gap-6 max-w-7xl mx-auto">
        <div className="flex items-start gap-3 flex-1">
          <span className="w-6 h-6 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs font-medium text-gray-600 dark:text-gray-300">
            <Mail className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </span>
          <div>
            <p className="text-gray-600 dark:text-gray-300 font-medium">Correo electrónico</p>
            <a href={`mailto:${data.email}`} className="text-gray-600 dark:text-gray-300 hover:underline">
              {data.email}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="w-6 h-6 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs font-medium text-gray-600 dark:text-gray-300">
            <Phone className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </span>
          <div>
            <p className="text-gray-600 dark:text-gray-300 font-medium">Teléfono</p>
            <a href={`tel:${data.phone}`} className="text-gray-600 dark:text-gray-300 hover:underline">
              {data.phone}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="w-6 h-6 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs font-medium text-gray-600 dark:text-gray-300">
            <MapPin className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </span>
          <div>
            <p className="text-gray-600 dark:text-gray-300 font-medium">Ubicación</p>
            <p className="text-gray-500 dark:text-gray-400">
              {data.location}
            </p>
          </div>
        </div>

        {data.linkedin && (
          <div className="mt-4 sm:mt-0">
            <p className="text-gray-600 dark:text-gray-300 font-medium mb-1">LinkedIn</p>
            <a
              href={`https://linkedin.com/${data.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:underline"
            >
              linkedin.com/{data.linkedin}
            </a>
          </div>
        )}

        {data.github && (
          <div className="mt-4 sm:mt-0">
            <p className="text-gray-600 dark:text-gray-300 font-medium mb-1">GitHub</p>
            <a
              href={`https://github.com/${data.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:underline"
            >
              github.com/{data.github}
            </a>
          </div>
        )}

        <button
          className="mt-6 sm:mt-0 w-full sm:w-auto py-3 px-6 border border-gray-300 dark:border-gray-600 rounded text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          Enviar correo electrónico
        </button>
      </div>
    </section>
  )
}