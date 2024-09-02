import Link from 'next/link'

const navItems = {
  '/': { //This is the path for the home page. It has to exist as a folder in the app directory
    name: 'home', //This is the name of what appears on the nav bar
  },
  '/projects': {
    name: 'projects',
  },
  '/resume': {
    name: 'resume',
  },
  '/tutoring': {
    name: 'tutoring'
  },
  '/contact': {
    name: 'contact',
  },
}

export function Navbar() {
  return (
    <aside className="-ml-[12px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row flex-wrap items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row flex-wrap space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-300 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
