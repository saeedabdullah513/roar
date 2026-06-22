import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { d as useLocation, O as Outlet, L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteHeader, C as ClientsRibbon, F as Footer, a as FloatingCTA, L as LionInteractions, i as iconUrl, D as DotMark, s as svcExec, b as svcMedia, c as svcContent, d as svcCreative, e as svcAuthor, f as svcDigital, M as MouthMark } from "./router-DK8nnAzI.mjs";
import { f as fetchIpGeolocation, s as submitContactForm } from "./ip-geolocation-gNgA0KWH.mjs";
import { l as lionUrl } from "./lion-roar-IYwTvOU2.mjs";
import "../_libs/seroval.mjs";
import { V as Volume2, A as ArrowRight, d as Check, a as Crown, N as Newspaper, M as Megaphone, b as Camera, B as BookOpen, E as Earth, S as Sparkles, e as Minus, P as Plus, L as LoaderCircle } from "../_libs/lucide-react.mjs";
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
import "./server-BvkzZUct.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/zod.mjs";
const LION_URL = lionUrl;
const ICON_URL = iconUrl;
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-navy-deep pt-20 text-cream md:pt-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 bg-icon-pattern", style: {
      "--icon-url": `url(${ICON_URL})`
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.1fr_1fr] lg:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.4em] text-cream/60 hover:text-gold", children: "← Back to Home" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 inline-flex items-center gap-3 rounded-full border border-cream/15 bg-cream/5 px-4 py-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DotMark, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold uppercase tracking-[0.35em] text-cream/75", children: "Our Services" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 font-display text-5xl font-black leading-[0.95] tracking-tight md:text-7xl", children: [
          "Stand Out with Our ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "Loud" }),
          " Services"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 max-w-xl text-lg text-cream/75 md:text-xl", children: [
          "If you want to stand out from the crowd, you need a solid team backing you up. Most agencies hand you off between specialists. We don't. One studio.",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold font-semibold", children: "Every touchpoint." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#consult", className: "inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-bold uppercase tracking-wider text-navy-deep shadow-gold transition hover:scale-[1.03]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "h-4 w-4" }),
            " Book a free strategy call"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#process", className: "inline-flex items-center gap-2 rounded-full border border-cream/25 px-7 py-4 text-sm font-bold uppercase tracking-wider text-cream hover:border-gold hover:text-gold", children: [
            "See how we work ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-10 rounded-full bg-gold/20 blur-3xl", "aria-hidden": true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: LION_URL, alt: "Roaring lion — The Big Mouth PR", className: "relative mx-auto w-full max-w-[280px] animate-lion-roar drop-shadow-[0_30px_60px_rgba(253,95,8,0.35)] sm:max-w-[400px] lg:max-w-[520px]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-cream px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-navy-deep shadow-luxe", children: "Make some noise." })
      ] })
    ] })
  ] });
}
function WhyMatters() {
  const points = [{
    t: "One strategy across branding, media, content, and reputation"
  }, {
    t: "A dedicated team that knows your story across every channel"
  }, {
    t: "Services you can mix, match, or scale as you grow"
  }, {
    t: "Real specialists in-house, not outsourced freelancers"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative bg-white py-20 md:py-24 xl:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-end gap-10 lg:grid-cols-[1.2fr_1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-bold uppercase tracking-[0.4em] text-gold", children: "01 — The problem" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-4xl font-black tracking-tight text-navy-deep md:text-5xl", children: [
          "Scattered Efforts Get ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "Scattered" }),
          " Results."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-navy-deep/70 md:text-lg", children: "The Big Mouth PR brings every piece of your public presence under one roof, working from one strategy, telling one story. We are the team that makes sure every channel says the same loud, true thing about you." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4", children: points.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 rounded-2xl border border-navy-deep/10 bg-white p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold text-navy-deep", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-navy-deep", children: p.t })
    ] }, p.t)) })
  ] }) });
}
const servicePillars = [{
  icon: Crown,
  title: "Executive & Personal Branding",
  items: ["Branding", "Personal Branding", "Executive Leadership Branding", "Leadership Brand Strategy", "Personal Strategy Consultation", "Visual Identity", "Speaker Kit and Keynote Design", "LinkedIn Content Creation", "Thought Leadership Articles", "Online Reputation Management"],
  slug: "executive-personal-branding",
  img: svcExec
}, {
  icon: Newspaper,
  title: "Reputation & Media",
  items: ["Public Affairs", "Community Affairs", "Crisis Communication", "Press Release Distribution", "Wikipedia Profile Creation", "Wikitia Profile Creation", "Wikipedia/Wikitia Link Insertions", "Times Square, New York Screen Display", "Kirkus Reviews", "Online Reputation Management", "Influencer Marketing"],
  slug: "reputation-media",
  img: svcMedia
}, {
  icon: Megaphone,
  title: "Content & Social",
  items: ["Content Creation", "Social Media", "LinkedIn Content Creation", "Thought Leadership Articles", "UGC", "Podcast", "Content Translation Services", "Influencer Marketing"],
  slug: "content-social",
  img: svcContent
}, {
  icon: Camera,
  title: "Creative Production",
  items: ["Print Design", "Photography", "Videography", "Speaker Kit and Keynote Design", "Custom Merchandise", "Visual Identity", "Podcast", "Audiobook Production", "AI Audiobook Creation"],
  slug: "creative-production",
  img: svcCreative
}, {
  icon: BookOpen,
  title: "Author & Publishing",
  items: ["Audiobook Production", "AI Audiobook Creation", "US Copyright Registration", "ISBN Registration, including Author/Publisher Imprint", "Distribution to 700+ Digital Platforms", "Content Translation Services", "Press Release Distribution", "Book Fair Participation", "Book Signing Events", "Kirkus Reviews", "Wikipedia Profile Creation", "Wikitia Profile Creation", "Times Square, New York Screen Display"],
  slug: "author-publishing",
  img: svcAuthor
}, {
  icon: Earth,
  title: "Digital & Public Affairs",
  items: ["Digital Marketing", "Web Design", "Media Buying", "Public Affairs", "Community Affairs", "Crisis Communication", "Online Reputation Management", "Social Media", "Influencer Marketing"],
  slug: "digital-public-affairs",
  img: svcDigital
}, {
  icon: Sparkles,
  title: "Events & Experiential Marketing",
  items: ["Experiential Marketing", "Book Fair Participation", "Book Signing Events", "Times Square, New York Screen Display", "Photography", "Videography", "Custom Merchandise"],
  slug: "events-experiential-marketing",
  img: svcCreative
}];
function ServicePillars() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "services", className: "relative bg-[oklch(0.98_0.005_240)] py-20 md:py-24 xl:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-bold uppercase tracking-[0.4em] text-gold", children: "02 — Everything for Those That Want to Be on Top" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-4xl font-black tracking-tight text-navy-deep md:text-5xl", children: [
        "Multiple Services. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "Roar Louder. Soar Higher." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base text-navy-deep/70 md:text-lg", children: "Pick where you need the loudest push, and we will show you exactly how we get you there." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: servicePillars.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: `/services/${s.slug}`, className: "group relative overflow-hidden rounded-2xl bg-navy-deep shadow-luxe transition hover:-translate-y-1 hover:shadow-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.img, alt: "", "aria-hidden": true, loading: "lazy", className: "absolute inset-0 h-full w-full object-cover opacity-30 transition duration-700 group-hover:scale-105 group-hover:opacity-20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/80 to-navy-deep/60" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-6 text-cream md:p-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold md:text-2xl", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-3 space-y-1.5", children: [
          s.items.slice(0, 5).map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm text-cream/70", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-gold" }),
            item
          ] }, item)),
          s.items.length > 5 && /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-sm text-gold/80", children: [
            "+",
            s.items.length - 5,
            " more"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gold group-hover:underline", children: [
          "Explore ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
        ] })
      ] })
    ] }, s.title)) })
  ] }) });
}
function WhyLoud() {
  const reasons = [{
    t: "Consistency Beats Cleverness",
    d: "A single great post does little. The same voice, the same look, and the same message showing up again and again is what people start to recognize and trust."
  }, {
    t: "Your Story Has to Be Yours",
    d: "Generic positioning gets generic results. We dig into what actually makes you different and build the strategy around that, not a template."
  }, {
    t: "Visibility Without Credibility Falls Flat",
    d: "Being seen is only half the job. Wikipedia profiles, press features, and third-party validation are what turn attention into trust."
  }, {
    t: "Every Asset Should Work Twice",
    d: "A single photoshoot becomes headshots, LinkedIn banners, press kit images, and website visuals. We plan production so nothing gets used once and forgotten."
  }, {
    t: "Reputation Management Is Not Just Damage Control",
    d: "Most people think reviews and reputation tools are for fixing problems. The smartest leaders use them to build a strong foundation before any problem shows up."
  }, {
    t: "Your Brand Should Travel With You",
    d: "Whether you are speaking at a conference, launching a book, or being interviewed for the news, your brand should hold up everywhere your name appears."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-navy-deep py-20 text-cream md:py-24 xl:py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: LION_URL, "aria-hidden": true, alt: "", className: "pointer-events-none absolute -right-20 -top-10 w-[380px] opacity-[0.07] md:w-[520px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-start justify-between gap-6 md:flex-row md:items-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-bold uppercase tracking-[0.4em] text-gold", children: "03 — Why a Loud Team Works" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 max-w-3xl font-display text-4xl font-black tracking-tight md:text-5xl", children: [
          "Instead of Agencies ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-cream/55", children: "that Whisper" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-base text-cream/70 md:text-lg", children: "A lot of what passes for personal branding is just a nice photo and a bio nobody reads. Real brand-building is different. It is layered, intentional, and built to compound. Here is what we focus on that most people overlook." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-px overflow-hidden rounded-2xl border border-cream/10 bg-cream/10 md:grid-cols-2 lg:grid-cols-3", children: reasons.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative bg-navy-deep p-8 transition hover:bg-navy", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl font-bold text-cream", children: r.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-cream/65", children: r.d })
      ] }, r.t)) })
    ] })
  ] });
}
const faqs = [{
  q: "Do I have to use every service, or can I pick just one?",
  a: "Pick whatever you need. Some clients start with a single service like LinkedIn content or a Wikipedia profile. Others want the full personal brand build. Both work."
}, {
  q: "How do you decide which services I actually need?",
  a: "That is what the free strategy call is for. We listen to where you are, where you want to go, and recommend exactly what gets you there. No upsells for the sake of it."
}, {
  q: "Can these services work together as one campaign?",
  a: "That is the whole point. Branding, media, content, and creative production are designed to support each other. One story, told everywhere, by one team."
}, {
  q: "How long before I see results?",
  a: "Most clients see meaningful presence within 60 to 90 days. Bigger projects like Wikipedia profiles or audiobooks take longer because they are built to last."
}, {
  q: "Do you work with individuals or only companies?",
  a: "Both. Founders, executives, authors, and professionals come to us directly. Companies bring us in for leadership teams, too."
}, {
  q: "What happens after the free strategy call?",
  a: "You walk away with a clear 90-day roadmap either way. If it makes sense to work together, we get started. If not, you still leave with a plan."
}];
function FAQ() {
  const [open, setOpen] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "faq", className: "relative bg-white py-20 md:py-24 xl:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.4fr]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-bold uppercase tracking-[0.4em] text-gold", children: "04 — Questions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-4xl font-black tracking-tight text-navy-deep md:text-5xl", children: [
        "Loud Questions.",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "Even Louder" }),
        " Answers."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-sm text-navy-deep/65", children: "Didn't find what you needed? Ask us directly — we reply within one business day." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#consult", className: "mt-6 inline-flex items-center gap-2 rounded-full border border-navy-deep/20 px-5 py-3 text-xs font-bold uppercase tracking-wider text-navy-deep hover:border-gold hover:text-gold", children: [
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
function Consult() {
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [sending, setSending] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const handleConsultSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      const fd = new FormData(e.currentTarget);
      const geo = await fetchIpGeolocation();
      await submitContactForm({
        data: {
          name: fd.get("name") || fd.get("fullname"),
          email: fd.get("email"),
          company: fd.get("company"),
          role: fd.get("role"),
          phone: "",
          service: "Services Inquiry",
          message: fd.get("goal") || "Services inquiry",
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "consult", className: "relative overflow-hidden bg-navy-deep py-20 text-cream md:py-24 xl:py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 bg-icon-pattern-lg", style: {
      "--icon-url": `url(${ICON_URL})`
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: LION_URL, "aria-hidden": true, alt: "", className: "pointer-events-none absolute -left-16 bottom-0 w-[320px] opacity-20 md:w-[440px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1fr_1.1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-bold uppercase tracking-[0.4em] text-gold", children: "05 — Let's talk" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-5xl font-black leading-[0.95] tracking-tight md:text-6xl", children: [
          "Ready to Make Every Channel",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Say the Same ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "Loud" }),
          " Thing?"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-md text-cream/75", children: "Fill out your details, grab your free strategy call, and find out exactly which services turn your story into the one everyone is talking about." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.25em] text-cream/55", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DotMark, {}),
          " No spam · No interns · No upsells"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: handleConsultSubmit, className: "rounded-3xl border border-cream/10 bg-cream/[0.04] p-7 shadow-luxe backdrop-blur md:p-9", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MouthMark, { className: "mx-auto h-14 w-14 text-gold" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 font-display text-3xl font-black", children: "Roar received." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-cream/70", children: "We'll be in your inbox within one business day with next steps." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-bold", children: "Book your free strategy call" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-cream/65", children: "Takes 45 seconds." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-4 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full name", name: "name", placeholder: "Jane Roar" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Work email", name: "email", type: "email", placeholder: "jane@company.com" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Company", name: "company", placeholder: "Atlas Ventures" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Role", name: "role", placeholder: "CEO / Founder" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[11px] font-bold uppercase tracking-[0.25em] text-cream/60", children: "What service are you most interested in?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "goal", rows: 4, placeholder: "Executive branding, reputation, content, creative production, publishing, digital…", className: "mt-2 w-full rounded-xl border border-cream/15 bg-navy-deep/40 px-4 py-3 text-sm text-cream placeholder:text-cream/45 focus:border-gold focus:outline-none" })
        ] }),
        error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 rounded-xl bg-red-500/20 px-4 py-3 text-sm text-red-200", children: error }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: sending, className: "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-bold uppercase tracking-wider text-navy-deep shadow-gold transition hover:scale-[1.02] disabled:opacity-60", children: sending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
          " Sending..."
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "h-4 w-4" }),
          " Book my free call"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-center text-[11px] text-cream/50", children: "By submitting, you agree to a follow-up from The Big Mouth PR team." })
      ] }) })
    ] })
  ] });
}
function Field({
  label,
  name,
  type = "text",
  placeholder
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[11px] font-bold uppercase tracking-[0.25em] text-cream/60", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name, type, required: true, placeholder, className: "mt-2 w-full rounded-xl border border-cream/15 bg-navy-deep/40 px-4 py-3 text-sm text-cream placeholder:text-cream/45 focus:border-gold focus:outline-none" })
  ] });
}
function ServicesPage() {
  const location = useLocation();
  if (location.pathname !== "/services") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {});
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "lion-cursor bg-white text-navy-deep", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhyMatters, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServicePillars, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhyLoud, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Consult, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ClientsRibbon, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingCTA, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LionInteractions, {})
  ] });
}
export {
  ServicesPage as component
};
