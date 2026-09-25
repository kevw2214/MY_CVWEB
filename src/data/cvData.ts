import type { CvData } from "../types/cv"
import profilePhoto from "../assets/foto para mi cv.jpg"

export const cvData: CvData = {
  personal: {
    name: "Kevin David Cerpa Santander",
    profession: "Desarrollador Full Stack y analista de datos",
    location: "Barranquilla, Colombia",
    email: "kevindavidcerpa@gmail.com",
    phone: "+57 3012042883",
    linkedin: "in/kevin-davidcerpasantander-b2a8b3323",
    github: "kevw2214",
    photo: profilePhoto,
  },

  profile: {
    summary:
      "Ingeniero de Sistemas con experiencia en desarrollo Full Stack y análisis de datos. He participado en proyectos empresariales creando soluciones digitales, dashboards e indicadores para apoyar la toma de decisiones. Me enfoco en resolver problemas y mejorar procesos junto a equipos multidisciplinarios bajo metodologías ágiles.",
    heroSummary:
      "Uno desarrollo Full Stack y análisis de datos para apoyar procesos operativos y convertir información en decisiones más claras.",
    focusAreas: [
      "Desarrollo de aplicaciones",
      "Análisis de operaciones",
      "Visualización de datos",
    ],
  },

  experience: [
    {
      id: "1",
      position: "Practicante de Ingeniería de Sistemas",
      company: "INSPEGAS S.A.S.",
      location: "Barranquilla, Colombia",
      startDate: "03/2026",
      endDate: "09/2026",
      description:
        "Apoyo en procesos tecnológicos, análisis de información operativa y seguimiento de plataformas empresariales.",
      responsibilities: [
        "Seguimiento operativo y control de inspecciones mediante plataformas empresariales",
        "Análisis de datos relacionados con productividad, horarios e inspecciones",
        "Soporte a aplicaciones móviles utilizadas por inspectores en campo",
        "Gestión y seguimiento de incidencias reportadas por usuarios",
        "Elaboración de reportes operativos y validación de información",
        "Colaboración con equipos multidisciplinarios para garantizar la continuidad tecnológica",
      ],
      achievements: [
        "Construcción de dashboards e indicadores en Power BI",
        "Generación de reportes para el monitoreo de operaciones",
        "Análisis de información por sedes y departamentos",
      ],
    },
  ],

  education: [
    {
      id: "1",
      program: "Ingeniería de Sistemas",
      institution: "Universidad Libre",
      location: "Barranquilla, Colombia",
      startDate: "2021",
      endDate: "2026",
      status: "En formación",
    },
    {
      id: "2",
      program: "Bachiller Académico",
      institution: "IED Jorge Isaacs",
      location: "Barranquilla, Colombia",
      startDate: "2015",
      endDate: "2021",
      status: "Graduado",
    },
  ],

  skills: {
    technical: [
      "React",
      "JavaScript",
      "Node.js",
      "Python",
      "SQL Server",
      "Power BI",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Excel",
      "Git",
      "GitHub",
      "Figma",
      "Java",
      "Visualización de Datos",
      "Dashboards y KPIs",
      "ETL Básico",
      "Responsive Design",
    ],
    professional: [
      "Resolución de Problemas",
      "Pensamiento Analítico",
      "Trabajo en Equipo",
      "Comunicación",
      "Adaptabilidad",
      "Metodologías Ágiles",
      "SCRUM",
      "Mejora Continua",
    ],
  },

  certifications: [
  {
    id: "1",
    name: "Bootcamp de Análisis de Datos",
    institution: "MinTIC",
    date: "",
    link: "",
  },
  {
    id: "2",
    name: "Ponente del proyecto 'Diseño del Aplicativo Móvil para la Empresa MAXXICAR'",
    institution: "RedCOLSI",
    date: "",
    link: "",
  },
],

  languages: [
    {
      id: "1",
      language: "Español",
      level: "Nativo",
    },
    {
      id: "2",
      language: "Inglés",
      level: "Intermedio",
    },
  ],
}
