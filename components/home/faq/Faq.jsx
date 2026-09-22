"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqCategories = [
  {
    name: "GENERAL",
    items: [
      {
        id: "01",
        question: "What Services do you Offer?",
        answer:
          "We cover branding and brand identity, Logo design, graphic design, business cards, flyers. banners, general printing and T-shirt and merchadize printing from first idea to finished physical piece",
      },
      {
        id: "02",
        question: "Do you handle both Design and printing?",
        answer:
          "Yes, we handle both design and printing in-house. We can start from a brand concept or print your existing print-ready artwork.",
      },
    ],
  },
  {
    name: "FRAMING",
    items: [
      {
        id: "01",
        question: "What Framing options do you offer?",
        answer:
          "We offer custom wood frames, floating frames, acrylic panels, and custom mounting options tailored to the size and weight of your print.",
      },
      {
        id: "02",
        question: "What is Hand Crafting",
        answer:
          "Hand crafting includes hand-assembled mounts, foil accents, custom borders, and bespoke physical finishes applied to prints.",
      },
    ],
  },
  {
    name: "DESIGN",
    items: [
      {
        id: "01",
        question: "Can I provide my own design for printing?",
        answer:
          "All vector artwork or high-resolution PDF print-ready files can be sent directly for production.",
      },
    ],
  },
  {
    name: "PRINTING",
    items: [
      {
        id: "01",
        question: "What printing materials do you work with?",
        answer:
          "We print on premium paper stocks, canvas, vinyl, acrylic, metal, wood, and high-quality T-shirt apparel fabrics.",
      },
      {
        id: "02",
        question: "Do you print T-Shirt and merchandise?",
        answer:
          "Yes, we print custom apparel, t-shirts, tote bags, hoodies, and promotional items.",
      },
    ],
  },
  {
    name: "TURN AROUND",
    items: [
      {
        id: "01",
        question: "How long does a typical project take?",
        answer:
          "Turnaround depends on project scope. Standard print orders take 2-4 business days while custom framing & complex designs take 5-7 business days.",
      },
    ],
  },
  {
    name: "PRICING",
    items: [
      {
        id: "01",
        question: "How does the pricing work?",
        answer:
          "Pricing is calculated based on materials, dimensions, quantity, and design requirements. Request a free quote for custom estimates.",
      },
    ],
  },
];

export default function Faq() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const handleCategoryChange = (index) => {
    setActiveCategory(index);
    setOpenFaqIndex(0); // 1st question of the selected category opens by default with black background
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-x">
        {/* Header */}
        <h2 className="text-4xl sm:text-[64px] font-extrabold uppercase tracking-tight text-[#171717]">
          FAQ
        </h2>
        <p className="lg:mt-7 mt-3 text-[16px] sm:text-[20px] text-neutral-500 max-w-sm leading-relaxed">
          Can't find what you are looking for? Reach out then we answer personally
        </p>

        {/* Layout Grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[220px_1fr] items-start">
          {/* Left Category Menu */}
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-none">
            {faqCategories.map((category, index) => {
              const isSelected = activeCategory === index;
              return (
                <button
                  key={category.name}
                  onClick={() => handleCategoryChange(index)}
                  className={`px-5 py-3.5 rounded-lg text-left text-[14px] lg:text-[20px] font-extrabold uppercase  transition-all duration-200 shrink-0 ${
                    isSelected
                      ? "bg-[#FAF7F0] text-[#171717] shadow-sm"
                      : "text-neutral-400 hover:text-[#171717] bg-transparent"
                  }`}
                >
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* Right Accordions List for Active Category */}
          <div className="space-y-4">
            {faqCategories[activeCategory].items.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={`${item.id}-${index}`}
                  onClick={() => toggleFaq(index)}
                  className={`rounded-lg p-6 sm:p-7 cursor-pointer transition-all duration-300 select-none ${
                    isOpen
                      ? "bg-[#0A0A0A] text-white shadow-xl"
                      : "bg-[#FAF7F0] text-[#171717] hover:bg-[#F4EFE3]"
                  }`}
                >
                  {/* Top Row: Number, Question, Icon */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-5 sm:gap-7">
                      <span
                        className={`text-sm sm:text-base font-bold select-none ${
                          isOpen ? "text-white" : "text-neutral-300"
                        }`}
                      >
                        {item.id}
                      </span>
                      <h3
                        className={`text-base sm:text-lg md:text-xl font-medium sm:font-semibold tracking-tight ${
                          isOpen ? "text-white" : "text-[#171717]"
                        }`}
                      >
                        {item.question}
                      </h3>
                    </div>

                    {/* Expand/Collapse Icon */}
                    <div className="shrink-0">
                      {isOpen ? (
                        <Minus size={20} className="text-white" />
                      ) : (
                        <Plus size={20} className="text-neutral-400" />
                      )}
                    </div>
                  </div>

                  {/* Answer Text when Open */}
                  {isOpen && (
                    <p className="mt-4 pl-9 sm:pl-12 text-sm sm:text-base leading-relaxed text-neutral-300 transition-all duration-300">
                      {item.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
