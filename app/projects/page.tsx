import { BlogPosts } from 'app/components/posts'
import Link from 'next/link'

const projectItems = {
  '/projects/brookfield': {
    name: 'Brookfield',
  },
  '/projects/portfoliosite': {
    name: 'Portfolio Site',
  },
  '/projects/coffeeapp': {
    name: 'Coffee App',
  },
}

export const metadata = {
  title: 'Projects',
  description: 'Learn more about my projects.',
}

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Learn about what I'm working on:</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Object.entries(projectItems).map(([path, { name }]) => (
          <Link
            key={path}
            href={path}
            className="block p-4 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:shadow-md hover:border-neutral-300 dark:hover:border-neutral-500 transition-all bg-white dark:bg-neutral-900"
          >
            <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">{name}</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">View project →</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
