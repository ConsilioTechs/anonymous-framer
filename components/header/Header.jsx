"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur-md">
      <div className="container-x flex h-20 items-center justify-between text-white">
        <Link href="/" className="flex items-center gap-2" aria-label="Anonymous Framer home">
          <span className="relative block h-14 w-32">
            <Image
              src="/icons/logo.png"
              alt="Anonymous Framer"
              fill
              priority
              sizes="150px"
              className="object-contain object-left"
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-[16px] font-medium  tracking-normal text-white/70 md:flex">
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-2 transition after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:bg-[#FF3B1F] after:transition-transform ${
                  active
                    ? "text-white after:scale-x-100"
                    : "hover:text-white after:scale-x-0 hover:after:scale-x-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-lg bg-white px-10 py-3  font-semibold uppercase text-[#0B0B0B] text-[14px]   transition hover:bg-ember hover:text-white md:inline-flex"
        >
          Get a Quote
        </Link>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border border-white/20 bg-white/10 text-white md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="container-x border border-white/10 bg-ink/95 p-4 text-white shadow-soft md:hidden">
          <nav className="grid gap-1 text-sm font-bold uppercase">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`border-l-2 px-3 py-3 transition ${
                    active
                      ? "border-ember text-white"
                      : "border-transparent text-white/80 hover:border-ember hover:text-white"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <Link
            href="/contact"
            className="mt-3 inline-flex w-full justify-center bg-white px-5 py-3 text-xs font-black uppercase text-ink"
            onClick={() => setOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
