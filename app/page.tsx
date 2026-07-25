"use client";

import { useState } from "react";
import { locale, productJsonLd } from "@/lib/content";
import {
  JsonLd,
  Nav,
  Hero,
  Products,
  Features,
  Contact,
  Footer,
} from "@/components/sections";

export default function Home() {
  const [lang, setLang] = useState("en");
  const t = locale(lang);

  return (
    <>
      <JsonLd data={productJsonLd} />
      <div
        className={`min-h-screen bg-background text-foreground ${t.isRTL ? "rtl" : "ltr"}`}
        dir={t.isRTL ? "rtl" : "ltr"}
      >
        <Nav t={t} lang={lang} setLang={setLang} />
        <Hero t={t} />
        <Products t={t} />
        <Features t={t} />
        <Contact t={t} />
        <Footer t={t} />
      </div>
    </>
  );
}
