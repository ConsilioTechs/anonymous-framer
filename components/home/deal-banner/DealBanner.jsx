"use client";

import React from "react";

export default function DealBanner() {
  return (
    <section className="relative min-h-[580px] md:min-h-[660px] bg-ink text-white flex items-center justify-center [clip-path:inset(0)]">
      {/* Fixed Background Video (Sticks in place while scrolling section, focused on upper part) */}
      <div className="fixed inset-0 h-full w-full pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover object-top opacity-60"
        >
          <source src="/videos/homevideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Foreground Content */}
      <div className="container-x relative z-10 flex min-h-[580px] md:min-h-[660px] flex-col items-center justify-center text-center py-20">
        <h2 className="max-w-4xl text-3xl sm:text-5xl md:text-[56px] font-bold text-white tracking-tight leading-snug md:leading-[1.2]">
          Seize today's exclusive deal <br className="hidden md:block" />
          with Anonymous <span className="text-[#FF3B1F]">Framer!</span>
        </h2>
        <a
          href="/contact"
          className="mt-9 bg-white px-7 py-3.5 rounded-lg text-xs sm:text-[13px] font-bold tracking-wider uppercase text-[#1c1c1c] transition hover:bg-[#FF3B1F] hover:text-white shadow-md"
        >
          GET A QUOTE
        </a>
      </div>
    </section>
  );
}
