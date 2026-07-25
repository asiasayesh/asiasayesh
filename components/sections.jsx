import Image from "next/image";
import { Phone, Mail, ArrowRight, Globe } from "lucide-react";

export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function BrandMark({ t }) {
  return (
    <span>
      <span className="text-primary">{t.brandAccent}</span>{t.brandRest}
    </span>
  );
}

export function Nav({ t, lang, setLang }) {
  return (
    <nav className="fixed top-0 w-full bg-background/50 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button
          type="button"
          onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center gap-2 text-2xl font-bold tracking-tighter"
          aria-label={t.brand}
        >
          <Image
            src="/logo.png"
            alt={t.brand}
            width={32}
            height={32}
            className="size-8"
          />
          <BrandMark t={t} />
        </button>
        <div className="flex gap-3 items-center">
          <div className="hidden md:flex gap-8 items-center">
            <a
              href="#products"
              className="hover:text-primary transition-colors"
            >
              {t.nav.products}
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              {t.nav.contact}
            </a>
            <a
              href={t.callHref}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Phone size={18} />
              {t.nav.callNow}
            </a>
          </div>
          <button
            type="button"
            dir="ltr"
            onClick={() => setLang(lang === "en" ? "fa" : "en")}
            className="inline-flex items-center justify-center gap-2 h-9 px-3 rounded-lg border-2 border-border hover:border-primary/50 transition-colors font-sans leading-none"
            aria-label="Toggle language"
          >
            <Globe size={16} className="shrink-0" aria-hidden />
            <span
              className="font-fa-deferred text-sm font-medium leading-none"
              lang={lang === "en" ? "fa" : "en"}
            >
              {lang === "en" ? "فارسی" : "EN"}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export function Hero({ t }) {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className={`space-y-6 ${t.isRTL ? "lg:col-start-2 lg:row-start-1" : ""}`}>
          <div className="inline-block px-3 py-1 bg-primary/10 border-2 border-primary/20 rounded-full text-sm text-primary">
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
              href={`mailto:${t.email}`}
              className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary/40 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors font-semibold"
            >
              <Mail size={20} />
              {t.hero.emailSales}
            </a>
          </div>
        </div>
        <div
          className={`relative h-96 lg:h-full min-h-96 rounded-lg overflow-hidden border-2 border-border ${t.isRTL ? "lg:col-start-1 lg:row-start-1" : ""}`}
        >
          <Image
            src="/hero-abrasives.webp"
            alt="Industrial abrasive manufacturing"
            fill
            className="object-cover"
            preload
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}

export function Products({ t }) {
  return (
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.products.items.map((product) => (
            <article
              key={product.image}
              className="group rounded-lg border-2 border-border bg-background overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden bg-card">
                <Image
                  src={`/products/${product.image}`}
                  alt={`${product.name} - Industrial abrasive product from AsiaSayesh`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="text-muted-foreground">{product.description}</p>
                <a
                  href="#contact"
                  className={`inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-semibold text-sm ${t.isRTL ? "flex-row-reverse" : ""}`}
                >
                  {product.learnMore} <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Features({ t }) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.features.map((feature) => (
            <div
              key={feature.title}
              className="p-8 rounded-lg border-2 border-border bg-card/50 hover:border-primary/50 transition-colors"
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
  );
}

export function Contact({ t }) {
  return (
    <section id="contact" className="py-20 px-4 bg-card/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">{t.cta.title}</h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t.cta.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <a
            href={t.callHref}
            className="p-8 rounded-lg border-2 border-primary/40 bg-background hover:bg-primary/5 transition-colors group"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Phone size={32} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">{t.cta.callTitle}</h3>
            <p className="text-muted-foreground mb-4">
              {t.cta.callAvailability}
            </p>
            <span
              className={`inline-flex items-center gap-2 text-primary font-semibold text-lg hover:gap-3 transition-all ${t.isRTL ? "flex-row-reverse" : ""}`}
            >
              <span dir="ltr">{t.cta.callNumber}</span> <ArrowRight size={20} />
            </span>
          </a>
          <a
            href={`mailto:${t.email}`}
            className="p-8 rounded-lg border-2 border-primary/40 bg-background hover:bg-primary/5 transition-colors group"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Mail size={32} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">{t.cta.emailTitle}</h3>
            <p className="text-muted-foreground mb-4">
              {t.cta.emailAvailability}
            </p>
            <span
              className={`inline-flex items-center gap-2 text-primary font-semibold text-lg hover:gap-3 transition-all ${t.isRTL ? "flex-row-reverse" : ""}`}
            >
              <span dir="ltr">{t.cta.email}</span> <ArrowRight size={20} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer({ t }) {
  return (
    <footer className="border-t-2 border-border py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h4 className="text-lg font-bold mb-4 tracking-tighter">
              <BrandMark t={t} />
            </h4>
            <p className="text-muted-foreground">{t.footer.companyDesc}</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">{t.footer.contactTitle}</h4>
            <div className="space-y-3 text-muted-foreground">
              <p>{t.footer.address}</p>
              <div className="space-y-1">
                <p className="text-sm font-medium text-foreground">
                  {t.footer.phoneLabel}
                </p>
                <ul
                  className="space-y-1 font-mono tabular-nums tracking-wide"
                  dir="ltr"
                >
                  {t.phones.map(({ href, label }) => (
                    <li key={href}>
                      <a
                        href={href}
                        className="underline decoration-dotted decoration-muted-foreground/55 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-foreground">
                  {t.footer.emailLabel}
                </p>
                <a
                  href={`mailto:${t.email}`}
                  className="underline decoration-dotted decoration-muted-foreground/55 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
                  dir="ltr"
                >
                  {t.email}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
