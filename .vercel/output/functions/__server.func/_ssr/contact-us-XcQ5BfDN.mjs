import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { f as fetchIpGeolocation, s as submitContactForm } from "./ip-geolocation-uC1XC-BX.mjs";
import { S as SiteHeader, C as ClientsRibbon, F as Footer, a as FloatingCTA, L as LionInteractions, i as iconUrl, D as DotMark, M as MouthMark } from "./router-DZHjqVn0.mjs";
import { l as lionUrl } from "./lion-roar-IYwTvOU2.mjs";
import "../_libs/seroval.mjs";
import { h as Phone, i as Mail, j as MapPin, k as MessageSquareHeart, A as ArrowRight, L as LoaderCircle, V as Volume2, l as Clock, e as Minus, P as Plus } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./server-BMzjYU4y.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/zod.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/@radix-ui/react-navigation-menu+[...].mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
const LION_URL = lionUrl;
const ICON_URL = iconUrl;
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-navy-deep pt-20 text-cream md:pt-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 bg-icon-pattern", style: {
      "--icon-url": `url(${ICON_URL})`
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.1fr_1fr] lg:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.4em] text-cream/60 hover:text-gold", children: "← Back to The Big Mouth PR" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 inline-flex items-center gap-3 rounded-full border border-cream/15 bg-cream/5 px-4 py-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DotMark, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold uppercase tracking-[0.35em] text-cream/75", children: "Contact · Get In Touch" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 font-display text-5xl font-black leading-[0.95] tracking-tight md:text-7xl", children: [
          "Let's make some ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "noise." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-lg text-cream/75 md:text-xl", children: "One conversation away from a brand the world can't shut up about. Reach out and a senior strategist replies within 24 hours." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex flex-wrap gap-4", children: [{
          icon: Phone,
          label: "+1 (332) 258-7873"
        }, {
          icon: Mail,
          label: "sales@thebigmouthpr.com"
        }, {
          icon: MapPin,
          label: "2626 E 82nd St Ste#230, Bloomington, MN 55425"
        }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/5 px-4 py-2 text-sm text-cream/75", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "h-3.5 w-3.5 text-gold" }),
          c.label
        ] }, c.label)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-10 rounded-full bg-gold/20 blur-3xl", "aria-hidden": true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: LION_URL, alt: "Roaring lion — The Big Mouth PR", className: "relative mx-auto w-full max-w-[280px] animate-lion-roar drop-shadow-[0_30px_60px_rgba(253,95,8,0.35)] sm:max-w-[400px] lg:max-w-[520px]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-cream px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-navy-deep shadow-luxe", children: "Start the conversation." })
      ] })
    ] })
  ] });
}
function ContactSection() {
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [sending, setSending] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const [formData, setFormData] = reactExports.useState({
    name: "",
    email: "",
    company: "",
    role: "",
    phone: "",
    service: "",
    message: ""
  });
  const update = (field) => (e) => setFormData((prev) => ({
    ...prev,
    [field]: e.target.value
  }));
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      const geo = await fetchIpGeolocation();
      await submitContactForm({
        data: {
          ...formData,
          ...geo
        }
      });
      window.location.href = "/thank-you";
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "relative bg-white py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-16 lg:grid-cols-[1fr_1.2fr]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-bold uppercase tracking-[0.4em] text-gold", children: "01 — Reach us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-4xl font-black tracking-tight text-navy-deep md:text-5xl", children: [
        "We're here. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "Loud and clear." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-base text-navy-deep/70 md:text-lg", children: "Whether you're ready to start or just exploring — we'd love to hear what you're building." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 space-y-6", children: [{
        icon: MessageSquareHeart,
        label: "Book a strategy call",
        desc: "Free 30-minute call. You leave with a custom roadmap.",
        action: "Schedule now →",
        href: "#form"
      }, {
        icon: Mail,
        label: "Email us directly",
        desc: "sales@thebigmouthpr.com — we reply within 24 hours.",
        action: "Send email →",
        href: "mailto:sales@thebigmouthpr.com"
      }, {
        icon: Phone,
        label: "Call the studio",
        desc: "+1 (332) 258-7873 — Mon–Fri, 9am–6pm EST.",
        action: "Call now →",
        href: "tel:+15550100420"
      }, {
        icon: MapPin,
        label: "Visit us",
        desc: "2626 E 82nd St Ste#230, Bloomington, MN 55425 City (by appointment) · Remote everywhere.",
        action: "Get directions →",
        href: "#"
      }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: c.href, className: "group flex items-start gap-5 rounded-2xl border border-navy-deep/10 bg-white p-6 transition hover:border-gold hover:shadow-luxe", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl font-bold text-navy-deep", children: c.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-navy-deep/65", children: c.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-gold transition group-hover:gap-2", children: c.action })
        ] })
      ] }, c.label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-1 gap-6 border-t border-navy-deep/10 pt-8 sm:grid-cols-3", children: [{
        n: "<24h",
        l: "Avg. reply time"
      }, {
        n: "120+",
        l: "Loud leaders"
      }, {
        n: "4.9",
        l: "Client rating"
      }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl font-black text-gold", children: s.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[11px] uppercase tracking-[0.18em] text-navy-deep/55", children: s.l })
      ] }, s.l)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "form", children: /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: handleSubmit, className: "rounded-3xl border border-navy-deep/10 bg-[oklch(0.98_0.005_240)] p-8 shadow-luxe md:p-10", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-14 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MouthMark, { className: "mx-auto h-16 w-16 text-gold" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 font-display text-4xl font-black text-navy-deep", children: "Roar received." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-navy-deep/70", children: "We'll be in your inbox within one business day with next steps." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          company: "",
          role: "",
          phone: "",
          service: "",
          message: ""
        });
      }, className: "mt-8 inline-flex items-center gap-2 rounded-full border border-navy-deep/20 px-5 py-3 text-xs font-bold uppercase tracking-wider text-navy-deep hover:border-gold hover:text-gold", children: [
        "Send another message ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl font-bold text-navy-deep", children: "Send us a message" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-navy-deep/65", children: "All fields required. We'll respond within one business day." }),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-5 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[11px] font-bold uppercase tracking-[0.25em] text-navy-deep/60", children: "Full name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, value: formData.name, onChange: update("name"), placeholder: "Jane Roar", className: "mt-2 w-full rounded-xl border border-navy-deep/15 bg-white px-4 py-3.5 text-sm text-navy-deep placeholder:text-navy-deep/35 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[11px] font-bold uppercase tracking-[0.25em] text-navy-deep/60", children: "Work email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, value: formData.email, onChange: update("email"), placeholder: "jane@company.com", className: "mt-2 w-full rounded-xl border border-navy-deep/15 bg-white px-4 py-3.5 text-sm text-navy-deep placeholder:text-navy-deep/35 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[11px] font-bold uppercase tracking-[0.25em] text-navy-deep/60", children: "Company" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, value: formData.company, onChange: update("company"), placeholder: "Atlas Ventures", className: "mt-2 w-full rounded-xl border border-navy-deep/15 bg-white px-4 py-3.5 text-sm text-navy-deep placeholder:text-navy-deep/35 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[11px] font-bold uppercase tracking-[0.25em] text-navy-deep/60", children: "Role" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, value: formData.role, onChange: update("role"), placeholder: "CEO / Founder", className: "mt-2 w-full rounded-xl border border-navy-deep/15 bg-white px-4 py-3.5 text-sm text-navy-deep placeholder:text-navy-deep/35 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[11px] font-bold uppercase tracking-[0.25em] text-navy-deep/60", children: "Phone (optional)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "tel", value: formData.phone, onChange: update("phone"), placeholder: "+1 (555) 000-0000", className: "mt-2 w-full rounded-xl border border-navy-deep/15 bg-white px-4 py-3.5 text-sm text-navy-deep placeholder:text-navy-deep/35 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[11px] font-bold uppercase tracking-[0.25em] text-navy-deep/60", children: "What brings you here?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { required: true, value: formData.service, onChange: update("service"), className: "mt-2 w-full rounded-xl border border-navy-deep/15 bg-white px-4 py-3.5 text-sm text-navy-deep focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Select a service" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Executive & Personal Branding" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Reputation & Media" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Content & Social" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Creative Production" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Author & Publishing" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Digital & Public Affairs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Something else" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[11px] font-bold uppercase tracking-[0.25em] text-navy-deep/60", children: "Your message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, rows: 4, value: formData.message, onChange: update("message"), placeholder: "Tell us about your goals, timeline, and what you want the world to hear…", className: "mt-2 w-full rounded-xl border border-navy-deep/15 bg-white px-4 py-3.5 text-sm text-navy-deep placeholder:text-navy-deep/35 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", id: "consent", required: true, className: "mt-1 h-5 w-5 rounded border-navy-deep/30 text-gold focus:ring-gold" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "consent", className: "text-xs text-navy-deep/60", children: "I agree to be contacted by The Big Mouth PR team regarding my inquiry." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: sending, className: "mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-bold uppercase tracking-wider text-navy-deep shadow-gold transition hover:scale-[1.02] hover:bg-gold-soft disabled:opacity-60", children: sending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
        " Sending..."
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "h-4 w-4" }),
        " Send your roar"
      ] }) })
    ] }) }) })
  ] }) }) });
}
function Location() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative overflow-hidden bg-[oklch(0.98_0.005_240)] py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-end gap-10 lg:grid-cols-[1.2fr_1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-bold uppercase tracking-[0.4em] text-gold", children: "02 — Studio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-4xl font-black tracking-tight text-navy-deep md:text-5xl", children: [
          "2626 E 82nd St Ste#230, Bloomington, MN 55425 energy. ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "Global reach." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-navy-deep/70 md:text-lg", children: "Based in 2626 E 82nd St Ste#230, Bloomington, MN 55425 City with clients across three continents. We meet in person by appointment, work remotely every day, and show up everywhere that matters." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-5 md:grid-cols-3", children: [{
      icon: MapPin,
      title: "2626 E 82nd St Ste#230, Bloomington, MN 55425 Studio",
      lines: ["228 Park Ave S", "Suite 51202", "2626 E 82nd St Ste#230, Bloomington, MN 55425, NY 10003"]
    }, {
      icon: Clock,
      title: "Hours",
      lines: ["Mon–Fri: 9am – 6pm EST", "Sat: By appointment", "Sun: Quiet (we roar anyway)"]
    }, {
      icon: Phone,
      title: "Quick contact",
      lines: ["+1 (332) 258-7873", "sales@thebigmouthpr.com", "Response: <24 hours"]
    }].map((loc) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group rounded-2xl border border-navy-deep/10 bg-white p-8 transition hover:border-gold hover:shadow-luxe", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(loc.icon, { className: "h-6 w-6 text-gold" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-display text-xl font-bold text-navy-deep", children: loc.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 space-y-1 text-sm text-navy-deep/65", children: loc.lines.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: l }, l)) })
    ] }, loc.title)) })
  ] }) });
}
function CTAStrip() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative overflow-hidden bg-gold py-10 text-navy-deep", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 md:flex-row", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-4 text-center font-display text-2xl font-black md:text-left md:text-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MouthMark, { className: "h-7 w-7" }),
      "Ready to be impossible to ignore?"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#form", className: "inline-flex items-center gap-2 rounded-full bg-navy-deep px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-cream transition hover:scale-[1.03]", children: [
      "Send a message ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
    ] })
  ] }) });
}
const faqs = [{
  q: "How quickly do you respond?",
  a: "We reply to all inquiries within one business day — usually within a few hours during working hours."
}, {
  q: "Do you offer a free consultation?",
  a: "Yes. Book a free 30-minute strategy call. No pitch, no obligation — just a custom 90-day roadmap."
}, {
  q: "Can I reach you outside of business hours?",
  a: "You can email anytime and we'll respond the next business day. For urgent matters, existing clients have after-hours access."
}, {
  q: "Where are you located?",
  a: "Our studio is based in 2626 E 82nd St Ste#230, Bloomington, MN 55425 City (by appointment). We work with clients remotely across North America, Europe and Asia."
}, {
  q: "Do you take calls from international numbers?",
  a: "Absolutely. We serve clients across three continents and are happy to schedule calls in your timezone."
}, {
  q: "What happens after I submit the form?",
  a: "A senior strategist reviews your message, matches you with the right team member, and you receive a personalized reply within 24 hours."
}];
function FAQ() {
  const [open, setOpen] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "faq", className: "relative bg-white py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.4fr]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-bold uppercase tracking-[0.4em] text-gold", children: "03 — Questions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-4xl font-black tracking-tight text-navy-deep md:text-5xl", children: [
        "Before you ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "reach out." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-sm text-navy-deep/65", children: "Still unsure? Send us a message and we'll clear it up within a day." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#form", className: "mt-6 inline-flex items-center gap-2 rounded-full border border-navy-deep/20 px-5 py-3 text-xs font-bold uppercase tracking-wider text-navy-deep hover:border-gold hover:text-gold", children: [
        "Ask the team ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-navy-deep/10 border-t border-b border-navy-deep/10", children: faqs.map((f, i) => {
      const isOpen = open === i;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setOpen(isOpen ? null : i), className: "flex w-full items-start justify-between gap-6 py-6 text-left", "aria-expanded": isOpen, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg font-bold text-navy-deep md:text-xl", children: f.q }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${isOpen ? "bg-gold text-navy-deep" : "bg-navy-deep/5 text-navy-deep"}`, children: isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }) })
        ] }),
        isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pb-6 pr-0 text-sm text-navy-deep/70 md:pr-12 md:text-base", children: f.a })
      ] }, f.q);
    }) })
  ] }) });
}
function FinalCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-navy-deep py-24 text-cream", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 bg-icon-pattern-lg", style: {
      "--icon-url": `url(${ICON_URL})`
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: LION_URL, "aria-hidden": true, alt: "", className: "pointer-events-none absolute -left-16 bottom-0 w-[320px] opacity-20 md:w-[440px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-3xl px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: LION_URL, alt: "", "aria-hidden": true, className: "mx-auto h-24 w-auto animate-lion-roar drop-shadow-[0_10px_30px_rgba(253,95,8,0.45)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 font-display text-5xl font-black leading-[0.95] tracking-tight md:text-6xl", children: [
        "Don't be the best-kept secret.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "Be the noise." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-md text-cream/75", children: "One conversation. Zero pressure. A roadmap that actually works." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#form", className: "mt-10 inline-flex items-center gap-3 rounded-full bg-gold px-9 py-5 text-base font-bold uppercase tracking-wider text-navy-deep shadow-gold transition hover:scale-[1.03]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "h-5 w-5" }),
        " Book your strategy call"
      ] })
    ] })
  ] });
}
function ContactPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "lion-cursor bg-white text-navy-deep", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ContactSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Location, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTAStrip, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ClientsRibbon, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FinalCTA, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingCTA, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LionInteractions, {})
  ] });
}
export {
  ContactPage as component
};
