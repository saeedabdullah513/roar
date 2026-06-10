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
const appCss = "/assets/styles-D9EIhXZq.css";
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
const Route$c = createRootRouteWithContext()({
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
  const { queryClient } = Route$c.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$b = () => import("./terms-Bm4ekWyX.mjs");
const Route$b = createFileRoute("/terms")({
  head: () => ({
    meta: [{
      title: "Terms & Conditions — The Big Mouth PR"
    }, {
      name: "description",
      content: "Terms and conditions for using The Big Mouth PR website and services. Please read these terms carefully before engaging with our studio."
    }, {
      property: "og:title",
      content: "Terms & Conditions — The Big Mouth PR"
    }, {
      property: "og:description",
      content: "Please review the terms and conditions that govern your use of The Big Mouth PR website and services."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./privacy-policy-C5H-Ak5V.mjs");
const Route$a = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [{
      title: "Privacy Policy — The Big Mouth PR"
    }, {
      name: "description",
      content: "The Big Mouth PR privacy policy. Learn how we collect, use, and protect your personal information when you use our website and services."
    }, {
      property: "og:title",
      content: "Privacy Policy — The Big Mouth PR"
    }, {
      property: "og:description",
      content: "Your privacy matters. Read about how The Big Mouth PR collects, uses, and safeguards your information."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./packages-Pmka_Qmi.mjs");
const Route$9 = createFileRoute("/packages")({
  head: () => ({
    meta: [{
      title: "Roar Packages — The Big Mouth PR"
    }, {
      name: "description",
      content: "Cub Roar, Lion Roar and Pride Roar — three PR & branding packages built to grow your voice. Limited-time 37% off starting prices."
    }, {
      property: "og:title",
      content: "Roar Packages — The Big Mouth PR"
    }, {
      property: "og:description",
      content: "Pick your roar: Cub, Lion or Pride. Foundation visibility to premium influence — branding, PR, content and reputation."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./contact-us-n6TG_oHC.mjs");
const Route$8 = createFileRoute("/contact-us")({
  head: () => ({
    meta: [{
      title: "Contact Us — The Big Mouth PR"
    }, {
      name: "description",
      content: "Get in touch with The Big Mouth PR. Book a strategy call, reach our team, or find our studio. We reply within one business day."
    }, {
      property: "og:title",
      content: "Contact Us — The Big Mouth PR"
    }, {
      property: "og:description",
      content: "Ready to make some noise? Contact The Big Mouth PR and let's build a brand the world can't ignore."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./about-us-CppDfzal.mjs");
const Route$7 = createFileRoute("/about-us")({
  head: () => ({
    meta: [{
      title: "About Us — The Big Mouth PR"
    }, {
      name: "description",
      content: "The Big Mouth PR is a loud-by-design brand and PR studio. Meet our story, mission, vision, values and the team building category-defining voices."
    }, {
      property: "og:title",
      content: "About Us — The Big Mouth PR"
    }, {
      property: "og:description",
      content: "Loud, unmissable PR for founders, executives and brands. Our story, mission, vision, values and team."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
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
const svcExec = "/assets/svc-exec-CgeueX-H.jpg";
const svcMedia = "/assets/svc-media-BVQiErHf.jpg";
const svcContent = "/assets/svc-content-w8NtlzHA.jpg";
const svcCreative = "/assets/svc-creative-ByGrirYD.jpg";
const svcAuthor = "/assets/svc-author-CrX2owMu.jpg";
const svcDigital = "/assets/svc-digital-C8Oj_1n5.jpg";
const $$splitComponentImporter$6 = () => import("./index-xQgZ-WH9.mjs");
const Route$6 = createFileRoute("/")({
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
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
let audioCtx = null;
function getAudioCtx() {
  if (!audioCtx) audioCtx = new AudioContext();
  return audioCtx;
}
function playRoar() {
  if (typeof window === "undefined") return;
  try {
    const ctx = getAudioCtx();
    const now = ctx.currentTime;
    const masterGain = ctx.createGain();
    masterGain.connect(ctx.destination);
    masterGain.gain.setValueAtTime(0, now);
    masterGain.gain.linearRampToValueAtTime(0.7, now + 0.05);
    masterGain.gain.linearRampToValueAtTime(0.3, now + 0.3);
    masterGain.gain.exponentialRampToValueAtTime(0.01, now + 1.5);
    masterGain.gain.setValueAtTime(0, now + 1.6);
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(300, now);
    filter.frequency.exponentialRampToValueAtTime(2e3, now + 0.3);
    filter.Q.setValueAtTime(2, now);
    filter.connect(masterGain);
    const osc1 = ctx.createOscillator();
    osc1.type = "sawtooth";
    osc1.frequency.setValueAtTime(85, now);
    osc1.frequency.linearRampToValueAtTime(110, now + 0.4);
    osc1.frequency.linearRampToValueAtTime(70, now + 1.2);
    osc1.connect(filter);
    osc1.start(now);
    osc1.stop(now + 1.5);
    const osc2 = ctx.createOscillator();
    osc2.type = "square";
    osc2.frequency.setValueAtTime(95, now);
    osc2.frequency.linearRampToValueAtTime(120, now + 0.4);
    osc2.frequency.linearRampToValueAtTime(80, now + 1.2);
    osc2.connect(filter);
    osc2.start(now);
    osc2.stop(now + 1.5);
    const bufferSize = ctx.sampleRate * 2;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(Math.random(), 3) * 0.6;
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = "bandpass";
    noiseFilter.frequency.setValueAtTime(800, now);
    noiseFilter.frequency.exponentialRampToValueAtTime(3e3, now + 0.5);
    noiseFilter.Q.setValueAtTime(0.5, now);
    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.2, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, now + 1.2);
    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(masterGain);
    noise.start(now);
    noise.stop(now + 1.3);
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
    href: "/#faq",
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
const serviceSlug = (title) => slugOverrides[title] ?? title.toLowerCase().replace(/&/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(FooterCol, { title: "Studio", items: [{
        label: "Our Story",
        href: "/#story"
      }, {
        label: "About Us",
        href: "/about-us"
      }, {
        label: "Services",
        href: "/#services"
      }, {
        label: "Packages",
        href: "/packages"
      }, {
        label: "Portfolio",
        href: "/#portfolio"
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
      }] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FooterCol, { title: "Get loud", items: [{
        label: "Book a Call",
        href: "/contact-us#form"
      }, {
        label: "hello@thebigmouthpr.com",
        href: "mailto:hello@thebigmouthpr.com"
      }, {
        label: "+1 (555) 010-0420",
        href: "tel:+15550100420"
      }, {
        label: "New York · Remote",
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://linkedin.com/company/thebigmouthpr", target: "_blank", rel: "noopener noreferrer", className: "hover:text-gold", children: "LinkedIn" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://instagram.com/thebigmouthpr", target: "_blank", rel: "noopener noreferrer", className: "hover:text-gold", children: "Instagram" })
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#consult", className: `fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-navy-deep shadow-gold transition ${shown ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MouthMark, { className: "h-4 w-4" }),
    "Get Loud"
  ] });
}
const $$splitComponentImporter$5 = () => import("./services.reputation-media-C-w67vnF.mjs");
const Route$5 = createFileRoute("/services/reputation-media")({
  head: () => ({
    meta: [{
      title: "Reputation & Media — The Big Mouth PR"
    }, {
      name: "description",
      content: "PR & press distribution, crisis communications, Wikipedia profiles, Times Square features and online review management — all under one roar."
    }, {
      property: "og:title",
      content: "Reputation & Media — The Big Mouth PR"
    }, {
      property: "og:description",
      content: "We manage your reputation across every channel. Press, Wikipedia, crisis comms, Times Square, reviews — engineered to build trust at scale."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./services.executive-personal-branding-FTtKTs65.mjs");
const Route$4 = createFileRoute("/services/executive-personal-branding")({
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
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./services.digital-public-affairs-NDqtdbrW.mjs");
const Route$3 = createFileRoute("/services/digital-public-affairs")({
  head: () => ({
    meta: [{
      title: "Digital & Public Affairs — The Big Mouth PR"
    }, {
      name: "description",
      content: "Digital marketing, media buying, web design, public & community affairs and multilingual translation for brands that operate in the public square."
    }, {
      property: "og:title",
      content: "Digital & Public Affairs — The Big Mouth PR"
    }, {
      property: "og:description",
      content: "Command the digital and public square with integrated campaigns, media buying and advocacy."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./services.creative-production-COM0SQ2Z.mjs");
const Route$2 = createFileRoute("/services/creative-production")({
  head: () => ({
    meta: [{
      title: "Creative Production — The Big Mouth PR"
    }, {
      name: "description",
      content: "Photography, videography, print design, experiential marketing and custom merchandise — all produced in-house by The Big Mouth PR."
    }, {
      property: "og:title",
      content: "Creative Production — The Big Mouth PR"
    }, {
      property: "og:description",
      content: "In-house creative production that turns brand strategy into visual reality."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./services.content-social-DRvuw67K.mjs");
const Route$1 = createFileRoute("/services/content-social")({
  head: () => ({
    meta: [{
      title: "Content & Social — The Big Mouth PR"
    }, {
      name: "description",
      content: "LinkedIn authority content, UGC, podcasts, influencer marketing and an always-on content engine that never sleeps. We make your feed your best salesperson."
    }, {
      property: "og:title",
      content: "Content & Social — The Big Mouth PR"
    }, {
      property: "og:description",
      content: "We build content engines that turn followers into fans and fans into opportunities. LinkedIn, Instagram, YouTube, podcasts, UGC and influencer programmes."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./services.author-publishing-DkiEqsur.mjs");
const Route = createFileRoute("/services/author-publishing")({
  head: () => ({
    meta: [{
      title: "Author & Publishing — The Big Mouth PR"
    }, {
      name: "description",
      content: "Audiobooks, ISBN & copyright, Kirkus reviews, book fairs, signings and 700+ platform distribution for authors and publishers."
    }, {
      property: "og:title",
      content: "Author & Publishing — The Big Mouth PR"
    }, {
      property: "og:description",
      content: "Full-service publishing support — from manuscript to audiobook to worldwide distribution."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const TermsRoute = Route$b.update({
  id: "/terms",
  path: "/terms",
  getParentRoute: () => Route$c
});
const PrivacyPolicyRoute = Route$a.update({
  id: "/privacy-policy",
  path: "/privacy-policy",
  getParentRoute: () => Route$c
});
const PackagesRoute = Route$9.update({
  id: "/packages",
  path: "/packages",
  getParentRoute: () => Route$c
});
const ContactUsRoute = Route$8.update({
  id: "/contact-us",
  path: "/contact-us",
  getParentRoute: () => Route$c
});
const AboutUsRoute = Route$7.update({
  id: "/about-us",
  path: "/about-us",
  getParentRoute: () => Route$c
});
const IndexRoute = Route$6.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$c
});
const ServicesReputationMediaRoute = Route$5.update({
  id: "/services/reputation-media",
  path: "/services/reputation-media",
  getParentRoute: () => Route$c
});
const ServicesExecutivePersonalBrandingRoute = Route$4.update({
  id: "/services/executive-personal-branding",
  path: "/services/executive-personal-branding",
  getParentRoute: () => Route$c
});
const ServicesDigitalPublicAffairsRoute = Route$3.update({
  id: "/services/digital-public-affairs",
  path: "/services/digital-public-affairs",
  getParentRoute: () => Route$c
});
const ServicesCreativeProductionRoute = Route$2.update({
  id: "/services/creative-production",
  path: "/services/creative-production",
  getParentRoute: () => Route$c
});
const ServicesContentSocialRoute = Route$1.update({
  id: "/services/content-social",
  path: "/services/content-social",
  getParentRoute: () => Route$c
});
const ServicesAuthorPublishingRoute = Route.update({
  id: "/services/author-publishing",
  path: "/services/author-publishing",
  getParentRoute: () => Route$c
});
const rootRouteChildren = {
  IndexRoute,
  AboutUsRoute,
  ContactUsRoute,
  PackagesRoute,
  PrivacyPolicyRoute,
  TermsRoute,
  ServicesAuthorPublishingRoute,
  ServicesContentSocialRoute,
  ServicesCreativeProductionRoute,
  ServicesDigitalPublicAffairsRoute,
  ServicesExecutivePersonalBrandingRoute,
  ServicesReputationMediaRoute
};
const routeTree = Route$c._addFileChildren(rootRouteChildren)._addFileTypes();
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
  FloatingCTA as a,
  NavigationMenuList as b,
  NavigationMenuItem as c,
  NavigationMenuTrigger as d,
  cn as e,
  NavigationMenuContent as f,
  NavigationMenuLink as g,
  svcMedia as h,
  iconUrl as i,
  svcContent as j,
  svcCreative as k,
  logoUrl as l,
  svcAuthor as m,
  svcDigital as n,
  router as r,
  svcExec as s
};
