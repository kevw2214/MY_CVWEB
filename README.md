# CV Professional Template

Una plantilla de currículum profesional minimalista y reutilizable construida con React, TypeScript y Tailwind CSS.

## 🚀 Características

- **Diseño minimalista**: Solo blanco, negro y escala de grises
- **Modo claro/oscuro**: Con preferencia en localStorage
- **Totalmente responsive**: Funciona en móvil, tablet y escritorio
- **Datos centralizados**: Toda la información en `src/data/cvData.ts`
- **Secciones opcionales**: Se ocultan automáticamente si no tienen datos
- **Sin proyectos**: Solo información profesional (según especificación)
- **Chips de habilidades**: Sin porcentajes ni barras
- **Iconos Lucide React**: Para una interfaz limpia

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
├── components/     # Componentes de UI
│   ├── Header.tsx      # Foto, nombre, contacto, botones
│   ├── Profile.tsx     # Perfil profesional
│   ├── Experience.tsx  # Experiencia laboral (línea de tiempo)
│   ├── Education.tsx   # Educación académica
│   ├── Skills.tsx      # Habilidades (chips)
│   ├── Certifications.tsx  # Certificaciones
│   ├── Languages.tsx   # Idiomas
│   ├── Contact.tsx     # Datos de contacto
│   ├── ThemeToggle.tsx # Modo claro/oscuro
│   └── Footer.tsx      # Footer
├── data/           # Datos del CV
│   └── cvData.ts     # Información centralizada
├── types/          # Definiciones TypeScript
│   └── cv.ts         # Tipos de datos
└── config/         # Configuración
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

- **Colores**: Blanco, negro, escala de grises
- **No**: Colores llamativos, degradados, azul, verde, rojo, morado
- **Usado grises para**: Bordes, separadores, texto secundario, estados hover

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

El botón "Descargar CV" está preparado para conectar con un servicio de generación de PDF en el futuro. Para implementar completamente, se necesita integrar una librería como `jspdf` o una API backend.

## 🌙 Modo Nocturno

- Cambiar haciendo clic en el botón sol/luna
- La preferencia se guarda automáticamente en localStorage
- Los colores se ajustan suavemente entre modos

## 📄 Licencia

Este proyecto está bajo la licencia MIT.