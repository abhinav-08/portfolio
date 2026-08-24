import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { SITE_URL, identity } from "@/lib/site";
import "./globals.css";

/*
 * Fonts are vendored into ./fonts (OFL-licensed, sourced from @fontsource) and
 * served from our own origin. This keeps the build offline-capable, removes a
 * third-party request from every page view, and lets next/font hash + preload
 * the files. `adjustFontFallback` sizes the system fallback to the real face so
 * the swap doesn't shift layout.
 */

const cormorant = localFont({
  src: [
    { path: "./fonts/cormorant-garamond-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/cormorant-garamond-latin-400-italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/cormorant-garamond-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/cormorant-garamond-latin-500-italic.woff2", weight: "500", style: "italic" },
    { path: "./fonts/cormorant-garamond-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/cormorant-garamond-latin-600-italic.woff2", weight: "600", style: "italic" },
  ],
  display: "swap",
  variable: "--font-cormorant",
  fallback: ["Georgia", "Times New Roman", "serif"],
  adjustFontFallback: "Times New Roman",
  preload: true,
});

const instrument = localFont({
  src: [
    { path: "./fonts/instrument-sans-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/instrument-sans-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/instrument-sans-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
  display: "swap",
  variable: "--font-instrument",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "sans-serif"],
  adjustFontFallback: "Arial",
  preload: true,
});

const plexMono = localFont({
  src: [
    { path: "./fonts/ibm-plex-mono-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/ibm-plex-mono-latin-500-normal.woff2", weight: "500", style: "normal" },
  ],
  display: "swap",
  variable: "--font-plex-mono",
  fallback: ["ui-monospace", "SFMono-Regular", "monospace"],
  preload: true,
});

const description =
  "I teach machines what people mean — not just what they type. Five years of search platforms and ranking models that stay calm at 25K requests a minute.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Abhinav Tyagi — Backend & Search Engineer",
  description,
  alternates: { canonical: "/" },
  keywords: [
    "Abhinav Tyagi",
    "search engineer",
    "backend engineer",
    "Elasticsearch",
    "learning to rank",
    "vector search",
    "query understanding",
    "Kafka",
    "Gurugram",
  ],
  authors: [{ name: identity.name, url: SITE_URL }],
  creator: identity.name,
  openGraph: {
    type: "profile",
    url: SITE_URL,
    siteName: "Abhinav Tyagi",
    title: "Abhinav Tyagi — Backend & Search Engineer",
    description,
    images: [{ url: "/assets/og.png", width: 1200, height: 630, alt: "Abhinav Tyagi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhinav Tyagi — Backend & Search Engineer",
    description,
    images: ["/assets/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0e0d0b",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: identity.name,
  url: SITE_URL,
  jobTitle: identity.role,
  email: `mailto:${identity.email}`,
  telephone: identity.phone,
  image: `${SITE_URL}/assets/portrait-cutout.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
  worksFor: { "@type": "Organization", name: "Majid Al Futtaim" },
  knowsAbout: [
    "Elasticsearch",
    "Learning to Rank",
    "Vector search",
    "Query understanding",
    "Distributed systems",
    "Apache Kafka",
  ],
  sameAs: [
    identity.github,
    identity.linkedin,
    identity.instagram,
    identity.medium,
    identity.youtube,
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${instrument.variable} ${plexMono.variable}`}
    >
      <head>
        <link
          rel="preload"
          as="image"
          href="/assets/portrait-cutout.webp"
          type="image/webp"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
