import { Button } from "@/components/ui/button"
import { Reveal } from "./reveal"

export function Contact() {
  return (
    <section id="contact" aria-label="Get in touch" className="py-24 border-t border-white/10">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <h3 className="text-2xl font-semibold">Get In Touch</h3>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-slate-300 leading-relaxed mt-4">
            My inbox is always open. Whether you have a question or just want to say hi, I&apos;ll get back to you!
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-[#3b82f6] hover:bg-[#2563eb]">
              <a href="mailto:piyanshusaini129@gmail.com">Say Hello</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
