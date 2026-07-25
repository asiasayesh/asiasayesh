import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Poppins, Vazirmatn } from "next/font/google";
import { products } from "@/lib/content";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fa",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AsiaSayesh | آسیاسایش | Premium Industrial Abrasive Products",
  description:
    "AsiaSayesh (آسیاسایش): premium industrial abrasives in Iran. Grinding wheels, sandpaper, and polishing products.",
  keywords: [
    "AsiaSayesh",
    "آسیاسایش",
    "Asia Sayesh",
    "آسیا سایش",
    "abrasive products",
    "grinding wheels",
    "sandpaper",
    "polishing products",
    "industrial abrasives",
    "surface finishing",
    "industrial supplies",
    "ساینده",
    "سنباده",
    "پولیش صنعتی",
    ...products.flatMap(({ en, fa }) => [en.name, fa.name]),
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
    siteName: "AsiaSayesh | آسیاسایش",
    title: "AsiaSayesh | آسیاسایش | Premium Industrial Abrasive Products",
    description:
      "Premium industrial abrasives from AsiaSayesh. Grinding wheels, sandpaper, and polishing products.",
    images: [
      {
        url: "/og.jpg",
        width: 1731,
        height: 909,
        alt: "AsiaSayesh | آسیاسایش Industrial Abrasive Products",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AsiaSayesh | آسیاسایش | Premium Industrial Abrasive Products",
    description:
      "Premium industrial abrasives from AsiaSayesh. Grinding wheels, sandpaper, and polishing products.",
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
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
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
    alternateName: ["آسیاسایش", "آسیا سایش", "Asia Sayesh"],
    url: "https://asiasayesh.com",
    logo: "https://asiasayesh.com/logo.png",
    description:
      "AsiaSayesh (آسیاسایش) — leading provider of industrial abrasive solutions in Iran.",
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
    <html
      lang="en"
      className={`bg-background ${poppins.variable} ${vazirmatn.variable}`}
    >
      <head>
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
