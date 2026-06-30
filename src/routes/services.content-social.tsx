import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  ArrowRight,
  Crown,
  Mic2,
  Newspaper,
  BookOpen,
  Camera,
  Sparkles,
  Megaphone,
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
  Instagram,
  Youtube,
  TrendingUp,
  Loader2,
  ChevronLeft,
  ChevronRight,
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
import svcContent from "@/assets/svc-content.jpg";
import svcExec from "@/assets/svc-exec.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import leader1 from "@/assets/leader-1.jpg";
import leader2 from "@/assets/leader-2.jpg";
import leader3 from "@/assets/leader-3.jpeg";
import leader4 from "@/assets/leader-4.jpg";

const LION_URL = lionUrl;
const ICON_URL = iconUrl;

export const Route = createFileRoute("/services/content-social")({
  head: () => ({
    meta: [
      { title: "Become a Loud Social Presence with The Big Mouth PR" },
      {
        name: "description",
        content:
          "If you're aiming to reach millions on social media, a strong team is the first step to it. Let The Big Mouth PR be that team.",
      },
      { property: "og:title", content: "Become a Loud Social Presence with The Big Mouth PR" },
      {
        property: "og:description",
        content:
          "If you're aiming to reach millions on social media, a strong team is the first step to it. Let The Big Mouth PR be that team.",
      },
    ],
  }),
  component: ContentSocialPage,
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
              Service · Content & Social
            </span>
          </div>

          <h1 className="mt-6 font-display text-3xl sm:text-4xl md:text-6xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Your feed <span className="italic text-cream/60">should</span>
            <br />
            be your <span className="text-gold">best salesperson.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream/75 md:text-xl">
            We build content engines that don't sleep — LinkedIn, Instagram, YouTube, podcasts,
            UGC and influencer campaigns engineered to turn <span className="text-gold font-semibold">followers into fans</span>{" "}
            and fans into revenue.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#consult"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-bold uppercase tracking-wider text-navy-deep shadow-gold transition hover:scale-[1.03]"
            >
              <Volume2 className="h-4 w-4" /> Book a strategy call
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
              { k: "12M+", v: "LinkedIn impressions generated" },
              { k: "4x", v: "Avg. engagement rate lift" },
              { k: "30d", v: "From zero to consistent output" },
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
            Never go quiet.
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================== OVERVIEW ===================== */
function Overview() {
  const pillars = [
    { icon: Megaphone, t: "Authority", d: "Position you as the go-to voice in your space on every platform." },
    { icon: Camera, t: "Volume", d: "A relentless content cadence that keeps you top-of-feed and top-of-mind." },
    { icon: Mic2, t: "Connection", d: "Content that sparks conversations and builds real community." },
    { icon: TrendingUp, t: "Conversion", d: "Social activity engineered to drive inbound, deals and opportunities." },
  ];
  return (
    <section className="relative bg-white py-20 md:py-24 xl:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-gold">01 — What it is</p>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-navy-deep md:text-5xl">
              A content engine that <span className="text-gold">never sleeps.</span>
            </h2>
          </div>
          <p className="text-base text-navy-deep/70 md:text-lg">
            Content & Social isn't sporadic posting. It's a 360° system — LinkedIn authority,
            Instagram reach, YouTube depth, podcast presence, UGC amplification and influencer
            partnerships — engineered for perpetual visibility.
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

/* ===================== SUB-SERVICES ===================== */
const subServices = [
  {
    icon: Crown,
    title: "LinkedIn Authority",
    short: "More on LinkedIn Authority.",
    details: [
      "Profile optimization & content strategy",
      "Ghostwritten posts, carousels & threads",
      "Engagement & DM conversion playbook",
      "LinkedIn newsletter setup & growth",
    ],
  },
  {
    icon: Mic2,
    title: "Podcast Production",
    short: "Get the full story on Podcast Production.",
    details: [
      "Show concept, naming & branding",
      "Episode research, scripting & guest booking",
      "Recording, editing & post-production",
      "Distribution to all major platforms",
    ],
  },
  {
    icon: Camera,
    title: "UGC & Influencer",
    short: "See how UGC & Influencer works in detail.",
    details: [
      "UGC strategy & campaign design",
      "Creator identification & outreach",
      "Content rights & licensing management",
      "Influencer program build & optimization",
    ],
  },
  {
    icon: Instagram,
    title: "Instagram & Visual Content",
    short: "Dig into Instagram & Visual Content.",
    details: [
      "Content pillars & monthly calendar",
      "Reel & short-form video production",
      "Storytelling templates & frameworks",
      "Growth & analytics tracking",
    ],
  },
  {
    icon: Youtube,
    title: "YouTube Strategy",
    short: "Read more about YouTube Strategy.",
    details: [
      "Channel strategy & content pillars",
      "Scripting, filming & editing",
      "SEO optimization & thumbnail design",
      "Community management & growth tactics",
    ],
  },
  {
    icon: Megaphone,
    title: "Always-On Content Engine",
    short: "Find out what the Always-On Content Engine can do.",
    details: [
      "Monthly shoot days (photo + video)",
      "Multi-platform content repurposing",
      "Cross-channel distribution & scheduling",
      "Weekly analytics & optimization reviews",
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
            <h2 className="mt-3 max-w-2xl font-display text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-navy-deep md:text-5xl">
              Six Channels. <span className="text-gold">One Voice That Doesn't Shut</span> Up.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-navy-deep/65">
            Content & Social isn't sporadic posting. It's a 360° system — LinkedIn authority,
            Instagram reach, YouTube depth, podcast presence, UGC amplification, and influencer
            partnerships — engineered for perpetual visibility.
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
      t: "We write in your voice, not ours.",
      d: "Every post, script and caption sounds unmistakably like you — because we study how you think, not just what you say.",
    },
    {
      n: "02",
      t: "Volume without burnout.",
      d: "We produce at scale so you never worry about 'what to post.' A consistent cadence that compounds without draining you.",
    },
    {
      n: "03",
      t: "Platform-native, always.",
      d: "We know what works on LinkedIn vs Instagram vs YouTube. Every piece of content is optimised for its platform.",
    },
    {
      n: "04",
      t: "UGC that converts.",
      d: "We don't just collect content — we engineer campaigns that generate authentic material your audience trusts.",
    },
    {
      n: "05",
      t: "Influencer partnerships that work.",
      d: "We identify creators whose audiences match your ICP and build campaigns that drive measurable ROI.",
    },
    {
      n: "06",
      t: "Weekly optimization.",
      d: "Content isn't 'set and forget.' We review performance weekly and pivot fast based on real data.",
    },
  ];
  return (
    <section className="relative overflow-hidden bg-navy-deep py-16 text-cream md:py-20 xl:py-16">
      <img src={LION_URL} aria-hidden alt="" className="pointer-events-none absolute -right-20 -top-10 w-[380px] opacity-[0.07] md:w-[520px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-gold">03 — Why The Big Mouth PR</p>
            <h2 className="mt-3 max-w-3xl font-display text-2xl sm:text-3xl md:text-5xl font-black tracking-tight md:text-5xl">
              Other agencies <span className="italic text-cream/55">post</span> and
              <br />
              pray. We <span className="text-gold">engineer</span> attention.
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
              <span className="font-display text-3xl sm:text-4xl md:text-6xl font-black text-gold/30 transition group-hover:text-gold">
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
          <h2 className="mt-3 font-display text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-navy-deep md:text-5xl">
            From first idea to <span className="text-gold">consistent roar.</span>
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
  { img: leader1 },
  { img: leader2 },
  { img: leader3 },
  { img: leader4 },
];

function Portfolio() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="portfolio" className="relative bg-[oklch(0.98_0.005_240)] py-20 md:py-24 xl:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-gold">05 — Receipts</p>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-navy-deep md:text-5xl">
              Feeds we turned <span className="text-gold">into fortunes.</span>
            </h2>
          </div>
          <div className="flex gap-3">
            <button onClick={scrollPrev} aria-label="Previous" className="grid h-10 w-10 place-items-center rounded-full border border-navy-deep/20 text-navy-deep transition hover:bg-navy-deep hover:text-white">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={scrollNext} aria-label="Next" className="grid h-10 w-10 place-items-center rounded-full border border-navy-deep/20 text-navy-deep transition hover:bg-navy-deep hover:text-white">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-5">
            {portfolioItems.map((p) => (
              <article key={p.img} className="min-w-0 shrink-0 grow-0 basis-[85%] sm:basis-[45%] lg:basis-[32%]">
                <div className="group relative overflow-hidden rounded-2xl bg-navy-deep shadow-luxe">
                  <img src={p.img} alt="Portfolio" loading="lazy" className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[400px]" />
                </div>
              </article>
            ))}
          </div>
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
          Tired of shouting into the algorithmic void?
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
    q: "Who is Content & Social for?",
    a: "CEOs, founders, investors, authors and experts who want to build authority at scale through consistent, high-quality content across every platform.",
  },
  {
    q: "How much time do I need to invest?",
    a: "As little as 30 minutes per week. We handle production, distribution and optimization — you provide the insights and approve the output.",
  },
  {
    q: "What platforms do you cover?",
    a: "LinkedIn, Instagram, YouTube, X (Twitter), TikTok, podcasts and newsletters. We focus on the platforms that matter most to your audience.",
  },
  {
    q: "How is this different from a content agency?",
    a: "Most agencies batch generic content. We build a custom voice, study your industry and engineer each piece for specific business outcomes.",
  },
  {
    q: "Do you work with existing content teams?",
    a: "Yes. We can augment your in-house team, take over specific channels or build your entire content function from scratch.",
  },
  {
    q: "What's the investment?",
    a: "Content & Social engagements start in the low five-figures per month. We'll scope and price transparently after the discovery call.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative bg-white py-20 md:py-24 xl:py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-gold">06 — Questions</p>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-navy-deep md:text-5xl">
            Direct answers to <span className="text-gold">algorithm questions.</span>
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
          name: (fd.get("name") || fd.get("fullname")) as string,
          email: (fd.get("email")) as string,
          company: (fd.get("company")) as string,
          role: (fd.get("role")) as string,
          phone: (fd.get("phone") as string) || "",
          service: "Strategy Call",
          message: (fd.get("goal") as string) || "Strategy call request",
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
          <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-gold">07 — Let's roar</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-6xl font-black leading-[0.95] tracking-tight md:text-6xl">
            Your industry already <span className="text-gold">talks.</span>
            <br />
            Time it talked about <em>you.</em>
          </h2>
          <p className="mt-6 max-w-md text-cream/75">
            Drop your details. A senior strategist (not a chatbot) replies within 24 hours with a
            tailored game plan.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.25em] text-cream/55">
            <DotMark /> No spam · No interns · No whispers
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
              <p className="font-display text-2xl font-bold">Book your strategy call</p>
              <p className="mt-1 text-sm text-cream/65">Takes 45 seconds.</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <Field label="Full name" name="name" placeholder="Jane Roar" />
                <Field label="Work email" name="email" type="email" placeholder="jane@company.com" />
                <Field label="Phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" />
                <Field label="Company" name="company" placeholder="Atlas Ventures" />
                <Field label="Role" name="role" placeholder="CEO / Founder" />
              </div>
              <div className="mt-4">
                <label className="text-[11px] font-bold uppercase tracking-[0.25em] text-cream/60">
                  What do you want to be known for?
                </label>
                <textarea
                  name="goal"
                  rows={4}
                  placeholder="The category I want to own…"
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
                {sending ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</> : <><Volume2 className="h-4 w-4" /> Make me unmissable</>}
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
        onInput={type === "tel" ? (e) => { (e.target as HTMLInputElement).value = (e.target as HTMLInputElement).value.replace(/[^\d+]/g, ""); } : undefined}
        className="mt-2 w-full rounded-xl border border-cream/15 bg-navy-deep/40 px-4 py-3 text-sm text-cream placeholder:text-cream/45 focus:border-gold focus:outline-none"
      />
    </div>
  );
}

/* ===================== PAGE ===================== */
function ContentSocialPage() {
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
