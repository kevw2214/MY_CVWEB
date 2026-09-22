import { cvData } from "./data/cvData"
import { Header } from "./components/Header"
import { Profile } from "./components/Profile"
import { Experience } from "./components/Experience"
import { Education } from "./components/Education"
import { Skills } from "./components/Skills"
import { Certifications } from "./components/Certifications"
import { Languages } from "./components/Languages"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { ThemeToggle } from "./components/ThemeToggle"

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <Header data={cvData.personal} />

      <main className="max-w-7xl mx-auto px-4">
        <Profile data={cvData.profile} />

        <Experience data={cvData.experience} />

        <Education data={cvData.education} />

        <Skills data={cvData.skills} />

        <Certifications data={cvData.certifications} />

        <Languages data={cvData.languages} />

        <Contact data={cvData.personal} />
      </main>

      <Footer
        name={cvData.personal.name}
        linkedin={cvData.personal.linkedin}
        github={cvData.personal.github}
      />

      <ThemeToggle />
    </div>
  )
}