import type React from "react"
import { Reveal } from "./reveal"

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-200">
      {children}
    </span>
  )
}

export function Skills() {
  return (
    <section id="skills" aria-label="My tech stack" className="py-20 border-t border-white/10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h3 className="text-2xl font-semibold">My Tech Stack</h3>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Reveal>
            <div>
              <h4 className="font-medium text-slate-200">Languages</h4>
              <div className="mt-4 flex flex-wrap gap-2">
                <Tag>Java</Tag>
                <Tag>C++</Tag>
                <Tag>Python</Tag>
                <Tag>JavaScript</Tag>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div>
              <h4 className="font-medium text-slate-200">Web & Frameworks</h4>
              <div className="mt-4 flex flex-wrap gap-2">
                <Tag>React</Tag>
                <Tag>Next.js</Tag>
                <Tag>Spring Boot</Tag>
                <Tag>Hibernate</Tag>
                <Tag>JSP</Tag>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div>
              <h4 className="font-medium text-slate-200">Databases</h4>
              <div className="mt-4 flex flex-wrap gap-2">
                <Tag>MySQL</Tag>
                <Tag>MongoDB</Tag>
                <Tag>Oracle SQL</Tag>
              </div>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div>
              <h4 className="font-medium text-slate-200">Dev Tools</h4>
              <div className="mt-4 flex flex-wrap gap-2">
                <Tag>Git</Tag>
                <Tag>Docker</Tag>
                <Tag>VS Code</Tag>
                <Tag>Postman</Tag>
              </div>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div>
              <h4 className="font-medium text-slate-200">Core CS Areas</h4>
              <div className="mt-4 flex flex-wrap gap-2">
                <Tag>DSA</Tag>
                <Tag>OOP</Tag>
                <Tag>System Design</Tag>
                <Tag>REST APIs</Tag>
                <Tag>AI/ML</Tag>
                <Tag>Computer Vision</Tag>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
