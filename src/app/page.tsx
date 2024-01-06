"use client"

import Button from '@/components/neobruu/Button'
import Image from 'next/image'
import { IoIosRocket, IoLogoGithub } from 'react-icons/io'

const handleClick = () => {

}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className='relative flex flex-col justify-center items-center w-full min-h-screen bg-[#fbfbff] square-pattern p-20 md:p-24'>
        <div className='w-full max-w-2xl grid place-items-center gap-5'>
          <h1 className='text-3xl md:text-6xl text-center text-black font-black bg-red-400/80 py-2 px-5 shadow-[7px_7px_0px_0px_rgba(0,0,0,1)]'>Neo-Brutalism UI</h1>
          <p className='text-sm md:text-lg text-center tracking-tighter'>
          Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.
          </p>
          <div className='flex gap-5'>
            <Button onClick={handleClick} variant='primary' rounded='lg'>
               🚀 Get Started
            </Button>
            <Button onClick={handleClick} variant='dark' rounded='lg'>
              <IoLogoGithub /> Github
            </Button>
          </div>
        </div>
        <img src="/star.svg" alt="star" className='absolute bottom-36 md:bottom-52 right-5 w-7 md:w-10 rotate-45' />
        <img src="/star.svg" alt="star" className='absolute bottom-20 right-5 w-16 md:w-32 rotate-6' />
        <img src="/smile.svg" alt="smile" className='absolute top-20 left-5 w-16 md:w-32' />
      </div>
    </main>
  )
}
