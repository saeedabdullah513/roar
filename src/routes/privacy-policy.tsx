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
      { title: "Privacy Policy | The Big Mouth PR" },
      {
        name: "description",
        content:
          "Learn how The Big Mouth PR collects, uses, and protects your personal information. Your privacy is handled with full transparency and care.",
      },
      { property: "og:title", content: "Privacy Policy | The Big Mouth PR" },
      {
        property: "og:description",
        content:
          "Learn how The Big Mouth PR collects, uses, and protects your personal information. Your privacy is handled with full transparency and care.",
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
            Legal · Privacy Policy
          </span>
        </div>

        <h1 className="mt-6 font-display text-3xl sm:text-4xl md:text-6xl font-black leading-[0.95] tracking-tight md:text-7xl">
          Privacy <span className="text-gold">Policy.</span>
        </h1>
        <p className="mt-2 font-display text-lg italic text-cream/60">
          The Big Mouth PR <span className="mx-2 text-cream/30">|</span> Last Updated: June 2026
        </p>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-cream/75">
          This Privacy Policy explains how The Big Mouth PR ("we," "us," or "our") collects, uses,
          shares, and protects information about you when you visit our website at thebigmouthpr.com,
          fill out forms, book consultations, or otherwise interact with our services. Please read it carefully.
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
          <p className="font-semibold text-navy-deep">A. Information You Provide Voluntarily</p>
          <p>
            When you contact us, submit a form, book a consultation, or engage our services, you may
            provide:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Full name and job title</li>
            <li>Email address and phone number</li>
            <li>Company name and business details</li>
            <li>Message content, project briefs, and any attachments you share</li>
          </ul>

          <p className="font-semibold text-navy-deep">B. Information Collected Automatically</p>
          <p>
            When you visit our website, we automatically collect certain technical data, including:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>IP address and approximate geographic location</li>
            <li>Browser type, version, and device type</li>
            <li>Pages visited, time on page, and referring URLs</li>
            <li>Clickstream data and session duration</li>
          </ul>
          <p>
            This data is collected via server logs, cookies, and analytics tools (such as Google Analytics).
            It is used in aggregate form to improve site performance and user experience.
          </p>

          <p className="font-semibold text-navy-deep">C. Cookies and Tracking Technologies</p>
          <p>
            We use cookies, pixels, and similar technologies to:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Remember your preferences and session data</li>
            <li>Analyze site traffic and user behavior</li>
            <li>Support retargeting and advertising campaigns (e.g., Google Ads, Meta Pixel, LinkedIn Insight Tag)</li>
          </ul>
          <p>
            You may control or disable cookies through your browser settings. Note that disabling cookies
            may affect the functionality of certain parts of our website. By continuing to use our site,
            you consent to our use of cookies as described in this policy. A cookie consent banner will be
            displayed to users where legally required.
          </p>
        </Section>

        <Section title="2. How We Use Your Information">
          <p>We use the personal information we collect to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Respond to inquiries and provide the services you request</li>
            <li>Send service-related communications, invoices, and project updates</li>
            <li>Send marketing communications (you may opt out at any time)</li>
            <li>Improve our website, marketing strategies, and client experience</li>
            <li>Analyze site traffic and performance through anonymized analytics</li>
            <li>Comply with applicable legal and regulatory obligations</li>
            <li>Prevent fraud, enforce our Terms &amp; Conditions, and protect our rights</li>
          </ul>
        </Section>

        <Section title="3. Legal Basis for Processing (Where Applicable)">
          <p>
            For users located in California or other jurisdictions with applicable data protection laws,
            we process your personal data on the following legal bases:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Your consent (e.g., when you submit a contact form or opt into marketing)</li>
            <li>Performance of a contract (e.g., to deliver services you have engaged us for)</li>
            <li>Our legitimate business interests (e.g., improving our services and website)</li>
            <li>Compliance with a legal obligation</li>
          </ul>
        </Section>

        <Section title="4. Data Sharing and Third Parties">
          <p>
            We do not sell, rent, or trade your personal information to third parties for their own
            marketing purposes. We may share your data with trusted service providers who assist us in
            operating our website and delivering our services, including:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Email delivery and CRM platforms (e.g., HubSpot, Mailchimp)</li>
            <li>Analytics providers (e.g., Google Analytics)</li>
            <li>Website hosting and infrastructure providers</li>
            <li>Payment processors (for billing and invoicing purposes)</li>
            <li>Legal, accounting, or compliance professionals, when required</li>
          </ul>
          <p>
            All third-party service providers are contractually required to maintain the confidentiality
            and security of your data and to use it only for the purposes for which it was shared.
          </p>
          <p>
            We may also disclose your information if required to do so by law, court order, or government
            authority, or when we believe in good faith that disclosure is necessary to protect our rights,
            your safety, or the safety of others.
          </p>
        </Section>

        <Section title="5. California Privacy Rights (CCPA / CPRA)">
          <p>
            If you are a California resident, you have the following rights under the California Consumer
            Privacy Act (CCPA), as amended by the California Privacy Rights Act (CPRA):
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Right to Know:</strong> You may request details about the categories and specific pieces of personal information we have collected about you and how it is used and shared.</li>
            <li><strong>Right to Delete:</strong> You may request that we delete the personal information we have collected from you, subject to certain exceptions.</li>
            <li><strong>Right to Correct:</strong> You may request that we correct inaccurate personal information we hold about you.</li>
            <li><strong>Right to Opt-Out of Sale or Sharing:</strong> We do not sell personal information. However, certain sharing of data with advertising partners may constitute 'sharing' under CPRA. You may opt out by contacting us at sales@thebigmouthpr.com.</li>
            <li><strong>Right to Limit Use of Sensitive Personal Information:</strong> To the extent we process sensitive personal information, you may request that we limit such use.</li>
            <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising any of your California privacy rights.</li>
          </ul>
          <p>
            To exercise any of these rights, please submit a verifiable consumer request to{" "}
            <a href="mailto:sales@thebigmouthpr.com" className="text-gold underline hover:text-gold/80">
              sales@thebigmouthpr.com
            </a>
            . We will respond within 45 days as required by law.
          </p>
        </Section>

        <Section title="6. Children's Privacy (COPPA)">
          <p>
            Our website and services are not directed to children under the age of 13. We do not knowingly
            collect personal information from children under 13. If you are a parent or guardian and believe
            your child has provided us with personal information, please contact us at{" "}
            <a href="mailto:sales@thebigmouthpr.com" className="text-gold underline hover:text-gold/80">
              sales@thebigmouthpr.com
            </a>
            , and we will promptly delete such information from our records. If we become aware that we have
            collected personal information from a child under 13 without verified parental consent, we will
            take steps to remove that information.
          </p>
        </Section>

        <Section title="7. Email Communications and CAN-SPAM Compliance">
          <p>
            If you receive marketing or promotional emails from us, each email will include a clear and
            conspicuous unsubscribe link. By clicking the unsubscribe link or contacting us directly, you
            may opt out of future marketing communications at any time. We comply with the requirements of
            the CAN-SPAM Act and will not send unsolicited commercial email in violation of applicable law.
            Transactional and service-related communications are not subject to opt-out.
          </p>
        </Section>

        <Section title="8. Data Retention">
          <p>
            We retain your personal information for as long as necessary to fulfill the purposes described
            in this policy, maintain our business relationship with you, and comply with legal, tax, and
            accounting obligations. In general:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Contact form data and consultation records: retained for up to 3 years after last contact</li>
            <li>Active client records: retained for the duration of the engagement plus 5 years</li>
            <li>Analytics data: retained in accordance with our analytics provider's data retention settings</li>
          </ul>
          <p>
            When personal data is no longer needed, we will securely delete or anonymize it.
          </p>
        </Section>

        <Section title="9. Data Security">
          <p>
            We implement reasonable and appropriate technical, administrative, and physical safeguards to
            protect your personal information against unauthorized access, use, disclosure, alteration, or
            destruction. These measures include SSL/TLS encryption for data transmitted to and from our
            website, access controls, and regular security reviews.
          </p>
          <p>
            No method of transmission over the internet or method of electronic storage is 100% secure.
            While we strive to protect your personal information, we cannot guarantee absolute security.
            In the event of a data breach that affects your rights and freedoms, we will notify affected
            individuals as required by applicable law.
          </p>
        </Section>

        <Section title="10. Third-Party Links">
          <p>
            Our website may contain links to third-party websites, social media platforms, or external
            resources. This Privacy Policy does not apply to those third-party sites. We are not responsible
            for the privacy practices or content of those websites and encourage you to review their privacy
            policies before submitting any personal information.
          </p>
        </Section>

        <Section title="11. Changes to This Privacy Policy">
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices,
            technology, legal requirements, or for other operational reasons. When we make changes, we
            will update the 'Last Updated' date at the top of this page. We encourage you to review this
            policy periodically. Your continued use of our website after changes are posted constitutes
            your acceptance of the updated policy.
          </p>
        </Section>

        <Section title="12. Contact Us">
          <p>
            If you have any questions, requests, or concerns regarding this Privacy Policy or our data
            practices, please contact us:
          </p>
          <div className="mt-4 rounded-2xl border border-navy-deep/10 bg-[oklch(0.98_0.005_240)] p-6">
            <p className="font-display text-xl font-bold text-navy-deep">The Big Mouth PR</p>
            <p className="mt-2 text-sm text-navy-deep/75">
              Email:{" "}
              <a href="mailto:sales@thebigmouthpr.com" className="text-gold underline hover:text-gold/80">
                sales@thebigmouthpr.com
              </a>
              <br />
              Phone:{" "}
              <a href="tel:+13325871425" className="text-gold underline hover:text-gold/80">
                +1 (332) 587-1425
              </a>
              <br />
              Address: 2626 E 82nd St, Ste #230, Bloomington, MN 55425
            </p>
          </div>
          <p className="text-sm italic text-navy-deep/60">
            Note: This Privacy Policy is intended to comply with applicable US federal and state privacy
            laws, including the California Consumer Privacy Act (CCPA/CPRA), the Children's Online Privacy
            Protection Act (COPPA), and the CAN-SPAM Act. It does not constitute legal advice. We recommend
            periodic review by qualified legal counsel.
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
        <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-6xl font-black leading-[0.95] tracking-tight md:text-6xl">
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
