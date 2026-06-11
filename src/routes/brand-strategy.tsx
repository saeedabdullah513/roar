import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Compass,
  Target,
  Users,
  MessageSquare,
  BarChart3,
  Lightbulb,
  Zap,
  Shield,
  TrendingUp,
  Globe,
  Phone,
  Mail,
  Plus,
  Minus,
  Volume2,
  Loader2,
  BookOpen,
  Crosshair,
  Merge,
  Rocket,
  LineChart,
  ClipboardList,
  FileSignature,
  Map as MapIcon,
  Trophy,
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

import founderUrl from "@/assets/founder.jpg";
import lionUrl from "@/assets/lion-roar.png";
import iconUrl from "@/assets/favicon.png";
import magicBg from "@/assets/magic-bg.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const LION_URL = lionUrl;
const ICON_URL = iconUrl;
const FOUNDER_URL = founderUrl;
const MAGIC_BG = magicBg;

export const Route = createFileRoute("/brand-strategy")({
  head: () => ({
    meta: [
      { title: "Brand Strategy — The Big Mouth PR" },
      {
        name: "description",
        content:
          "Brand strategy that turns your business into a category king. Positioning, differentiation, audience strategy & narrative — engineered to make you unmissable.",
      },
      { property: "og:title", content: "Brand Strategy — The Big Mouth PR" },
      {
        property: "og:description",
        content:
          "We build brand strategies that don't blend in. Positioning, differentiation, audience & narrative — all under one roar.",
      },
    ],
  }),
  component: BrandStrategyPage,
});

/* ===================== HERO ===================== */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-deep pt-20 text-cream md:pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-icon-pattern-lg"
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
              Service · Brand Strategy
            </span>
          </div>

          <h1 className="mt-6 font-display text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl md:text-7xl">
            Your brand shouldn't
            <br />
            <span className="italic text-cream/60">blend in.</span>
            <br />
            It should <span className="text-gold">dominate.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream/75 md:text-xl">
            Brand strategy is the difference between being a choice and being <em>the</em> choice.
            We build positioning, differentiation, audience architecture and narrative systems that
            make your business impossible to ignore.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#consult"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-bold uppercase tracking-wider text-navy-deep shadow-gold transition hover:scale-[1.03]"
            >
              <Volume2 className="h-4 w-4" /> Book a strategy call
            </a>
            <a
              href="#benefits"
              className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-7 py-4 text-sm font-bold uppercase tracking-wider text-cream hover:border-gold hover:text-gold"
            >
              See what you gain <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid max-w-md grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { k: "3×", v: "Faster category recall" },
              { k: "87%", v: "Premium pricing uplift" },
              { k: "2.4×", v: "Average deal size growth" },
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
            Own your category.
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================== SIDEBAR + BENEFITS ===================== */
function BenefitsWithSidebar() {
  const benefits = [
    {
      icon: Crosshair,
      title: "Crystal-clear positioning",
      description:
        "No more elevator pitch roulette. You'll know exactly what you stand for, who you serve, and why they should pick you — in one sentence that sticks.",
      metric: "96% of clients nail their positioning within 2 weeks",
    },
    {
      icon: Users,
      title: "Audiences that actually convert",
      description:
        "We map every audience segment — from your dream client to your most influential advocate — and build messaging that moves each one to action.",
      metric: "3× engagement rate on audience-targeted campaigns",
    },
    {
      icon: Shield,
      title: "Competitive moat",
      description:
        "We identify your unfair advantages and build barriers that competitors can't copy. Your differentiation becomes your fortress.",
      metric: "78% reduction in price-based competition",
    },
    {
      icon: TrendingUp,
      title: "Premium pricing power",
      description:
        "When your brand signals category leadership, you stop competing on price. Our clients command 30-120% premiums after strategic repositioning.",
      metric: "Average 87% pricing uplift within 6 months",
    },
    {
      icon: Merge,
      title: "Unified brand experience",
      description:
        "Every touchpoint — from your website to your sales deck to your LinkedIn — tells the same powerful story. Consistency compounds trust.",
      metric: "5.7× higher revenue growth for consistently branded companies",
    },
    {
      icon: Rocket,
      title: "Scalable narrative systems",
      description:
        "Your brand strategy doesn't sit in a PDF. It's a living system — messaging frameworks, content pillars, and playbooks that your whole team uses.",
      metric: "60% faster content creation with our narrative systems",
    },
  ];

  return (
    <section id="benefits" className="relative bg-white py-20 md:py-24 xl:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-gold">
            01 — What you gain
          </p>
          <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-navy-deep sm:text-4xl md:text-5xl">
            Brand strategy delivers <span className="text-gold">measurable</span> outcomes.
          </h2>
          <p className="mt-5 text-base text-navy-deep/70 md:text-lg">
            Every engagement is built around outcomes that move your business forward — not
            theoretical frameworks that gather dust.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_360px]">
          {/* Main content */}
          <div className="grid gap-6 md:grid-cols-2">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="group rounded-2xl border border-navy-deep/10 bg-white p-5 transition hover:-translate-y-1 hover:border-gold hover:shadow-luxe sm:p-6 md:p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <b.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-navy-deep">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-deep/65">{b.description}</p>
                <p className="mt-4 border-t border-navy-deep/10 pt-3 text-xs font-semibold uppercase tracking-wider text-gold">
                  {b.metric}
                </p>
              </div>
            ))}
          </div>

          {/* Sidebar — Team contact card */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-2xl border border-navy-deep/10 bg-white shadow-luxe">
              <div className="relative h-36 overflow-hidden bg-navy-deep sm:h-48">
                <img
                  src={MAGIC_BG}
                  alt=""
                  aria-hidden
                  className="h-full w-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep to-transparent" />
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 sm:-bottom-12">
                  <div className="h-20 w-20 overflow-hidden rounded-full border-4 border-white shadow-luxe sm:h-24 sm:w-24">
                    <img
                      src={FOUNDER_URL}
                      alt="Team member"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="px-5 pb-5 pt-12 text-center sm:px-6 sm:pb-6 sm:pt-14">
                <p className="font-display text-xl font-bold text-navy-deep">Abdullah Saeed</p>
                <p className="text-xs uppercase tracking-[0.25em] text-gold">
                  Head of Strategy
                </p>
                <div className="mt-5 space-y-3 border-t border-navy-deep/10 pt-5">
                  <a
                    href="mailto:abdullah@thebigmouthpr.com"
                    className="flex items-center justify-center gap-2 text-sm text-navy-deep/70 transition hover:text-gold"
                  >
                    <Mail className="h-4 w-4 shrink-0" />
                    abdullah@thebigmouthpr.com
                  </a>
                  <a
                    href="tel:+971501234567"
                    className="flex items-center justify-center gap-2 text-sm text-navy-deep/70 transition hover:text-gold"
                  >
                    <Phone className="h-4 w-4 shrink-0" />
                    +971 50 123 4567
                  </a>
                </div>
                <a
                  href="#consult"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-xs font-bold uppercase tracking-wider text-navy-deep shadow-gold transition hover:scale-[1.03]"
                >
                  Book a session <ArrowRight className="h-4 w-4" />
                </a>
                <p className="mt-3 text-[10px] text-navy-deep/40">
                  Reply within 4 hours · Mon–Sat
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ===================== WHAT WE DELIVER ===================== */
const deliverables = [
  {
    icon: Compass,
    title: "Positioning Architecture",
    short: "Your place in the market, owned.",
    items: [
      "Category & whitespace analysis",
      "Positioning statement & POV",
      "Competitive differentiation matrix",
      "Brand archetype & personality",
    ],
  },
  {
    icon: Target,
    title: "Audience Strategy",
    short: "Know who to speak to. And who to ignore.",
    items: [
      "Audience segmentation & personas",
      "Journey mapping & trigger points",
      "Message architecture per segment",
      "Channel prioritization matrix",
    ],
  },
  {
    icon: MessageSquare,
    title: "Narrative & Messaging",
    short: "A story that sticks across every surface.",
    items: [
      "Core narrative & brand story",
      "Tagline, value props & key messages",
      "Tone of voice & vocabulary system",
      "Elevator pitch & origin story",
    ],
  },
  {
    icon: BarChart3,
    title: "Visual Identity Strategy",
    short: "Direction, not decoration.",
    items: [
      "Visual territory exploration",
      "Identity system recommendations",
      "Application guidelines / templates",
      "Brand governance framework",
    ],
  },
  {
    icon: Lightbulb,
    title: "Go-to-Market Strategy",
    short: "Launch with impact, not a whimper.",
    items: [
      "Launch narrative & campaign concept",
      "Channel rollout plan & calendar",
      "Key partnership & PR angles",
      "Success metrics & benchmarks",
    ],
  },
  {
    icon: LineChart,
    title: "Measurement & Optimization",
    short: "What gets measured gets louder.",
    items: [
      "Brand health scorecard (awareness, consideration, preference)",
      "Share of voice tracking",
      "Quarterly strategy reviews",
      "Annual repositioning audit",
    ],
  },
];

function Deliverables() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative bg-[oklch(0.98_0.005_240)] py-20 md:py-24 xl:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-gold">
              02 — What we deliver
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-black tracking-tight text-navy-deep sm:text-4xl md:text-5xl">
              A complete brand system, <span className="text-gold">not a PowerPoint.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-navy-deep/65">
            Each deliverable is designed to be operational — used by your team, applied across your
            channels, and measurable from day one.
          </p>
        </div>

        <div className="grid gap-4">
          {deliverables.map((d, i) => {
            const isOpen = open === i;
            return (
              <div
                key={d.title}
                className={`overflow-hidden rounded-2xl border transition ${
                  isOpen
                    ? "border-gold bg-white shadow-luxe"
                    : "border-navy-deep/10 bg-white hover:border-navy-deep/30"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center gap-5 px-6 py-5 text-left md:px-8"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition ${
                      isOpen ? "bg-gold text-navy-deep" : "bg-navy-deep/5 text-navy-deep"
                    }`}
                  >
                    <d.icon className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <p className="font-display text-xl font-bold text-navy-deep md:text-2xl">
                      {d.title}
                    </p>
                    <p className="mt-1 text-sm text-navy-deep/60">{d.short}</p>
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
                      {d.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm text-navy-deep/80"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col items-start justify-between gap-4 rounded-xl bg-navy-deep p-6 text-cream">
                      <p className="text-sm text-cream/75">
                        Every deliverable comes with a <span className="font-bold text-gold">live
                        workshop</span> and a playbook your team can execute without us.
                      </p>
                      <a
                        href="#consult"
                        className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-navy-deep transition hover:scale-[1.03]"
                      >
                        Get the playbook <ArrowUpRight className="h-3.5 w-3.5" />
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
      t: "Strategists, not order-takers.",
      d: "We don't build what you ask for. We build what your brand actually needs — even when it's uncomfortable.",
    },
    {
      n: "02",
      t: "Research-backed, instinct-delivered.",
      d: "Every recommendation sits on primary research, competitive audits, and category data. Then we add the creative spark.",
    },
    {
      n: "03",
      t: "Built for execution, not shelves.",
      d: "Your strategy lands as playbooks, not PDFs. Your team can operationalise it in 48 hours.",
    },
    {
      n: "04",
      t: "Category creators, not followers.",
      d: "We don't benchmark you against competitors. We build a category where you are the only benchmark.",
    },
    {
      n: "05",
      t: "Outcome-based engagement.",
      d: "We're measured on business impact — pipeline, pricing power, share of voice — not delivery of documents.",
    },
    {
      n: "06",
      t: "Multi-market fluency.",
      d: "Brand strategy that works in Dubai, London, Singapore, and New York. Cultural nuance baked in, not bolted on.",
    },
  ];
  return (
    <section className="relative overflow-hidden bg-navy-deep py-16 text-cream md:py-20 xl:py-16">
      <img
        src={LION_URL}
        aria-hidden
        alt=""
        className="pointer-events-none absolute -right-20 -top-10 w-[380px] opacity-[0.07] md:w-[520px]"
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-gold">
              03 — Why The Big Mouth PR
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
              Other agencies sell you a logo.
              <br />
              We sell you a <span className="text-gold">category.</span>
            </h2>
          </div>
          <a
            href="#consult"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold uppercase tracking-wider text-navy-deep shadow-gold"
          >
            Claim your category <Volume2 className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-cream/10 bg-cream/10 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div
              key={r.n}
              className="group relative bg-navy-deep p-6 transition hover:bg-navy md:p-8"
            >
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

/* ===================== PROCESS ===================== */
function Process() {
  const steps = [
    { icon: ClipboardList, t: "Discovery & Audit", d: "Stakeholder interviews, competitive deep-dive, audience research, and current-state brand audit." },
    { icon: FileSignature, t: "Strategy Development", d: "Positioning, differentiation, audience architecture, and narrative framework — built and pressure-tested." },
    { icon: Users, t: "Workshop & Validation", d: "Collaborative session with your leadership team to validate, refine, and get full buy-in." },
    { icon: MapIcon, t: "Playbook Creation", d: "Complete brand playbook: messaging, visual direction, channel strategy, and activation roadmap." },
    { icon: Rocket, t: "Activation & Embedding", d: "Team training, asset production, channel rollout, and measurement setup." },
    { icon: LineChart, t: "Review & Optimize", d: "Quarterly brand health reviews, scorecard updates, and strategic adjustments based on market response." },
  ];
  return (
    <section className="relative bg-white py-20 md:py-24 xl:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-gold">
            04 — The process
          </p>
          <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-navy-deep sm:text-4xl md:text-5xl">
            From discovery to <span className="text-gold">dominance.</span>
          </h2>
          <p className="mt-5 text-base text-navy-deep/70 md:text-lg">
            A six-phase process designed to move fast without sacrificing depth.
          </p>
        </div>

        <div className="relative">
          <div
            className="pointer-events-none absolute left-0 right-0 top-[36px] hidden h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent md:block"
            aria-hidden
          />
          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

/* ===================== MID-PAGE CTA ===================== */
function CTAStrip() {
  return (
    <section className="relative overflow-hidden bg-gold py-10 text-navy-deep">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 md:flex-row">
            <p className="flex items-center gap-4 text-center font-display text-xl font-black md:text-left md:text-3xl sm:text-2xl">
          <MouthMark className="h-7 w-7" />
          Stop blending in. Start owning your category.
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

/* ===================== PORTFOLIO ===================== */
const portfolioItems = [
  { img: portfolio1, name: "Atlas Ventures", role: "VC Firm — Dubai", win: "Category creation in MENA deep-tech. 3× LP pipeline in 6 months." },
  { img: portfolio2, name: "NorthStar Health", role: "Healthcare — London", win: "Premium repositioning. 40% pricing uplift in B2B segment." },
  { img: portfolio3, name: "Hexa Capital", role: "Investment — Singapore", win: "Full brand architecture. 2× share of voice vs top 3 competitors." },
  { img: portfolio1, name: "Pulse Energy", role: "CleanTech — UAE", win: "Go-to-market strategy. $12M Series A closed within launch quarter." },
  { img: portfolio2, name: "Verve Studios", role: "Creative — NYC", win: "Brand system & narrative. 5 new enterprise retainers in 90 days." },
  { img: portfolio3, name: "Rise & Co.", role: "Wellness — Global", win: "Audience strategy. 4× conversion rate on DTC funnel." },
];

function Portfolio() {
  return (
    <section className="relative bg-[oklch(0.98_0.005_240)] py-20 md:py-24 xl:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-gold">
              05 — Proof
            </p>
            <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-navy-deep sm:text-4xl md:text-5xl">
              Brands we built <span className="text-gold">from scratch</span> (or saved).
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

/* ===================== FAQ ===================== */
const faqs = [
  {
    q: "How is Brand Strategy different from a regular brand guideline?",
    a: "Guidelines tell you what your logo looks like. Strategy tells you why you exist, who you exist for, and how every decision — from product to pricing to hiring — reinforces your position. It's the operating system, not the paint job.",
  },
  {
    q: "How long does a brand strategy engagement take?",
    a: "A full engagement typically runs 6-10 weeks from kickoff to playbook delivery. The timeline depends on how much primary research, stakeholder alignment, and market testing is needed.",
  },
  {
    q: "Do we need to involve our whole leadership team?",
    a: "Yes — and that's the point. The best brand strategies emerge from facilitated sessions with your founders, C-suite, and key decision-makers. We make those sessions efficient and energising.",
  },
  {
    q: "How do you measure the success of a brand strategy?",
    a: "We establish baseline metrics — awareness, consideration, preference, share of voice, pricing power — before we start, then track them quarterly. You'll see movement within 90 days of activation.",
  },
  {
    q: "What's the investment range?",
    a: "Brand strategy engagements start at $25K and scale with scope, research depth, and geographic complexity. We'll provide a transparent proposal after the discovery call.",
  },
  {
    q: "Can you work with our existing brand or do we need a full rebrand?",
    a: "Often we don't need a full rebrand. We audit what's working, salvage the equity, and reposition the narrative. Full rebrands happen when the gap between current perception and desired position is too wide.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative bg-white py-20 md:py-24 xl:py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-gold">
            06 — Questions
          </p>
          <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-navy-deep sm:text-4xl md:text-5xl">
            Straight answers to <span className="text-gold">smart questions.</span>
          </h2>
          <p className="mt-5 text-sm text-navy-deep/65">
            Still unsure? Reach out — we'll walk you through the process.
          </p>
          <a
            href="#consult"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-navy-deep/20 px-5 py-3 text-xs font-bold uppercase tracking-wider text-navy-deep hover:border-gold hover:text-gold"
          >
            Ask us anything <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="divide-y divide-navy-deep/10 border-t border-b border-navy-deep/10">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg font-bold text-navy-deep md:text-xl">
                    {f.q}
                  </span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${
                      isOpen ? "bg-gold text-navy-deep" : "bg-navy-deep/5 text-navy-deep"
                    }`}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-6 pr-0 text-sm text-navy-deep/70 md:pr-12 md:text-base">
                    {f.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ===================== CONSULT ===================== */
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
      await submitContactForm({
        data: {
          name: (fd.get("name") || fd.get("fullname")) as string,
          email: (fd.get("email")) as string,
          company: (fd.get("company")) as string,
          role: (fd.get("role")) as string,
          phone: "",
          service: "Brand Strategy Call",
          message: (fd.get("goal") as string) || "Brand strategy inquiry",
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
    <section
      id="consult"
      className="relative overflow-hidden bg-navy-deep py-20 text-cream md:py-24 xl:py-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-icon-pattern-lg"
        style={{ "--icon-url": `url(${ICON_URL})` } as React.CSSProperties}
      />
      <img
        src={LION_URL}
        aria-hidden
        alt=""
        className="pointer-events-none absolute -left-16 bottom-0 w-[320px] opacity-20 md:w-[440px]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-gold">
            07 — Let's build
          </p>
          <h2 className="mt-3 font-display text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
            Your category is waiting.
            <br />
            Let's <span className="text-gold">claim it.</span>
          </h2>
          <p className="mt-6 max-w-md text-cream/75">
            Drop your details. Our head of strategy replies within 24 hours with a custom approach
            tailored to your market, goals, and timeline.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.25em] text-cream/55">
            <DotMark /> No fluff · No templates · No noise
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
              <p className="font-display text-2xl font-bold">Book a strategy session</p>
              <p className="mt-1 text-sm text-cream/65">Takes 45 seconds.</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <Field label="Full name" name="name" placeholder="Jane Roar" />
                <Field label="Work email" name="email" type="email" placeholder="jane@company.com" />
                <Field label="Company" name="company" placeholder="Atlas Ventures" />
                <Field label="Role" name="role" placeholder="CEO / Founder" />
              </div>
              <div className="mt-4">
                <label className="text-[11px] font-bold uppercase tracking-[0.25em] text-cream/60">
                  What's the biggest challenge your brand faces?
                </label>
                <textarea
                  name="goal"
                  rows={4}
                  placeholder="Tell us about your market, competitors, and what success looks like…"
                  className="mt-2 w-full rounded-xl border border-cream/15 bg-navy-deep/40 px-4 py-3 text-sm text-cream placeholder:text-cream/45 focus:border-gold focus:outline-none"
                />
              </div>
              {error && (
                <p className="mt-4 rounded-xl bg-red-500/20 px-4 py-3 text-sm text-red-200">
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={sending}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-bold uppercase tracking-wider text-navy-deep shadow-gold transition hover:scale-[1.02] disabled:opacity-60"
              >
                {sending ? (
                  <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>
                ) : (
                  <><Volume2 className="h-4 w-4" /> Build my brand</>
                )}
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
function BrandStrategyPage() {
  return (
    <main className="lion-cursor bg-white text-navy-deep">
      <SiteHeader />
      <Hero />
      <BenefitsWithSidebar />
      <Deliverables />
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
