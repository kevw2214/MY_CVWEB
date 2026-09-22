import { cvData } from "./data/cvData"
import heroBackground from "./assets/hero-background.jpg"
import { SideNav } from "./components/SideNav"
import { ProfileCard } from "./components/ProfileCard"
import { About } from "./components/About"
import { Experience } from "./components/Experience"
import { Education } from "./components/Education"
import { Skills } from "./components/Skills"
import { Certifications } from "./components/Certifications"
import { Languages } from "./components/Languages"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen bg-background text-ink">
      <SideNav />

      <div className="pt-20 lg:pl-20 lg:pt-0">
        <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:py-12">
          <div
            aria-hidden="true"
            className="h-32 rounded-2xl bg-cover bg-center shadow-sm sm:h-44 lg:h-56"
            style={{ backgroundImage: `url(${heroBackground})` }}
          />

          <div className="-mt-10 grid items-start gap-6 sm:-mt-14 lg:grid-cols-[340px_minmax(0,1fr)]">
            <div className="lg:sticky lg:top-8">
              <ProfileCard data={cvData.personal} />
            </div>

            <div className="flex flex-col gap-6">
              <About profile={cvData.profile} personal={cvData.personal} />
              <Experience data={cvData.experience} />
              <Education data={cvData.education} />
              <Skills data={cvData.skills} />
              <Certifications data={cvData.certifications} />
              <Languages data={cvData.languages} />
              <Contact data={cvData.personal} />
            </div>
          </div>
        </main>

        <Footer
          name={cvData.personal.name}
          linkedin={cvData.personal.linkedin}
          github={cvData.personal.github}
        />
      </div>
    </div>
  )
}
