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
        'bg-white [scrollbar-gutter:stable] text-black dark:bg-[#111010] h-full',
        titleFont.variable
      )}
    >
      <body className="flex flex-col md:flex-row gap-12 mx-auto pt-8 max-w-2xl px-4 antialiased md:pt-20 lg:pt-32 h-full">
        <Navbar />
        <main className="w-full flex flex-col">
          <div className='mb-20'>
            {children}
          </div>
          {/* <Analytics /> */}
          <footer className="text-center pb-4 font-title text-gray-500 text-xs mt-auto">
            Made in 2023
          </footer>
        </main>
      </body>
    </html>
  )
}
