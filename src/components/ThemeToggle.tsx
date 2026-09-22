import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const toggleTheme = () => {
    const html = document.documentElement
    const isDark = html.classList.contains("dark")
    html.classList.toggle("dark", !isDark)
    localStorage.setItem("theme", isDark ? "light" : "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300"
      aria-label="Cambiar modo claro/oscuro"
    >
      <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
      <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300 hidden" />
    </button>
  )
}