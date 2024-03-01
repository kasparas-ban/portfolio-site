import clsx from 'clsx'
import { Merriweather } from 'next/font/google'
import Navbar from '@/components/navbar'
import { Metadata } from 'next'
import './globals.css'

const titleFont = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-merriweather',
})

export const metadata: Metadata = {
  title: {
    default: 'Kasparas Baniulis',
    template: '%s | Kasparas Baniulis',
  },
  description: 'Portfolio site.',
  openGraph: {
    title: 'Kasparas Baniulis',
    description: 'Portfolio site.',
    url: 'https://kasban.info',
    siteName: 'Kasparas Baniulis',
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full bg-white text-black dark:bg-[#111010]',
        titleFont.variable
      )}
    >
      <body className="min-h-screen dark:bg-[#111010]">
        <div className="mx-auto flex h-full min-h-[inherit] max-w-2xl flex-col gap-12 px-4 pt-8 antialiased md:flex-row md:pt-20 lg:pt-32">
          <Navbar />
          <main className="flex w-full flex-col">
            <div className="mb-20">{children}</div>
            {/* <Analytics /> */}
            <footer className="mt-auto pb-6 text-center font-title text-xs text-gray-500">
              Made in 2023
            </footer>
          </main>
        </div>
      </body>
    </html>
  )
}
