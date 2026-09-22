"use client";

import React from "react";

const partners = [
  {
    name: "Safi's Spa",
    src: "/images/partner1.png",
    alt: "Safi's Spa Logo",
  },
  {
    name: "National Assembly Library Trust Fund",
    src: "/images/partner2.png",
    alt: "National Assembly Library Trust Fund Logo",
  },
  {
    name: "Multnet",
    src: "/images/partner3.png",
    alt: "Multnet Logo",
  },
  {
    name: "Lagos Bistro",
    src: "/images/partner4.png",
    alt: "Lagos Bistro Logo",
  },
];

// Duplicate partners array to ensure seamless infinite looping
const marqueePartners = [...partners, ...partners, ...partners, ...partners];

export default function Partners() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 border-b border-gray-100 overflow-hidden">
      <div className="container-x mb-8 sm:mb-12">
        {/* Section Label */}
        <p className="text-[16px] lg:text-[20px] text-[#FF3B1F] uppercase mb-3 sm:mb-4">
          OUR PARTNERS
        </p>

        {/* Main Heading */}
        <h2 className="text-2xl sm:text-4xl md:text-[42px] lg:text-[48px]  font-medium md:font-semibold   text-[#000000] lg:leading-[60px] max-w-3xl">
          Built on quality. Driven by reliability. Trusted by businesses.
        </h2>
      </div>

      {/* Rightward Moving Marquee Track */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left & Right Edge Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Moving Track */}
        <div className="partners-marquee-track flex w-max items-center">
          {marqueePartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex shrink-0 items-center justify-center px-8 sm:px-12 md:px-16 select-none h-24 sm:h-28 md:h-32"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className="max-h-full max-w-[160px] sm:max-w-[200px] object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
