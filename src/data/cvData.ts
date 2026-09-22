import type { CvData } from "../types/cv"

export const cvData: CvData = {
  personal: {
    name: "Lorem Ipsum",
    profession: "Diseñador Web / Desarrollador",
    location: "Ciudad, País",
    email: "correo@email.com",
    phone: "+00 000 000 000",
    linkedin: "in/lorem-ipsum",
    github: "lorem-ipsum",
    photo: "",
  },

  profile: {
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },

  experience: [
    {
      id: "1",
      position: "Cargo Senior Lorem",
      company: "Empresa Lorem",
      location: "Ciudad, País",
      startDate: "01/2023",
      endDate: null,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      responsibilities: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Sed do eiusmod tempor incididunt ut labore et dolore",
        "Ut enim ad minim veniam, quis nostrud exercitation",
      ],
      achievements: [
        "Lorem ipsum dolor sit amet consectetur",
        "Eiusmod tempor incididunt ut labore",
      ],
    },
    {
      id: "2",
      position: "Cargo Semi Senior Ipsum",
      company: "Empresa Ipsum",
      location: "Ciudad, País",
      startDate: "03/2021",
      endDate: "12/2022",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
      responsibilities: [
        "Duis aute irure dolor in reprehenderit in voluptate",
        "Velit esse cillum dolore eu fugiat nulla pariatur",
      ],
      achievements: ["Excepteur sint occaecat cupidatat non proident"],
    },
    {
      id: "3",
      position: "Cargo Junior Dolor",
      company: "Empresa Dolor",
      location: "Ciudad, País",
      startDate: "06/2019",
      endDate: "02/2021",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
      responsibilities: [
        "Sed ut perspiciatis unde omnis iste natus error sit",
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
      ],
      achievements: [],
    },
  ],

  education: [
    {
      id: "1",
      program: "Título Universitario Lorem",
      institution: "Universidad Lorem",
      location: "Ciudad, País",
      startDate: "2015",
      endDate: "2019",
      status: "Graduado",
    },
    {
      id: "2",
      program: "Especialización Ipsum Dolor",
      institution: "Instituto Ipsum",
      location: "Ciudad, País",
      startDate: "2020",
      endDate: "2021",
      status: "Completado",
    },
  ],

  skills: {
    technical: [
      "Lorem",
      "Ipsum",
      "Dolor",
      "Sit Amet",
      "Consectetur",
      "Adipiscing",
      "Elit",
      "Tempor",
    ],
    professional: [
      "Liderazgo",
      "Comunicación",
      "Trabajo en equipo",
      "Resolución de problemas",
      "Adaptabilidad",
    ],
  },

  certifications: [
    {
      id: "1",
      name: "Certificación Lorem Ipsum",
      institution: "Institución Lorem",
      date: "2023",
      link: "https://ejemplo.com",
    },
    {
      id: "2",
      name: "Certificación Dolor Sit",
      institution: "Institución Ipsum",
      date: "2022",
      link: "",
    },
  ],

  languages: [
    { id: "1", language: "Español", level: "Nativo" },
    { id: "2", language: "Inglés", level: "B2" },
  ],
}
