"use client"
import React from 'react'
import courseData from '@/data/music_courses.json'
import Link from 'next/link'
import CourseCard from './CourseCard'
export interface Course {
  id: number,
  title: string,
  slug: string,
  description: string,
  price: number,
  instructor: string,
  isFeatured: boolean,
  image?: string
}
import Masonry from 'react-masonry-css';

const FeaturedCourses = () => {
  const breakpointColumnsObj = {
    default: 4,
    1024: 3,
    768: 2,
    640: 1
  };
  // const data1: Course = {
  //   "id": 1,
  //   "title": "Guitar Fundamentals",
  //   "slug": "guitar-fundamentals",
  //   "description": "Learn the basics of playing guitar with our comprehensive beginner's course.",
  //   "price": 99.99,
  //   "instructor": "John Doe",
  //   "isFeatured": true,
  //   "image": "/assets/guitar.jpg"
  // };

  return (
    <div className='py-12 bg-gray-900'>
      <div>
        <div className="text-center">
          <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED COURSES</h2>
          <p className='mt-4 text-4xl leading-8 font-extrabold tracking-tight text-white sm:text-6xl '>Learn With the Best</p>
        </div>
      </div>
      <div className='mt-10 mx-auto container px-5'>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {courseData.courses.map((course: Course) => { return <CourseCard key={course.id} course={course} /> })}
        </Masonry>
      </div>
      <div className='mt-20 text-center'>
        <Link href="/courses" className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:scale-105 transition-all duration-200">
          View all courses
        </Link>
      </div>
    </div>
  )
}


export default FeaturedCourses
