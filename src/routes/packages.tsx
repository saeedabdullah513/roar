import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Check,
  Crown,
  Flame,
  Sparkles,
  ArrowRight,
  Phone,
  Mail,
  X,
  Plus,
  Minus,
  Star,
  ShieldCheck,
  Volume2,
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
import lionChildUrl from "@/assets/lion-child-image.png";
import iconUrl from "@/assets/favicon.png";

const LION_URL = lionUrl;
const ICON_URL = iconUrl;

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Roar Packages — The Big Mouth PR" },
      {
        name: "description",
        content:
          "Cub Roar, Lion Roar and Pride Roar — three PR & branding packages built to grow your voice. Limited-time 37% off starting prices.",
      },
      { property: "og:title", content: "Roar Packages — The Big Mouth PR" },
      {
        property: "og:description",
        content:
          "Pick your roar: Cub, Lion or Pride. Foundation visibility to premium influence — branding, PR, content and reputation.",
      },
    ],
  }),
  component: PackagesPage,
});

type Pkg = {
  id: "cub" | "lion" | "pride";
  name: string;
  tagline: string;
  purpose: string;
  bestFor: string;
  original: string;
  price: string;
  priceNote: string;
  icon: typeof Flame;
  accent: string;
  ring: string;
  badge?: string;
  highlights: string[];
  audience: { title: string; copy: string }[];
  outcome: string;
};

const packages: Pkg[] = [
  {
    id: "cub",
    name: "Cub Roar",
    tagline: "Foundation Visibility Package",
    purpose: "The brand foundation package. Clarify who you are, how you appear online and how your audience remembers you.",
    bestFor: "Emerging entrepreneurs, consultants, coaches, first-time authors, creators, small business owners and early-stage executives.",
    original: "$7,937",
    price: "$5,000",
    priceNote: "Starting from",
    icon: Flame,
    accent: "text-bm-blue",
    ring: "ring-bm-blue/30",
    highlights: [
      "Personal Strategy Consultation", "Brand Identity — logo, brand guide, stationery",
      "Tone of voice & brand plan", "Personal Branding & Visual Identity",
      "Leadership Brand Strategy", "LinkedIn & Social Media Content",
      "UGC + Photography", "Basic landing / personal brand page",
      "Online Reputation Management (reviews)", "Press Release Distribution — starter",
      "Wikitia Profile Creation", "Print Design — basic brand materials",
    ],
    audience: [
      { title: "Personal & Executive Branding", copy: "Upgrade your LinkedIn, bio, website and public image with a polished first impression." },
      { title: "Author Branding & PR", copy: "Launch or reposition a book platform with credible digital assets and a starter press release." },
      { title: "Small Business & Startup", copy: "Brand identity, social content, website and reputation support before you scale." },
    ],
    outcome: "A sharper brand identity, stronger LinkedIn positioning and a basic visibility system that makes you look credible and ready for growth.",
  },
  {
    id: "lion",
    name: "Lion Roar",
    tagline: "Authority Growth Package",
    purpose: "For clients who already have something worth amplifying. Build authority through executive branding, thought leadership, media and reputation.",
    bestFor: "C-level executives, established entrepreneurs, published authors, speakers and growing corporate brands in fintech, healthcare, hospitality, real estate and tech.",
    original: "$23,810",
    price: "$15,000",
    priceNote: "Starting from",
    icon: Crown,
    accent: "text-gold",
    ring: "ring-gold/50",
    badge: "Most Popular",
    highlights: [
      "Everything in Cub Roar", "Executive Leadership Branding",
      "Thought Leadership Articles", "Speaker Kit & Keynote Design",
      "Full LinkedIn & Social Strategy", "Influencer Marketing",
      "Digital Marketing + Media Buying", "Public & Community Affairs",
      "Videography + Podcast", "Crisis Communication (light–moderate)",
      "Full website / executive platform", "Press Release — expanded campaign",
      "Wikipedia (where eligible) + Wikitia", "Wikipedia / Wikitia link insertions",
      "Content Translation Services", "Book Signing Events & Book Fairs",
    ],
    audience: [
      { title: "Personal & Executive Branding", copy: "CEOs, founders, speakers and consultants who want recognised authority across LinkedIn, media and stage." },
      { title: "Author Branding & PR", copy: "A full author platform: press, interviews, events, thought leadership, website and review-building." },
      { title: "Corporate Sector", copy: "Fintech, healthcare, hospitality, tech, FMCG and real estate brands ready for stronger storytelling and exposure." },
    ],
    outcome: "A stronger public presence, improved executive authority and a clear path to becoming a recognisable voice in your industry.",
  },
  {
    id: "pride",
    name: "Pride Roar",
    tagline: "Premium Influence & Legacy Package",
    purpose: "The full-scale influence package. Personal brand, corporate PR, media campaigns, publishing, reputation, public affairs and high-visibility placements — one premium ecosystem.",
    bestFor: "High-net-worth individuals, public figures, bestselling authors, established C-suite, luxury and national brands, and political or public affairs personalities.",
    original: "Bespoke",
    price: "Call for Price",
    priceNote: "Tailored engagement",
    icon: Sparkles,
    accent: "text-gold",
    ring: "ring-gold/40",
    highlights: [
      "Everything in Cub & Lion Roar", "Premium Personal & Executive Branding",
      "Full Visual Identity + Full Web Design", "Full Digital Marketing + Media Buying",
      "Public Affairs & Community Affairs", "Experiential & Influencer Marketing",
      "Crisis Communication", "Advanced Online Reputation Management",
      "UGC Campaigns + Photography + Videography", "Podcast Strategy & Production",
      "Speaker Kit & Keynote Design", "Custom Merchandise + Print Design",
      "Press Release — premium campaign", "Wikipedia (where eligible) + Wikitia + Link Insertions",
      "Times Square, 2626 E 82nd St Ste#230, Bloomington, MN 55425 Screen Display", "Kirkus Reviews",
      "Audiobook + AI Audiobook Production", "US Copyright + ISBN Registration",
      "Distribution to 700+ Digital Platforms", "Content Translation Services",
      "Book Fairs & Book Signing Events",
    ],
    audience: [
      { title: "Personal & Executive Branding", copy: "A complete authority platform for high-profile leaders, investors and public speakers." },
      { title: "Author Branding & PR", copy: "Premium book ecosystem: audiobook, ISBN, copyright, distribution, Kirkus, fairs, signings and press." },
      { title: "Corporate Sector", copy: "Full-scale PR for established brands — visibility, crisis, media buying, influencer and reputation." },
    ],
    outcome: "A complete visibility ecosystem. Polished. Authoritative. Trusted across media, customers, investors and stages.",
  },
];

const featureMatrix: { group: string; rows: { label: string; cub: string | boolean; lion: string | boolean; pride: string | boolean }[] }[] = [
  {
    group: "Strategy & Branding",
    rows: [
      { label: "Personal Strategy Consultation", cub: true, lion: true, pride: true },
      { label: "Brand Identity (logo, guide, stationery)", cub: true, lion: true, pride: "Premium" },
      { label: "Tone of voice & brand plan", cub: true, lion: true, pride: true },
      { label: "Personal Branding", cub: true, lion: true, pride: "Premium" },
      { label: "Executive Leadership Branding", cub: false, lion: true, pride: "Premium" },
      { label: "Leadership Brand Strategy", cub: true, lion: true, pride: true },
      { label: "Visual Identity", cub: "Basic", lion: true, pride: "Full" },
    ],
  },
  {
    group: "Content, Social & Media",
    rows: [
      { label: "LinkedIn Content Creation", cub: true, lion: true, pride: true },
      { label: "Social Media", cub: true, lion: true, pride: "Full strategy" },
      { label: "Thought Leadership Articles", cub: false, lion: true, pride: true },
      { label: "Speaker Kit & Keynote Design", cub: false, lion: true, pride: true },
      { label: "UGC", cub: true, lion: true, pride: "Campaigns" },
      { label: "Photography", cub: true, lion: true, pride: true },
      { label: "Videography", cub: false, lion: true, pride: true },
      { label: "Podcast", cub: false, lion: true, pride: "Strategy + Production" },
      { label: "Influencer Marketing", cub: false, lion: true, pride: true },
    ],
  },
  {
    group: "Digital, PR & Reputation",
    rows: [
      { label: "Web Design", cub: "Basic page", lion: "Full website", pride: "Full" },
      { label: "Digital Marketing", cub: false, lion: true, pride: "Full" },
      { label: "Media Buying", cub: false, lion: true, pride: true },
      { label: "Public Affairs", cub: false, lion: true, pride: true },
      { label: "Community Affairs", cub: false, lion: true, pride: true },
      { label: "Experiential Marketing", cub: false, lion: false, pride: true },
      { label: "Crisis Communication", cub: false, lion: "Light–moderate", pride: "Full" },
      { label: "Online Reputation Management", cub: true, lion: true, pride: "Advanced" },
      { label: "Press Release Distribution", cub: "Starter", lion: "Expanded", pride: "Premium" },
    ],
  },
  {
    group: "Publishing & Author Services",
    rows: [
      { label: "Wikipedia Profile (where eligible)", cub: false, lion: true, pride: true },
      { label: "Wikitia Profile Creation", cub: true, lion: true, pride: true },
      { label: "Wikipedia/Wikitia Link Insertions", cub: false, lion: true, pride: true },
      { label: "Content Translation Services", cub: false, lion: true, pride: true },
      { label: "Book Signing Events", cub: false, lion: true, pride: true },
      { label: "Book Fair Participation", cub: false, lion: true, pride: true },
      { label: "Kirkus Reviews", cub: false, lion: false, pride: true },
      { label: "Audiobook + AI Audiobook", cub: false, lion: false, pride: true },
      { label: "US Copyright Registration", cub: false, lion: false, pride: true },
      { label: "ISBN Registration (with imprint)", cub: false, lion: false, pride: true },
      { label: "Distribution to 700+ Platforms", cub: false, lion: false, pride: true },
      { label: "Times Square NYC Screen Display", cub: false, lion: false, pride: true },
      { label: "Custom Merchandise", cub: false, lion: false, pride: true },
      { label: "Print Design", cub: "Basic", lion: false, pride: true },
    ],
  },
];

/* ===================== TRUST SIGNALS ===================== */
const trustStats = [
  { n: "340%", l: "Avg. inbound growth" },
  { n: "120+", l: "Loud leaders served" },
  { n: "700+", l: "Distribution platforms" },
  { n: "4.9", l: "Client rating" },
];

const trustLogos = ["Forbes", "Bloomberg", "TEDx", "WSJ", "Fast Company", "Inc.", "Business Insider", "HBR"];

/* ===================== COMPONENTS ===================== */
function Cell({ v }: { v: string | boolean }) {
  if (v === true) return <Check className="mx-auto h-4 w-4 text-gold" aria-label="Included" />;
  if (v === false) return <X className="mx-auto h-4 w-4 text-navy-deep/20" aria-label="Not included" />;
  return (
    <span className="inline-flex items-center justify-center rounded-full bg-navy-deep/[0.04] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-navy-deep">{v}</span>
  );
}

function FeatureGroup({ group: g }: { group: (typeof featureMatrix)[number] }) {
  return (
    <>
      <tr className="bg-navy-deep/[0.04]">
        <td colSpan={4} className="px-6 py-3 text-[11px] font-black uppercase tracking-[0.25em] text-navy-deep/70">{g.group}</td>
      </tr>
      {g.rows.map((r, i) => (
        <tr key={r.label} className={i % 2 ? "bg-navy-deep/[0.015]" : ""}>
          <td className="px-6 py-3 font-medium text-navy-deep/85">{r.label}</td>
          <td className="px-4 py-3 text-center"><Cell v={r.cub} /></td>
          <td className="px-4 py-3 text-center"><Cell v={r.lion} /></td>
          <td className="px-4 py-3 text-center"><Cell v={r.pride} /></td>
        </tr>
      ))}
    </>
  );
}

/* ===================== PAGE ===================== */
function PackagesPage() {
  const [selected, setSelected] = useState<Pkg["id"]>("lion");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
          company: fd.get("company") as string || "",
          role: "",
          phone: fd.get("phone") as string || "",
          service: (fd.get("package") as string) || "Packages Inquiry",
          message: (fd.get("message") as string) || "Packages inquiry",
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
    <div className="relative min-h-screen bg-cream text-navy-deep lion-cursor">
      <LionInteractions />
      <SiteHeader />

      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden bg-navy-deep pt-32 pb-20 text-cream">
        <div aria-hidden className="absolute inset-0 bg-icon-pattern-lg" style={{ "--icon-url": `url(${ICON_URL})` } as React.CSSProperties} />
        <div className="absolute -right-24 top-20 hidden w-[460px] opacity-90 md:block">
          <img src={LION_URL} alt="" className="h-auto w-full select-none animate-lion-roar" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold/30 bg-navy/50 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-gold backdrop-blur">
            <DotMark /><span>Roar Packages</span>
          </div>
          <h1 className="font-display font-black uppercase leading-[0.9] tracking-[-0.02em] text-cream text-[clamp(2.5rem,7vw,6rem)]">
            Pick your <span className="text-gold italic">roar.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-cream/80 md:text-xl">
            Three packages. One mission — make sure the right people hear you.
            Cub builds the foundation, Lion grows the authority, Pride writes the legacy.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-gold/15 px-5 py-3 text-sm font-semibold text-gold ring-1 ring-gold/40">
            <Sparkles className="h-4 w-4" />
            Launch offer — 37% off starting prices on Cub & Lion
          </div>
        </div>
      </section>

      {/* ===================== PACKAGE CARDS ===================== */}
      <section className="relative -mt-12 pb-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-3">
          {packages.map((p) => {
            const Icon = p.icon;
            const isPride = p.id === "pride";
            return (
              <article key={p.id} className={`relative flex flex-col rounded-3xl bg-white p-8 shadow-luxe ring-1 ${p.ring} ${p.badge ? "lg:-translate-y-4 lg:scale-[1.02]" : ""}`}>
                {p.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-navy-deep shadow-gold">{p.badge}</span>
                )}

                {/* Lion illustration */}
                <div className="flex items-center justify-center mb-4">
                  {p.id === "cub" ? (
                    <img src={lionChildUrl} alt="" aria-hidden className="h-28 w-auto animate-lion-roar drop-shadow-[0_10px_30px_rgba(253,95,8,0.3)] opacity-90" />
                  ) : p.id === "pride" ? (
                    <div className="flex items-center">
                      <img src={LION_URL} alt="" aria-hidden className="h-20 w-auto animate-lion-roar drop-shadow-[0_10px_30px_rgba(253,95,8,0.3)] opacity-90 -mr-3" />
                      <img src={LION_URL} alt="" aria-hidden className="h-24 w-auto animate-lion-roar drop-shadow-[0_10px_30px_rgba(253,95,8,0.3)] opacity-90 z-10" />
                      <img src={LION_URL} alt="" aria-hidden className="h-20 w-auto animate-lion-roar drop-shadow-[0_10px_30px_rgba(253,95,8,0.3)] opacity-90 -ml-3" />
                    </div>
                  ) : (
                    <img src={LION_URL} alt="" aria-hidden className="h-24 w-auto animate-lion-roar drop-shadow-[0_10px_30px_rgba(253,95,8,0.3)] opacity-90" />
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-deep/5 ${p.accent}`}>
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h2 className="font-display text-2xl font-black uppercase tracking-tight">{p.name}</h2>
                    <p className="text-xs font-semibold uppercase tracking-widest text-navy-deep/60">{p.tagline}</p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-navy-deep/75">{p.purpose}</p>

                <div className="mt-6 rounded-2xl bg-navy-deep/[0.04] p-5">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-navy-deep/60">{p.priceNote}</p>
                  <div className="mt-1 flex items-baseline gap-3">
                    <span className={`font-display text-2xl sm:text-3xl md:text-5xl font-black ${p.accent}`}>{p.price}</span>
                    {!isPride && <span className="text-sm font-semibold text-navy-deep/40 line-through">{p.original}</span>}
                  </div>
                  {!isPride && (
                    <span className="mt-2 inline-block rounded-full bg-gold/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold">Save 37%</span>
                  )}
                </div>

                <ul className="mt-6 space-y-2.5 text-sm">
                  {p.highlights.slice(0, 8).map((h) => (
                    <li key={h} className="flex items-start gap-2.5">
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${p.accent}`} />
                      <span className="text-navy-deep/85">{h}</span>
                    </li>
                  ))}
                  {p.highlights.length > 8 && (
                    <li className="pl-6 text-xs font-semibold uppercase tracking-wider text-navy-deep/50">+ {p.highlights.length - 8} more inclusions</li>
                  )}
                </ul>

                <div className="mt-8 flex flex-col gap-3">
                  <button
                    onClick={() => {
                      setSelected(p.id);
                      document.getElementById("roar-lead")?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold uppercase tracking-wider transition ${isPride ? "bg-navy-deep text-cream hover:bg-navy" : p.id === "lion" ? "bg-gold text-navy-deep shadow-gold hover:bg-gold-soft" : "bg-bm-blue text-white hover:bg-bm-blue/90"}`}
                  >
                    {isPride ? "Request a quote" : "Book this roar"} <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ===================== COMPARISON TABLE ===================== */}
      {false && (
      <section className="relative bg-white py-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-icon-pattern opacity-[0.03]" style={{ "--icon-url": `url(${ICON_URL})`, backgroundSize: "260px" } as React.CSSProperties} />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Compare the roars</p>
              <h2 className="mt-3 font-display text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight md:text-5xl">What's in <span className="text-gold italic">every</span> package</h2>
            </div>
            <p className="max-w-md text-sm text-navy-deep/70">A side-by-side look at scope. Final scope of work is confirmed at contract.</p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-navy-deep/10 shadow-luxe">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] text-sm">
                <thead className="bg-navy-deep text-cream">
                  <tr>
                    <th className="px-6 py-5 text-left font-display text-xs font-black uppercase tracking-[0.2em]">Inclusions</th>
                    {packages.map((p) => (
                      <th key={p.id} className="px-4 py-5 text-center font-display text-xs font-black uppercase tracking-[0.2em]">
                        <div className="flex flex-col items-center gap-1">
                          <span className={p.accent}>{p.name}</span>
                          <span className="text-[10px] font-semibold text-cream/60">{p.price}</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {featureMatrix.map((g) => <FeatureGroup key={g.group} group={g} />)}
                  <tr className="bg-navy-deep text-cream">
                    <td className="px-6 py-5 font-display text-xs font-black uppercase tracking-[0.2em]">Starting price</td>
                    {packages.map((p) => (
                      <td key={p.id} className="px-4 py-5 text-center">
                        <div className="flex flex-col items-center">
                          <span className={`font-display text-lg font-black ${p.accent}`}>{p.price}</span>
                          {p.id !== "pride" && <span className="text-[10px] text-cream/50 line-through">{p.original}</span>}
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-6 text-center text-xs italic text-navy-deep/55">
            * Services listed are indicative. The final scope of work at the time of contract shall be considered the final package.
          </p>
        </div>
      </section>
      )}
      <section className="bg-white pb-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-base font-bold text-navy-deep">
            * Services listed are indicative. The final scope of work at the time of contract shall be considered the final package.
          </p>
        </div>
      </section>

      {/* ===================== FAQ (relocated package details) ===================== */}
      <section id="packages-faq" className="bg-navy-deep py-20 text-cream md:py-24 border-t border-cream/5">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-gold"><DotMark /> Package FAQ</p>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-6xl font-black uppercase leading-[0.95] text-cream">Which roar is <span className="text-gold italic">right</span> for you?</h2>
            <p className="mt-6 text-cream/70">Detailed breakdown of who each package serves and what you can expect.</p>
          </div>
          <div className="space-y-3">
            {packages.map((p, i) => {
              const isOpen = faqOpen === i;
              return (
                <div key={p.id} className="rounded-2xl border border-cream/10 bg-cream/5 overflow-hidden transition hover:border-gold">
                  <button onClick={() => setFaqOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-6 p-7 text-left">
                    <div>
                      <span className={`text-[11px] font-bold uppercase tracking-widest ${p.accent}`}>{p.name}</span>
                      <h3 className="mt-1 font-display text-xl font-bold text-cream md:text-2xl">{p.tagline}</h3>
                    </div>
                    {isOpen ? <Minus className="h-5 w-5 shrink-0 text-gold" /> : <Plus className="h-5 w-5 shrink-0 text-cream" />}
                  </button>
                  {isOpen && (
                    <div className="px-7 pb-7 space-y-5">
                      <p className="text-base leading-relaxed text-cream/75">{p.purpose}</p>
                      <div className="rounded-xl bg-cream/10 p-4">
                        <p className="text-[11px] font-bold uppercase tracking-widest text-cream/60">Who is this package best for?</p>
                        <p className="mt-2 text-sm text-cream/80">{p.bestFor}</p>
                      </div>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-widest text-cream/60">Best audience fit</p>
                        <div className="mt-3 grid gap-3 sm:grid-cols-3">
                          {p.audience.map((a) => (
                            <div key={a.title} className="rounded-xl border border-cream/10 p-3">
                              <p className="font-display text-xs font-black uppercase tracking-wider text-cream">{a.title}</p>
                              <p className="mt-1 text-xs leading-relaxed text-cream/70">{a.copy}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="rounded-xl bg-navy-deep p-4 text-cream">
                        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold">Expected outcome</p>
                        <p className="mt-2 text-sm leading-relaxed text-cream/85">{p.outcome}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== LEAD FORM ===================== */}
      <section id="roar-lead" className="relative overflow-hidden bg-white py-20 text-navy-deep">
        <div aria-hidden className="absolute inset-0 bg-icon-pattern-lg" style={{ "--icon-url": `url(${ICON_URL})` } as React.CSSProperties} />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <MouthMark className="mb-5 h-10 w-10" />
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight md:text-5xl">Ready to <span className="text-gold italic">roar?</span></h2>
            <p className="mt-5 text-base text-navy-deep/65">Tell us which package fits and we'll come back within one business day with a scoped proposal — or jump on a discovery call.</p>
            <div className="mt-8 space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gold/10 text-gold"><Phone className="h-4 w-4" /></span>
                <span className="text-navy-deep/75">Discovery call — 30 minutes, no fluff</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gold/10 text-gold"><Mail className="h-4 w-4" /></span>
                <span className="text-navy-deep/75">Scoped proposal within 1 business day</span>
              </div>
            </div>

            {/* Trust signals inline */}
            <div className="mt-8 flex flex-wrap gap-4">
              {trustStats.map((s) => (
                <span key={s.l} className="inline-flex items-center gap-2 rounded-full bg-navy-deep/[0.04] px-3 py-1.5 text-[11px] text-navy-deep/60">
                  <span className="font-bold text-gold">{s.n}</span> {s.l}
                </span>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-3xl bg-navy-deep p-8 text-cream shadow-luxe">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                <Sparkles className="h-10 w-10 text-gold" />
                <h3 className="mt-4 font-display text-2xl font-black uppercase text-cream">Roar received</h3>
                <p className="mt-2 max-w-sm text-sm text-cream/70">We've got it. A senior strategist will be in touch within one business day.</p>
              </div>
            ) : (
              <>
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold">Start your roar</p>
                <h3 className="mt-1 font-display text-2xl font-black uppercase text-cream">Tell us about you</h3>

                {error && <p className="mt-4 rounded-xl bg-red-500/20 px-4 py-3 text-sm text-red-200">{error}</p>}

                <div className="mt-6 grid gap-4">
                  <label className="block">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-cream/60">Which package?</span>
                    <div className="mt-2 grid grid-cols-3 gap-2">
                      {packages.map((p) => (
                        <button type="button" key={p.id} onClick={() => setSelected(p.id)}
                          className={`rounded-xl border px-3 py-2 text-xs font-bold uppercase tracking-wider transition ${selected === p.id ? "border-gold bg-gold text-navy-deep" : "border-cream/15 bg-cream/5 text-cream/70 hover:border-cream/40"}`}>
                          {p.name}
                        </button>
                      ))}
                    </div>
                    <input type="hidden" name="package" value={selected} />
                  </label>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-cream/60">Full name</span>
                      <input required name="name" type="text" className="mt-1.5 w-full rounded-xl border border-cream/15 bg-white px-3 py-2.5 text-sm text-navy-deep outline-none focus:border-gold" />
                    </label>
                    <label className="block">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-cream/60">Company</span>
                      <input name="company" type="text" className="mt-1.5 w-full rounded-xl border border-cream/15 bg-white px-3 py-2.5 text-sm text-navy-deep outline-none focus:border-gold" />
                    </label>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-cream/60">Email</span>
                      <input required name="email" type="email" className="mt-1.5 w-full rounded-xl border border-cream/15 bg-white px-3 py-2.5 text-sm text-navy-deep outline-none focus:border-gold" />
                    </label>
                    <label className="block">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-cream/60">Phone</span>
                      <input name="phone" type="tel" className="mt-1.5 w-full rounded-xl border border-cream/15 bg-white px-3 py-2.5 text-sm text-navy-deep outline-none focus:border-gold" />
                    </label>
                  </div>
                  <label className="block">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-cream/60">What do you want the world to hear?</span>
                    <textarea name="message" rows={4} className="mt-1.5 w-full rounded-xl border border-cream/15 bg-white px-3 py-2.5 text-sm text-navy-deep outline-none focus:border-gold" />
                  </label>
                </div>

                <div className="mt-4">
                </div>

                <button type="submit" disabled={sending}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-5 py-3.5 text-sm font-bold uppercase tracking-wider text-navy-deep shadow-gold transition hover:bg-gold-soft disabled:opacity-60">
                  {sending ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</> : <>Send my roar <ArrowRight className="h-4 w-4" /></>}
                </button>
              </>
            )}
          </form>
        </div>
      </section>

      {/* ===================== CROSS-LINK CTA ===================== */}
      <section className="bg-gold py-14 text-navy-deep">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em]">Need something more specific?</p>
            <h3 className="mt-2 font-display text-3xl font-black uppercase tracking-tight md:text-4xl">Explore our service lines →</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/services/executive-personal-branding" className="rounded-full bg-navy-deep px-5 py-3 text-sm font-bold uppercase tracking-wider text-cream transition hover:bg-navy">Executive & Personal Branding</Link>
            <Link to="/about-us" className="rounded-full bg-white px-5 py-3 text-sm font-bold uppercase tracking-wider text-navy-deep transition hover:bg-cream">About The Big Mouth PR</Link>
          </div>
        </div>
      </section>

      {/* Independence Day Offer */}
      <section className="sticky bottom-0 z-50 bg-navy-deep py-4">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-gold md:text-base">
            Independence Day Offer — <span className="underline decoration-gold/50">Valid Only Till July Ends</span>
          </p>
        </div>
      </section>

      <ClientsRibbon />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
