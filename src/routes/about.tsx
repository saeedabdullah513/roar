import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
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
  Star,
  Quote,
  Target,
  Eye,
  Heart,
  Zap,
  ShieldCheck,
  Globe2,
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

import lionUrl from "@/assets/lion-roar.png";
import iconUrl from "@/assets/favicon.png";
import founderImg from "@/assets/founder.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const LION_URL = lionUrl;
const ICON_URL = iconUrl;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Big Mouth PR" },
      {
        name: "description",
        content:
          "The Big Mouth PR is a loud, fearless personal branding & PR studio for founders, executives and disruptors who refuse to be ignored.",
      },
      { property: "og:title", content: "About — The Big Mouth PR" },
      {
        property: "og:description",
        content:
          "We turn quiet leaders into category-defining voices. Learn the story behind The Big Mouth PR.",
      },
    ],
  }),
  component: AboutPage,
});

/* ===================== HERO ===================== */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-deep pt-28 text-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url(${ICON_URL})`,
          backgroundSize: "120px 120px",
          backgroundRepeat: "repeat",
        }}
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
              About · The Studio
            </span>
          </div>

          <h1 className="mt-6 font-display text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            We don't just build <span className="text-gold">brands.</span>
            <br />
            <span className="italic text-cream/60">We build</span> noise.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream/75 md:text-xl">
            A personal branding & PR studio for leaders who'd rather be talked
            about than tip-toed around. Twelve years. Three continents.{" "}
            <span className="text-gold font-semibold">One roar.</span>
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#consult"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-bold uppercase tracking-wider text-navy-deep shadow-gold transition hover:scale-[1.03]"
            >
              <Volume2 className="h-4 w-4" /> Book a strategy call
            </a>
            <a
              href="#story"
              className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-7 py-4 text-sm font-bold uppercase tracking-wider text-cream hover:border-gold hover:text-gold"
            >
              Our story <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid max-w-md grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { k: "340%", v: "Avg. inbound growth" },
              { k: "120+", v: "Leaders branded" },
              { k: "12yr", v: "Global experience" },
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
            className="relative mx-auto w-full max-w-[520px] animate-lion-roar drop-shadow-[0_30px_60px_rgba(253,95,8,0.35)]"
          />
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-cream px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-navy-deep shadow-luxe">
            Be unmissable.
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================== OUR STORY ===================== */
function Story() {
  return (
    <section id="story" className="relative bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-gold">01 — Our story</p>
            <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-navy-deep md:text-5xl">
              Born from the belief that{" "}
              <span className="text-gold">quiet is a liability.</span>
            </h2>
          </div>
          <p className="text-base text-navy-deep/70 md:text-lg">
            The Big Mouth PR wasn't born in a boardroom. It was born in newsrooms,
            green rooms, and backstage conversations where we watched brilliant
            leaders get overlooked — not because they lacked talent, but because
            they lacked a voice.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={founderImg}
              alt="The Big Mouth PR founder"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 to-transparent" />
            <p className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.25em] text-cream/80">
              <DotMark /> Our founder in the wild
            </p>
          </div>
          <div className="flex flex-col justify-center gap-6">
            <p className="text-lg leading-relaxed text-navy-deep/80">
              We've spent twelve years across three continents building brands
              that don't blend in. From Times Square billboards to TEDx stages,
              from Forbes bylines to sold-out book tours — we know what it takes
              to make a leader unmissable.
            </p>
            <p className="text-lg leading-relaxed text-navy-deep/80">
              Most agencies polish you until you're palatable. We do the opposite.
              We find the loudest, truest, most magnetic version of you — and we
              hand the world a megaphone.
            </p>
            <div className="mt-4 grid grid-cols-1 gap-6 border-t border-navy-deep/10 pt-6 sm:grid-cols-3">
              <div>
                <p className="font-display text-3xl font-bold text-navy-deep">12+</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-navy/60">Years in the arena</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-navy-deep">3</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-navy/60">Continents</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-navy-deep">700+</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-navy/60">Platforms reached</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================== MISSION & VALUES ===================== */
function Values() {
  const items = [
    {
      n: "01",
      icon: Zap,
      t: "Loud by design.",
      d: "We refuse the polite PR playbook. Every campaign is built to provoke, not to please.",
    },
    {
      n: "02",
      icon: Users,
      t: "Senior talent only.",
      d: "Your account is run by ex-newsroom, ex-agency leads — not interns reading scripts.",
    },
    {
      n: "03",
      icon: Globe2,
      t: "Global reach, local feel.",
      d: "We've operated across three continents and know how to make a story travel.",
    },
    {
      n: "04",
      icon: Target,
      t: "Data-led, gut-checked.",
      d: "We adjust narrative weekly using share-of-voice, sentiment and conversion data.",
    },
    {
      n: "05",
      icon: ShieldCheck,
      t: "Built for the long game.",
      d: "Personal brands compound. We engineer 12-month flywheels, not one-off stunts.",
    },
    {
      n: "06",
      icon: Heart,
      t: "Receipts everywhere.",
      d: "100+ leaders branded, 1,400+ placements, $80M+ in inbound pipeline created.",
    },
  ];
  return (
    <section className="relative overflow-hidden bg-navy-deep py-20 text-cream md:py-28">
      <img src={LION_URL} aria-hidden alt="" className="pointer-events-none absolute -right-20 -top-10 w-[380px] opacity-[0.07] md:w-[520px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-gold">02 — Philosophy</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl font-black tracking-tight md:text-5xl">
              What we believe.
              <br />
              <span className="italic text-cream/55">And what we won't</span>
              <span className="text-gold"> compromise.</span>
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
          {items.map((r) => {
            const Icon = r.icon;
            return (
              <div key={r.n} className="group relative bg-navy-deep p-8 transition hover:bg-navy">
                <Icon className="mb-3 h-6 w-6 text-gold" />
                <span className="font-display text-5xl font-black text-gold/30 transition group-hover:text-gold">
                  {r.n}
                </span>
                <p className="mt-4 font-display text-xl font-bold text-cream">{r.t}</p>
                <p className="mt-2 text-sm text-cream/65">{r.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ===================== PROCESS ===================== */
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
    <section id="process" className="relative bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-gold">03 — How we work</p>
          <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-navy-deep md:text-5xl">
            A nine-step system <span className="text-gold">that roars.</span>
          </h2>
          <p className="mt-5 text-base text-navy-deep/70 md:text-lg">
            Repeatable, transparent and obsessed with measurable outcomes.
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

/* ===================== TEAM ===================== */
const teamMembers = [
  {
    img: portfolio1,
    name: "Alex Rivera",
    role: "Founder & Chief Strategist",
    bio: "Ex-newsroom, ex-TEDx curator. Twelve years building category-defining brands across three continents.",
  },
  {
    img: portfolio2,
    name: "Simone Chen",
    role: "Director of Media Relations",
    bio: "Former Bloomberg journalist with a contact list that spans every major newsroom in North America.",
  },
  {
    img: portfolio3,
    name: "Marcus Okafor",
    role: "Head of Creative",
    bio: "Award-winning designer and filmmaker. His work has graced Times Square, Sundance and your FYP.",
  },
  {
    img: portfolio4,
    name: "Priya Desai",
    role: "Lead Strategist",
    bio: "Brand strategist who's built personal-brand systems for Fortune 50 CEOs and YC-backed founders alike.",
  },
];

function Team() {
  return (
    <section className="relative bg-[oklch(0.98_0.005_240)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-gold">04 — The team</p>
            <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-navy-deep md:text-5xl">
              The voices behind <span className="text-gold">the roar.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-navy-deep/65">
            Senior talent only. Every account is led by an experienced strategist — no juniors, no scripts.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((m) => (
            <article
              key={m.name}
              className="group relative overflow-hidden rounded-2xl bg-navy-deep shadow-luxe"
            >
              <img
                src={m.img}
                alt={m.name}
                loading="lazy"
                className="h-[240px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[320px] md:h-[400px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-cream">
                <DotMark />
                <p className="mt-3 font-display text-2xl font-bold">{m.name}</p>
                <p className="text-xs uppercase tracking-[0.25em] text-cream/70">{m.role}</p>
                <p className="mt-3 border-t border-cream/20 pt-3 text-sm text-cream/80">{m.bio}</p>
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
          Ready to stop being the best-kept secret in your industry?
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

/* ===================== TESTIMONIALS ===================== */
const testimonials = [
  {
    name: "Sarah Lin",
    role: "VP, BlackRock",
    quote: "I went from invisible to invited to the keynote stage. The Big Mouth PR just gets it.",
    img: portfolio1,
  },
  {
    name: "Jordan Pierce",
    role: "Tech Founder",
    quote: "They built a personal brand that closes deals while I sleep. Worth every penny.",
    img: portfolio2,
  },
  {
    name: "Priya Anand",
    role: "Author & Speaker",
    quote: "Kirkus review, audiobook, Times Square — I felt the literal noise.",
    img: portfolio3,
  },
  {
    name: "Marcus Webb",
    role: "CMO",
    quote: "Sophisticated, witty, ruthlessly strategic. The studio I tell every CEO friend about.",
    img: portfolio4,
  },
];

function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-20 text-cream md:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: `url("${ICON_URL}")`, backgroundSize: "160px", backgroundRepeat: "space" }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-gold">
              <DotMark /> Client love
            </p>
            <h2 className="mt-5 font-display text-4xl font-black uppercase leading-[0.95] text-cream md:text-5xl">
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

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <article key={t.name} className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-black shadow-luxe">
              <img src={t.img} alt={t.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60" />
              <div className="absolute inset-x-0 top-0 p-5">
                <Quote className="h-5 w-5 text-gold" />
                <p className="mt-2 font-display text-base italic leading-snug text-cream drop-shadow">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 p-5">
                <img src={t.img} alt="" className="h-10 w-10 rounded-full border-2 border-gold object-cover" />
                <div>
                  <p className="text-sm font-bold text-cream">{t.name}</p>
                  <p className="text-[11px] text-cream/70">{t.role}</p>
                </div>
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
    q: "Who is The Big Mouth PR for?",
    a: "Founders, CEOs, C-suite operators, investors, authors and category-defining experts who want their name to travel faster than their résumé.",
  },
  {
    q: "How is The Big Mouth PR different from a traditional PR firm?",
    a: "Traditional PR sends press releases and hopes. We engineer narrative, identity, content and media as one system — measured weekly, optimized continuously.",
  },
  {
    q: "Do you work with startups or only established leaders?",
    a: "Both. We've built brands for YC-backed startups and Fortune 50 executives alike. The entry point differs, but the intensity doesn't.",
  },
  {
    q: "Who will I be working with directly?",
    a: "A senior strategist with agency or newsroom experience — never an intern. You'll have a dedicated pod, not a rotating cast of juniors.",
  },
  {
    q: "What does a typical engagement cost?",
    a: "Personal branding engagements start in the low five-figures per month. We'll scope and price transparently after the discovery call.",
  },
  {
    q: "How do I get started?",
    a: "Book a free 30-minute strategy call. You'll leave with a custom 90-day roadmap whether or not we work together.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-gold">05 — Questions</p>
          <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-navy-deep md:text-5xl">
            Loud answers to <span className="text-gold">quiet doubts.</span>
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

/* ===================== CONSULT ===================== */
function Consult() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="consult" className="relative overflow-hidden bg-navy-deep py-24 text-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: `url(${ICON_URL})`, backgroundSize: "140px 140px" }}
      />
      <img src={LION_URL} aria-hidden alt="" className="pointer-events-none absolute -left-16 bottom-0 w-[320px] opacity-20 md:w-[440px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-gold">06 — Let's roar</p>
          <h2 className="mt-3 font-display text-5xl font-black leading-[0.95] tracking-tight md:text-6xl">
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
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
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
              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-bold uppercase tracking-wider text-navy-deep shadow-gold transition hover:scale-[1.02]"
              >
                <Volume2 className="h-4 w-4" /> Make me unmissable
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
function AboutPage() {
  return (
    <main className="lion-cursor bg-white text-navy-deep">
      <SiteHeader />
      <Hero />
      <Story />
      <Values />
      <Process />
      <CTAStrip />
      <Team />
      <Testimonials />
      <ClientsRibbon />
      <FAQ />
      <Consult />
      <Footer />
      <FloatingCTA />
      <LionInteractions />
    </main>
  );
}
