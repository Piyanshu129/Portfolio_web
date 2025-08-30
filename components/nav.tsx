"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
]

export function NavBar() {
  const [active, setActive] = useState<string>("")

  const observer = useMemo(
    () =>
      typeof window !== "undefined"
        ? new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  setActive(entry.target.id)
                }
              })
            },
            { rootMargin: "-45% 0px -50% 0px", threshold: 0.01 },
          )
        : null,
    [],
  )

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean) as Element[]
    els.forEach((el) => observer?.observe(el))
    return () => els.forEach((el) => observer?.unobserve(el))
  }, [observer])

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
      <nav className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link href="#" className="font-semibold tracking-tight">
          {/* Left: Name/Logo */}
          Portfolio
        </Link>

        <ul className="flex items-center gap-6 text-sm">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={cn(
                  "transition-colors hover:text-[#3b82f6]",
                  active === s.id ? "text-[#3b82f6]" : "text-slate-200",
                )}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
