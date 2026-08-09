"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/config/brand";
import { cn } from "@/lib/utils";

const industries = [
  "Construction",
  "Manufacturing",
  "Logistics",
  "Real Estate",
  "Healthcare",
  "Education",
  "Restaurants",
  "SME / Services",
  "Other",
];

const sizes = ["1–10", "11–50", "51–200", "201–500", "500+"];

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm({ assessment = false }: { assessment?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    // Client-side lead capture MVP — wire to CRM/email later
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
    (e.target as HTMLFormElement).reset();
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-positive/30 bg-positive/10 p-8 text-center">
        <p className="text-lg font-semibold text-white">Request received.</p>
        <p className="mt-2 text-sm text-zinc-300">
          We&apos;ll review your operational context and follow up with next steps.
        </p>
        <button
          type="button"
          className="mt-6 text-sm text-accent underline"
          onClick={() => setStatus("idle")}
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Company" name="company" required />
        <Field label="Work Email" name="email" type="email" required />
        <Field label="Phone / WhatsApp" name="phone" required />
        <SelectField label="Industry" name="industry" options={industries} required />
        <SelectField label="Company Size" name="size" options={sizes} required />
      </div>
      <Field
        label="Biggest Operational Problem"
        name="problem"
        as="textarea"
        required
        placeholder="Where do you lose time, money, or opportunities?"
      />
      <Field
        label="Current Tools"
        name="tools"
        placeholder="Excel, WhatsApp, Tally, SAP, custom ERP..."
      />
      <Field
        label="Approximate Monthly Volume"
        name="volume"
        placeholder="Leads, invoices, projects, shipments..."
      />
      <Field
        label="Message"
        name="message"
        as="textarea"
        placeholder={
          assessment
            ? "Share enough context for a free leak assessment."
            : "Anything else we should know?"
        }
      />

      <div className="flex flex-col gap-3 pt-2 sm:flex-row">
        <Button type="submit" disabled={status === "loading"} showArrow>
          {status === "loading"
            ? "Sending..."
            : assessment
              ? BRAND.cta.assessment
              : BRAND.cta.audit}
        </Button>
        <Button href="mailto:hello@sutrava.com" variant="secondary">
          {BRAND.cta.discovery}
        </Button>
      </div>
      <p className="text-xs text-zinc-500">
        No spam. We use this information to prepare a practical discovery conversation.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  as,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  as?: "textarea";
  placeholder?: string;
}) {
  const classes = cn(
    "focus-ring mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-zinc-600",
    "transition-colors focus:border-accent/50",
  );

  return (
    <label className="block text-sm text-zinc-300">
      {label}
      {required && <span className="text-accent"> *</span>}
      {as === "textarea" ? (
        <textarea
          name={name}
          required={required}
          rows={4}
          placeholder={placeholder}
          className={classes}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={classes}
        />
      )}
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="block text-sm text-zinc-300">
      {label}
      {required && <span className="text-accent"> *</span>}
      <select
        name={name}
        required={required}
        defaultValue=""
        className="focus-ring mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white focus:border-accent/50"
      >
        <option value="" disabled>
          Select...
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}
