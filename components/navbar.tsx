import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex flex-row gap-3 font-semibold md:flex-col">
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
