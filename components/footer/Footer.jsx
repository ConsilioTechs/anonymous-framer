import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-ink text-white pt-16 pb-10 border-t border-white/10">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1.8fr] items-start">
          {/* Left Column: Logo & Main Tagline */}
          <div>
            <Link href="/" className="inline-block">
              <img
                src="/icons/logo.png"
                alt="Anonymous Framer"
                className="h-12 sm:h-14 w-auto object-contain object-left"
              />
            </Link>
            <h2 className="lg:mt-16 mt-8 max-w-md text-3xl sm:text-4xl lg:text-[40px] font-black uppercase lg:leading-[60px] tracking-tight text-white">
              WE BUILD BRANDS
              THAT <span className="text-[#FF3B1F]">GET NOTICED.</span>
            </h2>
          </div>

          {/* Right Column: Navigation, Services, Contact & Socials */}
          <div className="grid gap-10 grid-cols-1 sm:grid-cols-3">
            {/* Quick Links */}
            <div>
              <h3 className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-white/70 mb-5">
                QUICK LINKS
              </h3>
              <ul className="space-y-3.5 text-sm sm:text-base font-semibold text-white/90">
                <li>
                  <Link href="/" className="hover:text-[#FF3B1F] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="hover:text-[#FF3B1F] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-[#FF3B1F] transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-[#FF3B1F] transition-colors">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-[#FF3B1F] transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-white/70 mb-5">
                SERVICES
              </h3>
              <ul className="space-y-3.5 text-sm sm:text-base font-semibold text-white/90">
                <li>
                  <Link href="/services" className="hover:text-[#FF3B1F] transition-colors">
                    Printing
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-[#FF3B1F] transition-colors">
                    Logo Design
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-[#FF3B1F] transition-colors">
                    Hand crafting
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-[#FF3B1F] transition-colors">
                    Art work
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-[#FF3B1F] transition-colors">
                    Framing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact & Socials */}
            <div>
              <h3 className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-white/70 mb-5">
                CONTACT
              </h3>
              <div className="space-y-3 text-sm sm:text-base font-semibold text-white/90">
                <p>
                  <a href="mailto:evarestuschidi23@gmail.com" className="hover:text-[#FF3B1F] transition-colors">
                    evarestuschidi23@gmail.com
                  </a>
                </p>
                <p>
                  <a href="tel:+2347082021049" className="hover:text-[#FF3B1F] transition-colors">
                    +234 708 202 1049
                  </a>
                </p>
                <p className="text-white/80 leading-relaxed font-normal">
                  shop E23/22 area 7 and 10 information market
                </p>
              </div>

              {/* Socials */}
              <div className="mt-8">
                <h3 className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-white/70 mb-4">
                  SOCIALS
                </h3>
                <div className="flex items-center gap-3">
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/anonymous_framer?stkn=MTZpODk4MWtvbXJ4NA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="hover:scale-110 transition-transform"
                  >
                    <svg className="w-7 h-7 rounded-lg" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="6" fill="url(#igGrad)" />
                      <path
                        d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"
                        fill="white"
                      />
                      <circle cx="15.5" cy="8.5" r="1" fill="white" />
                      <defs>
                        <radialGradient id="igGrad" cx="30%" cy="107%" r="130%">
                          <stop offset="0%" stopColor="#fdf497" />
                          <stop offset="5%" stopColor="#fdf497" />
                          <stop offset="45%" stopColor="#fd5949" />
                          <stop offset="60%" stopColor="#d6249f" />
                          <stop offset="90%" stopColor="#285AEB" />
                        </radialGradient>
                      </defs>
                    </svg>
                  </a>

                  {/* TikTok */}
                  <a
                    href="https://www.tiktok.com/@anonymous_framer?_r=1&_t=ZS-99whD370Rr0"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="hover:scale-110 transition-transform"
                  >
                    <svg className="w-7 h-7 rounded-full bg-black p-1.5 border border-white/20" viewBox="0 0 24 24" fill="white">
                      <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.901 2.858 2.895 2.895 0 0 1-2.9-2.883 2.895 2.895 0 0 1 2.9-2.883c.365 0 .714.07 1.036.195V9.458a6.297 6.297 0 0 0-1.036-.086 6.34 6.34 0 0 0-6.343 6.343 6.34 6.34 0 0 0 6.343 6.343 6.341 6.341 0 0 0 6.344-6.343V8.895a8.217 8.217 0 0 0 4.772 1.516v-3.725a4.806 4.806 0 0 1-1.004-.002z" />
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/share/1BoMMaS9cX/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="hover:scale-110 transition-transform"
                  >
                    <svg className="w-7 h-7 rounded-full bg-[#1877F2] p-1.5" viewBox="0 0 24 24" fill="white">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/2347082021049?text=Hello%20Anonymous%20Framer!%20I%20would%20like%20to%20make%20an%20inquiry%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="hover:scale-110 transition-transform"
                  >
                    <svg className="w-7 h-7 rounded-full bg-[#25D366] p-1.5" viewBox="0 0 24 24" fill="white">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.224 1.648zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                    </svg>
                  </a>

                  {/* Twitter / X */}
                  <a
                    href="https://x.com/anonymouzframer?s=11"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="hover:scale-110 transition-transform"
                  >
                    <svg className="w-7 h-7 rounded-full bg-[#1DA1F2] p-1.5" viewBox="0 0 24 24" fill="white">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar Separator & Copyright */}
        <div className="mt-14 pt-6 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-white/50 tracking-wider">
          <p className="uppercase">
            © 2026 ANONYMOUS FRAMER. ALL RIGHTS RESERVED.
          </p>
          <p className="uppercase tracking-widest font-mono text-white/40 text-[11px] sm:text-xs">
            DESIGN · PRINT · CRAFT — MADE TO BE HELD.
          </p>
        </div>
      </div>
    </footer>
  );
}
