import { GithubIcon, LinkedinIcon } from "./icons"

interface FooterProps {
  name: string
  linkedin: string
  github: string
}

export function Footer({ name, linkedin, github }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p>
          {name} <span>{currentYear}</span>
        </p>
        <nav aria-label="Redes profesionales" className="site-footer__links">
          {linkedin !== "" && (
            <a
              href={`https://linkedin.com/${linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-link"
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
              className="social-link"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
          )}
        </nav>
      </div>
    </footer>
  )
}
