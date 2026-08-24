import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { R as Root2, L as List, T as Trigger, C as Content, V as Viewport, I as Indicator, a as Item } from "../_libs/@radix-ui/react-navigation-menu+[...].mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { C as ChevronDown, a as Crown, N as Newspaper, M as Megaphone, b as Camera, B as BookOpen, E as Earth, S as Sparkles, c as Menu, V as Volume2 } from "../_libs/lucide-react.mjs";
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
const appCss = "/assets/styles-iW4uXj7w.css";
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
const Route$j = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "robots", content: "noindex, nofollow" },
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
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
      { rel: "preconnect", href: "https://www.googletagmanager.com" },
      { rel: "preconnect", href: "https://www.google.com" },
      { rel: "dns-prefetch", href: "https://www.googletagmanager.com" },
      { rel: "dns-prefetch", href: "https://www.google.com" },
      { rel: "icon", type: "image/png", href: iconUrl },
      { rel: "apple-touch-icon", href: iconUrl },
      { rel: "preload", as: "style", href: "https://fonts.googleapis.com/css2?family=Archivo+Black&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,700&family=Inter:wght@300;400;500;600;700;800&display=swap" },
      {
        rel: "stylesheet",
        href: appCss
      }
    ],
    scripts: [
      {
        src: "https://www.google.com/recaptcha/api.js?render=explicit",
        async: true,
        defer: true
      },
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=AW-18245037953"
      },
      {
        children: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-18245037953');`
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
  const { queryClient } = Route$j.useRouteContext();
  reactExports.useEffect(() => {
    const script = document.createElement("script");
    script.id = "ze-snippet";
    script.src = "https://static.zdassets.com/ekr/snippet.js?key=ffb8bd50-e6cd-4986-aa40-2c1c957ce4fb";
    document.head.appendChild(script);
    const hasOpened = sessionStorage.getItem("ze_opened");
    if (!hasOpened) {
      const timer = setTimeout(() => {
        window.zE?.("webWidget", "show");
        sessionStorage.setItem("ze_opened", "1");
      }, 3e3);
      return () => clearTimeout(timer);
    }
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$i = () => import("./thank-you-6riQQZ7q.mjs");
const Route$i = createFileRoute("/thank-you")({
  head: () => ({
    meta: [{
      title: "Thank You — The Big Mouth PR"
    }, {
      name: "description",
      content: "Thank you for reaching out to The Big Mouth PR. We'll be in touch shortly."
    }, {
      property: "og:title",
      content: "Thank You — The Big Mouth PR"
    }, {
      property: "og:description",
      content: "Your message has been received. Our team will respond shortly."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$i, "component")
});
const $$splitComponentImporter$h = () => import("./terms-CFXUv7Jv.mjs");
const Route$h = createFileRoute("/terms")({
  head: () => ({
    meta: [{
      title: "Terms & Conditions | The Big Mouth PR"
    }, {
      name: "description",
      content: "Review the terms that govern your use of The Big Mouth PR's website and services. Know your rights, our responsibilities, and how we work together."
    }, {
      property: "og:title",
      content: "Terms & Conditions | The Big Mouth PR"
    }, {
      property: "og:description",
      content: "Review the terms that govern your use of The Big Mouth PR's website and services. Know your rights, our responsibilities, and how we work together."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$h, "component")
});
const $$splitComponentImporter$g = () => import("./services-r266qOeV.mjs");
const Route$g = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "The Big Mouth PR - Our Services"
    }, {
      name: "description",
      content: "One studio, every megaphone. From personal branding to Wikipedia to Times Square. See the full noise we make for leaders like you."
    }, {
      property: "og:title",
      content: "The Big Mouth PR - Our Services"
    }, {
      property: "og:description",
      content: "One studio, every megaphone. From personal branding to Wikipedia to Times Square. See the full noise we make for leaders like you."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$g, "component")
});
const $$splitComponentImporter$f = () => import("./privacy-policy-D-uZCssm.mjs");
const Route$f = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [{
      title: "Privacy Policy | The Big Mouth PR"
    }, {
      name: "description",
      content: "Learn how The Big Mouth PR collects, uses, and protects your personal information. Your privacy is handled with full transparency and care."
    }, {
      property: "og:title",
      content: "Privacy Policy | The Big Mouth PR"
    }, {
      property: "og:description",
      content: "Learn how The Big Mouth PR collects, uses, and protects your personal information. Your privacy is handled with full transparency and care."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const $$splitComponentImporter$e = () => import("./portfolio-BXI_WSXN.mjs");
const Route$e = createFileRoute("/portfolio")({
  head: () => ({
    meta: [{
      title: "Our Work — The Big Mouth PR Portfolio"
    }, {
      name: "description",
      content: "Real case studies from real brands. See the work that made our clients impossible to ignore."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./packages-BC54g36S.mjs");
const Route$d = createFileRoute("/packages")({
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
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./contact-us-DMDo99ko.mjs");
const Route$c = createFileRoute("/contact-us")({
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
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./careers-YnpxOJYN.mjs");
const Route$b = createFileRoute("/careers")({
  head: () => ({
    meta: [{
      title: "Careers — Join The Big Mouth PR"
    }, {
      name: "description",
      content: "We're always looking for talent who can match our roar. Drop your resume and join The Big Mouth PR."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./brand-strategy-D1w9KK2x.mjs");
const Route$a = createFileRoute("/brand-strategy")({
  head: () => ({
    meta: [{
      title: "Brand Strategy — The Big Mouth PR"
    }, {
      name: "description",
      content: "Brand strategy that turns your business into a category king. Positioning, differentiation, audience strategy & narrative — engineered to make you unmissable."
    }, {
      property: "og:title",
      content: "Brand Strategy — The Big Mouth PR"
    }, {
      property: "og:description",
      content: "We build brand strategies that don't blend in. Positioning, differentiation, audience & narrative — all under one roar."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./about-us-Dsga16ZI.mjs");
const Route$9 = createFileRoute("/about-us")({
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
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
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
const heroImg = "/assets/hero-executive-CsILrxf-.jpg";
const logoUrl = "/assets/roar-logo-CMkcPbVP.png";
const svcExec = "/assets/svc-exec-CgeueX-H.jpg";
const svcMedia = "/assets/svc-media-BVQiErHf.jpg";
const svcContent = "/assets/svc-content-w8NtlzHA.jpg";
const svcCreative = "/assets/svc-creative-ByGrirYD.jpg";
const svcAuthor = "/assets/svc-author-CrX2owMu.jpg";
const svcDigital = "/assets/svc-digital-C8Oj_1n5.jpg";
const $$splitComponentImporter$8 = () => import("./index-C3DnLZ38.mjs");
const Route$8 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Top Personal Branding & Marketing Agency in the US"
    }, {
      name: "description",
      content: "The Big Mouth PR is a loud, fearless personal branding & PR agency in the US for founders, executives & disruptors who refuse to be ignored."
    }, {
      property: "og:title",
      content: "Top Personal Branding & Marketing Agency in the US"
    }, {
      property: "og:description",
      content: "The Big Mouth PR is a loud, fearless personal branding & PR agency in the US for founders, executives & disruptors who refuse to be ignored."
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: "/"
    }, {
      property: "og:image",
      content: logoUrl
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:image",
      content: logoUrl
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }, {
      rel: "preload",
      as: "image",
      href: heroImg
    }, {
      rel: "preload",
      as: "image",
      href: logoUrl
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
function LionInteractions() {
  return null;
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden max-w-none flex-1 items-center justify-center rounded-full bg-white px-3 py-2 shadow-luxe lg:flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-1", children: [
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
        links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: l.href, className: navItemClass, children: l.label }, l.href))
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/contact-us#form", className: "hidden items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-bold uppercase tracking-wider text-navy-deep shadow-gold transition hover:scale-[1.03] hover:bg-gold-soft md:inline-flex", children: [
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
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/contact-us#form", onClick: () => setOpen(false), className: "mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm font-bold uppercase tracking-wider text-navy-deep", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "h-4 w-4" }),
        " Get Loud"
      ] })
    ] }) })
  ] });
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
}, {
  icon: Sparkles,
  title: "Events & Experiential Marketing",
  desc: "Experiential marketing, book fair participation, book signings, Times Square features, photography, videography and custom merchandise.",
  tags: ["Experiential", "Book Fairs", "Times Square", "Merch"],
  img: svcCreative
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
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-navy-deep pb-24 pt-20 text-cream/70 md:pb-10", children: [
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
        label: "+1 (332) 587-1425",
        href: "tel:+13325871425"
      }, {
        label: "2626 E 82nd St Ste#230, Bloomington, MN 55425",
        href: "https://maps.google.com/?q=2626+E+82nd+St+Ste+230+Bloomington+MN+55425"
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", target: "_blank", rel: "noopener noreferrer", className: "hover:text-gold", children: "LinkedIn" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.facebook.com/thebigmouthpr", target: "_blank", rel: "noopener noreferrer", className: "hover:text-gold", children: "Facebook" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.instagram.com/the_big_mouth_pr/", target: "_blank", rel: "noopener noreferrer", className: "hover:text-gold", children: "Instagram" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://x.com/TheBigMouthpr", target: "_blank", rel: "noopener noreferrer", className: "hover:text-gold", children: "X" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.pinterest.com/thebigmouthpr/", target: "_blank", rel: "noopener noreferrer", className: "hover:text-gold", children: "Pinterest" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl justify-center gap-6 px-6 pb-6 text-xs text-cream/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/privacy-policy", className: "hover:text-gold", children: "Privacy Policy" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/terms", className: "hover:text-gold", children: "Terms & Conditions" })
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
const $$splitComponentImporter$7 = () => import("./services.reputation-media-Gc5J1ox4.mjs");
const Route$7 = createFileRoute("/services/reputation-media")({
  head: () => ({
    meta: [{
      title: "Reputation & Media Services | Big Mouth PR"
    }, {
      name: "description",
      content: "From Wikipedia to Times Square, we build the reputation that gets you noticed and the media presence that makes it stick."
    }, {
      property: "og:title",
      content: "Reputation & Media Services | Big Mouth PR"
    }, {
      property: "og:description",
      content: "From Wikipedia to Times Square, we build the reputation that gets you noticed and the media presence that makes it stick."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./services.executive-personal-branding-DQMvGfWs.mjs");
const Route$6 = createFileRoute("/services/executive-personal-branding")({
  head: () => ({
    meta: [{
      title: "Build a Personal Brand That Shouts- The Big Mouth PR"
    }, {
      name: "description",
      content: "If you want a personal brand that stands above the rest. You need a solid team that gets you there. The Big Mouth PR is your ladder to personal success."
    }, {
      property: "og:title",
      content: "Build a Personal Brand That Shouts- The Big Mouth PR"
    }, {
      property: "og:description",
      content: "If you want a personal brand that stands above the rest. You need a solid team that gets you there. The Big Mouth PR is your ladder to personal success."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./services.events-experiential-marketing-MJpuC73Z.mjs");
const Route$5 = createFileRoute("/services/events-experiential-marketing")({
  head: () => ({
    meta: [{
      title: "Events & Experiential Marketing | Big Mouth PR"
    }, {
      name: "description",
      content: "Pop-ups, activations, product launches, touring roadshows and immersive brand experiences — we build moments that move people."
    }, {
      property: "og:title",
      content: "Events & Experiential Marketing | Big Mouth PR"
    }, {
      property: "og:description",
      content: "Pop-ups, activations, product launches, touring roadshows and immersive brand experiences — we build moments that move people."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./services.digital-public-affairs-DzIpqoW5.mjs");
const Route$4 = createFileRoute("/services/digital-public-affairs")({
  head: () => ({
    meta: [{
      title: "Digital & Public Affairs Services | Big Mouth PR"
    }, {
      name: "description",
      content: "From media buying to government relations, we handle the digital and public-facing work that shapes how the world sees you."
    }, {
      property: "og:title",
      content: "Digital & Public Affairs Services | Big Mouth PR"
    }, {
      property: "og:description",
      content: "From media buying to government relations, we handle the digital and public-facing work that shapes how the world sees you."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./services.creative-production-CUecNzqY.mjs");
const Route$3 = createFileRoute("/services/creative-production")({
  head: () => ({
    meta: [{
      title: "Creative Production Services | Big Mouth PR"
    }, {
      name: "description",
      content: "Photography, film, print, and merch — all under one roof. Creative production that makes your brand impossible to scroll past."
    }, {
      property: "og:title",
      content: "Creative Production Services | Big Mouth PR"
    }, {
      property: "og:description",
      content: "Photography, film, print, and merch — all under one roof. Creative production that makes your brand impossible to scroll past."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./services.content-social-DmeED76P.mjs");
const Route$2 = createFileRoute("/services/content-social")({
  head: () => ({
    meta: [{
      title: "Become a Loud Social Presence with The Big Mouth PR"
    }, {
      name: "description",
      content: "If you're aiming to reach millions on social media, a strong team is the first step to it. Let The Big Mouth PR be that team."
    }, {
      property: "og:title",
      content: "Become a Loud Social Presence with The Big Mouth PR"
    }, {
      property: "og:description",
      content: "If you're aiming to reach millions on social media, a strong team is the first step to it. Let The Big Mouth PR be that team."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./services.author-publishing-rkBF2pmz.mjs");
const Route$1 = createFileRoute("/services/author-publishing")({
  head: () => ({
    meta: [{
      title: "Author & Publishing Services | Big Mouth PR"
    }, {
      name: "description",
      content: "From manuscript to global shelf, we handle the publishing details so your book gets seen, reviewed, and read everywhere."
    }, {
      property: "og:title",
      content: "Author & Publishing Services | Big Mouth PR"
    }, {
      property: "og:description",
      content: "From manuscript to global shelf, we handle the publishing details so your book gets seen, reviewed, and read everywhere."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const caseBrandBook = "/assets/Brand%20Book-CvorjrrC.jpg";
const branding2 = "/assets/Branding%202-CzNxMJBw.jpg";
const branding = "/assets/Branding-BWnQaK9y.jpg";
const corporateHeadshot = "/assets/Corporate%20headshot-CEkLukrb.jpg";
const caseForbes = "/assets/Forbes%20Jessica-B6iwrMXN.jpg";
const forbes = "/assets/Forbes-Cj0vIETQ.jpg";
const caseUsaToday = "/assets/screencapture-usatoday-press-release-story-34497-as-women-led-businesses-hit-record-numbers-media-entrepreneur-keri-murphy-launches-new-network-focused-on-visibility-2026-06-11-22_00_37-BoC8V-Zl-B0HUxItV.png";
const caseTerraSquare = "/assets/Terra%20Securities%20Time%20Square%20by%20TheBigMouthPR-CmbfqeKL.jpg";
const website = "/assets/Website-CO558RzI.jpg";
const projects = {
  "terra-securities-times-square": {
    title: "Terra Securities — Times Square Takeover",
    category: "Outdoor & Experiential",
    img: caseTerraSquare,
    tools: ["Times Square Advertising", "Video Production", "Media Licensing"],
    result: "340K+ daily impressions, 22% inquiry spike within 48 hours of the billboard going live.",
    detail: ["Terra Securities, a boutique investment firm, needed instant brand authority in a market dominated by household names. We proposed and executed a full Times Square billboard takeover — a 30-second animated spot running on a premium screen at the intersection of 7th Avenue and 47th Street.", "The creative paired bold typography with the firm's signature teal-and-gold palette against the chaos of Times Square, ensuring the brand stopped pedestrians and drivers alike. We handled media buying, content production, licensing, and rights clearance end-to-end in under three weeks.", "The result? A brand that went from 'who?' to 'oh, them' overnight — with CEO interview requests from Bloomberg and CNBC following within the same week."],
    prev: null,
    next: "usa-today-keri-murphy"
  },
  "usa-today-keri-murphy": {
    title: "USA Today — Keri Murphy Feature",
    category: "PR & Media Placement",
    img: caseUsaToday,
    tools: ["Press Outreach", "Story Pitching", "Media Relations", "Executive Branding"],
    result: "USA Today front-page business section feature, 120K+ article reads, 3 podcast invitations.",
    detail: ["Keri Murphy, a media entrepreneur on the verge of launching a new network focused on women-led businesses, needed a media anchor piece that would give her launch instant credibility and reach.", "We crafted a narrative that positioned Keri as a thought leader at the intersection of media, entrepreneurship, and women's leadership — tying her story to the record-breaking numbers of women-led businesses in 2026. We pitched USA Today exclusively with a tailored angle, securing a full-length feature in the business section.", "The article served as the cornerstone of her launch campaign, generating over 120,000 reads, three podcast interview invitations, and a 4x increase in inbound inquiries for her new network within the first week."],
    prev: "terra-securities-times-square",
    next: "forbes-jessica-feature"
  },
  "forbes-jessica-feature": {
    title: "Forbes — Jessica Executive Profile",
    category: "PR & Media Placement",
    img: caseForbes,
    tools: ["Forbes Council Placement", "Ghostwriting", "Editorial Strategy", "Personal Branding"],
    result: "Full Forbes profile, 85K+ views, LinkedIn following grew by 340% in 90 days.",
    detail: ["Jessica, a fintech executive scaling a Series B startup, needed to transition from operator to industry voice. We developed a 6-month editorial strategy centered on securing a Forbes feature — the gold standard for executive credibility.", "We ghostwrote three thought-leadership articles for Forbes, each targeting a different segment of her audience: investors, peers, and potential clients. The flagship piece — on the future of decentralized compliance — became her most-read article, with over 85,000 views in the first month.", "Her LinkedIn following grew by 340% in 90 days, and she was invited to speak at two major fintech conferences within the quarter. The Forbes feature became the cornerstone of her personal brand, referenced in every investor deck and media kit thereafter."],
    prev: "usa-today-keri-murphy",
    next: "brand-book-design"
  },
  "brand-book-design": {
    title: "Brand Book Design",
    category: "Creative Production",
    img: caseBrandBook,
    tools: ["Print Design", "Typography", "Layout Design", "Brand Strategy"],
    result: "Delivered a print-ready brand book that unified the client's identity across all 12 global offices.",
    detail: ["A rapidly scaling consultancy with 12 global offices was suffering from brand fragmentation — every regional team was interpreting the visual identity differently. They needed a single source of truth that teams from Singapore to São Paulo could apply consistently.", "We designed a 64-page brand book covering logo usage, color systems, typography, imagery guidelines, tone of voice, and real-world application examples. Every spread was designed for clarity: minimal text, large visual examples, and intuitive page navigation.", "The book was printed and distributed across all offices, and a digital version was built into the company's internal knowledge base. Brand consistency scores improved by 60% within the first quarter of adoption."],
    prev: "forbes-jessica-feature",
    next: "visual-identity-system"
  },
  "visual-identity-system": {
    title: "Visual Identity System",
    category: "Creative Production",
    img: branding2,
    tools: ["Logo Design", "Visual Identity", "Design Systems", "Brand Strategy"],
    result: "Unified brand identity deployed across web, mobile, packaging, and 50+ team members.",
    detail: ["A B2B SaaS startup with a strong product but a weak visual identity approached us three months before their Series A. Their existing brand — a wordmark in Arial — was undermining their credibility with investors and enterprise prospects.", "We ran a 4-week identity sprint: three logo concepts, stakeholder workshops, visual territory exploration, and a final identity anchored in a geometric wordmark paired with a modular icon system. The color palette was derived from data visualization — intentional, systematic, and reflective of their analytics product.", "We delivered a full visual system including typography stack, color tokens, icon library, UI component styling, presentation templates, and brand guidelines. The new identity launched alongside their Series A announcement and was praised by investors and tech press alike."],
    prev: "brand-book-design",
    next: "brand-identity-design"
  },
  "brand-identity-design": {
    title: "Brand Identity Design",
    category: "Creative Production",
    img: branding,
    tools: ["Logo Design", "Color Theory", "Typography", "Mockup Production"],
    result: "Complete identity system adopted across all consumer touchpoints within 60 days.",
    detail: ["A DTC wellness brand was launching in a crowded market and needed an identity that would stand out on Instagram feeds and retail shelves alike. The challenge: look premium without looking inaccessible.", "We developed a warm, earthy palette paired with a refined serif wordmark and playful secondary iconography. The typography system balanced editorial elegance with digital readability. Application mockups showed the brand across packaging, social templates, website, and physical retail.", "The brand launched to 40K Instagram followers in the first month, with the visual identity cited by customers as a key reason for trying the product. Retail partners specifically noted the shelf presence as a differentiator in a saturated category."],
    prev: "visual-identity-system",
    next: "executive-portrait-series"
  },
  "executive-portrait-series": {
    title: "Executive Portrait Series",
    category: "Photography",
    img: corporateHeadshot,
    tools: ["Photography", "Art Direction", "Lighting Design", "Post-Production"],
    result: "15 executive portraits delivered, deployed across the company's website, LinkedIn, and press kit.",
    detail: ["A leadership team of 15 at a professional services firm had inconsistent, outdated headshots — some were selfies, others decades old. With a major rebrand underway, they needed a unified, polished visual representation of their executive bench.", "We shot a two-day portrait series combining studio-lit headshots on white for consistency with environmental portraits in the firm's boardroom and city-view terrace for warmth. Art direction emphasized approachability and competence — relaxed poses, natural expressions, and careful attention to wardrobe.", "The full set was delivered retouched and optimized for web, print, and social. The new portraits were rolled out alongside the rebrand, creating an immediate impression of cohesion and professionalism across the firm's digital presence."],
    prev: "brand-identity-design",
    next: "forbes-media-placement"
  },
  "forbes-media-placement": {
    title: "Forbes Media Placement",
    category: "PR & Media Placement",
    img: forbes,
    tools: ["Media Relations", "Press Outreach", "Story Pitching", "Executive Positioning"],
    result: "Forbes editorial mention, 45K+ article views, 3 additional press inquiries within a week.",
    detail: ["A tech founder building in the AI infrastructure space needed mainstream credibility — not just in tech blogs, but in business media that investors and enterprise buyers actually read.", "We identified a trending angle around AI infrastructure spending, connected the founder's work to the macro narrative, and pitched Forbes with an exclusive. The resulting editorial mention positioned the founder alongside established industry names, lending immediate weight to every subsequent pitch deck and media appearance.", "Within a week of publication, the founder received three additional press inquiries — TechCrunch, Business Insider, and a podcast with a 100K+ listener base. The Forbes mention became a permanent credibility anchor, referenced in the company's press kit, investor updates, and LinkedIn headline."],
    prev: "executive-portrait-series",
    next: "website-design-development"
  },
  "website-design-development": {
    title: "Website Design & Development",
    category: "Digital",
    img: website,
    tools: ["UX Design", "Web Design", "Responsive Development", "SEO"],
    result: "40% increase in time-on-site, 25% conversion lift, mobile traffic up 60%.",
    detail: ["A professional services firm with a 5-year-old website was losing prospects to competitors with more modern digital presence. Their bounce rate was 68% and mobile conversions were nearly nonexistent.", "We redesigned from the ground up: information architecture restructured around user journeys, a modular design system for consistency, mobile-first responsive layouts, and performance-optimized builds. The visual language balanced corporate trustworthiness with modern, confident typography and intentional whitespace.", "Post-launch, time-on-site increased by 40%, mobile traffic grew 60%, and the contact form conversion rate rose 25%. The new site also achieved a 98 Lighthouse performance score and top-3 rankings for five key industry search terms within the first quarter."],
    prev: "forbes-media-placement",
    next: null
  }
};
const $$splitComponentImporter = () => import("./portfolio._slug-Bp4Hxk3k.mjs");
const Route = createFileRoute("/portfolio/$slug")({
  head: ({
    params
  }) => {
    const project = projects[params.slug];
    return {
      meta: [{
        title: `${project?.title || "Case Study"} — The Big Mouth PR`
      }, {
        name: "description",
        content: project?.result || "Case study from The Big Mouth PR portfolio."
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ThankYouRoute = Route$i.update({
  id: "/thank-you",
  path: "/thank-you",
  getParentRoute: () => Route$j
});
const TermsRoute = Route$h.update({
  id: "/terms",
  path: "/terms",
  getParentRoute: () => Route$j
});
const ServicesRoute = Route$g.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$j
});
const PrivacyPolicyRoute = Route$f.update({
  id: "/privacy-policy",
  path: "/privacy-policy",
  getParentRoute: () => Route$j
});
const PortfolioRoute = Route$e.update({
  id: "/portfolio",
  path: "/portfolio",
  getParentRoute: () => Route$j
});
const PackagesRoute = Route$d.update({
  id: "/packages",
  path: "/packages",
  getParentRoute: () => Route$j
});
const ContactUsRoute = Route$c.update({
  id: "/contact-us",
  path: "/contact-us",
  getParentRoute: () => Route$j
});
const CareersRoute = Route$b.update({
  id: "/careers",
  path: "/careers",
  getParentRoute: () => Route$j
});
const BrandStrategyRoute = Route$a.update({
  id: "/brand-strategy",
  path: "/brand-strategy",
  getParentRoute: () => Route$j
});
const AboutUsRoute = Route$9.update({
  id: "/about-us",
  path: "/about-us",
  getParentRoute: () => Route$j
});
const IndexRoute = Route$8.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$j
});
const ServicesReputationMediaRoute = Route$7.update({
  id: "/reputation-media",
  path: "/reputation-media",
  getParentRoute: () => ServicesRoute
});
const ServicesExecutivePersonalBrandingRoute = Route$6.update({
  id: "/executive-personal-branding",
  path: "/executive-personal-branding",
  getParentRoute: () => ServicesRoute
});
const ServicesEventsExperientialMarketingRoute = Route$5.update({
  id: "/events-experiential-marketing",
  path: "/events-experiential-marketing",
  getParentRoute: () => ServicesRoute
});
const ServicesDigitalPublicAffairsRoute = Route$4.update({
  id: "/digital-public-affairs",
  path: "/digital-public-affairs",
  getParentRoute: () => ServicesRoute
});
const ServicesCreativeProductionRoute = Route$3.update({
  id: "/creative-production",
  path: "/creative-production",
  getParentRoute: () => ServicesRoute
});
const ServicesContentSocialRoute = Route$2.update({
  id: "/content-social",
  path: "/content-social",
  getParentRoute: () => ServicesRoute
});
const ServicesAuthorPublishingRoute = Route$1.update({
  id: "/author-publishing",
  path: "/author-publishing",
  getParentRoute: () => ServicesRoute
});
const PortfolioSlugRoute = Route.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => PortfolioRoute
});
const PortfolioRouteChildren = {
  PortfolioSlugRoute
};
const PortfolioRouteWithChildren = PortfolioRoute._addFileChildren(
  PortfolioRouteChildren
);
const ServicesRouteChildren = {
  ServicesAuthorPublishingRoute,
  ServicesContentSocialRoute,
  ServicesCreativeProductionRoute,
  ServicesDigitalPublicAffairsRoute,
  ServicesEventsExperientialMarketingRoute,
  ServicesExecutivePersonalBrandingRoute,
  ServicesReputationMediaRoute
};
const ServicesRouteWithChildren = ServicesRoute._addFileChildren(
  ServicesRouteChildren
);
const rootRouteChildren = {
  IndexRoute,
  AboutUsRoute,
  BrandStrategyRoute,
  CareersRoute,
  ContactUsRoute,
  PackagesRoute,
  PortfolioRoute: PortfolioRouteWithChildren,
  PrivacyPolicyRoute,
  ServicesRoute: ServicesRouteWithChildren,
  TermsRoute,
  ThankYouRoute
};
const routeTree = Route$j._addFileChildren(rootRouteChildren)._addFileTypes();
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
  NavigationMenuItem as N,
  Route as R,
  SiteHeader as S,
  FloatingCTA as a,
  svcMedia as b,
  svcContent as c,
  svcCreative as d,
  svcAuthor as e,
  svcDigital as f,
  caseTerraSquare as g,
  caseUsaToday as h,
  iconUrl as i,
  caseForbes as j,
  caseBrandBook as k,
  branding2 as l,
  branding as m,
  corporateHeadshot as n,
  forbes as o,
  logoUrl as p,
  cn as q,
  heroImg as r,
  svcExec as s,
  projects as t,
  router as u,
  website as w
};
