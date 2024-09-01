import { BlogPosts } from 'app/components/posts';
import Image from 'next/image';

export default function Page() {
  return (
    <section>
      <div className="w-40 h-40 relative mb-8">
        <Image
          src="/SanPatricio.JPG"
          alt="Photo of author"
          layout="fill"
          className="rounded-full object-cover shadow-2xl"
        />
      </div>
      
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

//The mb-8 on line 7 stands for margin bottom 7. You use margin for outside the element, and you use padding for within