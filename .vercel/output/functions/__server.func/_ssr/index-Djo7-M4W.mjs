import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useEmblaCarousel } from "../_libs/embla-carousel-react.mjs";
import { p as logoUrl, N as NavigationMenu, q as NavigationMenuList, r as NavigationMenuItem, t as cn, u as NavigationMenuLink, s as svcExec, b as svcMedia, c as svcContent, d as svcCreative, e as svcAuthor, f as svcDigital, v as heroImg, i as iconUrl, g as caseTerraSquare, h as caseUsaToday, j as caseForbes, k as caseBrandBook, x as roarSfx } from "./router-CgdcjM3Q.mjs";
import { f as fetchIpGeolocation, s as submitContactForm } from "./ip-geolocation-5SFFwneA.mjs";
import { l as lionUrl } from "./lion-roar-IYwTvOU2.mjs";
import { s as storyThumbVideo, a as storyVideo } from "./the-big-mouth-pr-final-cut-BexwWvzM.mjs";
import { p as portfolio1, a as portfolio3 } from "./portfolio-3-BFHJ6BRp.mjs";
import { l as leader1, a as leader2, b as leader3, c as leader4 } from "./leader-4-vZurwnLd.mjs";
import "../_libs/seroval.mjs";
import { c as Menu, C as ChevronDown, V as Volume2, a as Crown, N as Newspaper, M as Megaphone, b as Camera, B as BookOpen, E as Earth, J as Star, L as LoaderCircle, A as ArrowRight, z as Play, X, K as ChevronLeft, O as ChevronRight, Q as UtensilsCrossed, T as TrendingUp, W as ShieldCheck, H as Heart, Y as Building2, Z as Scale, _ as MicVocal, S as Sparkles, e as Minus, P as Plus, I as Instagram, $ as Youtube } from "../_libs/lucide-react.mjs";
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
import "../_libs/embla-carousel-reactive-utils.mjs";
import "../_libs/embla-carousel.mjs";
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
import "./server-BYOzfnRa.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/zod.mjs";
const testimonial1 = "/assets/testimonia-1-baK0g8eZ.mp4";
const testimonial2 = "/assets/testimonial-2-C6cW47ov.mp4";
const testimonial3 = "/assets/testimonial-3-DETH7qkA.mp4";
const testimonial4 = "/assets/testimonial-4-DHKae4oL.mp4";
const thumb1 = "/assets/thumb-testimonial-1-CCW8iA2o.jpg";
const thumb2 = "/assets/thumb-testimonial-2-B0Uzz4Eq.jpg";
const thumb3 = "/assets/thumb-testimonial-3-Ch5LE2gT.jpg";
const thumb4 = "/assets/thumb-testimonial-4-q2LNO8X8.jpg";
const indFnb = "/assets/ind-fnb-BvEjor4e.jpg";
const indTech = "/assets/ind-tech-BZPbKI0U.jpg";
const indFinance = "/assets/ind-finance-CiuS03JR.jpg";
const indHealth = "/assets/ind-health-CbkCRKmj.jpg";
const indRealestate = "/assets/ind-realestate-BS46MFjY.jpg";
const indLaw = "/assets/ind-law-RPyU1j4D.jpg";
const indSpeakers = "/assets/ind-speakers-DficSQ7x.jpg";
const indLifestyle = "/assets/ind-lifestyle-8hL1XKLR.jpg";
const reel2 = "/assets/reel-2-CusUaaJe.jpg";
const reel3 = "/assets/reel-3-BIow4rdS.jpg";
let roarAudio = null;
function playRoar() {
  if (typeof window === "undefined") return;
  try {
    if (!roarAudio) {
      roarAudio = new Audio(roarSfx);
      roarAudio.preload = "auto";
    }
    roarAudio.currentTime = 0;
    roarAudio.play().catch(() => {
    });
  } catch {
  }
}
function LionInteractions() {
  const [bursts, setBursts] = reactExports.useState([]);
  const idRef = reactExports.useRef(0);
  reactExports.useEffect(() => {
    const onClick = (e) => {
      const t = e.target;
      if (t.closest("input, textarea, select")) return;
      playRoar();
      const id = ++idRef.current;
      setBursts((b) => [...b, {
        id,
        x: e.clientX,
        y: e.clientY
      }]);
      setTimeout(() => setBursts((b) => b.filter((x) => x.id !== id)), 700);
    };
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none fixed inset-0 z-[200]", "aria-hidden": true, children: bursts.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -translate-x-1/2 -translate-y-1/2 select-none font-display text-[3rem] font-black text-gold animate-roar-burst", style: {
    left: b.x,
    top: b.y
  }, children: "ROAR!" }, b.id)) });
}
function BrandLockupDark({
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex items-center ${className}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoUrl, alt: "The Big Mouth PR", className: "h-10 w-auto" }) });
}
function DotMark({
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center gap-1.5 ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-bm-blue" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-gold" })
  ] });
}
function MouthMark({
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 64 64", className, "aria-hidden": true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 14h36a12 12 0 0112 12v10a12 12 0 01-12 12H26l-12 10V14z", fill: "currentColor" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "24", cy: "32", r: "3", className: "fill-bm-blue" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "36", cy: "32", r: "3", className: "fill-cream" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "48", cy: "32", r: "3", className: "fill-gold" })
  ] });
}
function SiteHeader() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const [servicesOpen, setServicesOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [{
    href: "/about-us",
    label: "About Us"
  }, {
    href: "/packages",
    label: "Packages"
  }, {
    href: "/contact-us",
    label: "Contact Us"
  }, {
    href: "/careers",
    label: "Careers"
  }];
  const navItemClass = "rounded-full px-3 py-2 text-xs font-semibold text-navy-deep transition hover:bg-navy-deep hover:text-cream cursor-pointer";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `fixed inset-x-0 top-0 z-[80] transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center gap-3 px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 items-center justify-between rounded-full bg-navy-deep px-5 py-2.5 shadow-luxe", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoUrl, alt: "The Big Mouth PR", className: "h-8 w-auto md:h-9" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setOpen((v) => !v), className: "rounded-full bg-cream/10 p-2 text-cream lg:hidden", "aria-label": "Toggle menu", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-4 w-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationMenu, { className: "hidden max-w-none flex-1 items-center justify-center rounded-full bg-white px-3 py-2 shadow-luxe lg:flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(NavigationMenuList, { className: "flex-1 items-center justify-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationMenuItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", className: cn(navItemClass, "inline-flex items-center"), children: [
            "Services",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-hover:rotate-180" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 top-full z-50 rounded-md border bg-white p-3 shadow-lg opacity-0 pointer-events-none transition-all duration-150 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:delay-75", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid w-[260px] gap-0.5 md:w-[460px] md:grid-cols-2", children: serviceLinks.map((s) => {
            const Icon = s.icon;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: s.href, className: "flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-navy-deep transition hover:bg-navy-deep hover:text-cream", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 shrink-0 text-gold" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: s.label })
            ] }, s.href);
          }) }) })
        ] }) }),
        links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationMenuItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationMenuLink, { href: l.href, className: navItemClass, children: l.label }) }, l.href))
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#consult", className: "hidden items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-bold uppercase tracking-wider text-navy-deep shadow-gold transition hover:scale-[1.03] hover:bg-gold-soft md:inline-flex", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "h-4 w-4" }),
        " Get Loud"
      ] })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-4 mt-2 rounded-2xl bg-white p-4 shadow-luxe lg:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", onClick: () => {
            setOpen(false);
            setServicesOpen(false);
          }, className: "flex-1 rounded-xl px-4 py-3 text-sm font-semibold text-navy-deep transition hover:bg-navy-deep hover:text-cream", children: "Services" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
            e.stopPropagation();
            setServicesOpen((v) => !v);
          }, className: "rounded-xl p-3 text-navy-deep transition hover:bg-navy-deep hover:text-cream", "aria-label": "Toggle services", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `h-4 w-4 transition duration-200 ${servicesOpen ? "rotate-180" : ""}` }) })
        ] }),
        servicesOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-3 mt-1 grid gap-0.5 border-l-2 border-navy-deep/10 pl-3", children: serviceLinks.map((s) => {
          const Icon = s.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: s.href, onClick: () => {
            setOpen(false);
            setServicesOpen(false);
          }, className: "flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-navy-deep transition hover:bg-navy-deep hover:text-cream", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5 shrink-0 text-gold" }),
            s.label
          ] }, s.href);
        }) })
      ] }),
      links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: l.href, onClick: () => setOpen(false), className: "rounded-xl px-4 py-3 text-sm font-semibold text-navy-deep hover:bg-navy-deep hover:text-cream", children: l.label }, l.href)),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#consult", onClick: () => setOpen(false), className: "mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm font-bold uppercase tracking-wider text-navy-deep", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "h-4 w-4" }),
        " Get Loud"
      ] })
    ] }) })
  ] });
}
function Hero() {
  const [heroForm, setHeroForm] = reactExports.useState({
    name: "",
    email: "",
    company: "",
    title: "",
    phone: "",
    message: ""
  });
  const [heroSending, setHeroSending] = reactExports.useState(false);
  const [heroDone, setHeroDone] = reactExports.useState(false);
  const [heroError, setHeroError] = reactExports.useState(null);
  const heroUpdate = (field) => (e) => setHeroForm((p) => ({
    ...p,
    [field]: e.target.value
  }));
  const handleHeroSubmit = async (e) => {
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
          ...geo
        }
      });
      window.location.href = "/thank-you";
    } catch (err) {
      setHeroError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setHeroSending(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative w-full overflow-hidden bg-navy-deep pt-24 pb-16 text-cream md:pt-28 md:py-24 lg:py-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "The Big Mouth PR — Personal Branding & PR Studio", fetchpriority: "high", decoding: "async", className: "absolute inset-0 h-full w-full object-cover opacity-25 animate-ken-burns" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-navy-deep via-navy-deep/85 to-navy-deep/95" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute inset-0 bg-icon-pattern-lg", style: {
        "--icon-url": `url(${iconUrl})`
      } }),
      Array.from({
        length: 14
      }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `dust-dot ${["delay-6", "delay-12", "delay-18", "delay-24", "delay-30", "delay-36", "delay-6", "delay-12", "delay-18", "delay-24", "delay-30", "delay-36", "delay-6", "delay-12"][i]}`, style: {
        left: `${i * 53 % 100}%`,
        top: `${i * 37 % 100}%`
      } }, i))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 xl:gap-20 2xl:max-w-[1500px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-reveal relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 inline-flex items-center gap-3 rounded-full border border-gold/30 bg-navy/50 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-gold backdrop-blur", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DotMark, {}),
          "Loudly, unapologetically yours"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-black uppercase leading-[0.88] tracking-[-0.02em] text-cream text-[clamp(3rem,8vw,7.5rem)]", children: [
          "We don't",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative inline-block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children: "whisper." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "absolute -bottom-2 left-0 h-3 w-full text-gold", viewBox: "0 0 200 12", preserveAspectRatio: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 8 Q 50 2, 100 7 T 198 5", stroke: "currentColor", strokeWidth: "3", fill: "none", strokeLinecap: "round" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "We ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold italic relative z-10", children: "ROAR." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: lionUrl, alt: "", "aria-hidden": true, className: "pointer-events-none absolute right-0 hidden h-[220px] w-auto animate-lion-roar opacity-70 drop-shadow-[0_20px_50px_rgba(253,95,8,0.45)] md:block md:-right-8 md:top-16 md:h-[200px] lg:-right-16 lg:top-12 lg:h-[280px] xl:-right-20 xl:h-[340px]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-8 max-w-2xl text-lg leading-relaxed text-cream/90 md:text-xl", children: [
          "The Big Mouth PR is the studio your competitors quietly hope you never find. Personal branding, press & reputation — turned up to ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold font-semibold", children: "eleven" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-cream/10 pt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: Array.from({
              length: 5
            }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-gold text-gold" }, i)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-cream/80", children: "4.9 · 120+ leaders" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs uppercase tracking-[0.25em] text-cream/65", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold font-bold", children: "340%" }),
            " avg inbound lift"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-cream/65", children: "Forbes · WSJ · TEDx · Bloomberg" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative animate-reveal delay-15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: lionUrl, alt: "", "aria-hidden": true, className: "mx-auto mb-4 block h-32 w-auto animate-lion-roar drop-shadow-[0_18px_40px_rgba(253,95,8,0.4)] md:hidden" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MouthMark, { className: "absolute -top-10 -right-2 hidden h-16 w-16 rotate-[8deg] text-gold/90 md:block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleHeroSubmit, className: "relative rounded-3xl border border-cream/15 bg-navy/80 p-8 backdrop-blur-xl shadow-luxe md:p-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -top-3 left-8 inline-flex items-center gap-2 rounded-full bg-gold px-4 py-1 text-[11px] font-bold uppercase tracking-widest text-navy-deep", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DotMark, {}),
            "Free Strategy Call"
          ] }),
          heroDone ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-10 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 font-display text-3xl font-bold text-cream", children: "Roar received!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-cream/70", children: "We'll be in touch within one business day." })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-3xl font-bold text-cream md:text-4xl", children: [
              "Tell us your story.",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold italic", children: "We'll make it loud." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-cream/80", children: "30 minutes. No pitch. Real strategy." }),
            heroError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 rounded-xl bg-red-500/20 px-4 py-3 text-sm text-red-200", children: heroError }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, value: heroForm.name, onChange: heroUpdate("name"), placeholder: "Your name", className: "w-full rounded-xl border border-cream/20 bg-cream/10 px-5 py-3.5 text-sm text-cream placeholder:text-cream/65 focus:border-gold focus:outline-none focus:bg-cream/15" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, value: heroForm.email, onChange: heroUpdate("email"), placeholder: "Work email", className: "w-full rounded-xl border border-cream/20 bg-cream/10 px-5 py-3.5 text-sm text-cream placeholder:text-cream/65 focus:border-gold focus:outline-none focus:bg-cream/15" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "tel", required: true, value: heroForm.phone, onChange: heroUpdate("phone"), placeholder: "Phone", className: "w-full rounded-xl border border-cream/20 bg-cream/10 px-5 py-3.5 text-sm text-cream placeholder:text-cream/65 focus:border-gold focus:outline-none focus:bg-cream/15" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, value: heroForm.company, onChange: heroUpdate("company"), placeholder: "Company", className: "w-full rounded-xl border border-cream/20 bg-cream/10 px-5 py-3.5 text-sm text-cream placeholder:text-cream/65 focus:border-gold focus:outline-none focus:bg-cream/15" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: heroForm.title, onChange: heroUpdate("title"), placeholder: "Title", className: "w-full rounded-xl border border-cream/20 bg-cream/10 px-5 py-3.5 text-sm text-cream placeholder:text-cream/65 focus:border-gold focus:outline-none focus:bg-cream/15" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 2, required: true, value: heroForm.message, onChange: heroUpdate("message"), placeholder: "What do you want the world to hear?", className: "w-full rounded-xl border border-cream/20 bg-cream/10 px-5 py-3.5 text-sm text-cream placeholder:text-cream/65 focus:border-gold focus:outline-none focus:bg-cream/15" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: heroSending, className: "group mt-1 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-6 py-4 text-sm font-bold uppercase tracking-wider text-navy-deep transition hover:bg-gold-soft hover:scale-[1.01] disabled:opacity-60", children: heroSending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
                " Sending..."
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                "Open The Mic ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-cream/70", children: "🔒 Your details stay private. Always." })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}
const ribbonServices = ["Personal Branding", "Executive PR", "Media Placements", "Thought Leadership", "LinkedIn Authority", "Wikipedia Profiles", "Crisis Comms", "Podcast Production", "Times Square Features", "Speaker Kits"];
function ServicesRibbon() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative overflow-hidden border-y border-navy-deep/10 bg-white py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-max gap-10 marquee", children: [...ribbonServices, ...ribbonServices].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 whitespace-nowrap", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DotMark, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl font-bold uppercase tracking-tight text-navy-deep/40 md:text-3xl", children: item })
  ] }, i)) }) });
}
const clients = ["FORBES", "BLOOMBERG", "TEDx", "WSJ", "FAST COMPANY", "INC.", "ENTREPRENEUR", "BUSINESS INSIDER", "HBR", "CNBC", "TECHCRUNCH", "VOGUE"];
function ClientsRibbon() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-navy-deep py-8 text-cream border-y border-cream/5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 text-center text-[11px] uppercase tracking-[0.4em] text-cream/55", children: "Our voices have landed in" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-max gap-16 marquee-fast", children: [...clients, ...clients].map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-16 whitespace-nowrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-3xl font-bold tracking-[0.15em] text-cream/40 transition hover:text-gold md:text-4xl", children: c }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DotMark, { className: "opacity-40" })
    ] }, i)) })
  ] });
}
function Story() {
  const [open, setOpen] = reactExports.useState(false);
  const storyVideoRef = reactExports.useRef(null);
  const onStoryOpen = () => {
    setOpen(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "story", className: "relative bg-white py-14 md:py-24 md:py-28 xl:py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: iconUrl, alt: "", "aria-hidden": true, className: "pointer-events-none absolute left-0 top-10 hidden h-48 w-auto opacity-[0.05] md:block" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onStoryOpen, className: "group relative block w-full max-w-lg overflow-hidden rounded-2xl shadow-luxe lg:max-w-[600px]", "aria-label": "Play our story", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: storyThumbVideo, alt: "The Big Mouth PR story", loading: "lazy", className: "h-[300px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[400px] lg:h-[520px]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-navy-deep/70 via-navy-deep/20 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 -m-2 animate-pulse-glow rounded-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative flex h-24 w-24 items-center justify-center rounded-full bg-gold text-navy-deep shadow-gold transition group-hover:scale-110", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "ml-1 h-9 w-9 fill-current" }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute bottom-6 left-6 inline-flex items-center gap-2 rounded-full bg-navy-deep/70 px-4 py-1.5 text-[11px] uppercase tracking-widest text-cream backdrop-blur", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DotMark, {}),
          " Watch our story · 2:14"
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-gold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DotMark, {}),
          " Our story"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-display text-3xl sm:text-4xl md:text-6xl font-black uppercase leading-[0.95] text-navy-deep md:text-6xl", children: [
          "You're the story, ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "we're made to read ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "you" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold italic", children: "out loud." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-lg leading-relaxed text-navy/80", children: 'Most agencies try to change you to make a story happen. We do the opposite. We find what makes you, "you" — and shout it to the world.' }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-base leading-relaxed text-navy/70", children: [
          "Twelve years. Three continents. One belief:",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "font-semibold text-navy-deep", children: "a quiet brand is a forgotten brand." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid grid-cols-3 gap-6 border-t border-navy-deep/10 pt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { n: "340%", label: "Avg inbound lift" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { n: "700+", label: "Distribution platforms" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { n: "120+", label: "Loud leaders served" })
        ] })
      ] })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[100] flex items-center justify-center bg-navy-deep/95 p-4 backdrop-blur", onClick: () => setOpen(false), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpen(false), className: "absolute right-6 top-6 rounded-full bg-cream/10 p-3 text-cream hover:bg-gold hover:text-navy-deep", "aria-label": "Close video", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full max-w-5xl overflow-hidden rounded-2xl bg-black shadow-luxe", onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsx("video", { ref: storyVideoRef, src: storyVideo, className: "w-full", controls: true, playsInline: true, poster: storyThumbVideo, children: "Your browser does not support the video tag." }) })
    ] })
  ] });
}
function Stat({
  n,
  label
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl sm:text-3xl md:text-5xl font-bold text-navy-deep", children: n }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs uppercase tracking-[0.2em] text-navy/60", children: label })
  ] });
}
const serviceGroups = [{
  icon: Crown,
  title: "Executive & Personal Branding",
  desc: "Leadership brand strategy, identity, thought-leadership articles and speaker kits that make you unmistakable.",
  tags: ["Brand Strategy", "Identity", "Speaker Kits", "Thought Leadership"],
  img: svcExec
}, {
  icon: Newspaper,
  title: "Reputation & Media",
  desc: "Press distribution, crisis comms, online review management, Wikipedia profiles, Times Square features.",
  tags: ["PR & Press", "Wikipedia", "Crisis Comms", "Times Square"],
  img: svcMedia
}, {
  icon: Megaphone,
  title: "Content & Social",
  desc: "LinkedIn authority content, UGC, podcasts, influencer marketing and a content engine that never sleeps.",
  tags: ["LinkedIn", "Podcast", "UGC", "Influencer"],
  img: svcContent
}, {
  icon: Camera,
  title: "Creative Production",
  desc: "Photography, videography, print design, experiential marketing and custom merchandise — crafted in-house.",
  tags: ["Photo", "Video", "Print", "Merch"],
  img: svcCreative
}, {
  icon: BookOpen,
  title: "Author & Publishing",
  desc: "Audiobooks, ISBN & copyright, Kirkus reviews, book fairs, signings and 700+ platform distribution.",
  tags: ["Audiobooks", "ISBN", "Kirkus", "Book Tours"],
  img: svcAuthor
}, {
  icon: Earth,
  title: "Digital & Public Affairs",
  desc: "Digital marketing, media buying, web design, public & community affairs and translation across markets.",
  tags: ["Media Buying", "Web Design", "Public Affairs", "Translation"],
  img: svcDigital
}];
const slugOverrides = {
  "Executive & Personal Branding": "executive-personal-branding"
};
const serviceSlug = (title) => slugOverrides[title] ?? title.toLowerCase().replace(/&/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const serviceLinks = [...serviceGroups.map((s) => ({
  label: s.title,
  href: `/services/${serviceSlug(s.title)}`,
  icon: s.icon
}))];
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "services", className: "relative overflow-hidden bg-white py-12 md:py-20 text-navy-deep md:py-24 xl:py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: iconUrl, alt: "", "aria-hidden": true, className: "pointer-events-none absolute -right-20 top-10 hidden h-[560px] w-auto opacity-[0.04] lg:block" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start justify-between gap-6 md:flex-row md:items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-gold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DotMark, {}),
            " What we shout from the rooftops"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-display text-3xl sm:text-4xl md:text-6xl font-black uppercase leading-[0.95] text-navy-deep md:text-6xl", children: [
            "Every channel. ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold italic", children: "Every megaphone." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-md text-navy-deep/65 md:text-right", children: "From your first headshot to your first Wikipedia entry — we engineer every touchpoint of your public presence under one fearless roof." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3", children: serviceGroups.map((s) => {
        const Icon = s.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: serviceLinks.find((l) => l.label === s.title)?.href ?? "/", className: "group relative block overflow-hidden rounded-2xl border border-navy-deep/10 bg-navy-deep p-6 text-cream transition hover:border-gold hover:-translate-y-1 hover:shadow-luxe min-h-[280px] flex flex-col justify-end sm:p-8 sm:min-h-[380px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.img, alt: "", loading: "lazy", className: "absolute inset-0 h-full w-full object-cover opacity-30 transition duration-700 group-hover:opacity-45 group-hover:scale-105" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/85 to-navy-deep/55" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold text-navy-deep transition group-hover:scale-110", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold text-cream", children: s.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-cream/80", children: s.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex flex-wrap gap-2", children: s.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-cream/20 px-3 py-1 text-[11px] uppercase tracking-wider text-cream/85", children: t }, t)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold opacity-0 transition group-hover:opacity-100", children: [
              "Explore ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3" })
            ] })
          ] })
        ] }, s.title);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", className: "inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold uppercase tracking-wider text-navy-deep shadow-gold transition hover:scale-[1.03]", children: [
      "Explore All Services ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
    ] }) })
  ] });
}
const industries = [{
  icon: UtensilsCrossed,
  label: "Food & Beverage",
  img: indFnb,
  blurb: "Chefs, restaurateurs & F&B brands worth talking about."
}, {
  icon: TrendingUp,
  label: "Tech & SaaS",
  img: indTech,
  blurb: "Founders building the future — and the headlines to match."
}, {
  icon: ShieldCheck,
  label: "Finance",
  img: indFinance,
  blurb: "Bankers, fund managers & fintech with serious gravitas."
}, {
  icon: Heart,
  label: "Healthcare",
  img: indHealth,
  blurb: "Doctors & health innovators the world needs to hear."
}, {
  icon: Building2,
  label: "Real Estate",
  img: indRealestate,
  blurb: "Developers & brokers turning properties into icons."
}, {
  icon: Scale,
  label: "Law",
  img: indLaw,
  blurb: "Litigators & firms commanding the room — and the press."
}, {
  icon: MicVocal,
  label: "Authors & Speakers",
  img: indSpeakers,
  blurb: "From manuscript to TEDx stage to Times Square."
}, {
  icon: Sparkles,
  label: "Lifestyle",
  img: indLifestyle,
  blurb: "Creators, designers & talent with cultural pull."
}];
function Industries() {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    align: "start"
  });
  const [hovered, setHovered] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "industries", className: "relative bg-white py-12 md:py-20 text-navy-deep md:py-24 xl:py-20 border-t border-navy-deep/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start justify-between gap-6 md:flex-row md:items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-gold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DotMark, {}),
          " Industries we make loud"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-display text-3xl sm:text-4xl md:text-6xl font-black uppercase leading-[0.95] text-navy-deep md:text-6xl", children: [
          "Built for the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold italic", children: "loud leads." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => embla?.scrollPrev(), "aria-label": "Previous", className: "grid h-12 w-12 place-items-center rounded-full border border-navy-deep/20 text-navy-deep transition hover:bg-navy-deep hover:text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => embla?.scrollNext(), "aria-label": "Next", className: "grid h-12 w-12 place-items-center rounded-full border border-navy-deep/20 text-navy-deep transition hover:bg-navy-deep hover:text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-5 w-5" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: emblaRef, className: "mt-12 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-5", children: industries.map((it, i) => {
      const Icon = it.icon;
      const isHovered = hovered === i;
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative min-w-0 shrink-0 grow-0 basis-[85%] md:basis-1/2 lg:basis-1/3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { onMouseEnter: () => setHovered(i), onMouseLeave: () => setHovered(null), className: "group relative h-[320px] overflow-hidden rounded-2xl border border-cream/10 bg-navy md:h-[400px] lg:h-[460px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: it.img, alt: it.label, loading: "lazy", className: `absolute inset-0 h-full w-full object-cover transition duration-700 ${isHovered ? "scale-110 opacity-80" : "scale-100 opacity-55"}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute right-6 top-6 grid h-16 w-16 place-items-center rounded-2xl bg-gold text-navy-deep shadow-gold transition-all duration-500 ${isHovered ? "scale-110 rotate-0 opacity-100" : "scale-90 -rotate-6 opacity-90"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-7 w-7" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DotMark, { className: "mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl font-bold uppercase leading-tight text-cream", children: it.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `mt-2 text-sm text-cream/80 transition-all duration-500 ${isHovered ? "max-h-20 opacity-100" : "max-h-0 overflow-hidden opacity-0 md:opacity-0"}`, children: it.blurb })
        ] })
      ] }) }, it.label);
    }) }) })
  ] }) });
}
function Portfolio() {
  const items = [{
    img: caseTerraSquare,
    title: "Terra Securities — Times Square Takeover",
    tag: "Outdoor & Experiential",
    slug: "terra-securities-times-square"
  }, {
    img: caseUsaToday,
    title: "USA Today — Keri Murphy Feature",
    tag: "PR & Media",
    slug: "usa-today-keri-murphy"
  }, {
    img: caseForbes,
    title: "Forbes — Jessica Executive Profile",
    tag: "PR & Media",
    slug: "forbes-jessica-feature"
  }, {
    img: caseBrandBook,
    title: "Brand Book Design",
    tag: "Creative Production",
    slug: "brand-book-design"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "portfolio", className: "bg-white py-14 md:py-24 md:py-28 xl:py-20 border-t border-navy-deep/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start justify-between gap-6 md:flex-row md:items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-gold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DotMark, {}),
          " Portfolio"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-display text-3xl sm:text-4xl md:text-6xl font-black uppercase leading-[0.95] text-navy-deep md:text-6xl", children: [
          "Don't confuse us with ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold italic", children: "loudmouths." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "We deliver results."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portfolio", className: "group inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-navy-deep", children: [
        "View all work",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-5 md:grid-cols-12", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portfolio/$slug", params: {
      slug: it.slug
    }, className: `group relative block overflow-hidden rounded-2xl shadow-luxe ${i === 0 ? "md:col-span-7 md:row-span-2 portfolio-hero" : i === 1 ? "md:col-span-5 portfolio-sm" : "md:col-span-5 md:col-start-8 portfolio-sm"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: it.img, alt: it.title, loading: "lazy", className: "absolute inset-0 h-full w-full object-cover transition duration-[1200ms] group-hover:scale-105" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/30 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 p-8 text-cream", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.35em] text-gold", children: it.tag }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-3xl font-bold", children: it.title })
      ] })
    ] }, it.slug)) })
  ] }) });
}
const cases = [{
  img: leader1
}, {
  img: leader2
}, {
  img: leader3
}, {
  img: leader4
}];
function CaseStudies() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-white py-12 md:py-20 text-navy-deep md:py-24 xl:py-20 border-t border-navy-deep/5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: iconUrl, alt: "", "aria-hidden": true, className: "pointer-events-none absolute -left-20 top-20 hidden h-[360px] w-auto opacity-[0.05] lg:block" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-gold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DotMark, {}),
        " Case studies"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 max-w-3xl font-display text-3xl sm:text-4xl md:text-6xl font-black uppercase leading-[0.95] text-navy-deep md:text-6xl", children: [
        "Real leaders. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold italic", children: "Real noise." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4", children: cases.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "group relative overflow-hidden rounded-2xl bg-navy-deep transition hover:-translate-y-1 hover:shadow-luxe", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-72 overflow-hidden sm:h-80", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.img, alt: c.client, loading: "lazy", className: "h-full w-full object-cover transition duration-700 group-hover:scale-105" }) }) }, c.img)) })
    ] })
  ] });
}
const testimonials = [{
  name: "Sarah Lin",
  role: "VP, BlackRock",
  quote: "I went from invisible to invited to the keynote stage. The Big Mouth PR just gets it.",
  img: thumb1,
  video: testimonial1
}, {
  name: "Jordan Pierce",
  role: "Tech Founder",
  quote: "They built a personal brand that closes deals while I sleep. Worth every penny.",
  img: thumb2,
  video: testimonial2
}, {
  name: "Priya Anand",
  role: "Author & Speaker",
  quote: "Kirkus review, audiobook, Times Square — I felt the literal noise.",
  img: thumb3,
  video: testimonial3
}, {
  name: "Marcus Webb",
  role: "CMO",
  quote: "Sophisticated, witty, ruthlessly strategic. The studio I tell every CEO friend about.",
  img: thumb4,
  video: testimonial4
}];
function Testimonials() {
  const videoRefs = reactExports.useRef([]);
  const [playingIndex, setPlayingIndex] = reactExports.useState(null);
  const handlePlay = (index) => {
    videoRefs.current.forEach((v, i) => {
      if (v && i !== index) {
        v.pause();
        v.currentTime = 0;
      }
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-navy-deep py-14 md:py-24 text-cream md:py-28 xl:py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 bg-icon-pattern-xl", style: {
      "--icon-url": `url(${iconUrl})`
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between flex-wrap gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-gold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DotMark, {}),
            " Client love"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-display text-3xl sm:text-4xl md:text-6xl font-black uppercase leading-[0.95] text-cream md:text-6xl", children: [
            "They ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold italic", children: "said it" }),
            " better."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden items-center gap-1 md:flex", children: [
          Array.from({
            length: 5
          }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-5 w-5 fill-gold text-gold" }, i)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-3 text-sm text-cream/70", children: "4.9 / 5 across 120+ clients" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4", children: testimonials.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group relative aspect-[9/16] overflow-hidden rounded-3xl bg-black shadow-luxe", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("video", { ref: (el) => {
          videoRefs.current[i] = el;
        }, src: t.video, playsInline: true, preload: "metadata", poster: t.img, onEnded: () => setPlayingIndex(null), className: "absolute inset-0 h-full w-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" }),
        playingIndex !== i && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handlePlay(i), className: "absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 grid h-14 w-14 place-items-center rounded-full bg-gold/95 text-navy-deep transition group-hover:scale-110", "aria-label": `Play ${t.name} testimonial`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "ml-0.5 h-6 w-6 fill-current" }) })
      ] }, t.name)) })
    ] })
  ] });
}
const faqs = [{
  q: "Who do you typically work with?",
  a: "Founders, C-level executives, authors, and high-profile professionals ready to be seen and aren't shy."
}, {
  q: "How long until I see results?",
  a: "Most clients see meaningful media presence in 60–90 days. Results are more dependent on strategy. Wikipedia and audiobooks take longer by design."
}, {
  q: "Do you offer one-off services or only retainers?",
  a: "Both. We offer what you want. Pick a single service (LinkedIn build, ISBN registration) or a full personal-brand management."
}, {
  q: "Is the 30-minute call really free?",
  a: "Yes. Zero obligation. You leave with a custom 90-day roadmap, whether or not we work together (which is highly unlikely after the call)."
}, {
  q: "Can you handle reputation crises?",
  a: "Yes. Crisis communications and online reputation management are core services."
}];
function FAQ() {
  const [open, setOpen] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "faq", className: "bg-white py-14 md:py-24 md:py-28 xl:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1fr_1.4fr]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-gold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DotMark, {}),
        " FAQ"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-display text-3xl sm:text-4xl md:text-6xl font-black uppercase leading-[0.95] text-navy-deep", children: [
        "Loud questions, ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold italic", children: "louder answers." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-navy/70", children: "Bring the rest to your free strategy call." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: faqs.map((f, i) => {
      const isOpen = open === i;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpen(isOpen ? null : i), className: "block w-full rounded-2xl border border-navy-deep/10 bg-card p-7 text-left transition hover:border-gold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-navy-deep md:text-2xl", children: f.q }),
          isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-5 w-5 text-gold" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-5 w-5 text-navy-deep" })
        ] }),
        isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base leading-relaxed text-navy/75", children: f.a })
      ] }, f.q);
    }) })
  ] }) });
}
const socialPosts = [{
  img: portfolio1,
  platform: "instagram",
  caption: "Editorial day. Loud light. Louder leader.",
  likes: "2.4k"
}, {
  img: reel2,
  platform: "instagram",
  caption: "Backstage at the keynote. He brought the thunder.",
  likes: "5.1k"
}, {
  img: portfolio3,
  platform: "pinterest",
  caption: "Speaker kit drop — feat. a fintech founder we love.",
  likes: "1.8k"
}, {
  img: svcMedia,
  platform: "instagram",
  caption: "Press hits this month: WSJ, Forbes, Inc. 🦁",
  likes: "3.7k"
}, {
  img: reel3,
  platform: "youtube",
  caption: "Book tour stop #4 — sold out room, sold out hearts.",
  likes: "9.2k"
}, {
  img: svcContent,
  platform: "instagram",
  caption: "Your phone is your stage. We hand you the mic.",
  likes: "4.0k"
}];
function platformIcon(p) {
  if (p === "youtube") return /* @__PURE__ */ jsxRuntimeExports.jsx(Youtube, { className: "h-4 w-4" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-4 w-4" });
}
function SocialFeed() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative overflow-hidden bg-white pb-24 md:pb-28 xl:pb-20 border-t border-navy-deep/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 pt-16 md:pt-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start justify-between gap-6 md:flex-row md:items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-gold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DotMark, {}),
          " Live from the studio"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-display text-3xl sm:text-4xl md:text-6xl font-black uppercase leading-[0.95] text-navy-deep md:text-6xl", children: [
          "Follow the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold italic", children: "noise." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.instagram.com/the_big_mouth_pr/", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-full border border-navy-deep/15 px-5 py-2.5 text-sm font-semibold text-navy-deep transition hover:bg-navy-deep hover:text-cream", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-4 w-4" }),
          " @thebigmouthpr"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.pinterest.com/thebigmouthpr/", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-full border border-navy-deep/15 px-5 py-2.5 text-sm font-semibold text-navy-deep transition hover:bg-navy-deep hover:text-cream", children: "Pinterest" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6", children: socialPosts.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.instagram.com/the_big_mouth_pr/", target: "_blank", rel: "noopener noreferrer", className: "group relative aspect-square overflow-hidden rounded-2xl bg-navy-deep", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: "", loading: "lazy", className: "h-full w-full object-cover transition duration-700 group-hover:scale-110" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/30 to-transparent opacity-0 transition group-hover:opacity-100" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-cream/90 text-navy-deep shadow", children: platformIcon(p.platform) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 translate-y-2 p-3 text-cream opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "line-clamp-2 text-[11px] leading-snug", children: p.caption }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 flex items-center gap-1 text-[10px] text-gold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-3 w-3 fill-current" }),
          " ",
          p.likes
        ] })
      ] })
    ] }, i)) })
  ] }) });
}
function FinalCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "consult", className: "relative overflow-hidden bg-navy-deep py-14 md:py-24 text-cream md:py-28 xl:py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: lionUrl, alt: "", "aria-hidden": true, className: "pointer-events-none absolute -left-20 bottom-0 hidden h-[420px] w-auto opacity-[0.10] md:block" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: iconUrl, alt: "", "aria-hidden": true, className: "pointer-events-none absolute -right-16 top-10 hidden h-[420px] w-auto opacity-[0.08] md:block" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 select-none font-display text-[20vw] font-black uppercase leading-none text-cream/[0.04]", children: "ROAR." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-5xl px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: lionUrl, alt: "", "aria-hidden": true, className: "mx-auto h-32 w-auto animate-lion-roar drop-shadow-[0_10px_30px_rgba(253,95,8,0.45)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 font-display text-4xl sm:text-5xl md:text-7xl font-black uppercase leading-[0.95] md:text-8xl", children: [
        "Ready to be ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold italic", children: "impossible to ignore?" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-8 max-w-xl text-lg text-cream/80", children: "One free conversation away from a brand the world can't shut up about." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", onClick: (e) => {
        e.preventDefault();
        document.querySelector("section")?.scrollIntoView({
          behavior: "smooth"
        });
      }, className: "mt-12 inline-flex items-center gap-3 rounded-full bg-gold px-9 py-5 text-base font-bold uppercase tracking-wider text-navy-deep transition hover:bg-gold-soft hover:scale-[1.03]", children: [
        "Book Your Free Strategy Call",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-5 w-5" })
      ] })
    ] })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-navy-deep pb-10 pt-20 text-cream/70", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BrandLockupDark, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-xs text-sm text-cream/65", children: "A loud, fearless personal branding & PR studio. Serving leaders who'd rather be talked about than tip-toed around." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FooterCol, { title: "Studio", items: [{
        label: "About Us",
        href: "/about-us"
      }, {
        label: "Services",
        href: "/services"
      }, {
        label: "Packages",
        href: "/packages"
      }, {
        label: "Portfolio",
        href: "/portfolio"
      }, {
        label: "Contact Us",
        href: "/contact-us"
      }] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FooterCol, { title: "Services", items: [{
        label: "Executive & Personal Branding",
        href: "/services/executive-personal-branding"
      }, {
        label: "Reputation & Media",
        href: "/services/reputation-media"
      }, {
        label: "Content & Social",
        href: "/services/content-social"
      }, {
        label: "Creative Production",
        href: "/services/creative-production"
      }, {
        label: "Author & Publishing",
        href: "/services/author-publishing"
      }, {
        label: "Digital & Public Affairs",
        href: "/services/digital-public-affairs"
      }, {
        label: "Events & Experiential Marketing",
        href: "/services/events-experiential-marketing"
      }] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FooterCol, { title: "Get loud", items: [{
        label: "Book a Call",
        href: "/contact-us#form"
      }, {
        label: "sales@thebigmouthpr.com",
        href: "mailto:sales@thebigmouthpr.com"
      }, {
        label: "+1 (332) 258-7873",
        href: "tel:+13322587873"
      }, {
        label: "2626 E 82nd St Ste#230, Bloomington, MN 55425",
        href: "#"
      }] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-cream/10 px-6 pt-8 text-xs text-cream/55 md:flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-3", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " The Big Mouth PR. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(DotMark, {}),
        " Loud on purpose."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/privacy-policy", className: "hover:text-gold", children: "Privacy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/terms", className: "hover:text-gold", children: "Terms" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", target: "_blank", rel: "noopener noreferrer", className: "hover:text-gold", children: "LinkedIn" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.instagram.com/the_big_mouth_pr/", target: "_blank", rel: "noopener noreferrer", className: "hover:text-gold", children: "Instagram" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://x.com/TheBigMouthpr", target: "_blank", rel: "noopener noreferrer", className: "hover:text-gold", children: "X" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.pinterest.com/thebigmouthpr/", target: "_blank", rel: "noopener noreferrer", className: "hover:text-gold", children: "Pinterest" })
      ] })
    ] })
  ] });
}
function FooterCol({
  title,
  items
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-gold", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-3 text-sm", children: items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: i.href, className: "hover:text-cream", children: i.label }) }, i.label)) })
  ] });
}
function FloatingCTA() {
  const [shown, setShown] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/contact-us", className: `fixed bottom-6 left-6 z-50 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-navy-deep shadow-gold transition ${shown ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MouthMark, { className: "h-4 w-4" }),
    "Get Loud"
  ] });
}
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "lion-cursor bg-white text-navy-deep", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServicesRibbon, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Story, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ClientsRibbon, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Industries, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Portfolio, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CaseStudies, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SocialFeed, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FinalCTA, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingCTA, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LionInteractions, {})
  ] });
}
export {
  ClientsRibbon,
  DotMark,
  FloatingCTA,
  Footer,
  LionInteractions,
  MouthMark,
  SiteHeader,
  Home as component
};
