"use client";
import Link from 'next/link'
import { motion } from "framer-motion";
import React from 'react'
import { AuroraBackground } from './ui/aurora-background'
import { Button } from './ui/moving-border'

const HeroSection = () => {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-16 md:p-0'
      >
        <div className='p-4 relative z-10 w-full text-center'>
        <h1 className='mt-20 md:mt-0 text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Master the art of music</h1>
        <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>Dive into our comprehensive music courses and transform your musical journey today. Whether you&apos;re a beginner or looking to refine your skills, join us to unlock your true potential.</p>
        <div className="mt-4">
          <Link href="/courses">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black hover:bg-black hover:text-white dark:hover:bg-[#202020] text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore courses
            </Button>
          </Link>
        </div>
      </div>
      </motion.div>
    </AuroraBackground>
  )
}

export default HeroSection
