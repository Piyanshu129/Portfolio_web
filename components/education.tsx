import { Reveal } from "./reveal"

export function Education() {
  return (
    <section id="education" aria-label="Education" className="py-20 border-t border-white/10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h3 className="text-2xl font-semibold">Education</h3>
        </Reveal>

        <Reveal delay={100}>
          <article className="mt-8 rounded-xl border border-white/10 bg-white/5 p-5">
            <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h4 className="font-semibold">Bennett University, India — B.Tech in CSE</h4>
              <span className="text-sm text-slate-300">2022 – 2026</span>
            </header>
            <p className="text-slate-300 mt-2">CGPA: 9.27</p>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
