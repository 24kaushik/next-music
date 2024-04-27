"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Testimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success!</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote: "Embarking on my musical journey, I felt like I was stepping into a tale of two cities: the best of times and the worst of times. But with the guidance of experienced faculty, I found wisdom in every note. It truly was the spring of hope amidst the winter of despair.",
    name: "John Doe",
    title: "Student"
  },
  {
    quote: "To enroll or not to enroll, that was my question before discovering this school. Like Hamlet contemplating life's uncertainties, I pondered whether to suffer mediocre education or find true musical enlightenment. Thankfully, I chose the latter, and now I'm experiencing the sweet melody of progress.",
    name: "Jane Smith",
    title: "Proud Parent"
  },
  {
    quote: "At this school, I realized that all that we see or seem is but a dream within a dream of musical possibility. Thanks to dedicated instructors and state-of-the-art facilities, I've discovered a new depth to my musical aspirations.",
    name: "Emily Johnson",
    title: "Adult Learner"
  },
  {
    quote: "Entering this school, I felt like I was stepping into a world of Austenian proportions, where societal norms and musical harmonies intertwine. Thanks to the nurturing environment and vibrant community, I've found my fortune in melodies that fill my heart.",
    name: "William Thompson",
    title: "Aspiring Musician"
  },
  {
    quote: "Call me Ishmael, or call me a satisfied student at this institution. With little money but musical ambition, I set sail on a journey of discovery. From the moment I stepped ashore here, I knew I had found my part of the world. Thanks to their guidance, I'm navigating the vast ocean of musical knowledge with confidence.",
    name: "Sarah Brown",
    title: "Enthusiastic Student"
  },
  {
    quote: "The decision to pursue music education was like a soliloquy from Shakespeare's plays. It required deep introspection and courage. At this institution, I found not just knowledge but also a supportive community. It's where dreams find wings.",
    name: "Michael Johnson",
    title: "Passionate Music Lover"
  },
];
