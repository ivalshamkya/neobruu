import type { Metadata } from 'next'
import { Inter, IBM_Plex_Mono, Darker_Grotesque, Bricolage_Grotesque } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })
const ibm = IBM_Plex_Mono({ subsets: ['latin'], weight: "500" })
const Grotesque = Darker_Grotesque({ subsets: ['latin'], weight: "500" })
const bricolage = Bricolage_Grotesque({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NeoBruu',
  description: 'Neo-Brutalist reusable components written in React and Tailwind.',
  keywords: [
    'neobrutalism',
    'neobrutalism components',
    'neobrutalism tailwind',
    'react neobrutalism',
    'react tailwind components',
  ],
  authors: [{ name: 'Ival Shamkya', url: 'https://github.com/ivalshamkya' }],
  openGraph: {
    type: 'website',
    description:
      "'Neo-Brutalist reusable components written in React and Tailwind.'",
    images: ['https://neobrutalism-components.vercel.app/preview.png'],
    url: 'https://neobrutalism-components.vercel.app/',
    title: 'NeoBruu',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${bricolage.className} bg-[#00EB90] selection:bg-blue-500/50`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
