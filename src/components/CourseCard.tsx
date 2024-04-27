"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import { Course } from "./FeaturedCourses"; //interface

const CourseCard: React.FC<{ course: Course }> = ({ course }) => {

  return (
    <div >
      <BackgroundGradient className="relative rounded-[22px] max-w-sm p-4 sm:p-7 sm:pb-5 bg-white dark:bg-zinc-900">
        {course.isFeatured && <div className="rounded-full px-4 py-1 text-white text-center bg-gradient-to-br from-yellow-200 to-yellow-700 text-xs font-bold absolute top-4 left-4">
          <span>Sponsored</span>
        </div>}
        <Image
          src={course.image ? course.image : "/assets/notfound.png"}
          alt={course.title}
          height={400}
          width={400}
          className="object-contain rounded-lg"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {course.title}
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {course.description}
        </p>
        <button className="p-[3px] relative mx-auto block mt-2">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            {"$" + course.price}
          </div>
        </button>
      </BackgroundGradient>
    </div>
  );
}

export default CourseCard;