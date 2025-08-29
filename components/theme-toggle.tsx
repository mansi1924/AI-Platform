"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    // Prevent hydration mismatch
    return (
      <Button variant="outline" size="icon" aria-label="Toggle theme" className="h-9 w-9 bg-transparent">
        <Sun className="h-4 w-4" />
      </Button>
    )
  }

  const isDark = (theme ?? resolvedTheme) === "dark"

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label={`Activate ${isDark ? "light" : "dark"} mode`}
      className="h-9 w-9 bg-transparent"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  )
}
