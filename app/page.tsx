import Image from 'next/image'
import { BlogPosts } from 'app/components/posts'
import SkillsSection from 'app/skills/page'
import EducationSection from 'app/education/page'
import ProjectsPage from './projects/page'
import Link from 'next/link'

export default function Page() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-8 text-neutral-800 dark:text-neutral-100">
      {/* Intro with photo */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-10">
        <div className="flex-shrink-0">
          <Image
            src="/profile/me.png" 
            alt="Austin Foley"
            width={1000}
            height={1000}
            className="rounded-full object-cover border-2 border-neutral-300 dark:border-neutral-700"
          />
        </div>
        <div>
          <h1 className="mb-4 text-3xl font-bold tracking-tight">Welcome to Austin Foley's Portfolio</h1>
          <p>
            Austin is always ready to bring out the best in others through his work.
            As he steps into web development, he brings skills honed as a music producer—adapting quickly to new tools,
            solving problems creatively, and organizing information to tell a clear story. He focuses on frontend development
            and content management, using tools like Sitecore and Next.js to build fast, user-centered experiences.
            As a collaborator, he values trust, communication, and flexibility—essentials for creating meaningful digital products.
          </p>
        </div>
      </div>

      {/* Education */}
      <EducationSection />

      {/* Projects */}
      <ProjectsPage />

      {/* Skills */}
      <h2 className="mt-12 mb-4 text-2xl font-semibold tracking-tight">Technical Skills</h2>
      <SkillsSection />
    </section>
  )
}