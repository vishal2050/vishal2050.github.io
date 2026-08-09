"use client";

import { motion, useReducedMotion } from "framer-motion";

const sources = [
  { label: "Documents", x: 8, y: 18 },
  { label: "CRM", x: 4, y: 48 },
  { label: "WhatsApp", x: 12, y: 78 },
  { label: "Invoices", x: 78, y: 14 },
  { label: "Drawings", x: 88, y: 42 },
  { label: "ERP", x: 82, y: 72 },
  { label: "Payments", x: 48, y: 6 },
  { label: "Operations", x: 52, y: 90 },
];

const outputs = [
  "Lost Revenue Detected",
  "Operational Bottleneck",
  "Automation Opportunity",
  "Cost Reduction",
];

export function HeroVisual() {
  const reduce = useReducedMotion();

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[560px] sm:aspect-[5/4]"
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-[2rem] border border-white/8 bg-gradient-to-b from-white/[0.04] to-transparent" />
      <div className="absolute inset-4 rounded-[1.5rem] border border-white/5 bg-[#09090d]/80 grid-bg" />

      {/* Connection lines */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {sources.map((s, i) => (
          <motion.line
            key={s.label}
            x1={s.x}
            y1={s.y}
            x2="50"
            y2="48"
            stroke="url(#lineGrad)"
            strokeWidth="0.25"
            initial={reduce ? false : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.55 }}
            transition={{ duration: 1.2, delay: 0.2 + i * 0.08 }}
          />
        ))}
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#00d4ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      {/* Particles */}
      {!reduce &&
        sources.map((s, i) => (
          <motion.span
            key={`p-${s.label}`}
            className="absolute h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_#00d4ff]"
            style={{ left: `${s.x}%`, top: `${s.y}%` }}
            animate={{
              left: ["50%", `${s.x}%`, "50%"],
              top: ["48%", `${s.y}%`, "48%"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3.8,
              delay: i * 0.35,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

      {/* Source nodes */}
      {sources.map((s, i) => (
        <motion.div
          key={s.label}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-[#0f1118]/95 px-2.5 py-1 text-[10px] font-medium text-zinc-300 shadow-lg backdrop-blur sm:text-xs"
          style={{ left: `${s.x}%`, top: `${s.y}%` }}
          initial={reduce ? false : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15 + i * 0.05 }}
        >
          <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-accent" />
          {s.label}
        </motion.div>
      ))}

      {/* Central engine */}
      <motion.div
        className="absolute left-1/2 top-[48%] w-[42%] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-accent/30 bg-[#0b1220]/95 p-4 text-center shadow-[0_0_60px_rgba(0,212,255,0.22)]"
        animate={
          reduce
            ? undefined
            : {
                boxShadow: [
                  "0 0 40px rgba(0,212,255,0.16)",
                  "0 0 70px rgba(0,212,255,0.32)",
                  "0 0 40px rgba(0,212,255,0.16)",
                ],
              }
        }
        transition={{ duration: 3.2, repeat: Infinity }}
      >
        <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full border border-accent/40 bg-accent/10">
          <div className="h-3 w-3 rounded-full bg-accent" />
        </div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
          AI Engine
        </p>
        <p className="mt-1 text-xs text-zinc-300 sm:text-sm">Business Intelligence</p>
      </motion.div>

      {/* Outputs */}
      <div className="absolute inset-x-4 bottom-4 grid grid-cols-2 gap-2">
        {outputs.map((item, i) => (
          <motion.div
            key={item}
            className="rounded-xl border border-white/8 bg-black/50 px-3 py-2 text-[10px] text-zinc-200 backdrop-blur sm:text-xs"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + i * 0.1 }}
          >
            <span className="mr-1 text-positive">●</span>
            {item}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
