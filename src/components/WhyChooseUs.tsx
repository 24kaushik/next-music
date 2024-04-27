"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Experienced and Passionate Faculty",
    description:
      "Our music school boasts a team of experienced and passionate faculty members who are dedicated to nurturing each student's musical talent. With diverse backgrounds in performance, education, and composition, our instructors provide comprehensive guidance tailored to individual learning styles and goals.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/assets/bass-guitar.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Tailored Curriculum and Flexibility",
    description:
      "We understand that every student has unique aspirations and learning preferences. That's why our curriculum is designed to be flexible, offering a range of courses and programs to accommodate various skill levels and interests. Whether you're a beginner or an advanced musician, we have options that fit your needs and schedule.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/assets/guitar.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "State-of-the-Art Facilities and Resources",
    description:
      "Our music school is equipped with state-of-the-art facilities and resources to enhance the learning experience. From well-equipped practice rooms and recording studios to a vast library of sheet music and digital resources, we provide students with the tools they need to excel in their musical journey.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Image
          src="/assets/songwriting.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Vibrant Community and Performance Opportunities",
    description:
      "Beyond just learning notes and scales, our music school fosters a vibrant community where students can collaborate, perform, and grow together. Through recitals, ensemble performances, and workshops, students have ample opportunities to showcase their talents and gain valuable performance experience in front of supportive peers and audiences.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/assets/singing.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function WhyChooseUs() {
  return (
    <StickyScroll content={content} />
  );
}
