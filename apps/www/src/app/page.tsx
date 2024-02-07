"use client";

import Button from "@/components/neobruu/Button";
import { IoLogoGithub } from "react-icons/io";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="relative flex flex-col justify-center items-center w-full min-h-screen square-pattern bg-gradient-to-br from-green-500 to-red-300 p-10 md:p-24">
        <div className="w-full max-w-2xl grid place-items-center gap-5">
          <div className="relative">
            <h1 className="text-2xl md:text-6xl text-center text-white font-black bg-[#4b42ff] py-2 px-5 shadow-[7px_7px_0px_0px_rgba(0,0,0,1)]">
              Neo-Brutalism UI
            </h1>
          </div>
          <p className="font-medium text-sm md:text-lg text-center tracking-tighter">
            Discover bold and raw aesthetics components that you can copy and
            paste into your apps. Accessible. Customizable. Open Source.
          </p>
          <div className="flex flex-wrap justify-center gap-2.5 md:gap-5">
            <Link href={`/docs`}>
              <Button variant="default" rounded="lg">
                🚀 Get Started
              </Button>
            </Link>
            <Link
              href={`https://github.com/ivalshamkya/NeoBruu`}
              target="_blank"
            >
              <Button variant="dark" rounded="lg">
                <IoLogoGithub /> Github
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
