'use client'
import { usePathname } from 'next/navigation';
import components from '@/data/components';
import Link from 'next/link';
import Badge from './neobruu/Badge';

export default function Sidebar() {
  const pathname = usePathname();
  const isActive = (route:string) => pathname === route;

  return (
    <aside className="scrollbar fixed top-20 h-[calc(100vh-80px)] max-h-[calc(100vh-80px)] w-[303px] bg-[#ff7d7d] overflow-y-auto border-r-4 border-black">
      <div className="block border-black p-4 text-xl font-bold">Getting Started</div>
      <Link href={`/docs`} 
          className={`block border-black p-4 pl-7 text-base hover:bg-[#63d0ff] ${
            isActive('/docs') ? 'font-bold text-white' : ''
          }`}
        >
          Introduction
      </Link>
      <Link href={`/docs/installation`} className={`block border-black p-4 pl-7 text-base hover:bg-[#63d0ff] ${
            isActive('/docs/installation') ? 'font-bold text-white' : ''
          }`}
        >
          Installation
      </Link>
      <div className="block border-black p-4 text-xl font-bold">Components</div>
      {components.map((item, index) => (
        <Link key={index} href={`/docs/components/${item.name}`} className={`flex gap-2 border-black p-4 pl-7 text-base hover:bg-[#63d0ff] ${
              isActive(`/docs/components/${item.name}`) ? 'font-bold text-white' : ''
            }`}
          >
            {item.name} {item.isNew && (
              <Badge text='New' rounded='md' variant='secondary' />
            )}
        </Link>
      ))}
    </aside>
  );
}
