import { createFileRoute, Link } from "@tanstack/react-router";

import {
  SiteHeader,
  Footer,
  FloatingCTA,
  LionInteractions,
  DotMark,
  MouthMark,
} from "./index";

import lionUrl from "@/assets/lion-roar.png";
import iconUrl from "@/assets/favicon.png";

const LION_URL = lionUrl;
const ICON_URL = iconUrl;

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — The Big Mouth PR" },
      {
        name: "description",
        content:
          "Terms and conditions for using The Big Mouth PR website and services. Please read these terms carefully before engaging with our studio.",
      },
      { property: "og:title", content: "Terms & Conditions — The Big Mouth PR" },
      {
        property: "og:description",
        content:
          "Please review the terms and conditions that govern your use of The Big Mouth PR website and services.",
      },
    ],
  }),
  component: TermsPage,
});

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-deep pt-20 text-cream md:pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-icon-pattern"
        style={{ "--icon-url": `url(${ICON_URL})` } as React.CSSProperties}
      />
      <div className="relative mx-auto max-w-4xl px-6 py-16 lg:py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.4em] text-cream/60 hover:text-gold"
        >
          ← Back to The Big Mouth PR
        </Link>
        <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-cream/15 bg-cream/5 px-4 py-1.5">
          <DotMark />
          <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-cream/75">
            Legal · Terms & Conditions
          </span>
        </div>

        <h1 className="mt-6 font-display text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
          Terms & <span className="text-gold">Conditions.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-cream/75 md:text-xl">
          Please read these terms carefully before using our website or engaging our services.
          Last updated: June 2026.
        </p>
      </div>
    </section>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-bold text-navy-deep">{title}</h2>
      <div className="mt-3 space-y-3 text-base leading-relaxed text-navy-deep/75">
        {children}
      </div>
    </div>
  );
}

function Content() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-4xl space-y-12 px-6">
        <Section title="1. Acceptance of Terms">
          <p>
            By accessing or using The Big Mouth PR website, you agree to be bound by these Terms & Conditions.
            If you do not agree with any part of these terms, you must not use our website or services.
          </p>
        </Section>

        <Section title="2. Services Description">
          <p>
            The Big Mouth PR provides personal branding, public relations, media placement, content creation,
            author publishing, digital marketing, and related communications services. All services are
            delivered under a separate service agreement that outlines scope, deliverables, timelines, and fees.
          </p>
        </Section>

        <Section title="3. Intellectual Property">
          <p>
            All content on this website — including text, graphics, logos, images, and software — is the
            property of The Big Mouth PR unless otherwise stated. You may not reproduce, distribute, or
            create derivative works without our prior written consent.
          </p>
          <p>
            Upon full payment for services, deliverables created specifically for a client are licensed
            for the client's own commercial use. The Big Mouth PR retains the right to display completed
            work in our portfolio unless a specific confidentiality agreement is in place.
          </p>
        </Section>

        <Section title="4. User Conduct">
          <p>
            You agree not to use this website for any unlawful purpose or in violation of any applicable
            laws. You must not transmit any harmful code, attempt to gain unauthorized access to our
            systems, or engage in any activity that disrupts the website's functionality.
          </p>
        </Section>

        <Section title="5. Limitation of Liability">
          <p>
            The Big Mouth PR shall not be liable for any indirect, incidental, special, or consequential
            damages arising from your use of this website or our services. Our total liability for any
            claim is limited to the amount paid by you for the specific service giving rise to the claim.
          </p>
        </Section>

        <Section title="6. Third-Party Links">
          <p>
            Our website may contain links to third-party websites. We are not responsible for the content,
            privacy practices, or terms of those websites. Accessing third-party links is at your own risk.
          </p>
        </Section>

        <Section title="7. Termination">
          <p>
            We reserve the right to suspend or terminate access to our website or services at any time
            without prior notice if we determine that a violation of these terms has occurred.
          </p>
        </Section>

        <Section title="8. Changes to Terms">
          <p>
            We may update these Terms & Conditions at any time. Changes will be posted on this page with
            an updated revision date. Continued use of the website after changes constitutes acceptance
            of the new terms.
          </p>
        </Section>

        <Section title="9. Governing Law">
          <p>
            These terms are governed by the laws of the State of 2626 E 82nd St Ste#230, Bloomington, MN 55425. Any disputes arising from
            these terms shall be resolved in the courts of 2626 E 82nd St Ste#230, Bloomington, MN 55425 County, 2626 E 82nd St Ste#230, Bloomington, MN 55425.
          </p>
        </Section>

        <Section title="10. Contact">
          <p>
            If you have questions about these Terms & Conditions, please contact us at{" "}
            <a href="mailto:sales@thebigmouthpr.com" className="text-gold underline hover:text-gold/80">
              sales@thebigmouthpr.com
            </a>.
          </p>
        </Section>
      </div>
    </section>
  );
}

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
        <img src={LION_URL} alt="" aria-hidden className="mx-auto h-20 w-auto animate-lion-roar drop-shadow-[0_10px_30px_rgba(253,95,8,0.45)]" />
        <h2 className="mt-6 font-display text-5xl font-black leading-[0.95] tracking-tight md:text-6xl">
          Still have <span className="text-gold">questions?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-cream/75">
          We're here to help. Reach out to our team anytime.
        </p>
        <a
          href="/contact-us"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-gold px-9 py-5 text-base font-bold uppercase tracking-wider text-navy-deep shadow-gold transition hover:scale-[1.03]"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}

function TermsPage() {
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
