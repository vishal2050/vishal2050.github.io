import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/config/brand";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "focus-ring group inline-flex items-center gap-3 rounded-md",
        className,
      )}
      aria-label={`${BRAND.name} home`}
    >
      <Image
        src="/brand/logo-mark.svg"
        alt=""
        width={36}
        height={36}
        className="h-9 w-9 transition-transform duration-300 group-hover:scale-105"
        priority
      />
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="text-sm font-bold tracking-[0.22em] text-white">
            {BRAND.name}
          </span>
          <span className="mt-1 text-[10px] font-medium tracking-[0.18em] text-zinc-400">
            SOFTWARE SOLUTIONS
          </span>
        </span>
      )}
    </Link>
  );
}
