import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteHeader, F as Footer, a as FloatingCTA, L as LionInteractions, i as iconUrl, D as DotMark } from "./router-BUpDqDt3.mjs";
import { l as lionUrl } from "./lion-roar-IYwTvOU2.mjs";
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
import "../_libs/lucide-react.mjs";
const LION_URL = lionUrl;
const ICON_URL = iconUrl;
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-navy-deep pt-20 text-cream md:pt-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 bg-icon-pattern", style: {
      "--icon-url": `url(${ICON_URL})`
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-4xl px-6 py-16 lg:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.4em] text-cream/60 hover:text-gold", children: "← Back to The Big Mouth PR" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 inline-flex items-center gap-3 rounded-full border border-cream/15 bg-cream/5 px-4 py-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DotMark, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold uppercase tracking-[0.35em] text-cream/75", children: "Legal · Privacy Policy" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 font-display text-5xl font-black leading-[0.95] tracking-tight md:text-7xl", children: [
        "Privacy ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "Policy." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-lg text-cream/75 md:text-xl", children: "How we collect, use, and protect your information. Last updated: June 2026." })
    ] })
  ] });
}
function Section({
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-navy-deep", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 space-y-3 text-base leading-relaxed text-navy-deep/75", children })
  ] });
}
function Content() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl space-y-12 px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "1. Information We Collect", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We collect information you voluntarily provide when you fill out a contact form, book a consultation, or communicate with us. This may include your name, email address, phone number, company name, job title, and any message content you submit." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We also automatically collect certain technical information when you visit our website, including your IP address, browser type, device information, pages visited, and referral URLs. This data helps us improve our website and user experience." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "2. How We Use Your Information", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We use the information we collect to:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Respond to your inquiries and provide the services you request" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Send relevant communications about our services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Improve our website, marketing, and client experience" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Comply with legal obligations" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "3. Data Sharing & Third Parties", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We do not sell your personal information to third parties. We may share your data with trusted service providers who assist us in operating our website and delivering services (e.g., email delivery platforms, analytics providers, CRM systems). These providers are contractually obligated to protect your data." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "4. Cookies & Tracking", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Our website may use cookies and similar tracking technologies to enhance your browsing experience, analyze traffic, and support our marketing efforts. You can control cookie preferences through your browser settings." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "If we deploy advertising tracking pixels (e.g., Google Ads, Meta Pixel), we will update this policy accordingly and provide appropriate consent mechanisms as required by law." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "5. Data Retention", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We retain your personal information for as long as necessary to fulfill the purposes described in this policy, or as required by applicable law. When no longer needed, your data will be securely deleted or anonymized." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "6. Your Rights", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Depending on your jurisdiction, you may have the right to access, correct, delete, or port your personal data. You may also have the right to restrict or object to certain processing. To exercise these rights, please contact us at",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:sales@thebigmouthpr.com", className: "text-gold underline hover:text-gold/80", children: "sales@thebigmouthpr.com" }),
      "."
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "7. Data Security", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We implement reasonable technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "8. Third-Party Links", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Our website may contain links to external sites. We are not responsible for the privacy practices or content of those websites. We encourage you to review their privacy policies before providing any personal information." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "9. Changes to This Policy", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "10. Contact", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "If you have any questions about this Privacy Policy or our data practices, please contact us:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2", children: [
        "Email:",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:sales@thebigmouthpr.com", className: "text-gold underline hover:text-gold/80", children: "sales@thebigmouthpr.com" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Phone: +1 (332) 258-7873",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Studio: 228 Park Ave S, Suite 51202, 2626 E 82nd St Ste#230, Bloomington, MN 55425, NY 10003"
      ] })
    ] })
  ] }) });
}
function FinalCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-navy-deep py-24 text-cream", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 bg-icon-pattern-lg", style: {
      "--icon-url": `url(${ICON_URL})`
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: LION_URL, "aria-hidden": true, alt: "", className: "pointer-events-none absolute -left-16 bottom-0 w-[320px] opacity-20 md:w-[440px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-3xl px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: LION_URL, alt: "", "aria-hidden": true, className: "mx-auto h-20 w-auto animate-lion-roar drop-shadow-[0_10px_30px_rgba(253,95,8,0.45)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 font-display text-5xl font-black leading-[0.95] tracking-tight md:text-6xl", children: [
        "Questions about your ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "privacy?" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-md text-cream/75", children: "We're happy to answer any questions about how we handle your data." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/contact-us", className: "mt-10 inline-flex items-center gap-3 rounded-full bg-gold px-9 py-5 text-base font-bold uppercase tracking-wider text-navy-deep shadow-gold transition hover:scale-[1.03]", children: "Contact Us" })
    ] })
  ] });
}
function PrivacyPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "lion-cursor bg-white text-navy-deep", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Content, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FinalCTA, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingCTA, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LionInteractions, {})
  ] });
}
export {
  PrivacyPage as component
};
