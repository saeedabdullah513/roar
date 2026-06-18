import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";

import {
  SiteHeader,
  Footer,
  FloatingCTA,
  LionInteractions,
  MouthMark,
} from "./index";

import lionUrl from "@/assets/lion-roar.png";
import iconUrl from "@/assets/favicon.png";

const LION_URL = lionUrl;
const ICON_URL = iconUrl;

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank You — The Big Mouth PR" },
      {
        name: "description",
        content:
          "Thank you for reaching out to The Big Mouth PR. We'll be in touch shortly.",
      },
      { property: "og:title", content: "Thank You — The Big Mouth PR" },
      {
        property: "og:description",
        content:
          "Your message has been received. Our team will respond shortly.",
      },
    ],
  }),
  component: ThankYouPage,
});

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-deep pt-20 text-cream md:pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-icon-pattern"
        style={{ "--icon-url": `url(${ICON_URL})` } as React.CSSProperties}
      />
      <div className="relative mx-auto max-w-4xl px-6 pb-24 pt-16 text-center lg:pb-32 lg:pt-24">
        <div className="mx-auto h-20 w-20 md:h-24 md:w-24">
          <img
            src={LION_URL}
            alt=""
            aria-hidden
            className="h-full w-full animate-lion-roar drop-shadow-[0_10px_30px_rgba(253,95,8,0.45)]"
          />
        </div>
        <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-cream/15 bg-cream/5 px-4 py-1.5">
          <MouthMark className="h-4 w-4 text-gold" />
          <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-cream/75">
            Message Received
          </span>
        </div>
        <h1 className="mt-6 font-display text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
          Thank you for
          <br />
          reaching <span className="text-gold">out.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-cream/70 md:text-xl">
          Your message has been sent successfully. Our team typically responds
          within 24 hours. In the meantime, explore our work or learn more about
          how we help leaders dominate their industries.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-3 rounded-full bg-gold px-9 py-5 text-base font-bold uppercase tracking-wider text-navy-deep shadow-gold transition hover:scale-[1.03]"
          >
            <MouthMark className="h-5 w-5" />
            Back to Home
          </Link>
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-8 py-5 text-sm font-bold uppercase tracking-wider text-cream/85 transition hover:border-cream/40 hover:text-cream"
          >
            View Packages
          </Link>
        </div>
      </div>
    </section>
  );
}

function Content() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-black leading-[0.95] tracking-tight text-navy-deep md:text-5xl">
            What happens <span className="text-gold">next?</span>
          </h2>
          <p className="mt-4 text-lg text-navy-deep/65">
            Here's what you can expect after reaching out.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="group relative overflow-hidden rounded-2xl border border-navy-deep/8 bg-white p-8 shadow-luxe transition hover:-translate-y-1 hover:shadow-gold"
            >
              <span className="font-display text-6xl font-black leading-none text-gold/15 md:text-7xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-navy-deep">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-deep/65">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    title: "We review your message",
    description:
      "Our team reads your inquiry and identifies how we can best help you achieve your goals.",
  },
  {
    title: "We reach out personally",
    description:
      "You'll receive a personalised email or call from our team within one business day.",
  },
  {
    title: "We craft your strategy",
    description:
      "Together, we build a roadmap that positions you to dominate your industry.",
  },
];

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-24 text-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-icon-pattern-lg"
        style={{ "--icon-url": `url(${ICON_URL})` } as React.CSSProperties}
      />
      <img
        src={LION_URL}
        aria-hidden
        alt=""
        className="pointer-events-none absolute -right-16 bottom-0 w-[320px] opacity-15 md:w-[440px]"
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <img
          src={LION_URL}
          alt=""
          aria-hidden
          className="mx-auto h-20 w-auto animate-lion-roar drop-shadow-[0_10px_30px_rgba(253,95,8,0.45)]"
        />
        <h2 className="mt-6 font-display text-5xl font-black leading-[0.95] tracking-tight md:text-6xl">
          Ready to make some{" "}
          <span className="text-gold">noise?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-cream/75">
          While you wait, explore how we've helped other leaders transform their
          brands.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center gap-3 rounded-full bg-gold px-9 py-5 text-base font-bold uppercase tracking-wider text-navy-deep shadow-gold transition hover:scale-[1.03]"
          >
            <MouthMark className="h-5 w-5" />
            Back to Home
          </Link>
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-8 py-5 text-sm font-bold uppercase tracking-wider text-cream/85 transition hover:border-cream/40 hover:text-cream"
          >
            Contact Us Again
          </Link>
        </div>
      </div>
    </section>
  );
}

function ThankYouPage() {
  useEffect(() => {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: "conversion",
      send_to: "AW-18245037953/uW_-CNi1jsEcEIHf9PtD",
    });
  }, []);

  return (
    <main className="lion-cursor bg-white text-navy-deep">
      <SiteHeader />
      <Hero />
      <Content />
      <FinalCTA />
      <Footer />
      <FloatingCTA />
      <LionInteractions />
    </main>
  );
}
