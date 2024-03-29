'use client';
import { usePathname } from "next/navigation";
import components from "@/data/components";
import Link from "next/link";
import Badge from "@/components/neobruu/Badge";

export default function Sidebar() {
  const pathname = usePathname();
  const isActive = (route: string) => pathname === route;

  return (
    <aside className="scrollbar fixed top-20 h-[calc(100vh-80px)] max-h-[calc(100vh-80px)] w-[303px] py-7 bg-[#5545ff] overflow-y-auto border-r-4 border-black">
      <div className="block border-black p-4 text-xl text-white font-bold uppercase">
        Getting Started
      </div>
      <Link
        href={`/docs`}
        className={`block border-black text-white p-3 pl-7 text-base hover:bg-[#ff4242]/70 ${
          isActive("/docs") ? "font-bold" : "font-extralight"
        }`}
      >
        Introduction
      </Link>
      <Link
        href={`/docs/installation`}
        className={`block border-black p-3 pl-7 text-white text-base hover:bg-[#ff4242]/70 ${
          isActive("/docs/installation") ? "font-bold" : "font-extralight"
        }`}
      >
        Installation
      </Link>
      <div className="block border-black p-4 text-xl text-white font-bold uppercase">
        Components
      </div>
      {components.map((item, index) => (
        <Link
          key={index}
          href={`/docs/components/${item.name}`}
          className={`flex gap-2 border-black p-3 pl-7 text-base hover:bg-[#ff4242]/70`}
        >
          <span
            className={`text-white ${
              isActive(`/docs/components/${item.name}`)
                ? "font-bold"
                : "font-extralight"
            }`}
          >
            {item.name}
          </span>
          {item.isNew && <Badge text="New" rounded="md" variant="green" />}
        </Link>
      ))}
    </aside>
  );
}
