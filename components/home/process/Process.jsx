"use client";

import React, { useState } from "react";
import { process } from "../data";

export default function Process() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#FDFCF8] py-20 md:py-28">
      <div className="container-x">
        <p className="text-[16px] lg:text-[20px] text-[#FF3B1F] uppercase mb-4">
          The process
        </p>
        <h2 className="mt-6 max-w-3xl text-4xl font-extrabold uppercase lg:leading-[60px] md:text-[48px]">
          From idea to something you can hold
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {process.map(([number, title, body], index) => {
            const isActive = activeIndex === index;
            return (
              <article
                key={title}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className={`min-h-64 border p-7 cursor-pointer transition-all duration-300 ease-out select-none ${
                  isActive
                    ? "border-ink bg-ink text-white -translate-y-1.5 shadow-xl"
                    : "border-neutral-200 bg-white text-ink hover:border-neutral-300"
                }`}
              >
                <p
                  className={`text-[72px] font-black transition-colors duration-300 ${
                    isActive ? "text-[#FF3B1F]" : "text-[#F4F2EA]"
                  }`}
                >
                  {number}
                </p>
                <h3
                  className={`mt-8 text-[24px] font-extrabold uppercase leading-10 transition-colors duration-300 ${
                    isActive ? "text-white" : "text-ink"
                  }`}
                >
                  {title}
                </h3>
                <p
                  className={`mt-4 text-[16px] leading-6 transition-colors duration-300 ${
                    isActive ? "text-white/60" : "text-neutral-500"
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
