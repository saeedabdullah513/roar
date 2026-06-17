import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Camera,
  Film,
  Palette,
  Sparkles,
  Image,
  Plus,
  Minus,
  Check,
  Phone,
  ClipboardList,
  FileSignature,
  Users,
  Map as MapIcon,
  Rocket,
  LineChart,
  Trophy,
  MessageSquareHeart,
  Volume2,
  ArrowUpRight,
  Printer,
  Gift,
  Scissors,
  Monitor,
  Crown,
  Loader2,
} from "lucide-react";

import {
  SiteHeader,
  Footer,
  FloatingCTA,
  LionInteractions,
  DotMark,
  MouthMark,
  ClientsRibbon,
} from "./index";

import { submitContactForm } from "../lib/api/contact.functions";
import { fetchIpGeolocation } from "../lib/ip-geolocation";

import lionUrl from "@/assets/lion-roar.png";
import iconUrl from "@/assets/favicon.png";
import heroImg from "@/assets/svc-creative.jpg";
import svcExec from "@/assets/svc-exec.jpg";
import svcAuthor from "@/assets/svc-author.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const LION_URL = lionUrl;
const ICON_URL = iconUrl;

export const Route = createFileRoute("/services/creative-production")({
  head: () => ({
    meta: [
      { title: "Creative Production Services | Big Mouth PR" },
      {
        name: "description",
        content:
          "Photography, film, print, and merch — all under one roof. Creative production that makes your brand impossible to scroll past.",
      },
      { property: "og:title", content: "Creative Production Services | Big Mouth PR" },
      {
        property: "og:description",
        content:
          "Photography, film, print, and merch — all under one roof. Creative production that makes your brand impossible to scroll past.",
      },
    ],
  }),
  component: CreativeProductionPage,
});

/* ===================== HERO ===================== */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-deep pt-20 text-cream md:pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-icon-pattern"
        style={{ "--icon-url": `url(${ICON_URL})` } as React.CSSProperties}
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.1fr_1fr] lg:py-24">
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.4em] text-cream/60 hover:text-gold"
          >
            ← Back to The Big Mouth PR
          </Link>
          <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-cream/15 bg-cream/5 px-4 py-1.5">
            <DotMark />
            <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-cream/75">
              Service · Creative Production
            </span>
          </div>

          <h1 className="mt-6 font-display text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Your brand is a <span className="text-gold">production.</span>
            <br />
            <span className="italic text-cream/60">We</span> stage it.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream/75 md:text-xl">
            Photography, videography, print design, experiential marketing and custom merchandise —
            all produced in-house with the same obsessive attention to detail that makes every frame,
            every page and every activation feel <span className="text-gold font-semibold">unforgettable.</span>
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#consult"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-bold uppercase tracking-wider text-navy-deep shadow-gold transition hover:scale-[1.03]"
            >
              <Volume2 className="h-4 w-4" /> Book a production call
            </a>
            <a
              href="#process"
              className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-7 py-4 text-sm font-bold uppercase tracking-wider text-cream hover:border-gold hover:text-gold"
            >
              See how we work <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid max-w-md grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { k: "+280", v: "Projects produced" },
              { k: "60+", v: "Brands brought to life" },
              { k: "48h", v: "Avg. turnaround time" },
            ].map((s) => (
              <div key={s.v}>
                <p className="font-display text-3xl font-black text-gold">{s.k}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-cream/55">{s.v}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-10 rounded-full bg-gold/20 blur-3xl" aria-hidden />
          <img
            src={LION_URL}
            alt="Roaring lion — The Big Mouth PR"
            className="relative mx-auto w-full max-w-[280px] animate-lion-roar drop-shadow-[0_30px_60px_rgba(253,95,8,0.35)] sm:max-w-[400px] lg:max-w-[520px]"
          />
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-cream px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-navy-deep shadow-luxe">
            Made to be seen.
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================== OVERVIEW / WHAT IS IT ===================== */
function Overview() {
  const pillars = [
    { icon: Camera, t: "Photography", d: "Studio-grade portraits, product shots and campaign visuals that stop the scroll." },
    { icon: Film, t: "Videography", d: "Cinematic brand films, reels, testimonials and event coverage that tell your story in motion." },
    { icon: Palette, t: "Print & Design", d: "Magazines, brochures, packaging and signage that feel premium in hand — not just on screen." },
    { icon: Sparkles, t: "Experiential", d: "Pop-ups, activations, launch events and merch drops that people line up for." },
  ];
  return (
    <section className="relative bg-white py-20 md:py-24 xl:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-gold">01 — What it is</p>
            <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-navy-deep md:text-5xl">
              A full-service creative studio <span className="text-gold">under one</span> roof.
            </h2>
          </div>
          <p className="text-base text-navy-deep/70 md:text-lg">
            Creative Production at The Big Mouth PR is more than a photoshoot. It's an integrated
            engine — photography, video, print, experiential and merch — designed so every asset
            your brand touches feels cohesive, crafted and calibrated to convert.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div
              key={p.t}
              className="group relative overflow-hidden rounded-2xl border border-navy-deep/10 bg-white p-7 transition hover:-translate-y-1 hover:border-gold hover:shadow-luxe"
            >
              <img src={ICON_URL} aria-hidden alt="" className="absolute -right-6 -top-6 h-24 opacity-[0.06] transition group-hover:opacity-[0.12]" />
              <p.icon className="h-7 w-7 text-gold" />
              <p className="mt-5 font-display text-2xl font-bold text-navy-deep">{p.t}</p>
              <p className="mt-2 text-sm text-navy-deep/65">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== SUB-SERVICES (expandable) ===================== */
const subServices = [
  {
    icon: Camera,
    title: "Photography",
    short: "More on Photography.",
    details: [
      "Brand portrait sessions & headshot suites",
      "Product & packaging photography",
      "Event & activation coverage",
      "Campaign & lookbook shoots",
      "Retouching & colour grading",
    ],
  },
  {
    icon: Film,
    title: "Videography",
    short: "See what Videography can do for your brand.",
    details: [
      "Cinematic brand films & TVCs",
      "Social-first reels & shorts",
      "Client testimonials & case study videos",
      "Event highlight reels & recaps",
      "Animation & motion graphics",
    ],
  },
  {
    icon: Printer,
    title: "Print Production",
    short: "Read more on Print Production.",
    details: [
      "Magazines, annual reports & coffee-table books",
      "Brochures, sell-sheets & one-pagers",
      "Signage, banners & trade-show materials",
      "Packaging design & structural prototypes",
      "Pre-press, proofing & vendor management",
    ],
  },
  {
    icon: Gift,
    title: "Custom Merchandise",
    short: "Explore the full range of Custom Merchandise.",
    details: [
      "Custom apparel & streetwear drops",
      "Conference & event swag packs",
      "Premium corporate gifts & packaging",
      "Sustainable & ethically sourced options",
      "Fulfilment & inventory management",
    ],
  },
  {
    icon: Monitor,
    title: "Experiential Marketing",
    short: "Find out more about Experiential Marketing.",
    details: [
      "Pop-up shops & brand activations",
      "Product launch events & after-parties",
      "Immersive brand installations",
      "Touring activations & roadshows",
      "Measurement & post-event reporting",
    ],
  },
  {
    icon: Scissors,
    title: "Post-Production",
    short: "See how Post-Production polishes everything.",
    details: [
      "Video editing & colour grading",
      "Sound design & audio mixing",
      "Photo retouching & compositing",
      "Transcription & captioning",
      "Format mastering for all platforms",
    ],
  },
];

function SubServices() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="sub-services" className="relative bg-[oklch(0.98_0.005_240)] py-20 md:py-24 xl:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-gold">02 — Inside the package</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-black tracking-tight text-navy-deep md:text-5xl">
              A Team That Handles it All.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-navy-deep/65">
            Pick à la carte or bundle them all. The Big Mouth PR can make everything you need happen:
          </p>
        </div>

        <div className="grid gap-4">
          {subServices.map((s, i) => {
            const isOpen = open === i;
            return (
              <div
                key={s.title}
                className={`overflow-hidden rounded-2xl border transition ${
                  isOpen
                    ? "border-gold bg-white shadow-luxe"
                    : "border-navy-deep/10 bg-white hover:border-navy-deep/30"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center gap-5 px-6 py-5 text-left md:px-8"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition ${
                      isOpen ? "bg-gold text-navy-deep" : "bg-navy-deep/5 text-navy-deep"
                    }`}
                  >
                    <s.icon className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <p className="font-display text-xl font-bold text-navy-deep md:text-2xl">
                      {s.title}
                    </p>
                    <p className="mt-1 text-sm text-navy-deep/60">{s.short}</p>
                  </div>
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition ${
                      isOpen ? "bg-navy-deep text-cream" : "bg-navy-deep/5 text-navy-deep"
                    }`}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="grid gap-6 border-t border-navy-deep/10 px-6 py-7 md:grid-cols-[1.4fr_1fr] md:px-8">
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {s.details.map((d) => (
                        <li key={d} className="flex items-start gap-3 text-sm text-navy-deep/80">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                          {d}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col items-start justify-between gap-4 rounded-xl bg-navy-deep p-6 text-cream">
                      <p className="text-sm text-cream/75">
                        Want to know more about our <span className="font-bold text-gold">{s.title}</span>?
                      </p>
                      <a
                        href="#consult"
                        className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-navy-deep transition hover:scale-[1.03]"
                      >
                        Explore more <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ===================== WHY US ===================== */
function WhyUs() {
  const reasons = [
    {
      n: "01",
      t: "In-house studio.",
      d: "No rental costs, no third-party markups. Our studio is your studio — lights, lenses and all.",
    },
    {
      n: "02",
      t: "Same-day edits.",
      d: "Shoot at 9 AM. Polished deliverables by 5 PM. Every single time.",
    },
    {
      n: "03",
      t: "A-list talent.",
      d: "Cinematographers, designers and producers who've worked with Netflix, Nike and Spotify.",
    },
    {
      n: "04",
      t: "End-to-end delivery.",
      d: "Concept to final asset under one roof. No handoffs, no dropped balls, no excuses.",
    },
    {
      n: "05",
      t: "Data-driven creative.",
      d: "We test what converts. A/B-optimised thumbnails, heat-mapped layouts and performance-informed edits.",
    },
    {
      n: "06",
      t: "Scalable for any budget.",
      d: "One social reel or a multi-city activation — we flex without compromising quality.",
    },
  ];
  return (
    <section className="relative overflow-hidden bg-navy-deep py-16 text-cream md:py-20 xl:py-16">
      <img src={LION_URL} aria-hidden alt="" className="pointer-events-none absolute -right-20 -top-10 w-[380px] opacity-[0.07] md:w-[520px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-gold">03 — Why The Big Mouth PR</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl font-black tracking-tight md:text-5xl">
              Other agencies <span className="italic text-cream/55">outsource.</span>
              <br />
              We build it in <span className="text-gold">house.</span>
            </h2>
          </div>
          <a
            href="#consult"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold uppercase tracking-wider text-navy-deep shadow-gold"
          >
            Get your roar <Volume2 className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-cream/10 bg-cream/10 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.n} className="group relative bg-navy-deep p-8 transition hover:bg-navy">
              <span className="font-display text-5xl font-black text-gold/30 transition group-hover:text-gold">
                {r.n}
              </span>
              <p className="mt-4 font-display text-xl font-bold text-cream">{r.t}</p>
              <p className="mt-2 text-sm text-cream/65">{r.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== PROCESS MAP ===================== */
function Process() {
  const steps = [
    { icon: Phone, t: "Discovery Call", d: "60-min strategy kickoff. We listen, you roar." },
    { icon: ClipboardList, t: "Onboarding", d: "Brand audit, asset intake, stakeholder interviews." },
    { icon: FileSignature, t: "Scope Finalized", d: "Crystal-clear SOW, deliverables and timelines." },
    { icon: Users, t: "Team Assigned", d: "Senior pod — strategist, writer, designer, publicist." },
    { icon: MapIcon, t: "Plan Built", d: "12-month brand roadmap with monthly KPIs." },
    { icon: Rocket, t: "Execute", d: "Content, pitches, shoots, posts, placements — live." },
    { icon: LineChart, t: "Optimize in Real Time", d: "Weekly data reviews. Pivot fast, scale what works." },
    { icon: Trophy, t: "Complete & Report", d: "Quarterly impact report. Wins, learnings, next bets." },
    { icon: MessageSquareHeart, t: "Feedback Loop", d: "NPS, candid debrief, renewal & expansion." },
  ];
  return (
    <section id="process" className="relative bg-white py-20 md:py-24 xl:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-gold">04 — The Process</p>
          <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-navy-deep md:text-5xl">
            From brief to <span className="text-gold">"wrap."</span>
          </h2>
          <p className="mt-5 text-base text-navy-deep/70 md:text-lg">
            A nine-step system that's repeatable, transparent and obsessed with measurable outcomes.
          </p>
        </div>

        <div className="relative">
          <div
            className="pointer-events-none absolute left-0 right-0 top-[36px] hidden h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent md:block"
            aria-hidden
          />
          <ol className="grid gap-6 md:grid-cols-3 lg:grid-cols-3">
            {steps.map((s, i) => (
              <li
                key={s.t}
                className="group relative rounded-2xl border border-navy-deep/10 bg-white p-6 transition hover:-translate-y-1 hover:border-gold hover:shadow-luxe"
              >
                <div className="flex items-center gap-4">
                  <span className="relative flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-gold text-navy-deep shadow-gold">
                    <s.icon className="h-7 w-7" />
                    <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-navy-deep font-display text-xs font-black text-cream">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </span>
                  <div>
                    <p className="font-display text-lg font-bold text-navy-deep">{s.t}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-navy-deep/65">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#consult"
            className="inline-flex items-center gap-2 rounded-full bg-navy-deep px-7 py-4 text-sm font-bold uppercase tracking-wider text-cream transition hover:bg-gold hover:text-navy-deep"
          >
            Start at step one <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ===================== PORTFOLIO ===================== */
const portfolioItems = [
  { img: portfolio1, name: "Sara Mehta", role: "Creative Director", win: "Viral campaign with 5M+ organic views in 72 hours" },
  { img: portfolio2, name: "James Wright", role: "Photographer", win: "Album art & campaign for Grammy-nominated artist" },
  { img: portfolio3, name: "Anya Kapoor", role: "Event Producer", win: "NYFW activation with 2,000+ attendees and 40+ media hits" },
  { img: portfolio4, name: "Luis Torres", role: "Director of Photography", win: "Cinematography for Sundance-selected short film" },
  { img: svcExec, role: "Video Director", name: "Raj Patel", win: "3 brand films for Fortune 500 client — 12M combined views" },
  { img: svcAuthor, role: "Print Designer", name: "Mia Chen", win: "Award-winning annual report redesign for public company" },
];

function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-[oklch(0.98_0.005_240)] py-20 md:py-24 xl:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-gold">05 — Receipts</p>
            <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-navy-deep md:text-5xl">
              Work we're proud <span className="text-gold">to show.</span>
            </h2>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-navy-deep hover:text-gold"
          >
            See full portfolio <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((p) => (
            <article
              key={p.name}
              className="group relative overflow-hidden rounded-2xl bg-navy-deep shadow-luxe"
            >
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                className="h-[240px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[320px] md:h-[420px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-cream">
                <DotMark />
                <p className="mt-3 font-display text-2xl font-bold">{p.name}</p>
                <p className="text-xs uppercase tracking-[0.25em] text-cream/70">{p.role}</p>
                <p className="mt-4 border-t border-cream/20 pt-3 text-sm text-cream/85">
                  <span className="font-bold text-gold">Win:</span> {p.win}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== MID-PAGE CTA STRIP ===================== */
function CTAStrip() {
  return (
    <section className="relative overflow-hidden bg-gold py-10 text-navy-deep">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 md:flex-row">
        <p className="flex items-center gap-4 text-center font-display text-2xl font-black md:text-left md:text-3xl">
          <MouthMark className="h-7 w-7" />
          Ready to make something people remember?
        </p>
        <a
          href="#consult"
          className="inline-flex items-center gap-2 rounded-full bg-navy-deep px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-cream transition hover:scale-[1.03]"
        >
          Book a call <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

/* ===================== FAQ ===================== */
const faqs = [
  {
    q: "What kind of projects do you produce?",
    a: "Everything from single photography assets to full-scale experiential activations. Photography, video, print, merchandise and events — if it's brand-facing, we build it.",
  },
  {
    q: "Do we need to come to your studio?",
    a: "Not necessarily. For location shoots we come to you. For studio work, our in-house space is fully equipped and available exclusively for clients.",
  },
  {
    q: "How fast can you turn a project around?",
    a: "Standard turnaround is 48 hours for edited photography and 5–7 business days for video. Rush options are available — we've delivered same-day edits for time-sensitive campaigns.",
  },
  {
    q: "Can you handle large-scale events?",
    a: "Yes. Our experiential team has produced launch events for 1,000+ guests, multi-city activations and immersive brand installations — end to end.",
  },
  {
    q: "What's the investment?",
    a: "Production engagements start at $5,000 for a single project. Retainer packages for ongoing content production begin at $8,500/month. We'll scope transparently after the discovery call.",
  },
  {
    q: "Do you handle distribution too?",
    a: "We can recommend distribution partners, but production is our specialty. Deliverables come formatted for every channel — web, social, print, broadcast and OOH.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative bg-white py-20 md:py-24 xl:py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-gold">06 — Questions</p>
          <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-navy-deep md:text-5xl">
            Answers you can <span className="text-gold">take to set.</span>
          </h2>
          <p className="mt-5 text-sm text-navy-deep/65">
            Didn't find what you needed? Ask us directly — we reply within one business day.
          </p>
          <a
            href="#consult"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-navy-deep/20 px-5 py-3 text-xs font-bold uppercase tracking-wider text-navy-deep hover:border-gold hover:text-gold"
          >
            Ask the team <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="divide-y divide-navy-deep/10 border-t border-b border-navy-deep/10">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg font-bold text-navy-deep md:text-xl">{f.q}</span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${
                      isOpen ? "bg-gold text-navy-deep" : "bg-navy-deep/5 text-navy-deep"
                    }`}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {isOpen && <p className="pb-6 pr-0 text-sm text-navy-deep/70 md:pr-12 md:text-base">{f.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ===================== CONSULT / CONTACT CTA ===================== */
function Consult() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleConsultSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      const fd = new FormData(e.currentTarget);
      const geo = await fetchIpGeolocation();
      await submitContactForm({
        data: {
          name: fd.get("name") as string,
          email: fd.get("email") as string,
          company: fd.get("company") as string,
          role: fd.get("role") as string,
          phone: "",
          service: "Creative Production",
          message: (fd.get("project") || "") as string,
          ...geo,
        },
      });
      window.location.href = "/thank-you";
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="consult" className="relative overflow-hidden bg-navy-deep py-20 text-cream md:py-24 xl:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-icon-pattern-lg"
        style={{ "--icon-url": `url(${ICON_URL})` } as React.CSSProperties}
      />
      <img src={LION_URL} aria-hidden alt="" className="pointer-events-none absolute -left-16 bottom-0 w-[320px] opacity-20 md:w-[440px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-gold">07 — Let's produce</p>
          <h2 className="mt-3 font-display text-5xl font-black leading-[0.95] tracking-tight md:text-6xl">
            Your brand deserves <span className="text-gold">better</span> than
            <br />
            stock photos and <em>good enough.</em>
          </h2>
          <p className="mt-6 max-w-md text-cream/75">
            Tell us about the project. A senior producer (not a chatbot) replies within 24 hours with a
            tailored scope.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.25em] text-cream/55">
            <DotMark /> No spam · No interns · No outsourcing
          </div>
        </div>

        <form
          onSubmit={handleConsultSubmit}
          className="rounded-3xl border border-cream/10 bg-cream/[0.04] p-7 shadow-luxe backdrop-blur md:p-9"
        >
          {submitted ? (
            <div className="py-10 text-center">
              <MouthMark className="mx-auto h-14 w-14 text-gold" />
              <p className="mt-5 font-display text-3xl font-black">Roar received.</p>
              <p className="mt-3 text-cream/70">
                We'll be in your inbox within one business day with next steps.
              </p>
            </div>
          ) : (
            <>
              <p className="font-display text-2xl font-bold">Book a production consultation</p>
              <p className="mt-1 text-sm text-cream/65">Takes 45 seconds.</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <Field label="Full name" name="name" placeholder="Jane Roar" />
                <Field label="Work email" name="email" type="email" placeholder="jane@company.com" />
                <Field label="Company" name="company" placeholder="Atlas Ventures" />
                <Field label="Role" name="role" placeholder="Creative Director" />
              </div>
              <div className="mt-4">
                <label className="text-[11px] font-bold uppercase tracking-[0.25em] text-cream/60">
                  Tell us about your project
                </label>
                <textarea
                  name="project"
                  rows={4}
                  placeholder="Photography, video, print, merch or experiential — give us the brief…"
                  className="mt-2 w-full rounded-xl border border-cream/15 bg-navy-deep/40 px-4 py-3 text-sm text-cream placeholder:text-cream/45 focus:border-gold focus:outline-none"
                />
              </div>
              {error && (
                <p className="mt-4 rounded-xl bg-red-500/20 px-4 py-3 text-sm text-red-200">{error}</p>
              )}
              <button
                type="submit"
                disabled={sending}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-bold uppercase tracking-wider text-navy-deep shadow-gold transition hover:scale-[1.02] disabled:opacity-60"
              >
                {sending ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</> : <><Volume2 className="h-4 w-4" /> Let's make it</>}
              </button>
              <p className="mt-3 text-center text-[11px] text-cream/50">
                By submitting, you agree to a follow-up from The Big Mouth PR team.
              </p>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-[11px] font-bold uppercase tracking-[0.25em] text-cream/60">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-cream/15 bg-navy-deep/40 px-4 py-3 text-sm text-cream placeholder:text-cream/45 focus:border-gold focus:outline-none"
      />
    </div>
  );
}

/* ===================== PAGE ===================== */
function CreativeProductionPage() {
  return (
    <main className="lion-cursor bg-white text-navy-deep">
      <SiteHeader />
      <Hero />
      <Overview />
      <SubServices />
      <WhyUs />
      <Process />
      <CTAStrip />
      <Portfolio />
      <ClientsRibbon />
      <FAQ />
      <Consult />
      <Footer />
      <FloatingCTA />
      <LionInteractions />
    </main>
  );
}
