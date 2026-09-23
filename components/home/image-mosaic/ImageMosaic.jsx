"use client";

import React, { useEffect, useRef, useState } from "react";

function DissolveCard({ image, index, className = "" }) {
  const containerRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  useEffect(() => {
    let animationFrameId;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const centerOffset = (rect.top + rect.height / 2 - windowHeight / 2) / windowHeight;
        setParallaxOffset(centerOffset * -25);
      }
    };

    const onScroll = () => {
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`group relative overflow-hidden bg-neutral-900 rounded-2xl shadow-xl transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] dissolve-container dissolve-shimmer-effect ${className} ${
        isIntersecting
          ? "opacity-100 translate-y-0 scale-100 filter-none"
          : "opacity-0 translate-y-14 scale-95 blur-xl"
      }`}
      style={{
        transitionDelay: `${(index % 5) * 120}ms`,
      }}
    >
      {/* Dissolve Veil / Dark Gradient Curtain */}
      <div
        className={`pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-black/80 via-black/40 to-[#FF3B1F]/20 backdrop-blur-md transition-all duration-1000 ease-out ${
          isIntersecting ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
        }`}
      />

      {/* Image with Parallax & Dissolve transform */}
      <img
        src={image.src}
        alt={image.alt || "Showcase image"}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
        style={{
          transform: `translateY(${parallaxOffset}px) scale(${isIntersecting ? 1.04 : 1.15})`,
          filter: isIntersecting
            ? "blur(0px) contrast(100%) brightness(100%)"
            : "blur(18px) contrast(130%) brightness(120%)",
          transition: "filter 1.1s cubic-bezier(0.16,1,0.3,1), transform 0.6s ease-out, opacity 0.9s ease",
        }}
      />

      {/* Dark Vignette Overlay on Hover */}
      <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Subtle Glowing Ember Indicator on Hover */}
      <div className="pointer-events-none absolute bottom-4 left-4 z-30 flex items-center gap-2 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-1">
        <span className="h-2 w-2 rounded-full bg-[#FF3B1F] shadow-[0_0_10px_#FF3B1F]" />
        <span className="text-[11px] font-bold uppercase tracking-widest text-white/90 drop-shadow">
          {image.alt || "View Craft"}
        </span>
      </div>
    </div>
  );
}

export default function ImageMosaic({ images }) {
  if (!images || images.length < 5) {
    return (
      <div className="relative mt-12 grid gap-6 md:grid-cols-2">
        {images?.map((image, index) => (
          <DissolveCard
            key={`${image.src}-${index}`}
            image={image}
            index={index}
            className={`h-64 sm:h-80 md:h-[380px] ${image.className || ""}`}
          />
        ))}
      </div>
    );
  }

  const [img1, img2, img3, img4, img5] = images;

  return (
    <div className="relative mt-12 flex flex-col gap-6">
      <span className="corner-mark top-right" />
      <span className="corner-mark bottom-left" />

      {/* Row 1: Full-width Landscape Image (1st image) */}
      <div className="w-full h-64 sm:h-80 md:h-[460px]">
        <DissolveCard image={img1} index={0} className="w-full h-full" />
      </div>

      {/* Row 2: 2nd and 3rd Images on the Same Line (50% / 50%) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <div className="w-full h-60 sm:h-72 md:h-[340px]">
          <DissolveCard image={img2} index={1} className="w-full h-full" />
        </div>
        <div className="w-full h-60 sm:h-72 md:h-[340px]">
          <DissolveCard image={img3} index={2} className="w-full h-full" />
        </div>
      </div>

      {/* Row 3: 4th (35% width) and 5th (65% width) Images on the Same Line */}
      <div className="flex flex-col md:flex-row gap-6 w-full">
        {/* 4th Image - 35% */}
        <div className="w-full md:w-[calc(35%-0.75rem)] h-60 sm:h-72 md:h-[360px] shrink-0">
          <DissolveCard image={img4} index={3} className="w-full h-full" />
        </div>

        {/* 5th Image - 65% */}
        <div className="w-full md:w-[calc(65%-0.75rem)] h-60 sm:h-72 md:h-[360px] shrink-0">
          <DissolveCard image={img5} index={4} className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}
