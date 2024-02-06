import Code from "@/components/Code";
import Pagination from "@/components/Pagination";

export default function Installation() {
  return (
    <>
      <h2 className="text-4xl font-bold">Installation</h2>

      <div className="mt-8 text-lg font-light leading-relaxed">
        These components are styled using{" "}
        <a href="https://tailwindcss.com/" className="underline">
          Tailwind CSS
        </a>{" "}
        and feature icons powered by{" "}
        <a
          href="https://react-icons.github.io/react-icons/"
          className="underline"
        >
          react-icons
        </a>{" "}
        (although you`re free to use any other icon library of your choice).
      </div>

      <div className="mt-8 text-lg font-light leading-relaxed">
        <h2 className="text-2xl font-medium">Installation Guide:</h2>
        <h5 className="text-lg font-medium mt-5">Prerequisites:</h5>
        Ensure you have Node.js and npm (or yarn) installed on your system.
        <h5 className="text-lg font-medium mt-5">Installation Steps:</h5>
        <ul className="list-decimal list-inside space-y-4">
          <li>
            Navigate to the root directory of your project in the terminal.
          </li>
          <li>
            Install the required dependencies by running the following command:
            <Code
              code={`npm install clsx tailwind-merge class-variance-authority
# or
pnpm add clsx tailwind-merge class-variance-authority`}
              header={"Terminal"}
            />
          </li>
          <li>
            Create a file named utils.ts and paste the following code:
            <Code
              code={`// lib/utils/utils.ts

import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`}
              header={"Terminal"}
            />
          </li>
        </ul>
        <h5 className="text-lg font-medium mt-5">
          Customization Instructions:
        </h5>
        Choose any component you find useful, copy it to your project, and
        tailor it to meet your specific requirements. Remember, these components
        are customizable and adaptable to suit your needs.
        <br />
        <br />
        Keep in mind that these components are designed to kickstart your
        journey into neobrutalism. It`s up to you to enhance their reusability
        and accessibility.
      </div>

      <Pagination
        prev={{
          name: "Introduction",
          path: "/docs",
        }}
        next={{
          name: "Accordion",
          path: "/docs/components/Accordion",
        }}
      />

      <div className="flex items-center gap-1 text-sm pt-20 pb-14 font-medium text-neutral-900">
        <span>©</span>
        <span>{new Date().getFullYear()}</span>
        <span>with</span>
        <div className="relative inline-flex justify-center items-center">
          <div className="text-red-500 rounded-full">❤️</div>
          <div className="text-red-500 absolute top-0 left-0 animate-ping">
            ❤️
          </div>
          <div className="text-red-500 absolute top-0 left-0 animate-pulse">
            ❤️
          </div>
        </div>
        <span>by</span>
        <span className="hover:dark:text-neutral-400 cursor-pointer">
          Ival Shamkya
        </span>
      </div>
    </>
  );
}
