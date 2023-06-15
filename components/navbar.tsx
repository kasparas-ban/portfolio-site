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
    <nav className="flex flex-row gap-3 font-semibold md:flex-col">
      {links.map(link => (
        <Link href={link.href} className={clsx("block w-fit border-b-2 dark:text-gray-300", pathname === link.href ? "border-gray-500 dark:border-gray-200" : 'border-white dark:border-[#111010]')}>
          {link.name}
        </Link>
      ))}
    </nav>
  )
}
