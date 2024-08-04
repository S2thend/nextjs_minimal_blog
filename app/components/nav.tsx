import Link from 'next/link'
import Image from 'next/image'
import { AVATAR } from '../../blog.config'

const navItems = {
  '/': {
    name: 'home',
  },
  '/1': {
    name: 'blog',
  },
  'https://vercel.com/templates/next.js/portfolio-starter-kit': {
    name: 'deploy',
  },
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="items-center flex flex-row space-x-0 grow">
            {Object.entries(navItems).map(([path, { name }]) => {
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
            <Link
              key={"avatar"}
              href={"https://github.com/S2thend"}
              className="ml-auto items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
            >
              <p className='italic'>by</p>
              <div className="cursor-pointer relative ml-3">
                  <Image className="w-10 h-10 rounded-full" src={AVATAR} alt="avatar" width={500} height={500}/>
                  <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
              </div>
            </Link>
          </div>
        </nav>
      </div>
    </aside>
  )
}
