import { createFileRoute, Link } from "@tanstack/react-router";

import {
  SiteHeader,
  Footer,
  FloatingCTA,
  LionInteractions,
  DotMark,
} from "./index";

import lionUrl from "@/assets/lion-roar.png";
import iconUrl from "@/assets/favicon.png";

const LION_URL = lionUrl;
const ICON_URL = iconUrl;

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — The Big Mouth PR" },
      {
        name: "description",
        content:
          "The Big Mouth PR privacy policy. Learn how we collect, use, and protect your personal information when you use our website and services.",
      },
      { property: "og:title", content: "Privacy Policy — The Big Mouth PR" },
      {
        property: "og:description",
        content:
          "Your privacy matters. Read about how The Big Mouth PR collects, uses, and safeguards your information.",
      },
    ],
  }),
  component: PrivacyPage,
});

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-deep pt-20 text-cream md:pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url(${ICON_URL})`,
          backgroundSize: "120px 120px",
          backgroundRepeat: "repeat",
        }}
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
            Legal · Privacy Policy
          </span>
        </div>

        <h1 className="mt-6 font-display text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
          Privacy <span className="text-gold">Policy.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-cream/75 md:text-xl">
          How we collect, use, and protect your information. Last updated: June 2026.
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
        <Section title="1. Information We Collect">
          <p>
            We collect information you voluntarily provide when you fill out a contact form, book a
            consultation, or communicate with us. This may include your name, email address, phone
            number, company name, job title, and any message content you submit.
          </p>
          <p>
            We also automatically collect certain technical information when you visit our website,
            including your IP address, browser type, device information, pages visited, and referral
            URLs. This data helps us improve our website and user experience.
          </p>
        </Section>

        <Section title="2. How We Use Your Information">
          <p>
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Respond to your inquiries and provide the services you request</li>
            <li>Send relevant communications about our services</li>
            <li>Improve our website, marketing, and client experience</li>
            <li>Comply with legal obligations</li>
          </ul>
        </Section>

        <Section title="3. Data Sharing & Third Parties">
          <p>
            We do not sell your personal information to third parties. We may share your data with
            trusted service providers who assist us in operating our website and delivering services
            (e.g., email delivery platforms, analytics providers, CRM systems). These providers are
            contractually obligated to protect your data.
          </p>
        </Section>

        <Section title="4. Cookies & Tracking">
          <p>
            Our website may use cookies and similar tracking technologies to enhance your browsing
            experience, analyze traffic, and support our marketing efforts. You can control cookie
            preferences through your browser settings.
          </p>
          <p>
            If we deploy advertising tracking pixels (e.g., Google Ads, Meta Pixel), we will update
            this policy accordingly and provide appropriate consent mechanisms as required by law.
          </p>
        </Section>

        <Section title="5. Data Retention">
          <p>
            We retain your personal information for as long as necessary to fulfill the purposes
            described in this policy, or as required by applicable law. When no longer needed, your
            data will be securely deleted or anonymized.
          </p>
        </Section>

        <Section title="6. Your Rights">
          <p>
            Depending on your jurisdiction, you may have the right to access, correct, delete, or
            port your personal data. You may also have the right to restrict or object to certain
            processing. To exercise these rights, please contact us at{" "}
            <a href="mailto:hello@thebigmouthpr.com" className="text-gold underline hover:text-gold/80">
              hello@thebigmouthpr.com
            </a>.
          </p>
        </Section>

        <Section title="7. Data Security">
          <p>
            We implement reasonable technical and organizational measures to protect your personal
            information against unauthorized access, alteration, disclosure, or destruction. However,
            no method of transmission over the internet is 100% secure.
          </p>
        </Section>

        <Section title="8. Third-Party Links">
          <p>
            Our website may contain links to external sites. We are not responsible for the privacy
            practices or content of those websites. We encourage you to review their privacy policies
            before providing any personal information.
          </p>
        </Section>

        <Section title="9. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page
            with an updated revision date. We encourage you to review this policy periodically.
          </p>
        </Section>

        <Section title="10. Contact">
          <p>
            If you have any questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <p className="mt-2">
            Email:{" "}
            <a href="mailto:hello@thebigmouthpr.com" className="text-gold underline hover:text-gold/80">
              hello@thebigmouthpr.com
            </a>
            <br />
            Phone: +1 (555) 010-0420
            <br />
            Studio: 228 Park Ave S, Suite 51202, New York, NY 10003
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
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: `url(${ICON_URL})`, backgroundSize: "140px 140px" }}
      />
      <img src={LION_URL} aria-hidden alt="" className="pointer-events-none absolute -left-16 bottom-0 w-[320px] opacity-20 md:w-[440px]" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <img src={LION_URL} alt="" aria-hidden className="mx-auto h-20 w-auto animate-lion-roar drop-shadow-[0_10px_30px_rgba(253,95,8,0.45)]" />
        <h2 className="mt-6 font-display text-5xl font-black leading-[0.95] tracking-tight md:text-6xl">
          Questions about your <span className="text-gold">privacy?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-cream/75">
          We're happy to answer any questions about how we handle your data.
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

function PrivacyPage() {
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
