import { BlogPosts } from 'app/components/posts'
import { getBlogPosts } from 'app/blog/utils'
import Link from 'next/link'
import { PAGINATION_PER_PAGE } from 'blog.config'

export async function generateStaticParams() {
  let posts = getBlogPosts()

  let entries = PAGINATION_PER_PAGE

  let pagination = posts.length%entries==0?Math.floor(posts.length/entries):Math.floor(posts.length/entries)+1

  return Array.from({ length: pagination }, (_, index) => index + 1).map((id) => ({
    slug: id.toString(),
  }))
}

export default function Page({ params }: { params: { slug: String } }) {
  let entries = PAGINATION_PER_PAGE
  let total = getBlogPosts().length
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Recent Posts
      </h1>
      <p className="mb-4 dark:text-gray-300">
        {`Page ${params.slug}`}
      </p>
      <div className="my-8">
        <BlogPosts pageId={params.slug} entries={entries} />
      </div>

      <div className="flex flex-col items-center">
        <span className="text-sm text-gray-700 dark:text-gray-400">
            Showing <span className="font-semibold text-gray-900 dark:text-white">{`${Number(params.slug)*entries-entries+1}`}</span> to <span className="font-semibold text-gray-900 dark:text-white">{`${Number(params.slug)*entries}`}</span> of <span className="font-semibold text-gray-900 dark:text-white">{`${total}`}</span> Entries
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          {
            Number(params.slug)==1?
            <></>:
            <Link
                  key={Number(params.slug)-1}
                  href={`/${Number(params.slug)-1}`}
            >
              <button className="cursor-pointer flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                  </svg>
                  {`Previous(${Number(params.slug)-1})`}
              </button>
            </Link>
          }
          {
            entries*Number(params.slug)>=total?
            <></>:
            <Link
                  key={Number(params.slug)+1}
                  href={`/${Number(params.slug)+1}`}
            >
            <button className="cursor-pointer flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                {`Next(${Number(params.slug)+1})`}
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </button>
            </Link>
          }
        </div>
      </div>
    </section>
  )
}
