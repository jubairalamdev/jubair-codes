"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import { navLinks } from "@/constants/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";

const sectionIds = navLinks.map((l) => l.href.replace("/#", ""));

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);

    const [path, hash] = href.split("#");

    if (pathname !== path && path) {
      router.push(href);
      return;
    }

    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between rounded-full border border-border bg-white/90 px-8 py-3 shadow-sm backdrop-blur-md mt-4">
        <span className="text-sm font-semibold text-black font-heading">Jubair</span>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : activeSection === link.href.split("#")[1];
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  aria-current={isActive ? "true" : undefined}
                  className={`text-sm font-medium transition-colors font-heading ${
                    isActive
                      ? "text-accent"
                      : "text-secondary hover:text-black"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex rounded-full bg-primary px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-hover font-heading"
          >
            Download CV
          </a>

          <button
            className="md:hidden text-xl text-secondary hover:text-black transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      <div
        className={`mx-auto mt-2 max-w-[1200px] px-6 transition-all duration-200 md:hidden ${
          mobileOpen
            ? "visible translate-y-0 opacity-100 pointer-events-auto"
            : "invisible -translate-y-1 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="rounded-2xl border border-border bg-white p-4 shadow-sm flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : activeSection === link.href.split("#")[1];
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  aria-current={isActive ? "true" : undefined}
                    className={`block rounded-lg px-4 py-2 text-sm font-medium transition-colors font-heading ${
                      isActive
                        ? "text-accent bg-accent/5"
                        : "text-secondary hover:text-black hover:bg-bg-subtle"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
          <li className="mt-2 px-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-full bg-primary px-5 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-primary-hover font-heading"
            >
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
