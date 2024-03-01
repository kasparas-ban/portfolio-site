'use client'

import { useEffect, useState } from 'react'
import '@theme-toggles/react/css/Classic.css'
import { Classic } from '@theme-toggles/react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'

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
  const pathname = usePathname()

  return (
    <nav className="flex flex-row gap-3 font-title font-semibold md:flex-col">
      {links.map((link) => (
        <Link
          href={link.href}
          key={link.href}
          className={clsx(
            'block w-fit border-b-2',
            pathname === link.href
              ? 'border-gray-500 text-gray-800 dark:border-gray-200 dark:text-gray-100 dark:hover:text-gray-100'
              : 'border-white text-gray-400 hover:text-gray-700 dark:border-[#111010] dark:text-gray-400 dark:hover:text-gray-300'
          )}
        >
          {link.name}
        </Link>
      ))}
      <ThemeToggle />
    </nav>
  )
}

function ThemeToggle() {
  const systemTheme =
    typeof window !== 'undefined'
      ? window.matchMedia?.('(prefers-color-scheme:dark)')?.matches
        ? 'dark'
        : 'light'
      : undefined
  const [theme, setTheme] = useState(systemTheme || 'light')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const handleToggle = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))

  return (
    <Classic
      toggled={theme !== 'dark'}
      toggle={handleToggle}
      className="ml-auto flex w-fit text-gray-400 hover:text-gray-700 dark:text-gray-400 hover:dark:text-gray-100 md:mx-auto [&_svg]:h-8 [&_svg]:w-8"
    />
  )
}
