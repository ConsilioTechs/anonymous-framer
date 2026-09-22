"use client";

import React, { useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert("Thank you for subscribing!");
      setEmail("");
    }
  };

  return (
    <section className="bg-paper py-16 sm:py-20 md:py-24">
      <div className="container-x">
        <div className="mx-auto max-w-5xl  bg-[#5B080C] px-6 py-14 sm:py-16 md:py-20 text-center text-white shadow-xl">
          {/* Headline */}
          <h2 className="mx-auto max-w-xl text-2xl sm:text-3xl md:text-[34px] font-semibold leading-snug md:leading-[44px] tracking-tight">
            Subscribe our Notification, <br className="hidden sm:inline" />
            News and Blog
          </h2>

          {/* Integrated Email Form Bar */}
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 sm:mt-10 flex max-w-lg items-center rounded-xl bg-[#FFFDF7] p-1.5 sm:p-2 shadow-inner"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your mail"
              required
              className="w-full bg-transparent px-4 text-sm sm:text-base text-ink placeholder-neutral-400 outline-none"
            />
            <button
              type="submit"
              className="shrink-0 rounded-lg bg-[#0E0E0E] px-5 py-3 text-xs sm:text-sm font-semibold text-white transition-colors "
            >
              Explore more
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
