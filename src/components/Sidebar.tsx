import components from '@/data/components'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside className="scrollbar fixed top-20 h-[calc(100vh-80px)] max-h-[calc(100vh-80px)] w-[303px] bg-[#bfff2d] overflow-y-auto border-r-4 border-black">
      <div className="block border-black p-4 text-lg font-bold">
        Getting Started
      </div>
      <Link
        href={`/docs`}
        className="block border-black p-4 pl-7 text-base text-black/90 hover:bg-[#63d0ff]"
      >
        Introduction
      </Link>
      <Link
        href={`/docs/installation`}
        className="block border-black p-4 pl-7 text-base text-black/90 hover:bg-[#63d0ff]"
      >
        Installation
      </Link>
      <div className="block border-black p-4 text-xl font-bold">
        Components
      </div>
      {components.map((item, index) => {
        return (
          <Link
            href={`/docs/components/${item.name}`}
            key={index}
            className="block border-black p-4 pl-7 text-base text-black/90 hover:bg-[#63d0ff]"
          >
            {item.name}
          </Link>
        )
      })}
    </aside>
  )
}