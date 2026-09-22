import { GithubIcon, LinkedinIcon } from "./icons"

interface FooterProps {
  name: string
  linkedin: string
  github: string
}

export function Footer({ name, linkedin, github }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-line py-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-4 sm:flex-row sm:px-6">
        <p className="text-sm text-muted">
          {name} · {currentYear}
        </p>
        <div className="flex items-center gap-2">
          {linkedin !== "" && (
            <a
              href={`https://linkedin.com/${linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-primary hover:text-primary"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          )}
          {github !== "" && (
            <a
              href={`https://github.com/${github}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-primary hover:text-primary"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </footer>
  )
}
