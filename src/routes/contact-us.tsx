import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Plus,
  Minus,
  Volume2,
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquareHeart,
  Dot as DotIcon,
  Loader2,
} from "lucide-react";

import { submitContactForm } from "../lib/api/contact.functions";
import { fetchIpGeolocation } from "../lib/ip-geolocation";

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

const LION_URL = lionUrl;
const ICON_URL = iconUrl;

export const Route = createFileRoute("/contact-us")({
  head: () => ({
    meta: [
      { title: "Contact Us — The Big Mouth PR" },
      {
        name: "description",
        content:
          "Get in touch with The Big Mouth PR. Book a strategy call, reach our team, or find our studio. We reply within one business day.",
      },
      { property: "og:title", content: "Contact Us — The Big Mouth PR" },
      {
        property: "og:description",
        content:
          "Ready to make some noise? Contact The Big Mouth PR and let's build a brand the world can't ignore.",
      },
    ],
  }),
  component: ContactPage,
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
              Contact · Get In Touch
            </span>
          </div>

          <h1 className="mt-6 font-display text-3xl sm:text-4xl md:text-6xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Let's make some <span className="text-gold">noise.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream/75 md:text-xl">
            One conversation away from a brand the world can't shut up about.
            Reach out and a senior strategist replies within 24 hours.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            {[
              { icon: Phone, label: "+1 (332) 258-7873" },
              { icon: Mail, label: "sales@thebigmouthpr.com" },
              { icon: MapPin, label: "2626 E 82nd St Ste#230, Bloomington, MN 55425" },
            ].map((c) => (
              <span
                key={c.label}
                className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/5 px-4 py-2 text-sm text-cream/75"
              >
                <c.icon className="h-3.5 w-3.5 text-gold" />
                {c.label}
              </span>
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
            Start the conversation.
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================== CONTACT INFO + FORM ===================== */
function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    phone: "",
    service: "",
    message: "",
  });

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      const geo = await fetchIpGeolocation();
      await submitContactForm({ data: { ...formData, ...geo } });
      window.location.href = "/thank-you";
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          {/* LEFT: contact details */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-gold">01 — Reach us</p>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-navy-deep md:text-5xl">
              We're here. <span className="text-gold">Loud and clear.</span>
            </h2>
            <p className="mt-5 text-base text-navy-deep/70 md:text-lg">
              Whether you're ready to start or just exploring — we'd love to hear
              what you're building.
            </p>

            <div className="mt-10 space-y-6">
              {[
                {
                  icon: MessageSquareHeart,
                  label: "Book a strategy call",
                  desc: "Free 30-minute call. You leave with a custom roadmap.",
                  action: "Schedule now →",
                  href: "#form",
                },
                {
                  icon: Mail,
                  label: "Email us directly",
                  desc: "sales@thebigmouthpr.com — we reply within 24 hours.",
                  action: "Send email →",
                  href: "mailto:sales@thebigmouthpr.com",
                },
                {
                  icon: Phone,
                  label: "Call the studio",
                  desc: "+1 (332) 258-7873 — Mon–Fri, 9am–6pm EST.",
                  action: "Call now →",
                  href: "tel:+13322587873",
                },
                {
                  icon: MapPin,
                  label: "Visit us",
                  desc: "2626 E 82nd St Ste#230, Bloomington, MN 55425 City (by appointment) · Remote everywhere.",
                  action: "Get directions →",
                  href: "#",
                },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="group flex items-start gap-5 rounded-2xl border border-navy-deep/10 bg-white p-6 transition hover:border-gold hover:shadow-luxe"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <p className="font-display text-xl font-bold text-navy-deep">{c.label}</p>
                    <p className="mt-1 text-sm text-navy-deep/65">{c.desc}</p>
                    <span className="mt-2 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-gold transition group-hover:gap-2">
                      {c.action}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-1 gap-6 border-t border-navy-deep/10 pt-8 sm:grid-cols-3">
              {[
                { n: "<24h", l: "Avg. reply time" },
                { n: "120+", l: "Loud leaders" },
                { n: "4.9", l: "Client rating" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-display text-3xl font-black text-gold">{s.n}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-navy-deep/55">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: form */}
          <div id="form">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-navy-deep/10 bg-[oklch(0.98_0.005_240)] p-8 shadow-luxe md:p-10"
            >
              {submitted ? (
                <div className="py-14 text-center">
                  <MouthMark className="mx-auto h-16 w-16 text-gold" />
                  <p className="mt-6 font-display text-2xl sm:text-3xl md:text-5xl font-black text-navy-deep">Roar received.</p>
                  <p className="mt-3 text-navy-deep/70">
                    We'll be in your inbox within one business day with next steps.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", company: "", role: "", phone: "", service: "", message: "" });
                    }}
                    className="mt-8 inline-flex items-center gap-2 rounded-full border border-navy-deep/20 px-5 py-3 text-xs font-bold uppercase tracking-wider text-navy-deep hover:border-gold hover:text-gold"
                  >
                    Send another message <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              ) : (
                <>
                  <p className="font-display text-3xl font-bold text-navy-deep">Send us a message</p>
                  <p className="mt-2 text-sm text-navy-deep/65">
                    All fields required. We'll respond within one business day.
                  </p>

                  {error && (
                    <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
                  )}

                  <div className="mt-8 grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-[0.25em] text-navy-deep/60">
                        Full name
                      </label>
                      <input
                        required
                        value={formData.name}
                        onChange={update("name")}
                        placeholder="Jane Roar"
                        className="mt-2 w-full rounded-xl border border-navy-deep/15 bg-white px-4 py-3.5 text-sm text-navy-deep placeholder:text-navy-deep/35 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-[0.25em] text-navy-deep/60">
                        Work email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={update("email")}
                        placeholder="jane@company.com"
                        className="mt-2 w-full rounded-xl border border-navy-deep/15 bg-white px-4 py-3.5 text-sm text-navy-deep placeholder:text-navy-deep/35 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-[0.25em] text-navy-deep/60">
                        Company
                      </label>
                      <input
                        required
                        value={formData.company}
                        onChange={update("company")}
                        placeholder="Atlas Ventures"
                        className="mt-2 w-full rounded-xl border border-navy-deep/15 bg-white px-4 py-3.5 text-sm text-navy-deep placeholder:text-navy-deep/35 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-[0.25em] text-navy-deep/60">
                        Role
                      </label>
                      <input
                        required
                        value={formData.role}
                        onChange={update("role")}
                        placeholder="CEO / Founder"
                        className="mt-2 w-full rounded-xl border border-navy-deep/15 bg-white px-4 py-3.5 text-sm text-navy-deep placeholder:text-navy-deep/35 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                      />
                    </div>
                  </div>

                  <div className="mt-5">
                    <label className="text-[11px] font-bold uppercase tracking-[0.25em] text-navy-deep/60">
                      Phone
                    </label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onInput={(e) => {
                        const val = (e.target as HTMLInputElement).value.replace(/[^\d+]/g, "");
                        (e.target as HTMLInputElement).value = val;
                        setFormData(p => ({ ...p, phone: val }));
                      }}
                      onChange={update("phone")}
                      placeholder="+1 (555) 000-0000"
                      className="mt-2 w-full rounded-xl border border-navy-deep/15 bg-white px-4 py-3.5 text-sm text-navy-deep placeholder:text-navy-deep/35 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                    />
                  </div>

                  <div className="mt-5">
                    <label className="text-[11px] font-bold uppercase tracking-[0.25em] text-navy-deep/60">
                      What brings you here?
                    </label>
                    <select
                      required
                      value={formData.service}
                      onChange={update("service")}
                      className="mt-2 w-full rounded-xl border border-navy-deep/15 bg-white px-4 py-3.5 text-sm text-navy-deep focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                    >
                      <option value="" disabled>Select a service</option>
                      <option>Executive & Personal Branding</option>
                      <option>Reputation & Media</option>
                      <option>Content & Social</option>
                      <option>Creative Production</option>
                      <option>Author & Publishing</option>
                      <option>Digital & Public Affairs</option>
                      <option>Something else</option>
                    </select>
                  </div>

                  <div className="mt-5">
                    <label className="text-[11px] font-bold uppercase tracking-[0.25em] text-navy-deep/60">
                      Your message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={update("message")}
                      placeholder="Tell us about your goals, timeline, and what you want the world to hear…"
                      className="mt-2 w-full rounded-xl border border-navy-deep/15 bg-white px-4 py-3.5 text-sm text-navy-deep placeholder:text-navy-deep/35 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                    />
                  </div>

                  <div className="mt-5 flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      className="mt-1 h-5 w-5 rounded border-navy-deep/30 text-gold focus:ring-gold"
                    />
                    <label htmlFor="consent" className="text-xs text-navy-deep/60">
                      I agree to be contacted by The Big Mouth PR team regarding my inquiry.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-bold uppercase tracking-wider text-navy-deep shadow-gold transition hover:scale-[1.02] hover:bg-gold-soft disabled:opacity-60"
                  >
                    {sending ? (
                      <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>
                    ) : (
                      <><Volume2 className="h-4 w-4" /> Send your roar</>
                    )}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================== OFFICE / LOCATION ===================== */
function Location() {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.98_0.005_240)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-gold">02 — Studio</p>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-navy-deep md:text-5xl">
              2626 E 82nd St Ste#230, Bloomington, MN 55425 energy. <span className="text-gold">Global reach.</span>
            </h2>
          </div>
          <p className="text-base text-navy-deep/70 md:text-lg">
            Based in 2626 E 82nd St Ste#230, Bloomington, MN 55425 City with clients across three continents. We meet
            in person by appointment, work remotely every day, and show up
            everywhere that matters.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            {
              icon: MapPin,
              title: "2626 E 82nd St Ste#230, Bloomington, MN 55425 Studio",
              lines: ["228 Park Ave S", "Suite 51202", "2626 E 82nd St Ste#230, Bloomington, MN 55425, NY 10003"],
            },
            {
              icon: Clock,
              title: "Hours",
              lines: ["Mon–Fri: 9am – 6pm EST", "Sat: By appointment", "Sun: Quiet (we roar anyway)"],
            },
            {
              icon: Phone,
              title: "Quick contact",
              lines: ["+1 (332) 258-7873", "sales@thebigmouthpr.com", "Response: <24 hours"],
            },
          ].map((loc) => (
            <div
              key={loc.title}
              className="group rounded-2xl border border-navy-deep/10 bg-white p-8 transition hover:border-gold hover:shadow-luxe"
            >
              <loc.icon className="h-6 w-6 text-gold" />
              <p className="mt-4 font-display text-xl font-bold text-navy-deep">{loc.title}</p>
              <div className="mt-3 space-y-1 text-sm text-navy-deep/65">
                {loc.lines.map((l) => (
                  <p key={l}>{l}</p>
                ))}
              </div>
            </div>
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
          Ready to be impossible to ignore?
        </p>
        <a
          href="#form"
          className="inline-flex items-center gap-2 rounded-full bg-navy-deep px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-cream transition hover:scale-[1.03]"
        >
          Send a message <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

/* ===================== FAQ ===================== */
const faqs = [
  {
    q: "How quickly do you respond?",
    a: "We reply to all inquiries within one business day — usually within a few hours during working hours.",
  },
  {
    q: "Do you offer a free consultation?",
    a: "Yes. Book a free 30-minute strategy call. No pitch, no obligation — just a custom 90-day roadmap.",
  },
  {
    q: "Can I reach you outside of business hours?",
    a: "You can email anytime and we'll respond the next business day. For urgent matters, existing clients have after-hours access.",
  },
  {
    q: "Where are you located?",
    a: "Our studio is based in 2626 E 82nd St Ste#230, Bloomington, MN 55425 City (by appointment). We work with clients remotely across North America, Europe and Asia.",
  },
  {
    q: "Do you take calls from international numbers?",
    a: "Absolutely. We serve clients across three continents and are happy to schedule calls in your timezone.",
  },
  {
    q: "What happens after I submit the form?",
    a: "A senior strategist reviews your message, matches you with the right team member, and you receive a personalized reply within 24 hours.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-gold">03 — Questions</p>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-navy-deep md:text-5xl">
            Before you <span className="text-gold">reach out.</span>
          </h2>
          <p className="mt-5 text-sm text-navy-deep/65">
            Still unsure? Send us a message and we'll clear it up within a day.
          </p>
          <a
            href="#form"
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

/* ===================== FINAL CTA ===================== */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-24 text-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-icon-pattern-lg"
        style={{ "--icon-url": `url(${ICON_URL})` } as React.CSSProperties}
      />
      <img src={LION_URL} aria-hidden alt="" className="pointer-events-none absolute -left-16 bottom-0 w-[320px] opacity-20 md:w-[440px]" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <img
          src={LION_URL}
          alt=""
          aria-hidden
          className="mx-auto h-24 w-auto animate-lion-roar drop-shadow-[0_10px_30px_rgba(253,95,8,0.45)]"
        />
        <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-6xl font-black leading-[0.95] tracking-tight md:text-6xl">
          Don't be the best-kept secret.
          <br />
          <span className="text-gold">Be the noise.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-cream/75">
          One conversation. Zero pressure. A roadmap that actually works.
        </p>
        <a
          href="#form"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-gold px-9 py-5 text-base font-bold uppercase tracking-wider text-navy-deep shadow-gold transition hover:scale-[1.03]"
        >
          <Volume2 className="h-5 w-5" /> Book your strategy call
        </a>
      </div>
    </section>
  );
}

/* ===================== PAGE ===================== */
function ContactPage() {
  return (
    <main className="lion-cursor bg-white text-navy-deep">
      <SiteHeader />
      <Hero />
      <ContactSection />
      <Location />
      <CTAStrip />
      <ClientsRibbon />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingCTA />
      <LionInteractions />
    </main>
  );
}
