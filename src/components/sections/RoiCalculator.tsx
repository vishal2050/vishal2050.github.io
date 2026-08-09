"use client";

import { useMemo, useState } from "react";
import { FadeIn } from "@/components/animations/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/config/brand";
import { formatCurrency, formatNumber } from "@/lib/utils";

export function RoiCalculator() {
  const [employees, setEmployees] = useState(8);
  const [hours, setHours] = useState(12);
  const [hourlyCost, setHourlyCost] = useState(500);
  const [leads, setLeads] = useState(80);
  const [dealValue, setDealValue] = useState(50000);
  const [unpaid, setUnpaid] = useState(3);

  const estimates = useMemo(() => {
    const hoursSaved = employees * hours * 0.35 * 4;
    const operationalSavings = hoursSaved * hourlyCost;
    const recoveredLeads = Math.round(leads * 0.08);
    const recoveredRevenue = recoveredLeads * dealValue * 0.25;
    const invoiceRecovery = unpaid * dealValue * 0.15;
    return {
      hoursSaved,
      operationalSavings,
      recoveredRevenue: recoveredRevenue + invoiceRecovery,
      total: operationalSavings + recoveredRevenue + invoiceRecovery,
    };
  }, [employees, hours, hourlyCost, leads, dealValue, unpaid]);

  return (
    <section className="section">
      <div className="container-page">
        <FadeIn>
          <SectionHeading
            eyebrow="ROI Estimator"
            title="Estimate where automation could pay for itself."
            description="These are illustrative estimates based on your inputs — not guarantees. Use them to frame a more precise assessment."
          />
        </FadeIn>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeIn className="rounded-2xl border border-white/8 bg-surface-elevated p-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Employees doing manual work" value={employees} min={1} max={200} onChange={setEmployees} />
              <Field label="Hours/week on repetitive work" value={hours} min={1} max={40} onChange={setHours} />
              <Field label="Average hourly cost (₹)" value={hourlyCost} min={100} max={5000} step={50} onChange={setHourlyCost} />
              <Field label="Monthly leads" value={leads} min={0} max={2000} onChange={setLeads} />
              <Field label="Average deal value (₹)" value={dealValue} min={1000} max={5000000} step={1000} onChange={setDealValue} />
              <Field label="Unpaid / stuck invoices" value={unpaid} min={0} max={100} onChange={setUnpaid} />
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="rounded-2xl border border-accent/25 bg-[#071018] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Example monthly outcomes
            </p>
            <dl className="mt-6 space-y-4">
              <Stat label="Potential hours saved" value={`${formatNumber(estimates.hoursSaved)} hrs`} />
              <Stat label="Potential operational savings" value={formatCurrency(estimates.operationalSavings)} />
              <Stat label="Potential recovered revenue" value={formatCurrency(estimates.recoveredRevenue)} />
              <Stat
                label="Combined estimate"
                value={formatCurrency(estimates.total)}
                emphasize
              />
            </dl>
            <p className="mt-5 text-xs leading-relaxed text-zinc-500">
              Estimates only. Actual impact depends on data quality, process design, adoption, and operating context.
            </p>
            <div className="mt-6">
              <Button href="/contact" showArrow>
                {BRAND.cta.roi}
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (v: number) => void;
}) {
  return (
    <label className="block">
      <span className="text-xs text-zinc-400">{label}</span>
      <div className="mt-2 flex items-center gap-3">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full accent-[var(--accent)]"
        />
        <input
          type="number"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="focus-ring w-24 rounded-lg border border-white/10 bg-black/30 px-2 py-1.5 text-sm text-white"
        />
      </div>
    </label>
  );
}

function Stat({
  label,
  value,
  emphasize,
}: {
  label: string;
  value: string;
  emphasize?: boolean;
}) {
  return (
    <div className="flex items-end justify-between gap-4 border-b border-white/8 pb-3">
      <dt className="text-sm text-zinc-400">{label}</dt>
      <dd className={emphasize ? "text-xl font-semibold text-accent" : "text-lg font-semibold text-white"}>
        {value}
      </dd>
    </div>
  );
}
