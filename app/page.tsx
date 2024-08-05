import { BlogPosts } from 'app/components/posts'
import { HOME_CONTENT,HOME_TITLE } from 'blog.config'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        {HOME_TITLE}
      </h1>
      <p className="mb-4">
        {HOME_CONTENT}
      </p>
    </section>
  )
}
