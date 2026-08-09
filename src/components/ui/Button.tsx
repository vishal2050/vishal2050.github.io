"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  showArrow?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-[#041016] hover:brightness-110 shadow-[0_0_28px_rgba(0,212,255,0.28)]",
  secondary:
    "bg-white/5 text-white border border-white/12 hover:bg-white/10 hover:border-accent/40",
  ghost: "bg-transparent text-white hover:text-accent",
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  showArrow = false,
  type = "button",
  onClick,
  disabled,
}: ButtonProps) {
  const reduce = useReducedMotion();
  const classes = cn(
    "group focus-ring inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-[transform,filter,background,border-color] duration-300",
    variants[variant],
    disabled && "pointer-events-none opacity-50",
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (href) {
    return (
      <motion.div
        whileHover={reduce ? undefined : { y: -2 }}
        whileTap={reduce ? undefined : { scale: 0.98 }}
        className="inline-flex"
      >
        <Link href={href} className={classes}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={reduce ? undefined : { y: -2 }}
      whileTap={reduce ? undefined : { scale: 0.98 }}
      className={classes}
    >
      {content}
    </motion.button>
  );
}
