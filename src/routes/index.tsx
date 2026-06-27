import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  ArrowRight,
  Play,
  Crown,
  Megaphone,
  Newspaper,
  Camera,
  Mic2,
  Globe2,
  TrendingUp,
  ShieldCheck,
  BookOpen,
  Star,
  Plus,
  Minus,
  Quote,
  UtensilsCrossed,
  Heart,
  Building2,
  Scale,
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Instagram,
  Linkedin,
  Youtube,
  Volume2,
  Menu,
  Loader2,
} from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { submitContactForm } from "../lib/api/contact.functions";
import { fetchIpGeolocation } from "../lib/ip-geolocation";

import heroImg from "@/assets/hero-executive.jpg";
import logoUrl from "@/assets/roar-logo.png";
import iconUrl from "@/assets/favicon.png";
import lionUrl from "@/assets/lion-roar.png";
import roarSfx from "@/assets/lion-roaring-sfx.mp3";
import storyVideo from "@/assets/video/the-big-mouth-pr-final-cut.webm";
import storyThumbVideo from "@/assets/video/thumb-our-story.jpg";
import testimonial1 from "@/assets/video/testimonia-1.mp4";
import testimonial2 from "@/assets/video/testimonial-2.mp4";
import testimonial3 from "@/assets/video/testimonial-3.mp4";
import testimonial4 from "@/assets/video/testimonial-4.mp4";
import thumb1 from "@/assets/video/thumb-testimonial-1.jpg";
import thumb2 from "@/assets/video/thumb-testimonial-2.jpg";
import thumb3 from "@/assets/video/thumb-testimonial-3.jpg";
import thumb4 from "@/assets/video/thumb-testimonial-4.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import caseTerraSquare from "@/assets/case-study-portfolio/Terra Securities Time Square by TheBigMouthPR.jpg";
import caseUsaToday from "@/assets/case-study-portfolio/screencapture-usatoday-press-release-story-34497-as-women-led-businesses-hit-record-numbers-media-entrepreneur-keri-murphy-launches-new-network-focused-on-visibility-2026-06-11-22_00_37-BoC8V-Zl.png";
import caseForbes from "@/assets/case-study-portfolio/Forbes Jessica.jpg";
import caseBrandBook from "@/assets/case-study-portfolio/Brand Book.jpg";
import leader1 from "@/assets/leader-1.jpg";
import leader2 from "@/assets/leader-2.jpg";
import leader3 from "@/assets/leader-3.jpeg";
import leader4 from "@/assets/leader-4.jpg";
import indFnb from "@/assets/ind-fnb.jpg";
import indTech from "@/assets/ind-tech.jpg";
import indFinance from "@/assets/ind-finance.jpg";
import indHealth from "@/assets/ind-health.jpg";
import indRealestate from "@/assets/ind-realestate.jpg";
import indLaw from "@/assets/ind-law.jpg";
import indSpeakers from "@/assets/ind-speakers.jpg";
import indLifestyle from "@/assets/ind-lifestyle.jpg";
import storyThumb from "@/assets/story-video-thumb.jpg";
import svcExec from "@/assets/svc-exec.jpg";
import svcMedia from "@/assets/svc-media.jpg";
import svcContent from "@/assets/svc-content.jpg";
import svcCreative from "@/assets/svc-creative.jpg";
import svcAuthor from "@/assets/svc-author.jpg";
import svcDigital from "@/assets/svc-digital.jpg";
import reel1 from "@/assets/reel-1.jpg";
import reel2 from "@/assets/reel-2.jpg";
import reel3 from "@/assets/reel-3.jpg";
import reel4 from "@/assets/reel-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Top Personal Branding & Marketing Agency in the US" },
      {
        name: "description",
        content:
          "The Big Mouth PR is a loud, fearless personal branding & PR agency in the US for founders, executives & disruptors who refuse to be ignored.",
      },
      { property: "og:title", content: "Top Personal Branding & Marketing Agency in the US" },
      {
        property: "og:description",
        content:
          "The Big Mouth PR is a loud, fearless personal branding & PR agency in the US for founders, executives & disruptors who refuse to be ignored.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: logoUrl },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: logoUrl },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: heroImg },
      { rel: "preload", as: "image", href: logoUrl },
    ],
  }),
  component: Home,
});

/* =====================================================================
   Roar audio — lion-roaring-sfx.mp3
===================================================================== */
let roarAudio: HTMLAudioElement | null = null;

function playRoar() {
  if (typeof window === "undefined") return;
  try {
    if (!roarAudio) {
      roarAudio = new Audio(roarSfx);
      roarAudio.preload = "auto";
    }
    roarAudio.currentTime = 0;
    roarAudio.play().catch(() => {});
  } catch {
    /* no audio */
  }
}

/* =====================================================================
   Lion cursor + click roar wrapper
===================================================================== */
export function LionInteractions() {
  const [bursts, setBursts] = useState<{ id: number; x: number; y: number }[]>([]);
  const idRef = useRef(0);
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      // Ignore clicks on inputs/textareas/selects
      const t = e.target as HTMLElement;
      if (t.closest("input, textarea, select")) return;
      playRoar();
      const id = ++idRef.current;
      setBursts((b) => [...b, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => setBursts((b) => b.filter((x) => x.id !== id)), 700);
    };
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[200]" aria-hidden>
      {bursts.map((b) => (
        <span
          key={b.id}
          className="absolute -translate-x-1/2 -translate-y-1/2 select-none font-display text-[3rem] font-black text-gold animate-roar-burst"
          style={{ left: b.x, top: b.y }}
        >
          ROAR!
        </span>
      ))}
    </div>
  );
}

/* =====================================================================
   Reusable brand bits
===================================================================== */

function BrandLogo({ className = "h-10 w-auto" }: { className?: string }) {
  return <img src={logoUrl} alt="The Big Mouth PR" className={className} />;
}

function BrandLockupDark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <img src={logoUrl} alt="The Big Mouth PR" className="h-10 w-auto" />
    </span>
  );
}

export function DotMark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <span className="h-2.5 w-2.5 rounded-full bg-bm-blue" />
      <span className="h-2.5 w-2.5 rounded-full bg-gold" />
    </span>
  );
}

export function MouthMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <path d="M8 14h36a12 12 0 0112 12v10a12 12 0 01-12 12H26l-12 10V14z" fill="currentColor" />
      <circle cx="24" cy="32" r="3" className="fill-bm-blue" />
      <circle cx="36" cy="32" r="3" className="fill-cream" />
      <circle cx="48" cy="32" r="3" className="fill-gold" />
    </svg>
  );
}

/* =====================================================================
   Sticky navigation header — split black/white contrast
===================================================================== */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/about-us", label: "About Us" },
    { href: "/packages", label: "Packages" },
    { href: "/contact-us", label: "Contact Us" },
    { href: "/careers", label: "Careers" },
  ];

  const navItemClass =
    "rounded-full px-3 py-2 text-xs font-semibold text-navy-deep transition hover:bg-navy-deep hover:text-cream cursor-pointer";

  return (
    <div
      className={`fixed inset-x-0 top-0 z-[80] transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4">
        {/* Black panel — logo */}
        <div className="flex flex-1 items-center justify-between rounded-full bg-navy-deep px-5 py-2.5 shadow-luxe">
          <a href="/" className="flex items-center">
            <img
              src={logoUrl}
              alt="The Big Mouth PR"
              className="h-8 w-auto md:h-9"
            />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full bg-cream/10 p-2 text-cream lg:hidden"
            aria-label="Toggle menu"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>

        {/* White panel — nav links */}
        <NavigationMenu className="hidden max-w-none flex-1 items-center justify-center rounded-full bg-white px-3 py-2 shadow-luxe lg:flex">
          <NavigationMenuList className="flex-1 items-center justify-center gap-1">
            <NavigationMenuItem>
              <div className="relative group">
                <Link
                  to="/services"
                  className={cn(
                    navItemClass,
                    "inline-flex items-center",
                  )}
                >
                  Services
                  <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-hover:rotate-180" />
                </Link>
                <div className="absolute left-0 top-full z-50 rounded-md border bg-white p-3 shadow-lg opacity-0 pointer-events-none transition-all duration-150 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:delay-75">
                  <div className="grid w-[260px] gap-0.5 md:w-[460px] md:grid-cols-2">
                    {serviceLinks.map((s) => {
                      const Icon = s.icon;
                      return (
                        <Link
                          key={s.href}
                          to={s.href}
                          className="flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-navy-deep transition hover:bg-navy-deep hover:text-cream"
                        >
                          <Icon className="h-4 w-4 shrink-0 text-gold" />
                          <span>{s.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </NavigationMenuItem>
            {links.map((l) => (
              <NavigationMenuItem key={l.href}>
                <NavigationMenuLink
                  href={l.href}
                  className={navItemClass}
                >
                  {l.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Orange CTA panel */}
        <a
          href="#consult"
          className="hidden items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-bold uppercase tracking-wider text-navy-deep shadow-gold transition hover:scale-[1.03] hover:bg-gold-soft md:inline-flex"
        >
          <Volume2 className="h-4 w-4" /> Get Loud
        </a>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="mx-4 mt-2 rounded-2xl bg-white p-4 shadow-luxe lg:hidden">
          <div className="grid gap-1">
            <div>
              <div className="flex items-center">
                <Link
                  to="/services"
                  onClick={() => {
                    setOpen(false);
                    setServicesOpen(false);
                  }}
                  className="flex-1 rounded-xl px-4 py-3 text-sm font-semibold text-navy-deep transition hover:bg-navy-deep hover:text-cream"
                >
                  Services
                </Link>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setServicesOpen((v) => !v);
                  }}
                  className="rounded-xl p-3 text-navy-deep transition hover:bg-navy-deep hover:text-cream"
                  aria-label="Toggle services"
                >
                  <ChevronDown
                    className={`h-4 w-4 transition duration-200 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
              {servicesOpen && (
                <div className="ml-3 mt-1 grid gap-0.5 border-l-2 border-navy-deep/10 pl-3">
                  {serviceLinks.map((s) => {
                      const Icon = s.icon;
                      return (
                        <Link
                          key={s.href}
                          to={s.href}
                          onClick={() => {
                            setOpen(false);
                            setServicesOpen(false);
                          }}
                          className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-navy-deep transition hover:bg-navy-deep hover:text-cream"
                        >
                          <Icon className="h-3.5 w-3.5 shrink-0 text-gold" />
                          {s.label}
                        </Link>
                      );
                    })}
                </div>
              )}
            </div>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-navy-deep hover:bg-navy-deep hover:text-cream"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#consult"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm font-bold uppercase tracking-wider text-navy-deep"
            >
              <Volume2 className="h-4 w-4" /> Get Loud
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

/* =====================================================================
   1. HERO
===================================================================== */
function Hero() {
  const [heroForm, setHeroForm] = useState({ name: "", email: "", company: "", title: "", phone: "", message: "" });
  const [heroSending, setHeroSending] = useState(false);
  const [heroDone, setHeroDone] = useState(false);
  const [heroError, setHeroError] = useState<string | null>(null);

  const heroUpdate = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setHeroForm((p) => ({ ...p, [field]: e.target.value }));

  const handleHeroSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setHeroSending(true);
    setHeroError(null);
    try {
      const geo = await fetchIpGeolocation();
      await submitContactForm({
        data: {
          name: heroForm.name,
          email: heroForm.email,
          company: heroForm.company,
          role: heroForm.title,
          phone: heroForm.phone,
          service: "Strategy Call",
          message: heroForm.message,
          ...geo,
        },
      });
      window.location.href = "/thank-you";
    } catch (err) {
      setHeroError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setHeroSending(false);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-navy-deep pt-24 pb-16 text-cream md:pt-28 md:py-24 lg:py-28">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="The Big Mouth PR — Personal Branding & PR Studio"
          fetchpriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-25 animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy-deep/85 to-navy-deep/95" />
        {/* Icon pattern bg */}
        <div
          aria-hidden
          className="absolute inset-0 bg-icon-pattern-lg"
          style={{ "--icon-url": `url(${iconUrl})` } as React.CSSProperties}
        />
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className={`dust-dot ${[
              "delay-6", "delay-12", "delay-18", "delay-24", "delay-30", "delay-36", "delay-6",
              "delay-12", "delay-18", "delay-24", "delay-30", "delay-36", "delay-6", "delay-12",
            ][i]}`}
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${(i * 37) % 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main grid */}
      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 xl:gap-20 2xl:max-w-[1500px]">
        {/* LEFT — bold copy + lion */}
        <div className="animate-reveal relative">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold/30 bg-navy/50 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-gold backdrop-blur">
            <DotMark />
            Loudly, unapologetically yours
          </div>

          <h1 className="font-display font-black uppercase leading-[0.88] tracking-[-0.02em] text-cream text-[clamp(3rem,8vw,7.5rem)]">
            We don't{" "}
            <span className="relative inline-block">
              <span className="relative z-10">whisper.</span>
              <svg
                className="absolute -bottom-2 left-0 h-3 w-full text-gold"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
              >
                <path d="M2 8 Q 50 2, 100 7 T 198 5" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
            <br />
            We <span className="text-gold italic relative z-10">ROAR.</span>
          </h1>

          {/* BIG lion */}
          <img
            src={lionUrl}
            alt=""
            aria-hidden
            className="pointer-events-none absolute right-0 hidden h-[220px] w-auto animate-lion-roar opacity-70 drop-shadow-[0_20px_50px_rgba(253,95,8,0.45)] md:block md:-right-8 md:top-16 md:h-[200px] lg:-right-16 lg:top-12 lg:h-[280px] xl:-right-20 xl:h-[340px]"
          />

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream/90 md:text-xl">
            The Big Mouth PR is the studio your competitors quietly hope you never find.
            Personal branding, press & reputation — turned up to <span className="text-gold font-semibold">eleven</span>.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-cream/10 pt-6">
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-xs text-cream/80">4.9 · 120+ leaders</span>
            </div>
            <p className="text-xs uppercase tracking-[0.25em] text-cream/65">
              <span className="text-gold font-bold">340%</span> avg inbound lift
            </p>
            <p className="text-xs uppercase tracking-[0.25em] text-cream/65">
              Forbes · WSJ · TEDx · Bloomberg
            </p>
          </div>
        </div>

        {/* RIGHT — lead form */}
        <div className="relative animate-reveal delay-15">
          {/* Lion big version on mobile only — above form */}
          <img
            src={lionUrl}
            alt=""
            aria-hidden
            className="mx-auto mb-4 block h-32 w-auto animate-lion-roar drop-shadow-[0_18px_40px_rgba(253,95,8,0.4)] md:hidden"
          />
          <MouthMark className="absolute -top-10 -right-2 hidden h-16 w-16 rotate-[8deg] text-gold/90 md:block" />

          <form onSubmit={handleHeroSubmit} className="relative rounded-3xl border border-cream/15 bg-navy/80 p-8 backdrop-blur-xl shadow-luxe md:p-10">
            <div className="absolute -top-3 left-8 inline-flex items-center gap-2 rounded-full bg-gold px-4 py-1 text-[11px] font-bold uppercase tracking-widest text-navy-deep">
              <DotMark />
              Free Strategy Call
            </div>

            {heroDone ? (
              <div className="py-10 text-center">
                <p className="mt-3 font-display text-3xl font-bold text-cream">Roar received!</p>
                <p className="mt-2 text-sm text-cream/70">We'll be in touch within one business day.</p>
              </div>
            ) : (
              <>
            <h2 className="mt-3 font-display text-3xl font-bold text-cream md:text-4xl">
              Tell us your story.<br />
              <span className="text-gold italic">We'll make it loud.</span>
            </h2>
            <p className="mt-2 text-sm text-cream/80">30 minutes. No pitch. Real strategy.</p>

            {heroError && (
              <p className="mt-4 rounded-xl bg-red-500/20 px-4 py-3 text-sm text-red-200">{heroError}</p>
            )}

            <div className="mt-6 grid gap-3">
              <input type="text" required value={heroForm.name} onChange={heroUpdate("name")} placeholder="Your name" className="w-full rounded-xl border border-cream/20 bg-cream/10 px-5 py-3.5 text-sm text-cream placeholder:text-cream/65 focus:border-gold focus:outline-none focus:bg-cream/15" />
              <div className="grid grid-cols-2 gap-3">
                <input type="email" required value={heroForm.email} onChange={heroUpdate("email")} placeholder="Work email" className="w-full rounded-xl border border-cream/20 bg-cream/10 px-5 py-3.5 text-sm text-cream placeholder:text-cream/65 focus:border-gold focus:outline-none focus:bg-cream/15" />
                <input type="tel" required value={heroForm.phone} onChange={heroUpdate("phone")} placeholder="Phone" className="w-full rounded-xl border border-cream/20 bg-cream/10 px-5 py-3.5 text-sm text-cream placeholder:text-cream/65 focus:border-gold focus:outline-none focus:bg-cream/15" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input type="text" required value={heroForm.company} onChange={heroUpdate("company")} placeholder="Company" className="w-full rounded-xl border border-cream/20 bg-cream/10 px-5 py-3.5 text-sm text-cream placeholder:text-cream/65 focus:border-gold focus:outline-none focus:bg-cream/15" />
                <input type="text" value={heroForm.title} onChange={heroUpdate("title")} placeholder="Title" className="w-full rounded-xl border border-cream/20 bg-cream/10 px-5 py-3.5 text-sm text-cream placeholder:text-cream/65 focus:border-gold focus:outline-none focus:bg-cream/15" />
              </div>
              <textarea rows={2} required value={heroForm.message} onChange={heroUpdate("message")} placeholder="What do you want the world to hear?" className="w-full rounded-xl border border-cream/20 bg-cream/10 px-5 py-3.5 text-sm text-cream placeholder:text-cream/65 focus:border-gold focus:outline-none focus:bg-cream/15" />
              <button type="submit" disabled={heroSending} className="group mt-1 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-6 py-4 text-sm font-bold uppercase tracking-wider text-navy-deep transition hover:bg-gold-soft hover:scale-[1.01] disabled:opacity-60">
                {heroSending ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</> : <>Open The Mic <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></>}
              </button>
              <p className="text-center text-xs text-cream/70">🔒 Your details stay private. Always.</p>
            </div>
            </>
            )}
          </form>
        </div>
      </div>


    </section>
  );
}

/* =====================================================================
   2. SERVICES RIBBON
===================================================================== */
const ribbonServices = [
  "Personal Branding", "Executive PR", "Media Placements", "Thought Leadership",
  "LinkedIn Authority", "Wikipedia Profiles", "Crisis Comms", "Podcast Production",
  "Times Square Features", "Speaker Kits",
];

function ServicesRibbon() {
  return (
    <section className="relative overflow-hidden border-y border-navy-deep/10 bg-white py-6">
      <div className="flex w-max gap-10 marquee">
        {[...ribbonServices, ...ribbonServices].map((item, i) => (
          <div key={i} className="flex items-center gap-4 whitespace-nowrap">
            <DotMark />
            <span className="font-display text-2xl font-bold uppercase tracking-tight text-navy-deep/40 md:text-3xl">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =====================================================================
   3. CLIENTS RIBBON
===================================================================== */
const clients = [
  "FORBES", "BLOOMBERG", "TEDx", "WSJ", "FAST COMPANY", "INC.",
  "ENTREPRENEUR", "BUSINESS INSIDER", "HBR", "CNBC", "TECHCRUNCH", "VOGUE",
];

export function ClientsRibbon() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-8 text-cream border-y border-cream/5">
      <p className="mb-6 text-center text-[11px] uppercase tracking-[0.4em] text-cream/55">
        Our voices have landed in
      </p>
      <div className="flex w-max gap-16 marquee-fast">
        {[...clients, ...clients].map((c, i) => (
          <div key={i} className="flex items-center gap-16 whitespace-nowrap">
            <span className="font-display text-3xl font-bold tracking-[0.15em] text-cream/40 transition hover:text-gold md:text-4xl">
              {c}
            </span>
            <DotMark className="opacity-40" />
          </div>
        ))}
      </div>
    </section>
  );
}

/* =====================================================================
   4. STORY
===================================================================== */
function Story() {
  const [open, setOpen] = useState(false);
  const storyVideoRef = useRef<HTMLVideoElement>(null);

  const onStoryOpen = () => {
    setOpen(true);
  };
  return (
    <section id="story" className="relative bg-white py-14 md:py-24 md:py-28 xl:py-20">
      {/* Icon pattern accent */}
      <img
        src={iconUrl}
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-0 top-10 hidden h-48 w-auto opacity-[0.05] md:block"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div className="flex justify-center">
          <button onClick={onStoryOpen} className="group relative block w-full max-w-lg overflow-hidden rounded-2xl shadow-luxe lg:max-w-[600px]" aria-label="Play our story">
            <img src={storyThumbVideo} alt="The Big Mouth PR story" loading="lazy" className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[400px] lg:h-[520px]" />
            <div className="absolute inset-0 bg-gradient-to-tr from-navy-deep/70 via-navy-deep/20 to-transparent" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="relative">
                <span className="absolute inset-0 -m-2 animate-pulse-glow rounded-full" />
                <span className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gold text-navy-deep shadow-gold transition group-hover:scale-110">
                  <Play className="ml-1 h-9 w-9 fill-current" />
                </span>
              </span>
            </span>
            <span className="absolute bottom-6 left-6 inline-flex items-center gap-2 rounded-full bg-navy-deep/70 px-4 py-1.5 text-[11px] uppercase tracking-widest text-cream backdrop-blur">
              <DotMark /> Watch our story · 2:14
            </span>
          </button>
        </div>

        <div>
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-gold">
            <DotMark /> Our story
          </p>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-6xl font-black uppercase leading-[0.95] text-navy-deep md:text-6xl">
            You're the story, <br />
            we're made to read <em>you</em> <br />
            <span className="text-gold italic">out loud.</span>
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-navy/80">
            Most agencies try to change you to make a story happen. We do the opposite.
            We find what makes you, "you" — and shout it to the world.
          </p>
          <p className="mt-4 text-base leading-relaxed text-navy/70">
            Twelve years. Three continents. One belief:{" "}
            <em className="font-semibold text-navy-deep">a quiet brand is a forgotten brand.</em>
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-navy-deep/10 pt-8">
            <Stat n="340%" label="Avg inbound lift" />
            <Stat n="700+" label="Distribution platforms" />
            <Stat n="120+" label="Loud leaders served" />
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-deep/95 p-4 backdrop-blur" onClick={() => setOpen(false)}>
          <button onClick={() => setOpen(false)} className="absolute right-6 top-6 rounded-full bg-cream/10 p-3 text-cream hover:bg-gold hover:text-navy-deep" aria-label="Close video">
            <X className="h-5 w-5" />
          </button>
          <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-black shadow-luxe" onClick={(e) => e.stopPropagation()}>
            <video
              ref={storyVideoRef}
              src={storyVideo}
              className="w-full"
              controls
              playsInline
              poster={storyThumbVideo}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <p className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-navy-deep">{n}</p>
      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-navy/60">{label}</p>
    </div>
  );
}

/* =====================================================================
   5. SERVICES — tiles with relevant background images
===================================================================== */
const serviceGroups = [
  {
    icon: Crown,
    title: "Executive & Personal Branding",
    desc: "Leadership brand strategy, identity, thought-leadership articles and speaker kits that make you unmistakable.",
    tags: ["Brand Strategy", "Identity", "Speaker Kits", "Thought Leadership"],
    img: svcExec,
  },
  {
    icon: Newspaper,
    title: "Reputation & Media",
    desc: "Press distribution, crisis comms, online review management, Wikipedia profiles, Times Square features.",
    tags: ["PR & Press", "Wikipedia", "Crisis Comms", "Times Square"],
    img: svcMedia,
  },
  {
    icon: Megaphone,
    title: "Content & Social",
    desc: "LinkedIn authority content, UGC, podcasts, influencer marketing and a content engine that never sleeps.",
    tags: ["LinkedIn", "Podcast", "UGC", "Influencer"],
    img: svcContent,
  },
  {
    icon: Camera,
    title: "Creative Production",
    desc: "Photography, videography, print design, experiential marketing and custom merchandise — crafted in-house.",
    tags: ["Photo", "Video", "Print", "Merch"],
    img: svcCreative,
  },
  {
    icon: BookOpen,
    title: "Author & Publishing",
    desc: "Audiobooks, ISBN & copyright, Kirkus reviews, book fairs, signings and 700+ platform distribution.",
    tags: ["Audiobooks", "ISBN", "Kirkus", "Book Tours"],
    img: svcAuthor,
  },
  {
    icon: Globe2,
    title: "Digital & Public Affairs",
    desc: "Digital marketing, media buying, web design, public & community affairs and translation across markets.",
    tags: ["Media Buying", "Web Design", "Public Affairs", "Translation"],
    img: svcDigital,
  },
];

const slugOverrides: Record<string, string> = {
  "Executive & Personal Branding": "executive-personal-branding",
};

const serviceSlug = (title: string) =>
  slugOverrides[title] ??
  title
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const serviceLinks = [
  ...serviceGroups.map((s) => ({
    label: s.title,
    href: `/services/${serviceSlug(s.title)}`,
    icon: s.icon,
  })),
];

function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-white py-12 md:py-20 text-navy-deep md:py-24 xl:py-20">
      <img src={iconUrl} alt="" aria-hidden className="pointer-events-none absolute -right-20 top-10 hidden h-[560px] w-auto opacity-[0.04] lg:block" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-gold">
              <DotMark /> What we shout from the rooftops
            </p>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-6xl font-black uppercase leading-[0.95] text-navy-deep md:text-6xl">
              Every channel. <br />
              <span className="text-gold italic">Every megaphone.</span>
            </h2>
          </div>
          <p className="max-w-md text-navy-deep/65 md:text-right">
            From your first headshot to your first Wikipedia entry — we engineer every touchpoint of your public presence under one fearless roof.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {serviceGroups.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.title}
                to={serviceLinks.find((l) => l.label === s.title)?.href ?? "/"}
                className="group relative block overflow-hidden rounded-2xl border border-navy-deep/10 bg-navy-deep p-6 text-cream transition hover:border-gold hover:-translate-y-1 hover:shadow-luxe min-h-[280px] flex flex-col justify-end sm:p-8 sm:min-h-[380px]"
              >
                {/* Background image */}
                <img
                  src={s.img}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-30 transition duration-700 group-hover:opacity-45 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/85 to-navy-deep/55" />

                <div className="relative">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold text-navy-deep transition group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-cream">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/80">{s.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span key={t} className="rounded-full border border-cream/20 px-3 py-1 text-[11px] uppercase tracking-wider text-cream/85">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold opacity-0 transition group-hover:opacity-100">
                    Explore <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold uppercase tracking-wider text-navy-deep shadow-gold transition hover:scale-[1.03]"
          >
            Explore All Services <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

/* =====================================================================
   6. INDUSTRIES
===================================================================== */
const industries = [
  { icon: UtensilsCrossed, label: "Food & Beverage", img: indFnb, blurb: "Chefs, restaurateurs & F&B brands worth talking about." },
  { icon: TrendingUp, label: "Tech & SaaS", img: indTech, blurb: "Founders building the future — and the headlines to match." },
  { icon: ShieldCheck, label: "Finance", img: indFinance, blurb: "Bankers, fund managers & fintech with serious gravitas." },
  { icon: Heart, label: "Healthcare", img: indHealth, blurb: "Doctors & health innovators the world needs to hear." },
  { icon: Building2, label: "Real Estate", img: indRealestate, blurb: "Developers & brokers turning properties into icons." },
  { icon: Scale, label: "Law", img: indLaw, blurb: "Litigators & firms commanding the room — and the press." },
  { icon: Mic2, label: "Authors & Speakers", img: indSpeakers, blurb: "From manuscript to TEDx stage to Times Square." },
  { icon: Sparkles, label: "Lifestyle", img: indLifestyle, blurb: "Creators, designers & talent with cultural pull." },
];

function Industries() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="industries" className="relative bg-white py-12 md:py-20 text-navy-deep md:py-24 xl:py-20 border-t border-navy-deep/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-gold">
              <DotMark /> Industries we make loud
            </p>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-6xl font-black uppercase leading-[0.95] text-navy-deep md:text-6xl">
              Built for the <br />
              <span className="text-gold italic">loud leads.</span>
            </h2>
          </div>
          <div className="flex gap-3">
            <button onClick={() => embla?.scrollPrev()} aria-label="Previous" className="grid h-12 w-12 place-items-center rounded-full border border-navy-deep/20 text-navy-deep transition hover:bg-navy-deep hover:text-white">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={() => embla?.scrollNext()} aria-label="Next" className="grid h-12 w-12 place-items-center rounded-full border border-navy-deep/20 text-navy-deep transition hover:bg-navy-deep hover:text-white">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div ref={emblaRef} className="mt-12 overflow-hidden">
          <div className="flex gap-5">
            {industries.map((it, i) => {
              const Icon = it.icon;
              const isHovered = hovered === i;
              return (
                <div key={it.label} className="relative min-w-0 shrink-0 grow-0 basis-[85%] md:basis-1/2 lg:basis-1/3">
                  <article
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    className="group relative h-[320px] overflow-hidden rounded-2xl border border-cream/10 bg-navy md:h-[400px] lg:h-[460px]"
                  >
                    <img
                      src={it.img}
                      alt={it.label}
                      loading="lazy"
                      className={`absolute inset-0 h-full w-full object-cover transition duration-700 ${
                        isHovered ? "scale-110 opacity-80" : "scale-100 opacity-55"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />

                    <div className={`absolute right-6 top-6 grid h-16 w-16 place-items-center rounded-2xl bg-gold text-navy-deep shadow-gold transition-all duration-500 ${
                      isHovered ? "scale-110 rotate-0 opacity-100" : "scale-90 -rotate-6 opacity-90"
                    }`}>
                      <Icon className="h-7 w-7" />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-7">
                      <DotMark className="mb-3" />
                      <h3 className="font-display text-3xl font-bold uppercase leading-tight text-cream">{it.label}</h3>
                      <p className={`mt-2 text-sm text-cream/80 transition-all duration-500 ${
                        isHovered ? "max-h-20 opacity-100" : "max-h-0 overflow-hidden opacity-0 md:opacity-0"
                      }`}>{it.blurb}</p>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =====================================================================
   7. PORTFOLIO
===================================================================== */
function Portfolio() {
  const items = [
    { img: caseTerraSquare, title: "Terra Securities — Times Square Takeover", tag: "Outdoor & Experiential", slug: "terra-securities-times-square" },
    { img: caseUsaToday, title: "USA Today — Keri Murphy Feature", tag: "PR & Media", slug: "usa-today-keri-murphy" },
    { img: caseForbes, title: "Forbes — Jessica Executive Profile", tag: "PR & Media", slug: "forbes-jessica-feature" },
    { img: caseBrandBook, title: "Brand Book Design", tag: "Creative Production", slug: "brand-book-design" },
  ];
  return (
    <section id="portfolio" className="bg-white py-14 md:py-24 md:py-28 xl:py-20 border-t border-navy-deep/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-gold">
              <DotMark /> Portfolio
            </p>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-6xl font-black uppercase leading-[0.95] text-navy-deep md:text-6xl">
              Don't confuse us with <br />
              <span className="text-gold italic">loudmouths.</span>
              <br />
              We deliver results.
            </h2>
          </div>
          <Link to="/portfolio" className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-navy-deep">
            View all work
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-12">
          {items.map((it, i) => (
            <Link
              key={it.slug}
              to="/portfolio/$slug"
              params={{ slug: it.slug }}
              className={`group relative block overflow-hidden rounded-2xl shadow-luxe ${
                i === 0 ? "md:col-span-7 md:row-span-2 portfolio-hero" : i === 1 ? "md:col-span-5 portfolio-sm" : "md:col-span-5 md:col-start-8 portfolio-sm"
              }`}
            >
              <img src={it.img} alt={it.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-[1200ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/30 to-transparent" />
              <div className="absolute bottom-0 p-8 text-cream">
                <p className="text-[10px] uppercase tracking-[0.35em] text-gold">{it.tag}</p>
                <h3 className="mt-2 font-display text-3xl font-bold">{it.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        
      </div>
    </section>
  );
}

/* =====================================================================
   6. INDUSTRIES
===================================================================== */
const cases = [
  { img: leader1 },
  { img: leader2 },
  { img: leader3 },
  { img: leader4 },
];

function CaseStudies() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-20 text-navy-deep md:py-24 xl:py-20 border-t border-navy-deep/5">
      <img src={iconUrl} alt="" aria-hidden className="pointer-events-none absolute -left-20 top-20 hidden h-[360px] w-auto opacity-[0.05] lg:block" />
      <div className="relative mx-auto max-w-7xl px-6">
        <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-gold">
          <DotMark /> Case studies
        </p>
        <h2 className="mt-5 max-w-3xl font-display text-3xl sm:text-4xl md:text-6xl font-black uppercase leading-[0.95] text-navy-deep md:text-6xl">
          Real leaders. <span className="text-gold italic">Real noise.</span>
        </h2>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((c) => (
            <article key={c.img} className="group relative overflow-hidden rounded-2xl bg-navy-deep transition hover:-translate-y-1 hover:shadow-luxe">
              <div className="relative h-72 overflow-hidden sm:h-80">
                <img src={c.img} alt={c.client} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =====================================================================
   9. TESTIMONIALS — reel format (vertical cards with video/image + text above)
===================================================================== */
const testimonials = [
  { name: "Sarah Lin", role: "VP, BlackRock", quote: "I went from invisible to invited to the keynote stage. The Big Mouth PR just gets it.", img: thumb1, video: testimonial1 },
  { name: "Jordan Pierce", role: "Tech Founder", quote: "They built a personal brand that closes deals while I sleep. Worth every penny.", img: thumb2, video: testimonial2 },
  { name: "Priya Anand", role: "Author & Speaker", quote: "Kirkus review, audiobook, Times Square — I felt the literal noise.", img: thumb3, video: testimonial3 },
  { name: "Marcus Webb", role: "CMO", quote: "Sophisticated, witty, ruthlessly strategic. The studio I tell every CEO friend about.", img: thumb4, video: testimonial4 },
];

function Testimonials() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const handlePlay = (index: number) => {
    videoRefs.current.forEach((v, i) => {
      if (v && i !== index) { v.pause(); v.currentTime = 0; }
    });
    const video = videoRefs.current[index];
    if (video) {
      if (video.paused) {
        video.play();
        setPlayingIndex(index);
      } else {
        video.pause();
        setPlayingIndex(null);
      }
    }
  };

  return (
    <section className="relative overflow-hidden bg-navy-deep py-14 md:py-24 text-cream md:py-28 xl:py-20">
      {/* Icon pattern */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-icon-pattern-xl" style={{ "--icon-url": `url(${iconUrl})` } as React.CSSProperties} />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-gold">
              <DotMark /> Client love
            </p>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-6xl font-black uppercase leading-[0.95] text-cream md:text-6xl">
              They <span className="text-gold italic">said it</span> better.
            </h2>
          </div>
          <div className="hidden items-center gap-1 md:flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-gold text-gold" />
            ))}
            <span className="ml-3 text-sm text-cream/70">4.9 / 5 across 120+ clients</span>
          </div>
        </div>

        {/* Reel grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <article key={t.name} className="group relative aspect-[9/16] overflow-hidden rounded-3xl bg-black shadow-luxe">
              <video
                ref={(el) => { videoRefs.current[i] = el; }}
                src={t.video}
                playsInline
                preload="metadata"
                poster={t.img}
                onEnded={() => setPlayingIndex(null)}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Play */}
              {playingIndex !== i && (
              <button
                onClick={() => handlePlay(i)}
                className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 grid h-14 w-14 place-items-center rounded-full bg-gold/95 text-navy-deep transition group-hover:scale-110"
                aria-label={`Play ${t.name} testimonial`}
              >
                <Play className="ml-0.5 h-6 w-6 fill-current" />
              </button>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =====================================================================
   10. FAQ
===================================================================== */
const faqs = [
  { q: "Who do you typically work with?", a: "Founders, C-level executives, authors, and high-profile professionals ready to be seen and aren't shy." },
  { q: "How long until I see results?", a: "Most clients see meaningful media presence in 60–90 days. Results are more dependent on strategy. Wikipedia and audiobooks take longer by design." },
  { q: "Do you offer one-off services or only retainers?", a: "Both. We offer what you want. Pick a single service (LinkedIn build, ISBN registration) or a full personal-brand management." },
  { q: "Is the 30-minute call really free?", a: "Yes. Zero obligation. You leave with a custom 90-day roadmap, whether or not we work together (which is highly unlikely after the call)." },
  { q: "Can you handle reputation crises?", a: "Yes. Crisis communications and online reputation management are core services." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-white py-14 md:py-24 md:py-28 xl:py-20">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-gold">
            <DotMark /> FAQ
          </p>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-6xl font-black uppercase leading-[0.95] text-navy-deep">
            Loud questions, <span className="text-gold italic">louder answers.</span>
          </h2>
          <p className="mt-6 text-navy/70">Bring the rest to your free strategy call.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <button key={f.q} onClick={() => setOpen(isOpen ? null : i)} className="block w-full rounded-2xl border border-navy-deep/10 bg-card p-7 text-left transition hover:border-gold">
                <div className="flex items-center justify-between gap-6">
                  <h3 className="font-display text-xl font-bold text-navy-deep md:text-2xl">{f.q}</h3>
                  {isOpen ? <Minus className="h-5 w-5 text-gold" /> : <Plus className="h-5 w-5 text-navy-deep" />}
                </div>
                {isOpen && <p className="mt-4 text-base leading-relaxed text-navy/75">{f.a}</p>}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =====================================================================
   10b. SOCIAL FEED
===================================================================== */
const socialPosts = [
  { img: portfolio1, platform: "instagram", caption: "Editorial day. Loud light. Louder leader.", likes: "2.4k" },
  { img: reel2, platform: "instagram", caption: "Backstage at the keynote. He brought the thunder.", likes: "5.1k" },
  { img: portfolio3, platform: "pinterest", caption: "Speaker kit drop — feat. a fintech founder we love.", likes: "1.8k" },
  { img: svcMedia, platform: "instagram", caption: "Press hits this month: WSJ, Forbes, Inc. 🦁", likes: "3.7k" },
  { img: reel3, platform: "youtube", caption: "Book tour stop #4 — sold out room, sold out hearts.", likes: "9.2k" },
  { img: svcContent, platform: "instagram", caption: "Your phone is your stage. We hand you the mic.", likes: "4.0k" },
];

function platformIcon(p: string) {
  if (p === "youtube") return <Youtube className="h-4 w-4" />;
  return <Instagram className="h-4 w-4" />;
}

function SocialFeed() {
  return (
    <section className="relative overflow-hidden bg-white pb-24 md:pb-28 xl:pb-20 border-t border-navy-deep/5">
      <div className="mx-auto max-w-7xl px-6 pt-16 md:pt-20">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-gold">
              <DotMark /> Live from the studio
            </p>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-6xl font-black uppercase leading-[0.95] text-navy-deep md:text-6xl">
              Follow the <span className="text-gold italic">noise.</span>
            </h2>
          </div>
          <div className="flex gap-3">
            <a href="https://www.instagram.com/the_big_mouth_pr/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-navy-deep/15 px-5 py-2.5 text-sm font-semibold text-navy-deep transition hover:bg-navy-deep hover:text-cream">
              <Instagram className="h-4 w-4" /> @thebigmouthpr
            </a>
            <a href="https://www.pinterest.com/thebigmouthpr/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-navy-deep/15 px-5 py-2.5 text-sm font-semibold text-navy-deep transition hover:bg-navy-deep hover:text-cream">
              Pinterest
            </a>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {socialPosts.map((p, i) => (
            <a key={i} href="https://www.instagram.com/the_big_mouth_pr/" target="_blank" rel="noopener noreferrer" className="group relative aspect-square overflow-hidden rounded-2xl bg-navy-deep">
              <img src={p.img} alt="" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/30 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-cream/90 text-navy-deep shadow">
                {platformIcon(p.platform)}
              </div>
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-3 text-cream opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                <p className="line-clamp-2 text-[11px] leading-snug">{p.caption}</p>
                <p className="mt-1 flex items-center gap-1 text-[10px] text-gold">
                  <Heart className="h-3 w-3 fill-current" /> {p.likes}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =====================================================================
   11. FINAL CTA
===================================================================== */
function FinalCTA() {
  return (
    <section id="consult" className="relative overflow-hidden bg-navy-deep py-14 md:py-24 text-cream md:py-28 xl:py-20">
      <img src={lionUrl} alt="" aria-hidden className="pointer-events-none absolute -left-20 bottom-0 hidden h-[420px] w-auto opacity-[0.10] md:block" />
      <img src={iconUrl} alt="" aria-hidden className="pointer-events-none absolute -right-16 top-10 hidden h-[420px] w-auto opacity-[0.08] md:block" />
      <div className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 select-none font-display text-[20vw] font-black uppercase leading-none text-cream/[0.04]">
        ROAR.
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <img src={lionUrl} alt="" aria-hidden className="mx-auto h-32 w-auto animate-lion-roar drop-shadow-[0_10px_30px_rgba(253,95,8,0.45)]" />
        <h2 className="mt-6 font-display text-4xl sm:text-5xl md:text-7xl font-black uppercase leading-[0.95] md:text-8xl">
          Ready to be <br />
          <span className="text-gold italic">impossible to ignore?</span>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-lg text-cream/80">
          One free conversation away from a brand the world can't shut up about.
        </p>
        <a href="#" onClick={(e) => { e.preventDefault(); document.querySelector("section")?.scrollIntoView({ behavior: "smooth" }); }} className="mt-12 inline-flex items-center gap-3 rounded-full bg-gold px-9 py-5 text-base font-bold uppercase tracking-wider text-navy-deep transition hover:bg-gold-soft hover:scale-[1.03]">
          Book Your Free Strategy Call
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}

/* =====================================================================
   12. FOOTER
===================================================================== */
export function Footer() {
  return (
    <footer className="bg-navy-deep pb-10 pt-20 text-cream/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4">
        <div>
          <BrandLockupDark />
          <p className="mt-5 max-w-xs text-sm text-cream/65">
            A loud, fearless personal branding & PR studio. Serving leaders who'd rather be talked about than tip-toed around.
          </p>
        </div>
        <FooterCol title="Studio" items={[{ label: "About Us", href: "/about-us" }, { label: "Services", href: "/services" }, { label: "Packages", href: "/packages" }, { label: "Portfolio", href: "/portfolio" }, { label: "Contact Us", href: "/contact-us" }]} />
        <FooterCol title="Services" items={[{ label: "Executive & Personal Branding", href: "/services/executive-personal-branding" }, { label: "Reputation & Media", href: "/services/reputation-media" }, { label: "Content & Social", href: "/services/content-social" }, { label: "Creative Production", href: "/services/creative-production" }, { label: "Author & Publishing", href: "/services/author-publishing" }, { label: "Digital & Public Affairs", href: "/services/digital-public-affairs" }, { label: "Events & Experiential Marketing", href: "/services/events-experiential-marketing" }]} />
        <FooterCol title="Get loud" items={[{ label: "Book a Call", href: "/contact-us#form" }, { label: "sales@thebigmouthpr.com", href: "mailto:sales@thebigmouthpr.com" }, { label: "+1 (332) 258-7873", href: "tel:+13322587873" }, { label: "2626 E 82nd St Ste#230, Bloomington, MN 55425", href: "#" }]} />
      </div>
      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-cream/10 px-6 pt-8 text-xs text-cream/55 md:flex-row">
        <p className="flex items-center gap-3">
          © {new Date().getFullYear()} The Big Mouth PR. <DotMark /> Loud on purpose.
        </p>
        <div className="flex gap-6">
          <a href="/privacy-policy" className="hover:text-gold">Privacy</a>
          <a href="/terms" className="hover:text-gold">Terms</a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gold">LinkedIn</a>
          <a href="https://www.instagram.com/the_big_mouth_pr/" target="_blank" rel="noopener noreferrer" className="hover:text-gold">Instagram</a>
          <a href="https://x.com/TheBigMouthpr" target="_blank" rel="noopener noreferrer" className="hover:text-gold">X</a>
          <a href="https://www.pinterest.com/thebigmouthpr/" target="_blank" rel="noopener noreferrer" className="hover:text-gold">Pinterest</a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.3em] text-gold">{title}</p>
      <ul className="mt-5 space-y-3 text-sm">
        {items.map((i) => (
          <li key={i.label}><a href={i.href} className="hover:text-cream">{i.label}</a></li>
        ))}
      </ul>
    </div>
  );
}

export function FloatingCTA() {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <a href="/contact-us" className={`fixed bottom-6 left-6 z-50 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-navy-deep shadow-gold transition ${
      shown ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
    }`}>
      <MouthMark className="h-4 w-4" />
      Get Loud
    </a>
  );
}

/* =====================================================================
   PAGE
===================================================================== */
function Home() {
  return (
    <main className="lion-cursor bg-white text-navy-deep">
      <SiteHeader />
      <Hero />
      <ServicesRibbon />
      <Story />
      <ClientsRibbon />
      <Services />
      <Industries />
      <Portfolio />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <SocialFeed />
      <FinalCTA />
      <Footer />
      <FloatingCTA />
      <LionInteractions />
    </main>
  );
}
