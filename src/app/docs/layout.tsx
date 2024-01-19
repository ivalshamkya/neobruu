import Sidebar from '@/components/Sidebar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Documentation - Neobrutalism Components',
  description: 'Documentation for neobrutalism components.',
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Sidebar />
      <div className="docs ml-[320px] min-h-[100dvh] w-[full-250px] bg-[#00EB90] px-5 pt-[80px] border-l">
        <div className="mx-auto w-[700px] py-20">
          {children}
        </div>
      </div>
    </>
  )
}