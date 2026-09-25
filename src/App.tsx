import { cvData } from "./data/cvData"
import { SideNav } from "./components/SideNav"
import { IdentityHero } from "./components/IdentityHero"
import { About } from "./components/About"
import { Experience } from "./components/Experience"
import { Education } from "./components/Education"
import { Skills } from "./components/Skills"
import { Certifications } from "./components/Certifications"
import { Languages } from "./components/Languages"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"

export default function App() {
  const availableSections = [
    "about",
    ...(cvData.experience.length > 0 ? ["experience"] : []),
    ...(cvData.education.length > 0 ? ["education"] : []),
    ...(cvData.skills.technical.length > 0 || cvData.skills.professional.length > 0
      ? ["skills"]
      : []),
    ...(cvData.certifications.length > 0 ? ["certifications"] : []),
    ...(cvData.languages.length > 0 ? ["languages"] : []),
    "contact",
  ]

  return (
    <div className="min-h-screen bg-background text-ink">
      <a className="skip-link" href="#main-content">
        Saltar al contenido
      </a>
      <SideNav name={cvData.personal.name} availableSections={availableSections} />

      <main
        id="main-content"
        tabIndex={-1}
        className="site-main mx-auto w-full max-w-[1440px] px-4 pb-14 pt-6 sm:px-6 lg:px-10 lg:pt-10"
      >
        <IdentityHero data={cvData.personal} profile={cvData.profile} />

        <div className="cv-layout">
          <div className="cv-main-column">
            <About profile={cvData.profile} />
            <Experience data={cvData.experience} />
            <Education data={cvData.education} />
          </div>

          <aside className="cv-side-column" aria-label="Formación y habilidades">
            <Skills data={cvData.skills} />
            <Certifications data={cvData.certifications} />
            <Languages data={cvData.languages} />
          </aside>
        </div>

        <Contact data={cvData.personal} />
      </main>

      <Footer
        name={cvData.personal.name}
        linkedin={cvData.personal.linkedin}
        github={cvData.personal.github}
      />
    </div>
  )
}
