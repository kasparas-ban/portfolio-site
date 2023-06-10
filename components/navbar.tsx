import Link from 'next/link'

const navItems = {
  '/': {
    name: 'home',
  },
  '/resume': {
    name: 'resume',
  },
  '/projects': {
    name: 'projects',
  },
}

export default function Navbar() {
  //TEST

  return (
    <nav className="flex flex-row gap-3 bg-red-400 max-md:justify-center md:flex-col">
      <Link href="/" className="block">
        Home
      </Link>
      <Link href="/resume" className="block">
        Resume
      </Link>
      <Link href="/projects" className="block">
        Projects
      </Link>
    </nav>
  )
}
