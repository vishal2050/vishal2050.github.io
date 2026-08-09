"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

export function GlowCard({
  children,
  className,
  href,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [spot, setSpot] = useState({ x: 50, y: 50 });
  const reduce = useReducedMotion();

  const onMove = (e: MouseEvent) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setSpot({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const card = (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      whileHover={reduce ? undefined : { y: -4 }}
      className={cn(
        "group relative h-full overflow-hidden rounded-[var(--radius-lg)] border border-white/8 bg-surface-elevated/80 p-6 transition-colors duration-300 hover:border-accent/30",
        className,
      )}
      style={{
        backgroundImage: reduce
          ? undefined
          : `radial-gradient(420px circle at ${spot.x}% ${spot.y}%, rgba(0,212,255,0.12), transparent 42%)`,
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
      </div>
      <div className="relative z-10">{children}</div>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {card}
      </Link>
    );
  }

  return card;
}
