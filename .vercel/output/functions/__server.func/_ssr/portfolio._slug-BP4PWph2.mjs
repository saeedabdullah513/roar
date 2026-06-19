import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { R as Route, S as SiteHeader, F as Footer, a as FloatingCTA, L as LionInteractions, y as projects, D as DotMark } from "./router-D0X8GD9I.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { ac as ArrowLeft, d as Check, ad as ExternalLink, J as ChevronLeft, K as ChevronRight, A as ArrowRight, g as ArrowUpRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/@radix-ui/react-navigation-menu+[...].mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
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
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
const projectSlugs = Object.keys(projects);
function ProjectDetail() {
  const {
    slug
  } = Route.useParams();
  const project = projects[slug];
  if (!project) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "lion-cursor bg-navy-deep text-cream", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "flex min-h-[60vh] items-center justify-center pt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl font-black", children: "Project not found" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portfolio", className: "mt-6 inline-flex items-center gap-2 text-gold hover:underline", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
          " Back to portfolio"
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingCTA, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LionInteractions, {})
    ] });
  }
  const currentIndex = projectSlugs.indexOf(slug);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "lion-cursor bg-white text-navy-deep", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroImage, { project }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Content, { project }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation, { slug, project, currentIndex }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MoreProjects, { currentSlug: slug }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTA, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingCTA, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LionInteractions, {})
  ] });
}
function HeroImage({
  project
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[50vh] min-h-[320px] w-full overflow-hidden md:min-h-[420px] md:h-[65vh]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: project.img, alt: project.title, className: "absolute inset-0 h-full w-full object-cover object-center" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/50 to-navy-deep/20" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-8 left-0 right-0 px-6 md:bottom-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portfolio", className: "mb-6 inline-flex items-center gap-2 text-sm text-cream/70 transition hover:text-gold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
        " Back to portfolio"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-[0.3em] text-gold", children: project.category }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 font-display text-4xl font-black uppercase leading-[1.05] text-cream md:text-6xl", children: project.title })
    ] }) })
  ] });
}
function Content({
  project
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-4xl gap-16 px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-gold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DotMark, {}),
        " Overview"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 space-y-6", children: project.detail.map((para, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed text-navy-deep/80", children: para }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-[0.3em] text-gold", children: "Tools & Skills" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-3", children: project.tools.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 text-navy-deep", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 shrink-0 text-gold" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t })
        ] }, t)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-[0.3em] text-gold", children: "Results" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg leading-relaxed text-navy-deep/80", children: project.result }),
        project.articleUrl && /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: project.articleUrl, target: "_blank", rel: "noopener noreferrer", className: "mt-6 inline-flex items-center gap-2 rounded-full bg-navy-deep px-6 py-3 text-sm font-bold uppercase tracking-wider text-cream transition hover:scale-[1.02] hover:bg-navy", children: [
          "Read Article ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-4 w-4" })
        ] })
      ] })
    ] })
  ] }) });
}
function Navigation({
  slug,
  project,
  currentIndex
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-navy-deep/10 bg-cream/50 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-4xl items-center justify-between px-6", children: [
    project.prev ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portfolio/$slug", params: {
      slug: project.prev
    }, className: "group flex items-center gap-3 text-sm font-medium text-navy-deep/60 transition hover:text-gold", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4 transition group-hover:-translate-x-1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Previous" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio", className: "text-sm font-medium text-navy-deep/40 transition hover:text-gold", children: "All projects" }),
    project.next ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portfolio/$slug", params: {
      slug: project.next
    }, className: "group flex items-center gap-3 text-sm font-medium text-navy-deep/60 transition hover:text-gold", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Next" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4 rotate-180 transition group-hover:translate-x-1" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", {})
  ] }) });
}
function MoreProjects({
  currentSlug
}) {
  const scrollRef = reactExports.useRef(null);
  const otherEntries = Object.entries(projects).filter(([slug]) => slug !== currentSlug);
  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -340 : 340,
      behavior: "smooth"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-navy-deep/10 py-16 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-gold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DotMark, {}),
          " More Projects"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-3xl font-black text-navy-deep", children: "Keep exploring" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden gap-2 sm:flex", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => scroll("left"), className: "grid h-10 w-10 place-items-center rounded-full border border-navy-deep/20 text-navy-deep transition hover:bg-navy-deep hover:text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => scroll("right"), className: "grid h-10 w-10 place-items-center rounded-full border border-navy-deep/20 text-navy-deep transition hover:bg-navy-deep hover:text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-5 w-5" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: scrollRef, className: "scrollbar-hide flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory", children: otherEntries.map(([slug, p]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portfolio/$slug", params: {
      slug
    }, className: "group flex-shrink-0 w-[280px] sm:w-[320px] snap-start overflow-hidden rounded-2xl bg-navy-deep ring-1 ring-cream/10 transition hover:-translate-y-1 hover:ring-gold", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-48 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.title, loading: "lazy", className: "h-full w-full object-cover transition duration-700 group-hover:scale-105" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-[0.25em] text-gold", children: p.category }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-lg font-bold text-cream group-hover:text-gold transition-colors", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold", children: [
          "View case study ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3" })
        ] })
      ] })
    ] }, slug)) })
  ] }) });
}
function CTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-navy-deep py-20 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl font-black text-cream md:text-5xl", children: [
      "Ready to make ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold italic", children: "your noise?" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-cream/65", children: "Every brand has a story worth shouting. Let's make yours the one they can't stop talking about." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact-us", className: "mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold uppercase tracking-wider text-navy-deep shadow-gold transition hover:scale-[1.03]", children: [
      "Start your project ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
    ] })
  ] }) });
}
export {
  ProjectDetail as component
};
