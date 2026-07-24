import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "AsiaSayesh | آسیا سایش | Premium Industrial Abrasive Products",
  description:
    "AsiaSayesh (آسیا سایش) provides premium industrial abrasive products including grinding wheels, sandpaper, and polishing compounds. Professional-grade solutions for manufacturing and industrial applications.",
  keywords: [
    "AsiaSayesh",
    "Asia Sayesh",
    "آسیا سایش",
    "آسیاسایش",
    "آسیا",
    "سایش",
    "abrasive products",
    "grinding wheels",
    "sandpaper",
    "polishing compounds",
    "industrial abrasives",
    "surface finishing",
    "industrial supplies",
    "ساینده",
    "سنباده",
    "پولیش صنعتی",
  ],
  metadataBase: new URL("https://asiasayesh.com"),
  alternates: {
    canonical: "https://asiasayesh.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["fa_IR"],
    url: "https://asiasayesh.com",
    siteName: "AsiaSayesh | آسیا سایش",
    title: "AsiaSayesh | آسیا سایش | Premium Industrial Abrasive Products",
    description:
      "AsiaSayesh (آسیا سایش) — professional-grade abrasive solutions for industrial applications. Grinding wheels, sandpaper, and polishing compounds.",
    images: [
      {
        url: "/og.jpg",
        width: 1731,
        height: 909,
        alt: "AsiaSayesh | آسیا سایش Industrial Abrasive Products",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AsiaSayesh | آسیا سایش | Premium Industrial Abrasive Products",
    description:
      "AsiaSayesh (آسیا سایش) — professional-grade abrasive solutions for industrial manufacturing.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      {
        url: "/icon-light-32x32.png",
        type: "image/png",
        sizes: "32x32",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        type: "image/png",
        sizes: "32x32",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1f1f1f" },
    { media: "(prefers-color-scheme: dark)", color: "#1f1f1f" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AsiaSayesh",
    alternateName: ["آسیا سایش", "آسیاسایش", "Asia Sayesh"],
    url: "https://asiasayesh.com",
    logo: "https://asiasayesh.com/logo.png",
    description:
      "AsiaSayesh (آسیا سایش) — leading provider of industrial abrasive solutions.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: "+989121327308",
      email: "sales@asiasayesh.com",
      availableLanguage: ["English", "Persian"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "No. 5, 1st floor, Old Jafari Mall, Soltani Alley, Emam Khomeini Ave",
      addressLocality: "Tehran",
      addressCountry: "IR",
    },
  };

  return (
    <html lang="en" className={`bg-background ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-background font-sans">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
