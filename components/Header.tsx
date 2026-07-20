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

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const ctaHref = buildWhatsAppLink(WHATSAPP_NUMBER, DEFAULT_WHATSAPP_MESSAGE);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? "border-b border-accent-green/10 bg-bg-primary/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#inicio"
          className="font-mono-tech text-lg font-medium text-text-light transition-colors hover:text-accent-green"
          aria-label={`${BRAND.name} — inicio`}
        >
          <span className="text-accent-green">~/</span>
          {BRAND.shortName.toLowerCase()}
          <span className="text-accent-green">.</span>
        </a>

        <nav aria-label="Navegación principal" className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-sm text-text-muted transition-colors hover:text-accent-green"
            >
              {item.label}
            </a>
          ))}
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-accent-green/40 bg-accent-green/10 px-4 py-2 text-sm font-medium text-accent-green transition-all hover:bg-accent-green hover:text-bg-primary hover:shadow-[0_0_24px_rgba(0,255,136,0.35)]"
          >
            {HEADER.ctaLabel}
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-text-light transition-colors hover:text-accent-green md:hidden"
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
          className="border-t border-accent-green/10 bg-bg-primary/95 px-4 pb-6 pt-2 backdrop-blur-md md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="block rounded-md px-3 py-3 text-base text-text-light transition-colors hover:bg-accent-green/10 hover:text-accent-green"
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
