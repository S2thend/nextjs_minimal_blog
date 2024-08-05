import { HOME_CONTENT,HOME_TITLE } from 'blog.config'
import { CustomMDX } from './components/mdx'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        {HOME_TITLE}
      </h1>
      <p className="mb-4 prose">
        <CustomMDX source={HOME_CONTENT}/>
      </p>
    </section>
  )
}
