import { Reveal } from "./reveal"

export function About() {
  return (
    <section id="about" aria-label="About me" className="py-20 border-t border-white/10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h3 className="text-2xl font-semibold">About Me</h3>
        </Reveal>
        <div className="mt-8">
          <Reveal>
            <div className="text-slate-300 leading-relaxed space-y-4 max-w-3xl">
              <p>
                I’m a full stack developer who enjoys turning complex requirements into simple, reliable products. I
                build with Next.js on the frontend and Spring Boot on the backend—optimizing for performance, security,
                and great UX.
              </p>
              <p>
                Recently, I’ve improved SSR/SSG performance, integrated robust APIs, and delivered role-based apps with
                secure authentication and clean data models. I also practice DSA and system design to keep my core
                engineering skills sharp.
              </p>
              <p>
                I’m currently pursuing B.Tech in CSE at Bennett University (’26) with a CGPA of 9.27, and I love
                collaborating with teams to ship high-quality features.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
