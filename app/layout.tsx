import type { Metadata, Viewport } from "next";
import { Poppins, Vazirmatn } from "next/font/google";
import { address, products } from "@/lib/content";
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
  preload: false,
});

const siteTitle = "آسیاسایش | AsiaSayesh | اولین تولیدکننده ساینده صنعتی در ایران";
const siteDescription =
  "آسیاسایش، اولین تولیدکننده محصولات ساینده صنعتی در ایران. سمباده چتری، حلقوی، تسمه‌ای، فلاپ دیسک، رول کارتریج و پد اسکاچ.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
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
    "تولیدکننده ساینده",
    "سمباده صنعتی",
    ...products.flatMap(({ en, fa }) => [en.name, fa.name]),
  ],
  metadataBase: new URL("https://asiasayesh.com"),
  alternates: {
    canonical: "https://asiasayesh.com",
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    alternateLocale: ["en_US"],
    url: "https://asiasayesh.com",
    siteName: "آسیاسایش | AsiaSayesh",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/og.jpg",
        width: 1731,
        height: 909,
        alt: "آسیاسایش | AsiaSayesh محصولات ساینده صنعتی",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
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
    description: siteDescription,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: "+989121327308",
      email: "sales@asiasayesh.com",
      availableLanguage: ["English", "Persian"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.locality,
      addressCountry: address.countryCode,
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
      </body>
    </html>
  );
}
