"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { navigation } from "@/data/industries";
import { BRAND } from "@/config/brand";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/8 bg-[#050505]/80 py-3 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent py-5",
      )}
    >
      <div className="container-page flex items-center justify-between gap-6">
        <Logo />

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-full px-3 py-2 text-sm text-zinc-300 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <nav className="hidden items-center gap-0.5 md:flex xl:hidden" aria-label="Primary compact">
            {navigation.slice(0, 3).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded-full px-2.5 py-2 text-sm text-zinc-300 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button href="/contact" showArrow className="hidden md:inline-flex">
            Find Your Business Leak
          </Button>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={reduce ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -12 }}
            className="fixed inset-0 top-[68px] z-40 bg-[#050505]/96 backdrop-blur-xl lg:hidden"
          >
            <nav className="container-page flex h-full flex-col gap-2 py-8" aria-label="Mobile">
              {navigation.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={reduce ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl border border-white/6 bg-white/[0.02] px-5 py-4 text-lg font-medium text-white"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-4">
                <Button href="/contact" className="w-full" showArrow>
                  {BRAND.cta.primary}
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
