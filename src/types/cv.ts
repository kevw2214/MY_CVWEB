export interface PersonalInfo {
  name: string
  profession: string
  location: string
  email: string
  phone: string
  linkedin: string
  github: string
  photo: string
}

export interface Profile {
  summary: string
  heroSummary: string
  focusAreas: string[]
}

export interface Experience {
  id: string
  position: string
  company: string
  location: string
  startDate: string
  endDate: string | null
  description: string
  responsibilities: string[]
  achievements: string[]
}

export interface Education {
  id: string
  program: string
  institution: string
  location: string
  startDate: string
  endDate: string
  status: string
}

export interface Skills {
  technical: string[]
  professional: string[]
}

export interface Certification {
  id: string
  name: string
  institution: string
  date: string
  link: string
}

export interface Language {
  id: string
  language: string
  level: string
}

export interface CvData {
  personal: PersonalInfo
  profile: Profile
  experience: Experience[]
  education: Education[]
  skills: Skills
  certifications: Certification[]
  languages: Language[]
}
