"use client"

import Button from '@/components/neobruu/Button'
import Image from 'next/image'
import { IoLogoGithub } from 'react-icons/io'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className='relative flex flex-col justify-center items-center w-full min-h-screen square-pattern bg-gradient-to-br from-green-500 to-red-300 p-10 md:p-24'>
        <div className='w-full max-w-2xl grid place-items-center gap-5'>
          <div className="relative">
            <h1 className='text-2xl md:text-6xl text-center text-white font-black bg-[#4b42ff] py-2 px-5 shadow-[7px_7px_0px_0px_rgba(0,0,0,1)]'>Neo-Brutalism UI</h1>
          </div>
          <p className='font-medium text-sm md:text-lg text-center tracking-tighter'>
            Discover bold and raw aesthetics components that you can copy and paste into your apps. Accessible. Customizable. Open Source.
          </p>
          <div className='flex flex-wrap justify-center gap-2.5 md:gap-5'>
            <Link
              href={`/docs`}>
              <Button variant='primary' rounded='lg'>
                🚀 Get Started
              </Button>
            </Link>
            <Link
              href={`https://github.com/ivalshamkya/NeoBruu`}
              target='_blank'
              >
              <Button variant='dark' rounded='lg'>
                <IoLogoGithub /> Github
              </Button>
            </Link>
          </div>
        </div>
        <div className='absolute bottom-36 md:bottom-52 right-5'>
          <div className='relative'>
            <Image src="/star.svg" alt="star" fill={true} className='w-7 md:w-10 rotate-45' />
          </div>
        </div>
        <div className='absolute bottom-20 right-5 '>
          <div className='relative'>
        <Image src="/star.svg" alt="star" fill={true} className='w-16 md:w-32 rotate-6' />
          </div>
        </div>
        <motion.div
          animate={{ scale: 1.1 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeIn' }}
          className='absolute top-24 left-5 w-16 md:w-32'
        >
          <div className='relative'>

          <Image
            src="/heart.svg"
            alt="Spinning Image"
            fill={true}
          />
          </div>
        </motion.div>
      </div>
      <Footer></Footer>
    </main>
  )
}
