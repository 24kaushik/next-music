import Link from 'next/link'
import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";
import data from "@/data/data.json"
export interface Webinars {
  title: string;
  description: string;
  link: string;
}


const UpcomingWebinars = () => {
  const webinars:Webinars[] = data.webinars;
  return (
    <div className='p-12 bg-gray-900'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
        <div className="text-center">
          <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED WEBINARS</h2>
          <p className='mt-4 text-4xl leading-8 font-extrabold tracking-tight text-white sm:text-6xl'>Enhance Your Musical Journey</p>
        </div>
        <div className="mt-10">
          <HoverEffect items={webinars} />
        </div>
        <div className="mt-10 text-center">
          <Link href="/courses" className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:scale-105 transition-all duration-200">
            View all webinars
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars
