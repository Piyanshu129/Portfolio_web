import { Github, Linkedin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="py-10 border-t border-white/10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-300">
        <p>Designed &amp; Built by Piyanshu Saini © 2025</p>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Piyanshu129"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md border border-white/10 hover:border-white/30 hover:bg-white/5 transition"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/piyanshu-saini-08ba3b251/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md border border-white/10 hover:border-white/30 hover:bg-white/5 transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
