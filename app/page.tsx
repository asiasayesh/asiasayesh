"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Mail, ArrowRight, Globe } from "lucide-react";

type Language = "en" | "fa";

const translations = {
  en: {
    nav: {
      brand: "Sayesh",
      products: "Products",
      contact: "Contact",
      callNow: "Call Now",
    },
    hero: {
      badge: "First Manufacturer in Iran",
      title: "Professional Abrasive Solutions for Every Industry",
      description:
        "From precision fine polishing, our industrial-grade abrasive products deliver consistent results and unmatched durability.",
      getStarted: "Get Started",
      emailSales: "Email Sales",
    },
    products: {
      title: "Our Products",
      description:
        "Premium abrasive solutions engineered for precision, durability, and superior performance",
      items: [
        {
          name: "Abrasive Cylinders",
          description:
            "Cylindrical sanding sleeves for contour work, deburring, and finishing on curved surfaces.",
          learnMore: "Learn More",
        },
        {
          name: "Mounted Flap Wheels",
          description:
            "Shank-mounted abrasive flaps for deburring, blending, and finishing on contoured metal surfaces.",
          learnMore: "Learn More",
        },
        {
          name: "Abrasive Sanding Belts",
          description:
            "Endless abrasive belts for stock removal, grinding, and surface finishing on metal and wood.",
          learnMore: "Learn More",
        },
        {
          name: "Abrasive Flap Discs",
          description:
            "Cloth flap discs for grinding, blending, and finishing metal with angle grinders.",
          learnMore: "Learn More",
        },
        {
          name: "Abrasive Cartridge Rolls",
          description:
            "Spiral and cylindrical cone-shaped abrasive rolls for deburring and finishing holes, corners, and tight spaces.",
          learnMore: "Learn More",
        },
        {
          name: "Non-Woven Cloth Flap Wheels",
          description:
            "Non-woven flap wheels for cleaning, blending, and scratch-free finishing on metals and alloy products. Can be combined with abrasive cloth upon customer request.",
          learnMore: "Learn More",
        },
        {
          name: "Abrasive Flap Wheels",
          description:
            "Cloth flap wheels for finishing and blending flat and contoured surfaces.",
          learnMore: "Learn More",
        },
        {
          name: "Non-Woven Abrasive Flap Wheels",
          description:
            "Non-woven hub flap wheels for cleaning, blending, and satin finishing on metal.",
          learnMore: "Learn More",
        },
        {
          name: "Non-Woven Hand Pads",
          description:
            "Flexible non-woven pads for hand cleaning, scuffing, and finishing on metal and wood.",
          learnMore: "Learn More",
        },
      ],
    },
    features: [
      {
        title: "Industrial Grade",
        description:
          "Built to withstand heavy-duty applications with consistent performance and reliability.",
      },
      {
        title: "Competitive Pricing",
        description:
          "Premium quality at prices that make sense for your bottom line. Volume discounts available.",
      },
      {
        title: "Expert Support",
        description:
          "Our team of abrasive specialists is ready to help you find the perfect solution.",
      },
    ],
    cta: {
      title: "Ready to Upgrade Your Polishing?",
      description:
        "Contact our sales team today to discuss your specific needs and get a custom quote.",
      callTitle: "Call Us",
      callAvailability: "Available Saturday to Wednesday, 9am-5pm",
      callNumber: "+98 912 132 7308",
      emailTitle: "Email Us",
      emailAvailability: "We'll respond within 2 business days",
      email: "sales@asiasayesh.com",
    },
    footer: {
      companyDesc: "Leading provider of industrial abrasive solutions.",
      address:
        "No. 5, 1st floor, Old Jafari Mall, Soltani Alley, Emam Khomeini Ave, Tehran, Iran",
      copyright: "© 2026 AsiaSayesh. All rights reserved.",
    },
  },
  fa: {
    nav: {
      brand: " سایش",
      products: "محصولات",
      contact: "تماس",
      callNow: "تماس بگیرید",
    },
    hero: {
      badge: "اولین تولیدکننده در ایران",
      title: "راه‌حل‌های پولیش حرفه‌ای برای هر صنعتی",
      description:
        "از پولیش‌کاری دقیق و ظریف، محصولات پولیش درجه صنعتی ما نتایج ثابت و دوام بی‌نظیری را ارائه می‌دهند.",
      getStarted: "شروع کنید",
      emailSales: "ارسال ایمیل",
    },
    products: {
      title: "محصولات ما",
      description:
        "راه‌حل‌های پولیش بسیار باکیفیت برای دقت، دوام و عملکرد برتر",
      items: [
        {
          name: "سیلندرهای ساینده",
          description:
            "باندهای استوانه‌ای برای کار روی سطوح منحنی، پلیسه‌گیری و پرداخت.",
          learnMore: "بیشتر بدانید",
        },
        {
          name: "فلاپ ویل شفت‌دار",
          description:
            "فلاپ‌های ساینده شفت‌دار برای پلیسه‌گیری، یکنواخت‌سازی و پرداخت سطوح فلزی.",
          learnMore: "بیشتر بدانید",
        },
        {
          name: "نوارهای سنباده‌ای",
          description:
            "نوارهای بی‌انتها برای براده‌برداری، سنگ‌زنی و پرداخت سطح روی فلز و چوب.",
          learnMore: "بیشتر بدانید",
        },
        {
          name: "فلاپ دیسک‌های ساینده",
          description:
            "فلاپ دیسک پارچه‌ای برای سنگ‌زنی، یکنواخت‌سازی و پرداخت فلز با فرز زاویه‌ای.",
          learnMore: "بیشتر بدانید",
        },
        {
          name: "رول‌های کارتریج ساینده",
          description:
            "سمباده‌های کاجی‌شکل مارپیچ و استوانه‌ای برای پلیسه‌گیری و پرداخت سوراخ‌ها، گوشه‌ها و فضاهای تنگ کاربرد دارد.",
          learnMore: "بیشتر بدانید",
        },
        {
          name: "فلاپ ویل پارچه‌ای اسکاچ",
          description:
            "فلاپ ویل اسکاچ برای تمیزکاری، یکنواخت‌سازی و پرداخت بدون خط و خش روی فلزات و مصنوعات آلیاژی کاربرد دارد. این محصول بنا به درخواست مصرف‌کننده می‌تواند با سمباده ترکیب شود.",
          learnMore: "بیشتر بدانید",
        },
        {
          name: "فلاپ ویل‌های ساینده",
          description:
            "فلاپ ویل پارچه‌ای برای پرداخت و یکنواخت‌سازی سطوح صاف و منحنی کاربرد دارد.",
          learnMore: "بیشتر بدانید",
        },
        {
          name: "فلاپ ویل‌های اسکاچ ساینده",
          description:
            "فلاپ ویل اسکاچ توپی برای تمیزکاری، یکنواخت‌سازی و پرداخت ساتن روی فلز.",
          learnMore: "بیشتر بدانید",
        },
        {
          name: "پدهای دستی اسکاچ",
          description:
            "پدهای انعطاف‌پذیر اسکاچ برای تمیزکاری دستی، مات‌کاری و پرداخت فلز و چوب.",
          learnMore: "بیشتر بدانید",
        },
      ],
    },
    features: [
      {
        title: "درجه صنعتی",
        description:
          "ساخته شده برای تحمل کاربردهای سنگین با عملکرد و قابلیت اعتماد ثابت.",
      },
      {
        title: "قیمت رقابتی",
        description:
          "کیفیت بسیار در قیمتی منطقی برای خط پایین شما. تخفیف حجم موجود است.",
      },
      {
        title: "پشتیبانی کارشناسی",
        description:
          "تیم متخصصان پولیش ما آماده‌اند تا راه‌حل مناسب را پیدا کنند.",
      },
    ],
    cta: {
      title: "آماده‌اید برای ارتقای پرداخت کاری خود؟",
      description:
        "امروز با تیم فروش ما تماس بگیرید تا نیازهای خاص خود را بررسی کنید و پیشنهاد قیمت دریافت کنید.",
      callTitle: "تماس بگیرید",
      callAvailability: "شنبه تا چهارشنبه، ۹ صبح تا ۵ عصر",
      callNumber: "+98 912 132 7308",
      emailTitle: "ایمیل بفرستید",
      emailAvailability: "ما در عرض ۲ روز کاری پاسخ خواهیم داد",
      email: "sales@asiasayesh.com",
    },
    footer: {
      companyDesc: "تامین کننده حرفه‌ای راه‌حل‌های پولیش صنعتی.",
      address:
        "ایران، تهران، خیابان امام خمینی، کوچه سلطانی، پاساژ جعفری قدیم، طبقه اول، پلاک ۵",
      copyright: "© ۲۰۲۶ آسیا سایش. تمام حقوق محفوظ است.",
    },
  },
};

const phones = [
  { href: "tel:+982166748796", label: "+98 21 6674 8796" },
  { href: "tel:+982166748797", label: "+98 21 6674 8797" },
  { href: "tel:+989121327308", label: "+98 912 132 7308" },
];

const callHref = phones[2].href;

const productImages = [
  "product-abrasive-cylinders.jpg",
  "product-mounted-flap-wheels.jpg",
  "product-abrasive-sanding-belts.jpg",
  "product-abrasive-flap-discs.jpg",
  "product-abrasive-cartridge-roll.jpg",
  "product-non-woven-abrasive-cloth-flap-wheels.jpg",
  "product-abrasive-flap-wheels.jpg",
  "product-non-woven-abrasive-flap-wheels.jpg",
  "product-abrasive-non-woven-hand-pads.jpg",
];

const brand = { "@type": "Brand", name: "AsiaSayesh" };

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: translations.en.products.items.map((product, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: product.name,
      description: product.description,
      image: `https://asiasayesh.com/products/${productImages[i]}`,
      brand,
    },
  })),
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const t = translations[language];
  const isRTL = language === "fa";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <div
        className={`min-h-screen bg-background text-foreground ${isRTL ? "rtl" : "ltr"}`}
        dir={isRTL ? "rtl" : "ltr"}
      >
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-background/50 backdrop-blur-md z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                scrollTo({ top: 0, behavior: "smooth" })
              }}
              className="inline-flex items-center gap-2 text-2xl font-bold tracking-tighter"
            >
              <Image
                src="/logo.png"
                alt=""
                width={32}
                height={32}
                className="size-8"
                priority
              />
              <span className="text-primary">{isRTL ? "آسیا" : "Asia"}</span>{" "}
              {t.nav.brand}
            </a>
            <div className="flex gap-3 items-center">
              <div className="hidden md:flex gap-8 items-center">
                <a
                  href="#products"
                  className="hover:text-primary transition-colors"
                >
                  {t.nav.products}
                </a>
                <a
                  href="#contact"
                  className="hover:text-primary transition-colors"
                >
                  {t.nav.contact}
                </a>
                <a
                  href={callHref}
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Phone size={18} />
                  {t.nav.callNow}
                </a>
              </div>
              <button
                type="button"
                dir="ltr"
                onClick={() => setLanguage(language === "en" ? "fa" : "en")}
                className="inline-flex items-center justify-center gap-2 h-9 px-3 rounded-lg border border-border hover:border-primary/50 transition-colors font-sans leading-none"
                aria-label="Toggle language"
              >
                <Globe size={16} className="shrink-0" aria-hidden />
                <span
                  className="text-sm font-medium leading-none"
                  lang={language === "en" ? "fa" : "en"}
                >
                  {language === "en" ? "فارسی" : "EN"}
                </span>
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className={`space-y-6 ${isRTL ? "lg:col-start-2" : ""}`}>
              <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary">
                {t.hero.badge}
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-balance">
                {t.hero.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                {t.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <a
                  href="#contact"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                >
                  {t.hero.getStarted}
                  <ArrowRight size={20} />
                </a>
                <a
                  href="mailto:sales@asiasayesh.com"
                  className="flex items-center justify-center gap-2 px-6 py-3 border border-primary/40 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors font-semibold"
                >
                  <Mail size={20} />
                  {t.hero.emailSales}
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div
              className={`relative h-96 lg:h-full min-h-96 rounded-lg overflow-hidden border border-border ${isRTL ? "lg:col-start-1" : ""}`}
            >
              <Image
                src="/hero-abrasives.jpg"
                alt="Industrial abrasive manufacturing"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-20 px-4 bg-card/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                {t.products.title}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t.products.description}
              </p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.products.items.map((product, idx) => (
                <article
                  key={idx}
                  className="group rounded-lg border border-border bg-background overflow-hidden hover:border-primary/50 transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden bg-card">
                    <Image
                      src={`/products/${productImages[idx]}`}
                      alt={`${product.name} - Industrial abrasive product from AsiaSayesh`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold">{product.name}</h3>
                    <p className="text-muted-foreground">
                      {product.description}
                    </p>
                    <a
                      href="#contact"
                      className={`inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-semibold text-sm ${isRTL ? "flex-row-reverse" : ""}`}
                    >
                      {product.learnMore} <ArrowRight size={16} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-lg border border-border bg-card/50 hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">✓</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              {t.cta.title}
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              {t.cta.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Phone CTA */}
              <a
                href={callHref}
                className="p-8 rounded-lg border border-primary/40 bg-background hover:bg-primary/5 transition-all group"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Phone size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{t.cta.callTitle}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.cta.callAvailability}
                </p>
                <span
                  className={`inline-flex items-center gap-2 text-primary font-semibold text-lg hover:gap-3 transition-all ${isRTL ? "flex-row-reverse" : ""}`}
                >
                  <span dir="ltr">{t.cta.callNumber}</span>{" "}
                  <ArrowRight size={20} />
                </span>
              </a>

              {/* Email CTA */}
              <a
                href="mailto:sales@asiasayesh.com"
                className="p-8 rounded-lg border border-primary/40 bg-background hover:bg-primary/5 transition-all group"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Mail size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{t.cta.emailTitle}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.cta.emailAvailability}
                </p>
                <span
                  className={`inline-flex items-center gap-2 text-primary font-semibold text-lg hover:gap-3 transition-all ${isRTL ? "flex-row-reverse" : ""}`}
                >
                  <span dir="ltr">{t.cta.email}</span> <ArrowRight size={20} />
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <h4 className="text-lg font-bold mb-4 tracking-tighter">
                  <span className="text-primary">{isRTL ? "آسیا" : "Asia"}</span>{" "}
                  {t.nav.brand}
                </h4>
                <p className="text-muted-foreground">{t.footer.companyDesc}</p>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">
                  {isRTL ? "تماس با ما" : "Contact Us"}
                </h4>
                <div className="space-y-3 text-muted-foreground">
                  <p>{t.footer.address}</p>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-foreground">
                      {isRTL ? "تلفن" : "Phone"}
                    </p>
                    <ul
                      className="space-y-1 font-mono tabular-nums tracking-wide"
                      dir="ltr"
                    >
                      {phones.map(({ href, label }) => (
                        <li key={href}>
                          <a
                            href={href}
                            className="hover:text-primary transition-colors"
                          >
                            {label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-foreground">
                      {isRTL ? "ایمیل" : "Email"}
                    </p>
                    <a
                      href="mailto:sales@asiasayesh.com"
                      className="hover:text-primary transition-colors"
                      dir="ltr"
                    >
                      sales@asiasayesh.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-8 text-center">
              <p className="text-sm text-muted-foreground">
                {t.footer.copyright}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
