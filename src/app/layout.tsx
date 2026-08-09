import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { BRAND } from "@/config/brand";
import { withBasePath } from "@/lib/paths";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.url),
  title: {
    default: `${BRAND.name} — AI Business Automation & Intelligence`,
    template: `%s | ${BRAND.name}`,
  },
  description: BRAND.description,
  applicationName: BRAND.legalName,
  keywords: [
    "AI business automation",
    "money leak detection",
    "document intelligence",
    "workflow automation",
    "construction AI",
    "Sutrava",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BRAND.url,
    siteName: BRAND.legalName,
    title: `${BRAND.name} — AI Business Automation & Intelligence`,
    description: BRAND.description,
    images: [
      {
        url: withBasePath("/brand/og-image.png"),
        width: 1920,
        height: 1080,
        alt: BRAND.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} — AI Business Automation & Intelligence`,
    description: BRAND.description,
    images: [withBasePath("/brand/og-image.png")],
  },
  icons: {
    icon: [{ url: withBasePath("/brand/favicon.svg"), type: "image/svg+xml" }],
    apple: [{ url: withBasePath("/brand/logo-mark.png") }],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-text-primary">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
