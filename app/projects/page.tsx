import { BlogPosts } from 'app/components/posts'
import Link from 'next/link'

const projectItems = {
  '/projects/brookfield': {
    name: 'brookfield',
  },
  '/projects/portfoliosite': {
    name: 'portfoliosite',
  },
  '/projects/coffeeapp': {
    name: 'coffeeapp',
  },
}

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Learn about what I'm working on:</h1>
          <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(projectItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
    </section>
  )
}
