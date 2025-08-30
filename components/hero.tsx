"use client"

import { Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "./reveal"

export function Hero() {
  return (
    <section aria-label="Hero" className="relative min-h-[92vh] flex items-center">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-20">
        <Reveal>
          <p className="text-sm text-slate-300">Hi, I’m</p>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="text-pretty text-4xl sm:text-5xl lg:text-6xl font-bold mt-2">Piyanshu Saini</h1>
        </Reveal>

        <Reveal delay={200}>
          <h2 className="text-pretty text-xl sm:text-2xl text-slate-300 mt-3">
            Software Engineer · Full Stack Developer · DSA Enthusiast
          </h2>
        </Reveal>

        <Reveal delay={300}>
          <p className="max-w-2xl text-slate-300 leading-relaxed mt-6">
            Building fast, reliable products with Next.js and Spring Boot. Focused on performance (SSR/SSG), secure
            auth, clean APIs, and thoughtful UX. B.Tech CSE ’26 @ Bennett University (CGPA 9.27).
          </p>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild className="bg-[#3b82f6] hover:bg-[#2563eb]">
              <a href="#projects">View My Work</a>
            </Button>
            <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
              <a href="https://drive.google.com/file/d/1rGCcWORfDXEPrlDnVF5EoXgLPMgojlwc/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </Button>
            <div className="flex items-center gap-3 ml-2">
              <a
                href="https://github.com/Piyanshu129"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md border border-white/10 hover:border-white/30 hover:bg-white/5 transition"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/piyanshu-saini-08ba3b251/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md border border-white/10 hover:border-white/30 hover:bg-white/5 transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
