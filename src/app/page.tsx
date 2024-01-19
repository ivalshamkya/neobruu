"use client"

import Button from '@/components/neobruu/Button'
import Image from 'next/image'
import { IoIosRocket, IoLogoGithub } from 'react-icons/io'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className='relative flex flex-col justify-center items-center w-full min-h-screen bg-[#ffffff] square-pattern p-20 md:p-24'>
        <div className='w-full max-w-2xl grid place-items-center gap-5'>
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className='absolute -top-10 md:-top-16 -right-10 md:-right-16 w-20 md:w-32'
            >
              <img
                src="/spin.svg"
                alt="Spinning Image"
              />
            </motion.div>
            <h1 className='text-xl md:text-6xl text-center text-white font-black bg-[#5e42ff] py-2 px-5 shadow-[7px_7px_0px_0px_rgba(0,0,0,1)]'>Neo-Brutalism UI</h1>
          </div>
          <p className='text-sm md:text-lg text-center tracking-tighter'>
            Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.
          </p>
          <div className='flex gap-5'>
            <Link
              href={`/docs`}>
              <Button variant='primary' rounded='lg'>
                🚀 Get Started
              </Button>
            </Link>
            <Link
              href={`https://github.com/ekmas/neobrutalism-components`}
              target='_blank'
              >
              <Button variant='dark' rounded='lg'>
                <IoLogoGithub /> Github
              </Button>
            </Link>
          </div>
        </div>
        <img src="/star.svg" alt="star" className='absolute bottom-36 md:bottom-52 right-5 w-7 md:w-10 rotate-45' />
        <img src="/star.svg" alt="star" className='absolute bottom-20 right-5 w-16 md:w-32 rotate-6' />
        <motion.div
          animate={{ scale: 1.1 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeIn' }}
          className='absolute top-24 left-5 w-16 md:w-32'
        >
          <img
            src="/heart.svg"
            alt="Spinning Image"
          />
        </motion.div>
      </div>
    </main>
  )
}
