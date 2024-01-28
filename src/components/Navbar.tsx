"use client";

import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import SearchBar from "@/components/SearchBar";
import MobileSidebar from "@/components/MobileSidebar";

function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-10 mx-auto flex h-16 md:h-20 w-full items-center border-b border-black bg-white px-3 md:px-5 dark:bg-zinc-900">
      <div className="mx-auto flex w-full max-w-full items-center justify-between">
        <div className="flex gap-3 items-center">
          <div className="block md:hidden">
              <MobileSidebar></MobileSidebar>
            </div>
          <Link className="text-primary text-lg md:text-2xl font-semibold" href={"/"}>
            NeoBruu
          </Link>
        </div>
        <div className="flex gap-3">
            <SearchBar />
            <Link
              target="_blank"
              href="https://github.com/ivalshamkya/NeoBruu"
              className="flex h-fit items-center justify-center rounded-md bg-zinc-900 border border-zinc-600 p-[5px] md:p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] shadow-black transition-all focus:translate-x-[3px] focus:translate-y-[3px] focus:shadow-none"
              >
              <AiFillGithub className="h-5 md:h-6 w-5 md:w-6 text-white" />
            </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
