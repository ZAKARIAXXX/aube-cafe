import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  Clock3,
  Instagram,
  Languages,
  MapPin,
  Menu as MenuIcon,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

const images = {
  hero: "/images/aube-hero.jpg",
  story: "/images/aube-story.jpg",
  latte: "/images/aube-latte.jpg",
  beans: "/images/aube-beans.jpg",
  interior: "/images/aube-interior.jpg",
  table: "/images/aube-table.jpg",
  pastry: "/images/aube-pastry.jpg",
};

const copy = {
  fr: {
    dir: "ltr" as const,
    langName: "دارجة",
    nav: [
      ["Accueil", "#accueil"],
      ["Menu", "#menu"],
      ["Notre histoire", "#histoire"],
      ["Galerie", "#galerie"],
      ["Contact", "#contact"],
    ],
    order: "Commander",
    orderWhatsapp: "Commander sur WhatsApp",
    heroKicker: "Café de spécialité · Rabat",
    heroTitleA: "Le café, élevé",
    heroTitleB: "au rang d’art.",
    heroText:
      "Des grains d’exception, torréfiés avec précision. Un lieu imaginé pour ralentir, savourer et se retrouver.",
    heroCtaMenu: "Voir le menu",
    heroCtaFind: "Nous trouver",
    discover: "Découvrir",
    marquee: ["Espresso", "Filtre", "Latte Art", "Brunch", "Torréfaction locale"],
    storyKicker: "Notre histoire",
    storyTitleA: "Un rituel du matin,",
    storyTitleB: "devenu une maison.",
    storyP1:
      "Aube est née d’une envie simple : faire découvrir le café autrement. Pas comme un réflexe, mais comme un moment qui mérite toute notre attention.",
    storyP2:
      "Dans notre atelier d’Agdal, chaque origine est choisie avec soin puis torréfiée en petites quantités. Le résultat : des tasses vivantes, lisibles, qui racontent un terroir.",
    storyBadge: "Depuis 2021",
    stats: [
      ["100%", "Arabica"],
      ["Sur place", "Torréfié"],
      ["Chaque jour", "Fait maison"],
    ],
    menuKicker: "La carte",
    menuTitleA: "À chaque heure,",
    menuTitleB: "son envie.",
    menuNote:
      "Nos cafés changent avec les récoltes. Demandez conseil à nos baristas pour découvrir l’origine du moment.",
    menuFooter: "Laits végétaux disponibles · Carte saisonnière",
    menuSections: [
      {
        title: "Espressos",
        subtitle: "Précis, francs, essentiels",
        items: [
          ["Espresso", "18"],
          ["Doppio", "24"],
          ["Cortado", "26"],
          ["Flat white", "32"],
        ],
      },
      {
        title: "Cafés filtre",
        subtitle: "Lents, clairs, aromatiques",
        items: [
          ["V60 du moment", "35"],
          ["Chemex à partager", "58"],
          ["Cold brew", "34"],
          ["Café glacé", "30"],
        ],
      },
      {
        title: "Boissons signature",
        subtitle: "La touche Aube",
        items: [
          ["Latte fleur d’oranger", "38"],
          ["Miel & cannelle", "39"],
          ["Sésame noir glacé", "42"],
          ["Chocolat grand cru", "36"],
        ],
      },
      {
        title: "Brunch & pâtisseries",
        subtitle: "Préparés chaque matin",
        items: [
          ["Croissant amlou", "32"],
          ["Brioche perdue", "48"],
          ["Œufs turcs", "62"],
          ["Granola maison", "46"],
        ],
      },
    ],
    galleryKicker: "Instants Aube",
    galleryTitle: "La vie du café.",
    follow: "Suivre @aubecafe",
    contactKicker: "Infos pratiques",
    contactTitleA: "Votre table",
    contactTitleB: "vous attend.",
    contactText:
      "Passez pour un espresso, restez pour le brunch. Nous vous accueillons sans réservation, au cœur d’Agdal.",
    addressLabel: "Adresse",
    addressA: "18, rue Oued Ziz",
    addressB: "Agdal, Rabat",
    hoursLabel: "Horaires",
    hours: [
      ["Lundi — Vendredi", "7h30 — 20h"],
      ["Samedi — Dimanche", "8h — 21h"],
    ],
    phoneLabel: "Téléphone",
    footerTag: "Café de spécialité · Rabat",
    rights: "© 2026 Aube Café. Tous droits réservés.",
    alts: {
      hero: "Café de spécialité fraîchement servi chez Aube",
      story: "L’atmosphère chaleureuse d’un comptoir de café",
      latte: "Latte art servi dans une tasse en céramique",
      interior: "Intérieur lumineux et chaleureux du café",
      beans: "Grains de café fraîchement torréfiés",
      table: "Moment de partage autour d’un café",
      pastry: "Pâtisserie maison accompagnée d’un café",
    },
  },
  dar: {
    dir: "rtl" as const,
    langName: "FR",
    nav: [
      ["الرئيسية", "#accueil"],
      ["القائمة", "#menu"],
      ["الحكاية ديالنا", "#histoire"],
      ["الصور", "#galerie"],
      ["تواصل معنا", "#contact"],
    ],
    order: "طلب",
    orderWhatsapp: "طلب عبر واتساب",
    heroKicker: "قهوة مختصة · الرباط",
    heroTitleA: "القهوة،",
    heroTitleB: "بحال الفن.",
    heroText:
      "حبوب مختارة بعناية، محمصة بدقة. بلاصة مصممة باش تهبط الرتم، تذوق وتلتقي.",
    heroCtaMenu: "شوف القائمة",
    heroCtaFind: "لقينا",
    discover: "اكتشف",
    marquee: ["إسبريسو", "فيلتر", "لاتي آرت", "برونش", "تحميص محلي"],
    storyKicker: "الحكاية ديالنا",
    storyTitleA: "طقس د الصباح،",
    storyTitleB: "ولات دار.",
    storyP1:
      "أوب تزادات من رغبة بسيطة: نعرفو الناس على القهوة بطريقة أخرى. ماشي غير عادة، ولكن لحظة كتستاهل كل الاهتمام.",
    storyP2:
      "ف الورشة ديالنا ف أكدال، كل أصل كيتختار بعناية وكيتحمص بكميات صغيرة. النتيجة: فناجن حية، واضحة، كتحكي على الأرض ديالها.",
    storyBadge: "من 2021",
    stats: [
      ["100%", "أرابيكا"],
      ["ف الدار", "محمص"],
      ["كل نهار", "مصنوع ف الدار"],
    ],
    menuKicker: "القائمة",
    menuTitleA: "كل ساعة،",
    menuTitleB: "شهيتها.",
    menuNote:
      "القهوة ديالنا كتبدل مع المواسم. سول الباريستا ديالنا باش تكتشف الأصل ديال هاد الموسم.",
    menuFooter: "حليب نباتي متوفر · قائمة موسمية",
    menuSections: [
      {
        title: "إسبريسو",
        subtitle: "دقيق، صريح، أساسي",
        items: [
          ["إسبريسو", "18"],
          ["دوبيو", "24"],
          ["كورتادو", "26"],
          ["فلات وايت", "32"],
        ],
      },
      {
        title: "قهوة مفلترة",
        subtitle: "هادئة، صافية، عطرية",
        items: [
          ["V60 ديال هاد الموسم", "35"],
          ["شيمكس للمشاركة", "58"],
          ["كولد برو", "34"],
          ["قهوة مثلجة", "30"],
        ],
      },
      {
        title: "مشروبات سيغناتور",
        subtitle: "اللمسة ديال أوب",
        items: [
          ["لاتي بزهر البرتقال", "38"],
          ["عسل وقرفة", "39"],
          ["سمسم أسود مثلج", "42"],
          ["شوكولا غران كرو", "36"],
        ],
      },
      {
        title: "برونش وحلويات",
        subtitle: "كيتحضرو كل صباح",
        items: [
          ["كرواسون أملو", "32"],
          ["بريوش مبللة", "48"],
          ["بيض تركي", "62"],
          ["غرانولا ديال الدار", "46"],
        ],
      },
    ],
    galleryKicker: "لحظات أوب",
    galleryTitle: "الحياة ديال القهوة.",
    follow: "تبع @aubecafe",
    contactKicker: "معلومات عملية",
    contactTitleA: "الطاولة ديالك",
    contactTitleB: "كتسناك.",
    contactText:
      "دوز ل إسبريسو، بقى للبرونش. كنرحبو بيك بلا حجز، ف قلب أكدال.",
    addressLabel: "العنوان",
    addressA: "18، زنقة واد زيز",
    addressB: "أكدال، الرباط",
    hoursLabel: "الأوقات",
    hours: [
      ["الإثنين — الجمعة", "7h30 — 20h"],
      ["السبت — الأحد", "8h — 21h"],
    ],
    phoneLabel: "الهاتف",
    footerTag: "قهوة مختصة · الرباط",
    rights: "© 2026 أوب كافي. جميع الحقوق محفوظة.",
    alts: {
      hero: "قهوة مختصة طازجة ف أوب",
      story: "أجواء دافئة ديال كونطوار القهوة",
      latte: "لاتي آرت ف كاسرونة سيراميك",
      interior: "الداخل المشرق والدافئ ديال المقهى",
      beans: "حبوب قهوة محمصة طازجة",
      table: "لحظة مشاركة حول قهوة",
      pastry: "حلوى ديال الدار مع قهوة",
    },
  },
};

type Lang = keyof typeof copy;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aube Café — Café de spécialité à Rabat" },
      {
        name: "description",
        content:
          "Café de spécialité, brunch et torréfaction locale au cœur d’Agdal à Rabat. Découvrez l’univers Aube Café.",
      },
      { property: "og:title", content: "Aube Café — Le café, élevé au rang d’art." },
      {
        property: "og:description",
        content: "Une maison de café de spécialité, imaginée à Rabat.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AubeCafePage,
});

function AubeCafePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<Lang>("fr");
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.dir = t.dir;
    document.documentElement.lang = lang === "dar" ? "ar" : "fr";
    return () => {
      document.documentElement.dir = "ltr";
      document.documentElement.lang = "fr";
    };
  }, [t.dir, lang]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  const langToggle = (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      className="gap-2"
      aria-label={lang === "fr" ? "Passer en darija" : "Passer en français"}
      onClick={() => setLang((value) => (value === "fr" ? "dar" : "fr"))}
    >
      <Languages className="h-4 w-4" aria-hidden="true" />
      <span className="text-xs font-semibold uppercase tracking-site">{t.langName}</span>
    </Button>
  );

  return (
    <main className="overflow-x-hidden bg-background text-foreground" dir={t.dir}>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
          scrolled || menuOpen
            ? "border-border bg-background/95 text-foreground backdrop-blur-md"
            : "border-transparent bg-transparent text-hero-foreground"
        }`}
      >
        <div className="mx-auto grid h-18 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center px-5 sm:h-20 sm:px-8 lg:px-12">
          <a href="#accueil" aria-label="Aube Café — Accueil" className="font-display text-3xl leading-none">
            Aube<span className="text-primary">.</span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
            {t.nav.map(([label, href]) => (
              <a key={href} href={href} className="text-xs font-medium uppercase tracking-site transition-opacity hover:opacity-60">
                {label}
              </a>
            ))}
            {langToggle}
            <Button variant="whatsapp" size="lg" asChild>
              <a href="https://wa.me/212000000000" target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" /> {t.order}
              </a>
            </Button>
          </nav>
          <div className="flex items-center gap-2 lg:hidden">
            {langToggle}
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
            >
              {menuOpen ? <X /> : <MenuIcon />}
            </Button>
          </div>
        </div>
        {menuOpen ? (
          <nav className="border-t border-border bg-background px-5 pb-7 pt-5 text-foreground lg:hidden" aria-label="Navigation mobile">
            <div className="flex flex-col">
              {t.nav.map(([label, href]) => (
                <a key={href} href={href} className="border-b border-border py-4 font-display text-2xl" onClick={() => setMenuOpen(false)}>
                  {label}
                </a>
              ))}
              <Button variant="whatsapp" size="xl" className="mt-6" asChild>
                <a href="https://wa.me/212000000000" target="_blank" rel="noreferrer">
                  <MessageCircle aria-hidden="true" /> {t.orderWhatsapp}
                </a>
              </Button>
            </div>
          </nav>
        ) : null}
      </header>

      <section id="accueil" className="relative flex min-h-[94svh] items-end overflow-hidden">
        <img src={images.hero} alt={t.alts.hero} className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="hero-scrim absolute inset-0" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
          <div className="max-w-4xl animate-hero-in text-hero-foreground">
            <p className="mb-6 text-xs font-medium uppercase tracking-label">{t.heroKicker}</p>
            <h1 className="max-w-4xl font-display text-5xl leading-[1.03] sm:text-7xl lg:text-8xl xl:text-9xl">
              {t.heroTitleA}<br className="hidden sm:block" /> {t.heroTitleB}
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-hero-foreground/85 sm:text-lg">
              {t.heroText}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button variant="hero" size="xl" asChild>
                <a href="#menu">{t.heroCtaMenu} <ArrowRight aria-hidden="true" className="rtl:-scale-x-100" /></a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#contact"><MapPin aria-hidden="true" /> {t.heroCtaFind}</a>
              </Button>
            </div>
          </div>
          <a href="#histoire" aria-label={t.discover} className="absolute bottom-7 right-5 hidden items-center gap-3 text-xs uppercase tracking-label text-hero-foreground sm:flex lg:right-12">
            {t.discover} <span className="grid h-10 w-10 place-items-center rounded-full border border-hero-foreground/50"><ArrowDown className="h-4 w-4" /></span>
          </a>
        </div>
      </section>

      <div className="marquee-shell border-y border-primary bg-primary py-4 text-primary-foreground" aria-label={t.marquee.join(" · ")}>
        <div className="marquee-track">
          {[0, 1].map((group) => (
            <div key={group} className="flex shrink-0 items-center" aria-hidden={group === 1}>
              {t.marquee.map((word) => (
                <span key={`${group}-${word}`} className="flex items-center whitespace-nowrap font-display text-2xl sm:text-3xl">
                  {word}<span className="mx-7 text-sm sm:mx-10">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section id="histoire" className="scroll-mt-16 py-24 sm:py-32 lg:py-40">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24 lg:px-12">
          <div data-reveal className="reveal-up relative lg:pe-8">
            <div className="aspect-[4/5] overflow-hidden">
              <img src={images.story} alt={t.alts.story} className="h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.025]" loading="lazy" />
            </div>
            <p className="absolute -bottom-6 end-0 bg-primary px-6 py-4 font-display text-xl text-primary-foreground sm:-end-4">{t.storyBadge}</p>
          </div>
          <div data-reveal className="reveal-up">
            <p className="section-kicker">{t.storyKicker}</p>
            <h2 className="mt-5 max-w-2xl font-display text-4xl leading-tight sm:text-6xl">
              {t.storyTitleA}<br />{t.storyTitleB}
            </h2>
            <div className="mt-8 max-w-xl space-y-5 text-base leading-8 text-muted-foreground">
              <p>{t.storyP1}</p>
              <p>{t.storyP2}</p>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-3 border-t border-border pt-8">
              {t.stats.map(([value, label]) => (
                <div key={label} className="min-w-0">
                  <p className="font-display text-2xl sm:text-3xl">{value}</p>
                  <p className="mt-1 text-[0.68rem] uppercase tracking-label text-muted-foreground sm:text-xs">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="scroll-mt-16 bg-surface-dark py-24 text-surface-dark-foreground sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div data-reveal className="reveal-up grid gap-6 border-b border-surface-dark-foreground/20 pb-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="section-kicker text-primary">{t.menuKicker}</p>
              <h2 className="mt-5 font-display text-5xl sm:text-7xl">{t.menuTitleA}<br />{t.menuTitleB}</h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-surface-dark-foreground/65">{t.menuNote}</p>
          </div>
          <div className="mt-12 grid gap-x-16 gap-y-14 md:grid-cols-2">
            {t.menuSections.map((section, index) => (
              <article key={section.title} data-reveal className="reveal-up" style={{ transitionDelay: `${(index % 2) * 100}ms` }}>
                <div className="mb-6">
                  <h3 className="font-display text-3xl">{section.title}</h3>
                  <p className="mt-1 text-xs uppercase tracking-label text-primary">{section.subtitle}</p>
                </div>
                <div>
                  {section.items.map(([name, price]) => (
                    <div key={name} className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 border-b border-surface-dark-foreground/15 py-4">
                      <span className="min-w-0 text-sm sm:text-base">{name}</span>
                      <span className="shrink-0 font-medium">{price} <span className="text-xs text-surface-dark-foreground/55">MAD</span></span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <p className="mt-14 text-center text-xs uppercase tracking-label text-surface-dark-foreground/50">{t.menuFooter}</p>
        </div>
      </section>

      <section id="galerie" className="scroll-mt-16 py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div data-reveal className="reveal-up flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="section-kicker">{t.galleryKicker}</p>
              <h2 className="mt-5 font-display text-5xl sm:text-7xl">{t.galleryTitle}</h2>
            </div>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium underline decoration-primary underline-offset-8">
              <Instagram className="h-4 w-4" /> {t.follow}
            </a>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-12 lg:grid-rows-2">
            {[
              [images.latte, t.alts.latte, "col-span-2 aspect-[4/5] lg:col-span-5 lg:row-span-2 lg:aspect-auto"],
              [images.interior, t.alts.interior, "aspect-square lg:col-span-4 lg:aspect-[4/3]"],
              [images.beans, t.alts.beans, "aspect-square lg:col-span-3 lg:aspect-[4/3]"],
              [images.table, t.alts.table, "aspect-[4/3] lg:col-span-3 lg:aspect-auto"],
              [images.pastry, t.alts.pastry, "aspect-[4/3] lg:col-span-4 lg:aspect-auto"],
            ].map(([src, alt, className], index) => (
              <figure key={src} data-reveal className={`reveal-up group overflow-hidden ${className}`} style={{ transitionDelay: `${(index % 3) * 80}ms` }}>
                <img src={src} alt={alt} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.035]" loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-16 border-t border-border bg-secondary py-24 sm:py-32 lg:py-40">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.15fr] lg:gap-24 lg:px-12">
          <div data-reveal className="reveal-up">
            <p className="section-kicker">{t.contactKicker}</p>
            <h2 className="mt-5 font-display text-5xl leading-tight sm:text-7xl">{t.contactTitleA}<br />{t.contactTitleB}</h2>
            <p className="mt-6 max-w-md leading-7 text-muted-foreground">{t.contactText}</p>
            <Button variant="whatsapp" size="xl" className="mt-8" asChild>
              <a href="https://wa.me/212000000000" target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" /> {t.orderWhatsapp}
              </a>
            </Button>
          </div>
          <div data-reveal className="reveal-up border-t border-border lg:border-s lg:border-t-0 lg:ps-16">
            <div className="grid gap-0">
              <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-5 border-b border-border py-7">
                <MapPin className="mt-1 h-5 w-5 text-primary" />
                <div><p className="text-xs uppercase tracking-label text-muted-foreground">{t.addressLabel}</p><p className="mt-2 font-display text-2xl">{t.addressA}<br />{t.addressB}</p></div>
              </div>
              <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-5 border-b border-border py-7">
                <Clock3 className="mt-1 h-5 w-5 text-primary" />
                <div><p className="text-xs uppercase tracking-label text-muted-foreground">{t.hoursLabel}</p><div className="mt-3 grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-2 text-sm">{t.hours.map(([days, time]) => (<span key={days} className="contents"><span>{days}</span><span>{time}</span></span>))}</div></div>
              </div>
              <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-5 py-7">
                <Phone className="mt-1 h-5 w-5 text-primary" />
                <div><p className="text-xs uppercase tracking-label text-muted-foreground">{t.phoneLabel}</p><a href="tel:+212000000000" className="mt-2 inline-block font-display text-2xl transition-colors hover:text-primary" dir="ltr">+212 000 000 000</a></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-surface-dark py-12 text-surface-dark-foreground">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:px-8 lg:px-12">
          <div>
            <a href="#accueil" className="font-display text-4xl">Aube<span className="text-primary">.</span></a>
            <p className="mt-3 text-sm text-surface-dark-foreground/55">{t.footerTag}</p>
          </div>
          <div className="flex flex-col gap-4 text-sm sm:items-end">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-primary"><Instagram className="h-4 w-4" /> Instagram</a>
            <p className="text-xs text-surface-dark-foreground/40">{t.rights}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
