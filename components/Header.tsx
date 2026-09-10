"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import {
  BRAND,
  DEFAULT_WHATSAPP_MESSAGE,
  HEADER,
  NAV_ITEMS,
  WHATSAPP_NUMBER,
} from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.35, 0.6] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const ctaHref = buildWhatsAppLink(WHATSAPP_NUMBER, DEFAULT_WHATSAPP_MESSAGE);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || menuOpen
          ? "border-b border-accent-green/20 bg-bg-primary/75 shadow-[0_8px_32px_rgba(0,0,0,0.35),0_1px_0_rgba(0,255,136,0.12)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#inicio"
          className="group flex items-center gap-3 font-mono-tech text-lg font-medium text-text-light transition-colors hover:text-accent-green"
          aria-label={`${BRAND.name} — inicio`}
        >
          <div className="relative flex h-8 w-8 items-center justify-center rounded-full border border-accent-green/60 bg-bg-secondary p-0.5 shadow-[0_0_15px_rgba(0,255,136,0.4)] transition-transform group-hover:scale-105">
            <img
              src={BRAND.logoPath}
              alt="Ronnie Logo"
              className="h-full w-full rounded-full object-cover"
            />
            <span
              aria-hidden="true"
              className="status-dot absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border border-bg-primary bg-accent-green shadow-[0_0_8px_rgba(0,255,136,0.9)]"
            />
          </div>
          <span className="font-heading font-bold tracking-wider">
            <span className="text-accent-green">~/</span>
            {BRAND.shortName.toLowerCase()}
            <span className="text-accent-green">.</span>
          </span>
        </a>

        <nav aria-label="Navegación principal" className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={cn(
                  "group/nav relative text-sm transition-colors",
                  isActive
                    ? "text-accent-green"
                    : "text-text-muted hover:text-accent-green",
                )}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute -bottom-1 left-0 h-px w-full origin-left bg-accent-green shadow-[0_0_8px_rgba(0,255,136,0.8)] transition-transform duration-300",
                    isActive ? "scale-x-100" : "scale-x-0 group-hover/nav:scale-x-100",
                  )}
                />
              </a>
            );
          })}
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-neon-pulse rounded-md border border-accent-green/50 bg-accent-green/15 px-4 py-2 text-sm font-medium text-accent-green transition-all hover:-translate-y-0.5 hover:bg-accent-green hover:text-bg-primary hover:shadow-[0_0_28px_rgba(0,255,136,0.45)]"
          >
            {HEADER.ctaLabel}
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-accent-green/15 text-text-light transition-colors hover:border-accent-green/40 hover:text-accent-green md:hidden"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Navegación móvil"
          className="border-t border-accent-green/15 bg-bg-primary/95 px-4 pb-6 pt-2 backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={cn(
                    "block rounded-md px-3 py-3 text-base transition-colors hover:bg-accent-green/10 hover:text-accent-green",
                    activeId === item.id
                      ? "bg-accent-green/10 text-accent-green"
                      : "text-text-light",
                  )}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-md border border-accent-green/40 bg-accent-green/10 px-3 py-3 text-center text-base font-medium text-accent-green transition-all hover:bg-accent-green hover:text-bg-primary"
                onClick={() => setMenuOpen(false)}
              >
                {HEADER.ctaLabel}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
