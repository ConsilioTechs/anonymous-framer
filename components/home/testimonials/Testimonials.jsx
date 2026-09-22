"use client";

import React, { useState, useEffect } from "react";

const testimonies = [
  {
    quote:
      "They Understood our brand before we could even describe it. The printed identity feels expensive in the hand.",
    author: "Abdulmalik Lukman - Banner Design!",
    image: "/images/luk.png",
    alt: "Abdulmalik Lukman",
    color: "#FF3B1F", // Ember Red
  },
  {
    quote:
      "The right frame changed everything. The finish, the proportion and details - it turned a simple piece into something great.",
    author: "Micheal John - Giver Printing press!",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    alt: "Micheal John",
    color: "#E59E37", // Warm Gold / Amber
  },
  {
    quote:
      "Every flyer got picked up. The colour, the paper, the type - people kept the things instead of binning them.",
    author: "Bilal Muhammed - Sufpay Printing press!",
    image: "/images/bil.jpeg",
     
    alt: "Bilal Muhammed",
    color: "#27B43E", // Vibrant Green
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonies.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const currentTestimony = testimonies[currentIndex];

  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="container-x">
        {/* Section Header */}
        <p className="text-xs lg:text-[18px] text-[#FF3B1F] uppercase mb-4 font-bold tracking-wide">
          TESTIMONY
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-[48px] font-black uppercase tracking-tight text-[#171717] leading-none">
          WHAT OUR CLIENTS SAY
        </h2>

        {/* Testimonial Content Layout */}
        <div className="mt-14 sm:mt-20 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Left Side: Quote Text & Author */}
          <div className="flex flex-col justify-between min-h-[220px]">
            <div className="max-w-2xl">
              {/* Quote Symbol matching slide color on top line */}
              <div
                style={{ color: currentTestimony.color }}
                className="text-5xl md:text-6xl font-black leading-none  select-none transition-colors duration-500"
              >
                &ldquo;
              </div>

              {/* Dynamic Quote Text starting indented on the next line */}
              <blockquote className="indent-8 sm:indent-12 text-2xl sm:text-3xl md:text-[30px] font-medium text-[#171717] leading-tight md:leading-[46px] transition-opacity duration-500">
                {currentTestimony.quote}
              </blockquote>
            </div>

            {/* Author Credit - Right Aligned underneath */}
            <p className="mt-5 text-neutral-400 font-medium text-xs  md:text-[16px] transition-opacity duration-500 self-end pr-2 sm:pr-6">
              {currentTestimony.author}
            </p>
          </div>

          {/* Right Side: Photo Card + Dot Indicators */}
          <div className="flex flex-col items-center lg:items-end">
            {/* Color-Bordered Photo Canvas - wider on mobile */}
            <div
              style={{ borderColor: currentTestimony.color }}
              className="border-2 rounded-2xl overflow-hidden w-full max-w-[90%] sm:max-w-[310px] aspect-square bg-white shadow-sm transition-colors duration-500"
            >
              <img
                key={currentTestimony.image}
                src={currentTestimony.image}
                alt={currentTestimony.alt}
                className="w-full h-full object-cover rounded-xl transition-all duration-500 animate-fadeIn"
              />
            </div>

            {/* Dot Indicators - centered on mobile, right-aligned on desktop */}
            <div className="flex justify-center lg:justify-end items-center gap-2 mt-6 w-full max-w-[90%] sm:max-w-[310px]">
              {testimonies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to testimony ${index + 1}`}
                  className="p-0 border-none outline-none cursor-pointer transition-all duration-400 ease-in-out"
                  style={{
                    width: currentIndex === index ? "28px" : "10px",
                    height: "10px",
                    borderRadius: "999px",
                    backgroundColor:
                      currentIndex === index
                        ? currentTestimony.color
                        : "#D4D4D4",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
