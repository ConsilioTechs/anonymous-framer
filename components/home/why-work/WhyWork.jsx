"use client";

import React, { useState } from "react";
import { reasons } from "../data";

export default function WhyWork() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-ink py-20 text-white md:py-28 overflow-hidden">
      <div className="container-x">
        {/* Header Label & Title */}
        <p className="lg:text-[20px] text-[16px] text-[#FF3B1F] mb-2 uppercase">
          WHY WORK WITH US?
        </p>
        <h2 className="mt-4 max-w-lg text-4xl font-black uppercase leading-tight md:text-[48px] text-white">
          WHY WORK WITH US? GET NOTICED.
        </h2>

        {/* 2x2 Grid of Reasons */}
        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-x-16 md:gap-y-14">
          {reasons.map(([number, title, body], index) => {
            const isActive = activeIndex === index;
            return (
              <article
                key={title}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className="group cursor-pointer select-none transition-all duration-300 ease-out"
              >
                {/* Number */}
                <p
                  className={`text-xs md:text-[18px]  transition-colors duration-300 ${
                    isActive ? "text-neutral-400" : "text-[#FF3B1F] group-hover:text-[#FF3B1F]"
                  }`}
                >
                  {number}
                </p>

                {/* Title */}
                <h3
                  className={`mt-3 text-3xl md:text-[36px] font-black tracking-tight leading-tight transition-all duration-300 ease-out transform ${
                    isActive
                      ? "text-[#FF3B1F] translate-x-1.5"
                      : "text-white group-hover:text-[#FF3B1F] group-hover:translate-x-1.5"
                  }`}
                >
                  {title}
                </h3>

                {/* Body */}
                <p
                  className={`mt-4 max-w-xl text-sm sm:text-base leading-relaxed transition-colors duration-300 ${
                    isActive ? "text-white/80" : "text-white/50 group-hover:text-white/80"
                  }`}
                >
                  {body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
