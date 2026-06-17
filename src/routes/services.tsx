import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Crown,
  Megaphone,
  Camera,
  BookOpen,
  Globe2,
  Sparkles,
  Check,
  Plus,
  Minus,
  Phone,
  Volume2,
  ArrowUpRight,
  Loader2,
  Newspaper,
  Mic2,
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
import svcExec from "@/assets/svc-exec.jpg";
import svcMedia from "@/assets/svc-media.jpg";
import svcContent from "@/assets/svc-content.jpg";
import svcCreative from "@/assets/svc-creative.jpg";
import svcAuthor from "@/assets/svc-author.jpg";
import svcDigital from "@/assets/svc-digital.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const LION_URL = lionUrl;
const ICON_URL = iconUrl;

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "The Big Mouth PR - Our Services" },
      {
        name: "description",
        content:
          "One studio, every megaphone. From personal branding to Wikipedia to Times Square. See the full noise we make for leaders like you.",
      },
      { property: "og:title", content: "The Big Mouth PR - Our Services" },
      {
        property: "og:description",
        content:
          "One studio, every megaphone. From personal branding to Wikipedia to Times Square. See the full noise we make for leaders like you.",
      },
    ],
  }),
  component: ServicesPage,
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
            ← Back to Home
          </Link>
          <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-cream/15 bg-cream/5 px-4 py-1.5">
            <DotMark />
            <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-cream/75">
              Our Services
            </span>
          </div>

          <h1 className="mt-6 font-display text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Stand Out with Our <span className="text-gold">Loud</span> Services
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream/75 md:text-xl">
            If you want to stand out from the crowd, you need a solid team backing you up. Most
            agencies hand you off between specialists. We don't. One studio.{" "}
            <span className="text-gold font-semibold">Every touchpoint.</span>
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#consult"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-bold uppercase tracking-wider text-navy-deep shadow-gold transition hover:scale-[1.03]"
            >
              <Volume2 className="h-4 w-4" /> Book a free strategy call
            </a>
            <a
              href="#process"
              className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-7 py-4 text-sm font-bold uppercase tracking-wider text-cream hover:border-gold hover:text-gold"
            >
              See how we work <ArrowRight className="h-4 w-4" />
            </a>
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
            Make some noise.
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================== WHY IT MATTERS ===================== */
function WhyMatters() {
  const points = [
    {
      t: "One strategy across branding, media, content, and reputation",
    },
    {
      t: "A dedicated team that knows your story across every channel",
    },
    {
      t: "Services you can mix, match, or scale as you grow",
    },
    {
      t: "Real specialists in-house, not outsourced freelancers",
    },
  ];
  return (
    <section className="relative bg-white py-20 md:py-24 xl:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-gold">01 — The problem</p>
            <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-navy-deep md:text-5xl">
              Scattered Efforts Get <span className="text-gold">Scattered</span> Results.
            </h2>
          </div>
          <p className="text-base text-navy-deep/70 md:text-lg">
            The Big Mouth PR brings every piece of your public presence under one roof, working from
            one strategy, telling one story. We are the team that makes sure every channel says the
            same loud, true thing about you.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <div
              key={p.t}
              className="flex items-start gap-4 rounded-2xl border border-navy-deep/10 bg-white p-6"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold text-navy-deep">
                <Check className="h-4 w-4" />
              </span>
              <p className="text-sm font-semibold text-navy-deep">{p.t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== SERVICE PILLARS ===================== */
const servicePillars = [
  {
    icon: Crown,
    title: "Executive & Personal Branding",
    items: [
      "Branding",
      "Personal Branding",
      "Executive Leadership Branding",
      "Leadership Brand Strategy",
      "Personal Strategy Consultation",
      "Visual Identity",
      "Speaker Kit and Keynote Design",
      "LinkedIn Content Creation",
      "Thought Leadership Articles",
      "Online Reputation Management",
    ],
    slug: "executive-personal-branding",
    img: svcExec,
  },
  {
    icon: Newspaper,
    title: "Reputation & Media",
    items: [
      "Public Affairs",
      "Community Affairs",
      "Crisis Communication",
      "Press Release Distribution",
      "Wikipedia Profile Creation",
      "Wikitia Profile Creation",
      "Wikipedia/Wikitia Link Insertions",
      "Times Square, New York Screen Display",
      "Kirkus Reviews",
      "Online Reputation Management",
      "Influencer Marketing",
    ],
    slug: "reputation-media",
    img: svcMedia,
  },
  {
    icon: Megaphone,
    title: "Content & Social",
    items: [
      "Content Creation",
      "Social Media",
      "LinkedIn Content Creation",
      "Thought Leadership Articles",
      "UGC",
      "Podcast",
      "Content Translation Services",
      "Influencer Marketing",
    ],
    slug: "content-social",
    img: svcContent,
  },
  {
    icon: Camera,
    title: "Creative Production",
    items: [
      "Print Design",
      "Photography",
      "Videography",
      "Speaker Kit and Keynote Design",
      "Custom Merchandise",
      "Visual Identity",
      "Podcast",
      "Audiobook Production",
      "AI Audiobook Creation",
    ],
    slug: "creative-production",
    img: svcCreative,
  },
  {
    icon: BookOpen,
    title: "Author & Publishing",
    items: [
      "Audiobook Production",
      "AI Audiobook Creation",
      "US Copyright Registration",
      "ISBN Registration, including Author/Publisher Imprint",
      "Distribution to 700+ Digital Platforms",
      "Content Translation Services",
      "Press Release Distribution",
      "Book Fair Participation",
      "Book Signing Events",
      "Kirkus Reviews",
      "Wikipedia Profile Creation",
      "Wikitia Profile Creation",
      "Times Square, New York Screen Display",
    ],
    slug: "author-publishing",
    img: svcAuthor,
  },
  {
    icon: Globe2,
    title: "Digital & Public Affairs",
    items: [
      "Digital Marketing",
      "Web Design",
      "Media Buying",
      "Public Affairs",
      "Community Affairs",
      "Crisis Communication",
      "Online Reputation Management",
      "Social Media",
      "Influencer Marketing",
    ],
    slug: "digital-public-affairs",
    img: svcDigital,
  },
  {
    icon: Sparkles,
    title: "Events & Experiential Marketing",
    items: [
      "Experiential Marketing",
      "Book Fair Participation",
      "Book Signing Events",
      "Times Square, New York Screen Display",
      "Photography",
      "Videography",
      "Custom Merchandise",
    ],
    slug: "events-experiential-marketing",
    img: svcCreative,
  },
];

function ServicePillars() {
  return (
    <section id="services" className="relative bg-[oklch(0.98_0.005_240)] py-20 md:py-24 xl:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-gold">
            02 — Everything for Those That Want to Be on Top
          </p>
          <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-navy-deep md:text-5xl">
            Six service pillars.{" "}
            <span className="text-gold">One unified</span> studio.
          </h2>
          <p className="mt-4 text-base text-navy-deep/70 md:text-lg">
            Pick where you need the loudest push, and we will show you exactly how we get you there.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicePillars.map((s) => (
            <Link
              key={s.title}
              to={`/services/${s.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-navy-deep shadow-luxe transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <img
                src={s.img}
                alt=""
                aria-hidden
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-30 transition duration-700 group-hover:scale-105 group-hover:opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/80 to-navy-deep/60" />
              <div className="relative p-6 text-cream md:p-7">
                <h3 className="font-display text-xl font-bold md:text-2xl">{s.title}</h3>
                <ul className="mt-3 space-y-1.5">
                  {s.items.slice(0, 5).map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-cream/70">
                      <span className="h-1 w-1 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                  {s.items.length > 5 && (
                    <li className="text-sm text-gold/80">
                      +{s.items.length - 5} more
                    </li>
                  )}
                </ul>
                <div className="mt-5 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gold group-hover:underline">
                  Explore <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== WHY A LOUD TEAM ===================== */
function WhyLoud() {
  const reasons = [
    {
      t: "Consistency Beats Cleverness",
      d: "A single great post does little. The same voice, the same look, and the same message showing up again and again is what people start to recognize and trust.",
    },
    {
      t: "Your Story Has to Be Yours",
      d: "Generic positioning gets generic results. We dig into what actually makes you different and build the strategy around that, not a template.",
    },
    {
      t: "Visibility Without Credibility Falls Flat",
      d: "Being seen is only half the job. Wikipedia profiles, press features, and third-party validation are what turn attention into trust.",
    },
    {
      t: "Every Asset Should Work Twice",
      d: "A single photoshoot becomes headshots, LinkedIn banners, press kit images, and website visuals. We plan production so nothing gets used once and forgotten.",
    },
    {
      t: "Reputation Management Is Not Just Damage Control",
      d: "Most people think reviews and reputation tools are for fixing problems. The smartest leaders use them to build a strong foundation before any problem shows up.",
    },
    {
      t: "Your Brand Should Travel With You",
      d: "Whether you are speaking at a conference, launching a book, or being interviewed for the news, your brand should hold up everywhere your name appears.",
    },
  ];
  return (
    <section className="relative overflow-hidden bg-navy-deep py-20 text-cream md:py-24 xl:py-20">
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
              03 — Why a Loud Team Works
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl font-black tracking-tight md:text-5xl">
              Instead of Agencies <span className="italic text-cream/55">that Whisper</span>
            </h2>
          </div>
        </div>

        <p className="mt-6 max-w-2xl text-base text-cream/70 md:text-lg">
          A lot of what passes for personal branding is just a nice photo and a bio nobody reads.
          Real brand-building is different. It is layered, intentional, and built to compound. Here
          is what we focus on that most people overlook.
        </p>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-cream/10 bg-cream/10 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.t} className="group relative bg-navy-deep p-8 transition hover:bg-navy">
              <p className="font-display text-xl font-bold text-cream">{r.t}</p>
              <p className="mt-3 text-sm text-cream/65">{r.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== FAQ ===================== */
const faqs = [
  {
    q: "Do I have to use every service, or can I pick just one?",
    a: "Pick whatever you need. Some clients start with a single service like LinkedIn content or a Wikipedia profile. Others want the full personal brand build. Both work.",
  },
  {
    q: "How do you decide which services I actually need?",
    a: "That is what the free strategy call is for. We listen to where you are, where you want to go, and recommend exactly what gets you there. No upsells for the sake of it.",
  },
  {
    q: "Can these services work together as one campaign?",
    a: "That is the whole point. Branding, media, content, and creative production are designed to support each other. One story, told everywhere, by one team.",
  },
  {
    q: "How long before I see results?",
    a: "Most clients see meaningful presence within 60 to 90 days. Bigger projects like Wikipedia profiles or audiobooks take longer because they are built to last.",
  },
  {
    q: "Do you work with individuals or only companies?",
    a: "Both. Founders, executives, authors, and professionals come to us directly. Companies bring us in for leadership teams, too.",
  },
  {
    q: "What happens after the free strategy call?",
    a: "You walk away with a clear 90-day roadmap either way. If it makes sense to work together, we get started. If not, you still leave with a plan.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative bg-white py-20 md:py-24 xl:py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-gold">04 — Questions</p>
          <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-navy-deep md:text-5xl">
            Loud Questions.{" "}
            <span className="text-gold">Even Louder</span> Answers.
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
                  <p className="pb-6 pr-0 text-sm text-navy-deep/70 md:pr-12 md:text-base">{f.a}</p>
                )}
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
          email: fd.get("email") as string,
          company: fd.get("company") as string,
          role: fd.get("role") as string,
          phone: "",
          service: "Services Inquiry",
          message: (fd.get("goal") as string) || "Services inquiry",
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
      <img
        src={LION_URL}
        aria-hidden
        alt=""
        className="pointer-events-none absolute -left-16 bottom-0 w-[320px] opacity-20 md:w-[440px]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-gold">05 — Let's talk</p>
          <h2 className="mt-3 font-display text-5xl font-black leading-[0.95] tracking-tight md:text-6xl">
            Ready to Make Every Channel
            <br />
            Say the Same <span className="text-gold">Loud</span> Thing?
          </h2>
          <p className="mt-6 max-w-md text-cream/75">
            Fill out your details, grab your free strategy call, and find out exactly which services
            turn your story into the one everyone is talking about.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.25em] text-cream/55">
            <DotMark /> No spam · No interns · No upsells
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
              <p className="font-display text-2xl font-bold">Book your free strategy call</p>
              <p className="mt-1 text-sm text-cream/65">Takes 45 seconds.</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <Field label="Full name" name="name" placeholder="Jane Roar" />
                <Field label="Work email" name="email" type="email" placeholder="jane@company.com" />
                <Field label="Company" name="company" placeholder="Atlas Ventures" />
                <Field label="Role" name="role" placeholder="CEO / Founder" />
              </div>
              <div className="mt-4">
                <label className="text-[11px] font-bold uppercase tracking-[0.25em] text-cream/60">
                  What service are you most interested in?
                </label>
                <textarea
                  name="goal"
                  rows={4}
                  placeholder="Executive branding, reputation, content, creative production, publishing, digital…"
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
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Volume2 className="h-4 w-4" /> Book my free call
                  </>
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
function ServicesPage() {
  const location = useLocation();
  if (location.pathname !== "/services") {
    return <Outlet />;
  }

  return (
    <main className="lion-cursor bg-white text-navy-deep">
      <SiteHeader />
      <Hero />
      <WhyMatters />
      <ServicePillars />
      <WhyLoud />
      <FAQ />
      <Consult />
      <ClientsRibbon />
      <Footer />
      <FloatingCTA />
      <LionInteractions />
    </main>
  );
}
