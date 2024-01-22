"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { CgDarkMode, CgMoon, CgSun } from "react-icons/cg";
import { IoIosMoon, IoIosSunny } from "react-icons/io";
import { RiMoonClearFill } from "react-icons/ri";
import SearchBar from "./SearchBar";

function Navbar() {
  const [theme, setTheme] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setTheme((prev) => localStorage.getItem("theme") ?? "light");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="fixed left-0 top-0 z-10 mx-auto flex h-16 md:h-20 w-full items-center border-b border-black bg-white px-5 dark:bg-zinc-900">
      <div className="mx-auto flex w-[1300px] max-w-full items-center justify-between">
        <Link className="text-primary text-lg md:text-2xl font-semibold" href={"/"}>
          NeoBruu
        </Link>
        <div className="flex gap-3">
            <SearchBar />
            <a
            target="_blank"
            href="https://github.com/ivalshamkya/NeoBruu"
            className="flex items-center justify-center rounded-md bg-zinc-900 border border-zinc-600 p-[5px] md:p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] shadow-black transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none dark:shadow-zinc-400"
            >
            <AiFillGithub className="h-6 w-6 text-white" />
            </a>
            {/* <button
            type="button"
            onClick={handleClick}
            className="flex items-center justify-center rounded-md border border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] shadow-orange-400/40 transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none dark:border-zinc-600 dark:shadow-yellow-400/40"
            >
            {theme === "light" ? (
                <IoIosSunny className="h-6 w-6 text-orange-400" />
            ) : (
                <RiMoonClearFill className="h-6 w-6 text-yellow-400" />
            )}
            </button> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
