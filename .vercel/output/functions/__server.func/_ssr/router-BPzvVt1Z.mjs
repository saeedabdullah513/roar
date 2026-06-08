import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { R as Root2, L as List, T as Trigger, C as Content, V as Viewport, I as Indicator, a as Item, b as Link$1 } from "../_libs/@radix-ui/react-navigation-menu+[...].mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { C as ChevronDown, a as Crown, N as Newspaper, M as Megaphone, b as Camera, B as BookOpen, E as Earth, c as Menu, V as Volume2 } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
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
const appCss = "/assets/styles-DtEzN3hv.css";
const iconUrl = "/assets/favicon-CkT_K0fm.png";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$2 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "The Big Mouth PR — We Don't Whisper. We Roar." },
      { name: "description", content: "The Big Mouth PR is a loud, fearless personal branding & PR studio for founders, executives and disruptors who refuse to be ignored." },
      { name: "author", content: "The Big Mouth PR" },
      { property: "og:title", content: "The Big Mouth PR — We Don't Whisper. We Roar." },
      { property: "og:description", content: "Personal branding, reputation & media for leaders who'd rather be talked about than tip-toed around." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" }
    ],
    links: [
      { rel: "icon", type: "image/png", href: iconUrl },
      { rel: "apple-touch-icon", href: iconUrl },
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$2.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const NavigationMenu = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Root2,
  {
    ref,
    className: cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationMenuViewport, {})
    ]
  }
));
NavigationMenu.displayName = Root2.displayName;
const NavigationMenuList = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  List,
  {
    ref,
    className: cn("group flex flex-1 list-none items-center justify-center space-x-1", className),
    ...props
  }
));
NavigationMenuList.displayName = List.displayName;
const NavigationMenuItem = Item;
const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium cursor-pointer transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent"
);
const NavigationMenuTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Trigger,
  {
    ref,
    className: cn(navigationMenuTriggerStyle(), "group", className),
    ...props,
    children: [
      children,
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ChevronDown,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
NavigationMenuTrigger.displayName = Trigger.displayName;
const NavigationMenuContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content,
  {
    ref,
    className: cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    ),
    ...props
  }
));
NavigationMenuContent.displayName = Content.displayName;
const NavigationMenuLink = Link$1;
const NavigationMenuViewport = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  Viewport,
  {
    className: cn(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      className
    ),
    ref,
    ...props
  }
) }));
NavigationMenuViewport.displayName = Viewport.displayName;
const NavigationMenuIndicator = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Indicator,
  {
    ref,
    className: cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
NavigationMenuIndicator.displayName = Indicator.displayName;
const logoUrl = "/assets/roar-logo-CMkcPbVP.png";
const fahhhSound = "/assets/fahhh-CWFzza6U.mp3";
const svcExec = "/assets/svc-exec-CgeueX-H.jpg";
const svcMedia = "/assets/svc-media-BVQiErHf.jpg";
const svcContent = "/assets/svc-content-w8NtlzHA.jpg";
const svcCreative = "/assets/svc-creative-ByGrirYD.jpg";
const svcAuthor = "/assets/svc-author-CrX2owMu.jpg";
const svcDigital = "/assets/svc-digital-C8Oj_1n5.jpg";
const $$splitComponentImporter$1 = () => import("./index-sRqfkodh.mjs");
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "The Big Mouth PR — We Don't Whisper. We Roar."
    }, {
      name: "description",
      content: "The Big Mouth PR is a loud, fearless personal branding & PR studio for founders, executives and disruptors who refuse to be ignored."
    }, {
      property: "og:title",
      content: "The Big Mouth PR — We Don't Whisper. We Roar."
    }, {
      property: "og:description",
      content: "Personal branding, reputation & media for leaders who'd rather be talked about than tip-toed around."
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
let fahhhAudio = null;
function playRoar() {
  if (typeof window === "undefined") return;
  try {
    if (!fahhhAudio) {
      fahhhAudio = new Audio(fahhhSound);
      fahhhAudio.preload = "auto";
    }
    fahhhAudio.currentTime = 0;
    fahhhAudio.play().catch(() => {
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
    top: b.y,
    textShadow: "0 6px 20px rgba(253,95,8,0.6)"
  }, children: "Fahhh" }, b.id)) });
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
    href: "#story",
    label: "Our Story"
  }, {
    href: "#industries",
    label: "Industries"
  }, {
    href: "#portfolio",
    label: "Work"
  }, {
    href: "#faq",
    label: "FAQ"
  }];
  const navItemClass = "rounded-full px-4 py-2 text-sm font-semibold text-navy-deep transition hover:bg-navy-deep hover:text-cream cursor-pointer";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `fixed inset-x-0 top-0 z-[80] transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center gap-3 px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 items-center justify-between rounded-full bg-navy-deep px-5 py-2.5 shadow-luxe", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoUrl, alt: "The Big Mouth PR", className: "h-8 w-auto md:h-9" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setOpen((v) => !v), className: "rounded-full bg-cream/10 p-2 text-cream lg:hidden", "aria-label": "Toggle menu", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-4 w-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationMenu, { className: "hidden max-w-none flex-1 items-center justify-center rounded-full bg-white px-3 py-2 shadow-luxe lg:flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(NavigationMenuList, { className: "flex-1 items-center justify-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(NavigationMenuItem, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationMenuTrigger, { className: cn(navItemClass, "data-[state=open]:bg-navy-deep data-[state=open]:text-cream"), children: "Services" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationMenuContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid w-[280px] gap-1 p-3 md:w-[480px] md:grid-cols-2", children: serviceLinks.map((s) => {
            const Icon = s.icon;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: s.href, className: "flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-navy-deep transition hover:bg-navy-deep hover:text-cream", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 shrink-0 text-gold" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: s.label })
            ] }, s.href);
          }) }) })
        ] }),
        links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationMenuItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationMenuLink, { href: l.href, className: navItemClass, children: l.label }) }, l.href))
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#consult", className: "hidden items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-bold uppercase tracking-wider text-navy-deep shadow-gold transition hover:scale-[1.03] hover:bg-gold-soft md:inline-flex", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "h-4 w-4" }),
        " Get Loud"
      ] })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-4 mt-2 rounded-2xl bg-white p-4 shadow-luxe lg:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setServicesOpen((v) => !v), className: "flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-navy-deep transition hover:bg-navy-deep hover:text-cream", children: [
          "Services",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `h-4 w-4 transition duration-200 ${servicesOpen ? "rotate-180" : ""}` })
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
const clients = ["FORBES", "BLOOMBERG", "TEDx", "WSJ", "FAST COMPANY", "INC.", "ENTREPRENEUR", "BUSINESS INSIDER", "HBR", "CNBC", "TECHCRUNCH", "VOGUE"];
function ClientsRibbon() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-white py-8 border-y border-navy-deep/10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 text-center text-[11px] uppercase tracking-[0.4em] text-navy/55", children: "Our voices have landed in" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-max gap-16 marquee-fast", children: [...clients, ...clients].map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-16 whitespace-nowrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-3xl font-bold tracking-[0.15em] text-navy-deep/40 transition hover:text-gold md:text-4xl", children: c }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DotMark, { className: "opacity-40" })
    ] }, i)) })
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
const serviceSlug = (title) => slugOverrides[title] ?? title.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const serviceLinks = serviceGroups.map((s) => ({
  label: s.title,
  href: `/services/${serviceSlug(s.title)}`,
  icon: s.icon
}));
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-navy-deep pb-10 pt-20 text-cream/70", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BrandLockupDark, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-xs text-sm text-cream/65", children: "A loud, fearless personal branding & PR studio. Serving leaders who'd rather be talked about than tip-toed around." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FooterCol, { title: "Studio", items: ["Our Story", "Services", "Portfolio", "Case Studies"] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FooterCol, { title: "Resources", items: ["Insights", "FAQ", "Speaker Kits", "Audiobooks"] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FooterCol, { title: "Get loud", items: ["Book a Call", "hello@thebigmouthpr.com", "+1 (555) 010-0420", "New York · Remote"] })
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-gold", children: "Privacy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-gold", children: "Terms" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-gold", children: "LinkedIn" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-gold", children: "Instagram" })
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-3 text-sm", children: items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-cream", children: i }) }, i)) })
  ] });
}
function FloatingCTA() {
  const [shown, setShown] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#consult", className: `fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-navy-deep shadow-gold transition ${shown ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MouthMark, { className: "h-4 w-4" }),
    "Get Loud"
  ] });
}
const $$splitComponentImporter = () => import("./services.executive-personal-branding-D6z3nmgR.mjs");
const Route = createFileRoute("/services/executive-personal-branding")({
  head: () => ({
    meta: [{
      title: "Executive & Personal Branding — The Big Mouth PR"
    }, {
      name: "description",
      content: "Executive & personal branding for founders, CEOs and leaders who refuse to be ignored. Strategy, identity, thought leadership, media & speaker kits — all under one roar."
    }, {
      property: "og:title",
      content: "Executive & Personal Branding — The Big Mouth PR"
    }, {
      property: "og:description",
      content: "We turn quiet leaders into category-defining voices. Brand strategy, identity, thought leadership, media, speaker kits."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$2
});
const ServicesExecutivePersonalBrandingRoute = Route.update({
  id: "/services/executive-personal-branding",
  path: "/services/executive-personal-branding",
  getParentRoute: () => Route$2
});
const rootRouteChildren = {
  IndexRoute,
  ServicesExecutivePersonalBrandingRoute
};
const routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  ClientsRibbon as C,
  DotMark as D,
  Footer as F,
  LionInteractions as L,
  MouthMark as M,
  NavigationMenu as N,
  SiteHeader as S,
  NavigationMenuList as a,
  NavigationMenuItem as b,
  NavigationMenuTrigger as c,
  cn as d,
  NavigationMenuContent as e,
  NavigationMenuLink as f,
  svcMedia as g,
  svcContent as h,
  svcCreative as i,
  svcAuthor as j,
  svcDigital as k,
  logoUrl as l,
  iconUrl as m,
  fahhhSound as n,
  FloatingCTA as o,
  router as r,
  svcExec as s
};
