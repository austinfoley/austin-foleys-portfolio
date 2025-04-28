import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`Austin is always ready to bring out the best in others through his work. 
        As he steps into web development, he brings skills honed as a music 
        producer—adapting quickly to new tools, solving problems creatively, and organizing information to tell a clear story. 
        He focuses on frontend development and content management, using tools like 
        Sitecore and Next.js to build fast, user-centered experiences. As a collaborator, he values trust, 
        communication, and flexibility—essentials for creating meaningful digital products.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
