import { BlogPosts } from 'app/components/posts'
import SkillsSection from 'app/skills/page'
import EducationSection from 'app/education/page'

export default function Page() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-8 text-neutral-800 dark:text-neutral-100">
      {/* Intro */}
      <h1 className="mb-6 text-3xl font-bold tracking-tight">Welcome to Austin Foley's Portfolio</h1>
      <p className="mb-6">
        Austin is always ready to bring out the best in others through his work.
        As he steps into web development, he brings skills honed as a music producer—adapting quickly to new tools,
        solving problems creatively, and organizing information to tell a clear story. He focuses on frontend development
        and content management, using tools like Sitecore and Next.js to build fast, user-centered experiences.
        As a collaborator, he values trust, communication, and flexibility—essentials for creating meaningful digital products.
      </p>

      {/* Education */}
      <h2 className="mt-12 mb-4 text-2xl font-semibold tracking-tight"></h2>
      <EducationSection />

      {/* Projects */}
      <h2 className="mt-12 mb-4 text-2xl font-semibold tracking-tight">What I'm Working On</h2>
      <BlogPosts />

      {/* Skills */}
      <h2 className="mt-12 mb-4 text-2xl font-semibold tracking-tight">Technical Skills</h2>
      <SkillsSection />


    </section>
  )
}
