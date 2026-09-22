"use client";

import { useEffect, useRef } from "react";
import ServiceRow from "./ServiceRow";
import { services } from "./data";

export default function ServicesList() {
  const listRef = useRef(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const rows = Array.from(list.querySelectorAll("[data-service-row]"));

    if (!("IntersectionObserver" in window)) {
      rows.forEach((row) => row.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );

    rows.forEach((row) => observer.observe(row));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={listRef} className="bg-paper">
      {services.map((service, index) => (
        <ServiceRow
          key={service.title}
          service={service}
          index={index}
          revealDelay={`${Math.min(index * 70, 420)}ms`}
        />
      ))}
    </section>
  );
}
