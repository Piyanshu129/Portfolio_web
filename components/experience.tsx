import { Reveal } from "./reveal"

export function Experience() {
  return (
    <section id="experience" aria-label="Experience" className="py-20 border-t border-white/10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h3 className="text-2xl font-semibold">Experience</h3>
        </Reveal>

        <div className="mt-8 space-y-8">
          <Reveal>
            <article className="rounded-xl border border-white/10 bg-white/5 p-5">
              <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h4 className="font-semibold">ExSquared-AI/ML Intern</h4>
                <span className="text-sm text-slate-300">Aug 2025 – Present</span>
              </header>
              <ul className="mt-3 list-disc list-inside text-slate-300 space-y-1">
                <li>Building and deploying machine learning models for real-world applications.</li>
                <li>Working on model optimization, explainability, and scalable APIs.</li>
                <li>Collaborating on AI-driven solutions to enhance automation and insights.</li>
              </ul>
            </article>
          </Reveal>
          <Reveal>
            <article className="rounded-xl border border-white/10 bg-white/5 p-5">
              <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h4 className="font-semibold">Frontend Developer — Careease (Remote)</h4>
                <span className="text-sm text-slate-300">Jul 2024 – Oct 2024</span>
              </header>
              <ul className="mt-3 list-disc list-inside text-slate-300 space-y-1">
                <li>Developed and optimized UIs with Next.js for a seamless UX.</li>
                <li>Integrated APIs and managed state for dynamic data rendering.</li>
                <li>Improved performance and SEO via SSR and SSG.</li>
              </ul>
            </article>
          </Reveal>

          <Reveal delay={100}>
            <article className="rounded-xl border border-white/10 bg-white/5 p-5">
              <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h4 className="font-semibold">Trainee — ICSD Tech Lab, Panipat</h4>
                <span className="text-sm text-slate-300">May 2023 – Jul 2023</span>
              </header>
              <ul className="mt-3 list-disc list-inside text-slate-300 space-y-1">
                <li>Worked on backend development with Spring Boot and MySQL.</li>
                <li>Implemented secure authentication and improved API performance.</li>
                <li>Focused on performance tuning and robust user management.</li>
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
