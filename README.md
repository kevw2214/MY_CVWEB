# CV Professional Template

Una plantilla de currículum profesional minimalista y reutilizable construida con React, TypeScript y Tailwind CSS.

## 🚀 Características

- **Diseño profesional tipo card**: Navegación lateral con iconos, tarjeta de perfil sticky y secciones en tarjetas
- **Hero banner**: Imagen de portada (`src/assets/hero-background.jpg`) con las tarjetas superpuestas
- **Paleta slate + acento azul**: Basada en design tokens CSS (`src/index.css`)
- **Modo claro/oscuro**: Con preferencia en localStorage y sin flash al cargar
- **Navegación con scroll-spy**: El ícono activo se resalta según la sección visible
- **Totalmente responsive**: Barra superior en móvil, rail lateral en escritorio
- **Datos centralizados**: Toda la información en `src/data/cvData.ts`
- **Secciones opcionales**: Se ocultan automáticamente si no tienen datos
- **Chips de habilidades**: Sin porcentajes ni barras
- **Iconos Lucide React**: Para una interfaz limpia (marcas en SVG inline)

## 📦 Instalación

```bash
npm install
```

## ▶️ Ejecución

```bash
npm run dev
```

La aplicación se abrirá en `http://localhost:5173`

## 📁 Estructura del Proyecto

```
src/
├── components/         # Componentes de UI
│   ├── SideNav.tsx         # Navegación con iconos + scroll-spy
│   ├── ProfileCard.tsx     # Tarjeta de perfil (foto, redes, botones)
│   ├── Section.tsx         # Wrapper de sección (card + título + acento)
│   ├── About.tsx           # Sobre mí (perfil + datos personales)
│   ├── Experience.tsx      # Experiencia laboral (línea de tiempo)
│   ├── Education.tsx       # Educación académica
│   ├── Skills.tsx          # Habilidades (chips)
│   ├── Certifications.tsx  # Certificaciones
│   ├── Languages.tsx       # Idiomas
│   ├── Contact.tsx         # Datos de contacto
│   ├── ThemeToggle.tsx     # Modo claro/oscuro
│   ├── icons.tsx           # Iconos de marca (GitHub, LinkedIn) en SVG
│   └── Footer.tsx          # Footer
├── data/               # Datos del CV
│   └── cvData.ts           # Información centralizada
└── types/              # Definiciones TypeScript
    └── cv.ts               # Tipos de datos
```

## 🛠️ Personalización

### Cambiar datos personales

Modifica `src/data/cvData.ts`:

```typescript
export const cvData = {
  personal: {
    name: "Tu Nombre",
    profession: "Tu Profesión",
    location: "Ciudad, País",
    email: "tu@email.com",
    phone: "+00 000 000 000",
    linkedin: "tu-perfil",
    github: "tu-usuario",
    photo: "ruta/foto.jpg", // o "" para none
  },
  // ... resto de secciones
}
```

### Agregar experiencia

```typescript
experience: [
  {
    id: "1",
    position: "Cargo",
    company: "Empresa",
    location: "Ciudad, País",
    startDate: "MM/AAAA",
    endDate: "MM/AAAA",
    description: "Descripción general",
    responsibilities: ["Responsabilidad 1", "Responsabilidad 2"],
    achievements: ["Logro 1", "Logro 2"]
  }
]
```

### Agregar educación

```typescript
education: [
  {
    id: "1",
    program: "Título",
    institution: "Universidad",
    location: "Ciudad, País",
    startDate: "MM/AAAA",
    endDate: "MM/AAAA",
    status: "Graduado"
  }
]
```

### Agregar habilidades técnicas

```typescript
skills: {
  technical: ["Python", "JavaScript", "Docker"],
  professional: ["Liderazgo", "Comunicación"]
}
```

### Agregar certificaciones

```typescript
certifications: [
  {
    id: "1",
    name: "Certificación",
    institution: "Institución",
    date: "AAAA",
    link: "https://ejemplo.com"
  }
]
```

### Agregar idiomas

```typescript
languages: [
  { id: "1", language: "Español", level: "Nativo" },
  { id: "2", language: "Inglés", level: "B2" }
]
```

### Configurar enlaces

Modifica en `cvData.personal`:
- `linkedin`: tu nombre de usuario de LinkedIn
- `github`: tu nombre de usuario de GitHub

### Ocultar secciones

Las secciones se ocultan automáticamente si no tienen datos:
- Sin experiencia → `experience: []`
- Sin educación → `education: []`
- Sin certificaciones → `certifications: []`
- Sin idiomas → `languages: []`
- Sin LinkedIn → `linkedin: ""`
- Sin GitHub → `github: ""`
- Sin foto → `photo: ""`

### Modo claro/oscuro

La preferencia se guarda en `localStorage`. El botón de cambio está en la esquina superior derecha.

### Agregar foto de perfil

1. Agrega tu foto a `src/assets/`
2. Actualiza `cvData.personal.photo` con la ruta

## 🎨 Identidad Visual

Paleta basada en **design tokens CSS** definidos en `src/index.css`:

| Token | Claro | Oscuro | Uso |
| --- | --- | --- | --- |
| `--background` | `#F8FAFC` | `#020617` | Fondo de la página |
| `--surface` | `#FFFFFF` | `#0F172A` | Fondo de tarjetas |
| `--primary` | `#2563EB` | `#3B82F6` | Acentos: títulos, iconos, chips |
| `--secondary` | `#60A5FA` | `#93C5FD` | Acento secundario |
| `--ink` | `#0F172A` | `#F8FAFC` | Texto principal |
| `--muted` | `#64748B` | `#94A3B8` | Texto secundario |
| `--line` | `#E2E8F0` | `#1E293B` | Bordes y separadores |

En los componentes se usan las clases de Tailwind (`bg-surface`, `text-primary`, `border-line`…), nunca valores hex directos. Los tokens cambian solos con el modo oscuro, sin variantes `dark:`.

## 📱 Responsive

- **Móvil**: Una columna, navegación sencilla
- **Tablet**: Adaptación con dos columnas en algunos componentes
- **Escritorio**: Aprovechamiento del espacio horizontal

## 🏗️ Agregar nueva sección

1. Crear un nuevo componente en `src/components/`
2. Agregar el tipo correspondiente en `src/types/cv.ts`
3. Importar y agregar en `src/App.tsx`
4. Verificar visibilidad automática en `cvData.ts`

## 📄 Descargar CV

El botón "Descargar CV" de la tarjeta de perfil usa `window.print()`, que permite guardar la página como PDF desde el navegador. En el futuro se puede integrar una librería como `jspdf` o una API backend para generar un PDF con diseño dedicado.

## 🌙 Modo Nocturno

- Cambiar haciendo clic en el botón sol/luna
- La preferencia se guarda automáticamente en localStorage
- Los colores se ajustan suavemente entre modos

## 📄 Licencia

Este proyecto está bajo la licencia MIT.