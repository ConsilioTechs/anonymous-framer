"use client";

import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { itemsByTab, tabs } from "./data";

const sizeClass = {
  medium: "aspect-[4/3]",
  wide: "aspect-[4/3]",
  large: "aspect-[4/3]",
  tall: "aspect-[4/3]",
};

const getGalleryItemClass = (item, index, itemCount, isSparseTab) => {
  const defaultClass = sizeClass[item.size] || sizeClass.medium;

  if (!isSparseTab) {
    return defaultClass;
  }

  if (itemCount === 1) {
    return "aspect-[16/9]";
  }

  if (itemCount % 2 === 1 && index === 0) {
    return "aspect-[16/9] sm:col-span-2";
  }

  return defaultClass;
};

const showVideoPreviewFrame = (event) => {
  const video = event.currentTarget;

  if (video.dataset.previewReady === "true" || !Number.isFinite(video.duration)) {
    return;
  }

  video.currentTime = Math.min(0.75, Math.max(video.duration - 0.1, 0));
  video.dataset.previewReady = "true";
};

const playVideoPreview = (event) => {
  const video = event.currentTarget.querySelector("video");

  if (!video) {
    return;
  }

  const preview = video.play();

  if (preview) {
    preview.catch(() => {});
  }
};

const pauseVideoPreview = (event) => {
  const video = event.currentTarget.querySelector("video");

  if (!video) {
    return;
  }

  video.pause();
};

export default function GalleryTabs() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const items = itemsByTab[activeTab];
  const selectedItem = selectedIndex === null ? null : items[selectedIndex];
  const isSparseTab = activeTab !== "all" && items.length <= 5;

  useEffect(() => {
    if (selectedIndex === null) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }

      if (event.key === "ArrowRight") {
        setSelectedIndex((current) =>
          current === null ? current : (current + 1) % items.length
        );
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) =>
          current === null ? current : (current - 1 + items.length) % items.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, items.length]);

  const showPrevious = () => {
    setSelectedIndex((current) =>
      current === null ? current : (current - 1 + items.length) % items.length
    );
  };

  const showNext = () => {
    setSelectedIndex((current) =>
      current === null ? current : (current + 1) % items.length
    );
  };

  return (
    <>
      <section className="bg-paper py-10 md:py-14">
        <div className="container-x">
          <div className="flex flex-wrap gap-3">
            {tabs.map((tab) => {
              const active = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(tab.id);
                    setSelectedIndex(null);
                  }}
                  className={`rounded-md px-5 py-3 text-xs font-semibold transition ${
                    active
                      ? "bg-ink text-white"
                      : "bg-white text-ink hover:bg-ink hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div
            className={`mt-10 grid gap-5 ${
              isSparseTab
                ? "grid-cols-1 sm:grid-cols-2"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {items.map((item, index) => (
              <GalleryItem
                key={`${item.src}-${index}`}
                item={item}
                layoutClass={getGalleryItemClass(item, index, items.length, isSparseTab)}
                onOpen={() => setSelectedIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedItem && (
        <GalleryLightbox
          item={selectedItem}
          onClose={() => setSelectedIndex(null)}
          onPrevious={showPrevious}
          onNext={showNext}
        />
      )}
    </>
  );
}

function GalleryItem({ item, layoutClass, onOpen }) {
  const isVideo = item.type === "video";
  const containerRef = useRef(null);
  const [scrollRatio, setScrollRatio] = useState(0);

  useEffect(() => {
    let rafId;

    const updateScrollRatio = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const winH = window.innerHeight;

      const distFromBottom = winH - rect.top;
      const totalTravel = winH + rect.height;
      const ratio = Math.max(0, Math.min(1, distFromBottom / totalTravel));

      setScrollRatio(ratio);
    };

    const handleScroll = () => {
      rafId = requestAnimationFrame(updateScrollRatio);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScrollRatio();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const enterProgress = Math.max(0, Math.min(1, (scrollRatio - 0.08) / 0.32));
  const exitProgress = Math.max(0, Math.min(1, (scrollRatio - 0.78) / 0.22));
  const activeOpacity = Math.min(enterProgress, 1 - exitProgress * 0.35);
  const clipPercent = Math.round(enterProgress * 125);
  const translateY = (scrollRatio - 0.5) * -35;
  const scale = 1.15 - enterProgress * 0.15 + exitProgress * 0.04;
  const blurPx = Math.round((1 - enterProgress) * 18);

  return (
    <button
      ref={containerRef}
      type="button"
      onClick={onOpen}
      onMouseEnter={isVideo ? playVideoPreview : undefined}
      onMouseLeave={isVideo ? pauseVideoPreview : undefined}
      onFocus={isVideo ? playVideoPreview : undefined}
      onBlur={isVideo ? pauseVideoPreview : undefined}
      className={`gallery-thumb group relative block overflow-hidden rounded-2xl text-left shadow-lg transition-all duration-500 ease-out ${
        isVideo ? "bg-neutral-950" : "bg-neutral-900"
      } ${layoutClass}`}
      aria-label={`Open ${item.alt}`}
      style={{
        clipPath: `circle(${clipPercent}% at 50% 50%)`,
        opacity: activeOpacity,
        willChange: "transform, opacity, clip-path, filter",
      }}
    >
      {/* Background Dissolve Veil */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
        style={{
          opacity: 1 - enterProgress,
          background: "radial-gradient(circle, rgba(255,59,31,0.2) 0%, rgba(9,9,9,0.9) 75%)",
          backdropFilter: `blur(${blurPx}px)`,
        }}
      />

      {isVideo ? (
        <video
          loop
          preload="metadata"
          muted
          playsInline
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          onLoadedMetadata={showVideoPreviewFrame}
          style={{
            transform: `translateY(${translateY}px) scale(${scale})`,
            filter: `blur(${blurPx}px) contrast(${100 + (1 - enterProgress) * 30}%)`,
          }}
        >
          <source src={`${item.src}#t=0.75`} type="video/mp4" />
        </video>
      ) : (
        <img
          src={item.src}
          alt={item.alt}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
          style={{
            transform: `translateY(${translateY}px) scale(${scale})`,
            filter: `blur(${blurPx}px) contrast(${100 + (1 - enterProgress) * 30}%)`,
          }}
        />
      )}
      <span className="pointer-events-none absolute inset-0 bg-black/0 transition group-hover:bg-black/25 z-10" />
      {isVideo && (
        <span className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-black/45 text-white shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-sm transition group-hover:scale-110 group-hover:bg-ember md:h-20 md:w-20">
            <Play size={30} fill="currentColor" strokeWidth={1.8} className="ml-1" />
          </span>
        </span>
      )}
      <span className="pointer-events-none absolute bottom-4 left-4 z-20 translate-y-3 rounded-full bg-white px-4 py-2 text-[0.68rem] font-black uppercase text-ink opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100 shadow-md">
        {isVideo ? "Play video" : "View image"}
      </span>
    </button>
  );
}

function GalleryLightbox({ item, onClose, onPrevious, onNext }) {
  return (
    <div
      className="gallery-modal-backdrop fixed inset-0 z-[80] flex items-center justify-center bg-black/90 px-4 py-6 backdrop-blur-md md:px-8"
      role="dialog"
      aria-modal="true"
      aria-label="Expanded gallery media"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onClose();
        }}
        className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink transition hover:bg-ember hover:text-white md:right-8 md:top-8"
        aria-label="Close gallery preview"
      >
        <X size={20} />
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onPrevious();
        }}
        className="absolute left-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-ink md:inline-flex"
        aria-label="View previous media"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-ink md:inline-flex"
        aria-label="View next media"
      >
        <ChevronRight size={24} />
      </button>

      <div
        className="gallery-modal-panel relative max-h-[86vh] w-full max-w-6xl overflow-hidden"
        onClick={(event) => event.stopPropagation()}
      >
        {item.type === "video" ? (
          <video
            key={item.src}
            controls
            autoPlay
            playsInline
            className="mx-auto max-h-[86vh] w-full bg-black object-contain"
          >
            <source src={item.src} type="video/mp4" />
          </video>
        ) : (
          <img
            key={item.src}
            src={item.src}
            alt={item.alt}
            className="mx-auto max-h-[86vh] w-full object-contain"
          />
        )}
      </div>
    </div>
  );
}
