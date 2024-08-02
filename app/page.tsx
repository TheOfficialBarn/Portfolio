import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`Hi! My name is Aiden. I'm an aspiring Software Engineer in my Junior year of Computer Science at KU.
        I have a penchant for learning new technologies, optimizing established code, and finding new ways to solve complex problems.
        Connect with me through LinkedIn, and we can chat!`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
