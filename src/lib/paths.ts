/**
 * Build a public asset URL that works on GitHub project Pages.
 * Prefer absolute site URLs so assets never resolve to github.io root.
 */
export function withBasePath(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//") || /^https?:/i.test(path)) {
    return path;
  }

  const site = (process.env.NEXT_PUBLIC_SITE_URL ?? "").replace(/\/$/, "");
  if (site) {
    return `${site}${path}`;
  }

  let base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  if (!base && typeof window !== "undefined") {
    const match = window.location.pathname.match(
      /^\/(SutravaSoftwareSolution)(?:\/|$)/,
    );
    if (match) base = `/${match[1]}`;
  }

  return `${base}${path}`;
}
