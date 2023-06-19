'use client'

import clsx from 'clsx';
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const links = [
  {
    href: '/',
    name: 'Home',
  },
  {
    href: '/resume',
    name: 'Resume',
  },
  {
    href: '/projects',
    name: 'Projects',
  },
]

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-row gap-3 font-semibold md:flex-col font-title">
      {links.map(link => (
        <Link href={link.href} key={link.href} className={clsx("block w-fit border-b-2 hover:text-gray-700 text-gray-500 dark:text-gray-300", pathname === link.href ? "text-gray-800 border-gray-500 dark:border-gray-200" : 'border-white dark:border-[#111010]')}>
          {link.name}
        </Link>
      ))}
    </nav>
  )
}
