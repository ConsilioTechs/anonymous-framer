"use client";

import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { useEffect, useState } from "react";
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

  return (
    <button
      type="button"
      onClick={onOpen}
      onMouseEnter={isVideo ? playVideoPreview : undefined}
      onMouseLeave={isVideo ? pauseVideoPreview : undefined}
      onFocus={isVideo ? playVideoPreview : undefined}
      onBlur={isVideo ? pauseVideoPreview : undefined}
      className={`gallery-thumb group relative block overflow-hidden text-left shadow-[0_1px_0_rgba(0,0,0,0.04)] ${
        isVideo ? "bg-neutral-950" : "bg-white"
      } ${
        layoutClass
      }`}
      aria-label={`Open ${item.alt}`}
    >
      {isVideo ? (
        <video
          loop
          preload="metadata"
          muted
          playsInline
          className="h-full w-full object-cover"
          onLoadedMetadata={showVideoPreviewFrame}
        >
          <source src={`${item.src}#t=0.75`} type="video/mp4" />
        </video>
      ) : (
        <img
          src={item.src}
          alt={item.alt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      )}
      <span className="pointer-events-none absolute inset-0 bg-black/0 transition group-hover:bg-black/25" />
      {isVideo && (
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-black/45 text-white shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-sm transition group-hover:scale-110 group-hover:bg-ember md:h-20 md:w-20">
            <Play size={30} fill="currentColor" strokeWidth={1.8} className="ml-1" />
          </span>
        </span>
      )}
      <span className="pointer-events-none absolute bottom-4 left-4 translate-y-3 rounded-full bg-white px-4 py-2 text-[0.68rem] font-black uppercase text-ink opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
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
