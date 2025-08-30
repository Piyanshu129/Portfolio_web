import type React from "react"
import { Reveal } from "./reveal"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

type Project = {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  liveUrl: string
  codeUrl: string
  tags: string[]
}

const PROJECTS: Project[] = [
  {
    title: "EduFlow (LMS)",
    description:
      "Modern LMS with role-based access, JWT auth, lectures with readings + MCQs, sequential unlocks, and real‑time progress.",
    imageSrc: "/eduflow-lms-dashboard.png",
    imageAlt: "EduFlow LMS dashboard",
    liveUrl: "#",
    codeUrl: "https://github.com/Piyanshu129",
    tags: ["Next.js", "TypeScript", "Tailwind", "Spring Boot", "MySQL", "JWT"],
  },
  {
    title: "TicketTrack",
    description:
      "Full-stack ticketing system with JWT auth, role-based access (Admin, Agent, User), CRUD, reassignment, and status tracking.",
    imageSrc: "/tickettrack-ticketing-app.png",
    imageAlt: "TicketTrack app interface",
    liveUrl: "#",
    codeUrl: "https://github.com/Piyanshu129",
    tags: ["Next.js", "Spring Boot", "MySQL", "RBAC", "JWT"],
  },
  {
    title: "StaffSync (EMS)",
    description:
      "Employee management app featuring employee CRUD, department management, and real-time updates for HR workflows.",
    imageSrc: "/staffsync-ems.png",
    imageAlt: "StaffSync EMS interface",
    liveUrl: "#",
    codeUrl: "https://github.com/Piyanshu129",
    tags: ["React", "Spring Boot", "MySQL"],
  },
  {
    title: "ShopEase",
    description: "E-commerce application with product management, cart, and CRUD operations backed by RESTful APIs.",
    imageSrc: "/shopease-ecommerce.png",
    imageAlt: "ShopEase app interface",
    liveUrl: "#",
    codeUrl: "https://github.com/Piyanshu129",
    tags: ["React", "Spring Boot", "REST API", "MySQL"],
  },
  {
    title: "Pose Estimation",
    description: "Deep learning-based human pose detection using computer vision techniques.",
    imageSrc: "/pose-estimation-computer-vision.png",
    imageAlt: "Pose estimation visualization",
    liveUrl: "#",
    codeUrl: "https://github.com/Piyanshu129",
    tags: ["Computer Vision", "AI/ML"],
  },
  {
    title: "License Plate Recognition",
    description: "OCR-based system to detect and extract vehicle number plates.",
    imageSrc: "/license-plate-recognition-ocr.png",
    imageAlt: "License plate recognition demo",
    liveUrl: "#",
    codeUrl: "https://github.com/Piyanshu129",
    tags: ["OCR", "Computer Vision", "AI/ML"],
  },
  {
    title: "Business Card OCR",
    description: "OCR pipeline to extract key fields from business cards using OpenCV and text recognition.",
    imageSrc: "/business-card-ocr-screenshot.png",
    imageAlt: "Business Card OCR demo",
    liveUrl: "#",
    codeUrl: "https://github.com/Piyanshu129/Buisness_card_ocr",
    tags: ["Python", "OpenCV", "OCR"],
  },
  {
    title: "TaskFlow",
    description: "Task management app with projects, statuses, and streamlined workflows.",
    imageSrc: "/task-management-dashboard.png",
    imageAlt: "TaskFlow app interface",
    liveUrl: "#",
    codeUrl: "https://github.com/Piyanshu129/taskflow",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Wallet App (Spring Boot)",
    description: "Spring Boot wallet service with transactions, authentication, and persistence.",
    imageSrc: "/wallet-app-spring-boot-ui.png",
    imageAlt: "Wallet app backend and UI",
    liveUrl: "#",
    codeUrl: "https://github.com/Piyanshu129/Wallet_app_springboot",
    tags: ["Spring Boot", "Java", "MySQL"],
  },
]

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-slate-200">
      {children}
    </span>
  )
}

export function Projects() {
  return (
    <section id="projects" aria-label="Projects I’ve built" className="py-20 border-t border-white/10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h3 className="text-2xl font-semibold">Projects I&apos;ve Built</h3>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <article className="group rounded-xl border border-white/10 bg-white/5 overflow-hidden hover:border-white/20 transition">
                <div className="aspect-video bg-black/30">
                  <img src={p.imageSrc || "/placeholder.svg"} alt={p.imageAlt} className="h-full w-full object-cover" />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold">{p.title}</h4>
                  <p className="text-sm text-slate-300 mt-1">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    <Button asChild size="sm" className="bg-[#3b82f6] hover:bg-[#2563eb]">
                      <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">
                        Live Demo <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                    >
                      <a href={p.codeUrl} target="_blank" rel="noopener noreferrer">
                        View Code <Github className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
