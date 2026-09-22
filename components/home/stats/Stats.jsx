"use client";

import { stats } from "../data";
import { useEffect, useRef, useState } from "react";

function CountValue({ value, started }) {
  const match = value.match(/^([\d,]+)(.*)$/);
  const target = Number((match?.[1] ?? "0").replaceAll(",", ""));
  const suffix = match?.[2] ?? "";
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return undefined;

    let frameId;
    const startTime = performance.now();
    const duration = 1200;

    const updateCount = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - (1 - progress) ** 3;
      setCount(progress === 1 ? target : Math.round(target * easedProgress));

      if (progress < 1) {
        frameId = requestAnimationFrame(updateCount);
      }
    };

    frameId = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(frameId);
  }, [target, started]);

  return `${count.toLocaleString()}${suffix}`;
}

export default function Stats() {
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || started) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [started]);

  return (
    <section ref={sectionRef} className="bg-white">
      <div className="container-x grid grid-cols-2 md:grid-cols-4 divide-y divide-neutral-200 md:divide-x md:divide-y-0">
        {stats.map(([value, label, color]) => (
          <div key={label} className="px-3 py-5 md:px-4 md:py-7 text-center">
            <p className="text-[28px] md:text-[36px] font-semibold" style={{ color }}>
              <CountValue value={value} started={started} />
            </p>
            <p className="mt-1 text-[18px] md:text-[24px] text-neutral-500">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
