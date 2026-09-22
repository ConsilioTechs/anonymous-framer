"use client";

import React, { useState } from "react";
import { MoveRight } from "lucide-react";

const serviceDetails = [
  {
    id: "01",
    title: "Logo Design",
    description: "Distinctive, durable marks with a considered logic behind every curve.",
    image: "/images/hg1.png",
    alt: "Logo Design Showcase",
  },
  {
    id: "02",
    title: "Printing",
    description: "High-precision print production crafted on premium paper stock and durable materials.",
    image: "/images/hg2.png",
    alt: "Printing Showcase",
  },
  {
    id: "03",
    title: "Hand crafting",
    description: "Bespoke handcrafted finishes designed with deliberate detail and lasting artistry.",
    image: "/images/hg3.png",
    alt: "Hand crafting Showcase",
  },
  {
    id: "04",
    title: "Art work",
    description: "Unique visual artwork tailored to capture brand personality and visual impact.",
    image: "/images/hg4.png",
    alt: "Art work Showcase",
  },
  {
    id: "05",
    title: "Framing",
    description: "Custom structural framing built to preserve, elevate, and highlight your prints.",
    image: "/images/hg5.png",
    alt: "Framing Showcase",
  },
  {
    id: "06",
    title: "Banner",
    description: "Bold large-format banner printing built for maximum visibility and durability.",
    image: "/images/partner1.png",
    alt: "Banner Showcase",
  },
  {
    id: "07",
    title: "Business Cards",
    description: "Tactile, premium business cards engineered to leave a strong first impression.",
    image: "/images/partner2.png",
    alt: "Business Cards Showcase",
  },
  {
    id: "08",
    title: "T-Shirt Merchandize printing",
    description: "Vibrant custom apparel and merchandise prints crafted for comfort and endurance.",
    image: "/images/partner4.png",
    alt: "T-Shirt Merchandize Showcase",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services" className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="container-x">
        {/* Header Row */}
        <div className="flex items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <p className=" lg:text-[20px] text-[16px]  text-[#FF3B1F] uppercase mb-4">
              SERVICES
            </p>
            <h2 className="text-4xl mt-6 sm:text-5xl md:text-[52px] font-black uppercase tracking-tight text-[#171717] leading-none">
              WHAT WE DO
            </h2>
          </div>
          <a
            href="/services"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-extrabold  text-neutral-400 hover:text-[#FF3B1F] transition-colors"
          >
            All services <MoveRight size={14} />
          </a>
        </div>

        {/* Content Layout: Accordion List Left + Tilted Card Right */}
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] items-start">
          {/* Services List */}
          <div className="border-t border-neutral-200/80 divide-y divide-neutral-200/80">
            {serviceDetails.map((item, index) => {
              const isOpen = activeIndex === index;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className="group py-6 cursor-pointer transition-colors duration-200"
                >
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    {/* Number */}
                    <span className="text-xs lg:text-[20px]  font-bold text-neutral-300 select-none w-6">
                      {item.id}
                    </span>

                    {/* Content */}
                    <div className="flex-1 ">
                      <h3
                        className={`text-2xl  font-bold  transition-colors duration-200 ${
                          isOpen ? "text-[#FF3B1F] lg:text-[28px] " : "text-[#1f1f1f] group-hover:text-[#FF3B1F] lg:text-[22px] "
                        }`}
                      >
                        {item.title}
                      </h3>

                      {/* Description & Inline Mobile Image - Expanded when open */}
                      {isOpen && (
                        <div className="mt-3 max-w-xl">
                          <p className="text-sm sm:text-[18px] leading-[30px] text-neutral-500 transition-all duration-300">
                            {item.description}
                          </p>

                          {/* Inline Tilted Image for Mobile Screens */}
                          <div className="lg:hidden mt-5 mb-2 flex justify-start">
                            <div className="relative transform rotate-3 max-w-[260px] sm:max-w-[320px] w-full aspect-[4/5] overflow-hidden rounded-xl shadow-lg">
                              <img
                                src={item.image}
                                alt={item.alt}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side Tilted Image Preview for Desktop Screens */}
          <div className="hidden lg:flex lg:sticky lg:top-28 items-center justify-center pt-4">
            {/* Image alone, tilted towards the opposite direction (rotate-6) */}
            <div className="relative transform rotate-6 hover:rotate-3 transition-transform duration-500 ease-out max-w-[340px] sm:max-w-[400px] w-full aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
              <img
                key={serviceDetails[activeIndex].image}
                src={serviceDetails[activeIndex].image}
                alt={serviceDetails[activeIndex].alt}
                className="w-full h-full object-cover transition-all duration-500 scale-100 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
