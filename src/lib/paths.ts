/**
 * Prefix public asset paths with the GitHub Pages basePath when present.
 * next/image does not always apply basePath for static public files on export.
 */
export function withBasePath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!path.startsWith("/") || path.startsWith("//") || path.startsWith("http")) {
    return path;
  }
  return `${base}${path}`;
}
