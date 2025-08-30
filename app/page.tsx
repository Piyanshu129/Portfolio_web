import { NavBar } from "@/components/nav"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"
import { Experience } from "@/components/experience"
import { Education } from "@/components/education"

export default function HomePage() {
  return (
    <main>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <SiteFooter />
    </main>
  )
}
