"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { HiMenuAlt2 } from "react-icons/hi";
import components from "@/data/components";
import Drawer from "@/components/neobruu/Drawer";
import Badge from "@/components/neobruu/Badge";

export default function MobileSidebar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (route: string) => pathname === route;

  const handleToggleDrawer = () => {
    setIsDrawerOpen((prevIsDrawerOpen) => !prevIsDrawerOpen);
  };

  return (
    <div className="flex gap-3">
      <button
        className="flex items-center justify-center rounded-md bg-zinc-50 border border-zinc-600 p-[5px] md:p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] shadow-black transition-all focus:translate-x-[3px] focus:translate-y-[3px] focus:shadow-none"
        onClick={handleToggleDrawer}
      >
        <HiMenuAlt2 className="h-5 md:h-6 w-5 md:w-6"></HiMenuAlt2>
      </button>
      {isDrawerOpen && (
        <Drawer
          variant="pink"
          active={isDrawerOpen}
          setActive={setIsDrawerOpen}
        >
          <div className="block border-black p-4 text-xl font-bold uppercase">
            Getting Started
          </div>
          <Link
            href={`/docs`}
            className={`block border-black p-3 pl-7 text-base hover:bg-[#ff4242]/70 ${
              isActive("/docs") ? "font-bold text-white" : ""
            }`}
          >
            Introduction
          </Link>
          <Link
            href={`/docs/installation`}
            className={`block border-black p-3 pl-7 text-base hover:bg-[#ff4242]/70 ${
              isActive("/docs/installation") ? "font-bold text-white" : ""
            }`}
          >
            Installation
          </Link>
          <div className="block border-black p-4 text-xl font-bold uppercase">
            Components
          </div>
          {components.map((item, index) => (
            <Link
              key={index}
              href={`/docs/components/${item.name}`}
              className={`flex gap-2 border-black p-3 pl-7 text-base hover:bg-[#ff4242]/70`}
            >
              <span
                className={`${
                  isActive(`/docs/components/${item.name}`)
                    ? "font-medium text-white"
                    : ""
                }`}
              >
                {item.name}
              </span>
              {item.isNew && <Badge text="New" rounded="md" variant="green" />}
            </Link>
          ))}
        </Drawer>
      )}
    </div>
  );
}
