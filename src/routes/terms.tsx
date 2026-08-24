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
      { title: "Terms & Conditions | The Big Mouth PR" },
      {
        name: "description",
        content:
          "Review the terms that govern your use of The Big Mouth PR's website and services. Know your rights, our responsibilities, and how we work together.",
      },
      { property: "og:title", content: "Terms & Conditions | The Big Mouth PR" },
      {
        property: "og:description",
        content:
          "Review the terms that govern your use of The Big Mouth PR's website and services. Know your rights, our responsibilities, and how we work together.",
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

        <h1 className="mt-6 font-display text-3xl sm:text-4xl md:text-6xl font-black leading-[0.95] tracking-tight md:text-7xl">
          Terms & <span className="text-gold">Conditions.</span>
        </h1>
        <p className="mt-2 font-display text-lg italic text-cream/60">
          The Big Mouth PR <span className="mx-2 text-cream/30">|</span> Last Updated: June 2026
        </p>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-cream/75">
          Please read these Terms &amp; Conditions ("Terms") carefully before using the website located
          at thebigmouthpr.com ("Site") or engaging any services offered by The Big Mouth PR ("we," "us,"
          or "our"). By accessing or using the Site or our services, you agree to be bound by these Terms.
          If you do not agree, you must not use the Site or services.
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
        <Section title="1. Eligibility and Acceptance of Terms">
          <p>
            By using this Site, you represent and warrant that you are at least 18 years of age (or the
            legal age of majority in your jurisdiction) and have the legal capacity to enter into a
            binding agreement. If you are accessing the Site on behalf of a company or organization, you
            represent that you have the authority to bind that entity to these Terms.
          </p>
          <p>
            Your continued use of the Site following any posted changes to these Terms constitutes
            acceptance of those changes.
          </p>
        </Section>

        <Section title="2. Services Description">
          <p>
            The Big Mouth PR provides personal branding, public relations, media placement, content
            creation, author and publishing support, digital marketing, creative production, digital and
            public affairs, and related communications services ("Services"). All Services are delivered
            under a separate written service agreement or statement of work that outlines the specific
            scope, deliverables, timelines, fees, and payment terms.
          </p>
          <p>
            Nothing on this Site constitutes an offer to provide Services. Engagement of Services
            requires execution of a separate agreement.
          </p>
        </Section>

        <Section title="3. Intellectual Property">
          <p className="font-semibold text-navy-deep">A. Our Content</p>
          <p>
            All content on this Site — including but not limited to text, graphics, logos, images,
            photography, video, audio, software, and the overall 'look and feel' of the Site — is owned
            by or licensed to The Big Mouth PR and is protected by United States and international
            intellectual property laws. You may not reproduce, distribute, modify, create derivative
            works from, publicly display, or exploit any portion of the Site without our prior written
            consent.
          </p>

          <p className="font-semibold text-navy-deep">B. Client Deliverables</p>
          <p>
            Upon receipt of full payment for services, deliverables created specifically for a client
            under a service agreement are licensed to the client for their own commercial use as set
            forth in that agreement. Unless a separate confidentiality agreement is executed, The Big
            Mouth PR retains the right to display completed work (including anonymized case studies)
            in our portfolio and marketing materials.
          </p>

          <p className="font-semibold text-navy-deep">C. Feedback</p>
          <p>
            If you provide us with feedback, suggestions, or ideas regarding our Site or Services, you
            grant us a perpetual, royalty-free, irrevocable license to use, incorporate, and exploit
            that feedback without restriction or compensation to you.
          </p>
        </Section>

        <Section title="4. User Conduct">
          <p>By using this Site, you agree that you will not:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Use the Site for any unlawful purpose or in violation of any applicable law or regulation</li>
            <li>Transmit any viruses, malware, spyware, or other harmful code</li>
            <li>Attempt to gain unauthorized access to our systems, servers, or data</li>
            <li>Scrape, harvest, or collect data from the Site without our express written consent</li>
            <li>Impersonate any person or entity, or misrepresent your affiliation</li>
            <li>Engage in any conduct that restricts or inhibits any other person's use of the Site</li>
            <li>Use the Site in any manner that could disable, overburden, or impair the Site</li>
          </ul>
        </Section>

        <Section title="5. Disclaimer of Warranties">
          <p>
            THE SITE AND ALL CONTENT AND SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS
            WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
            WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
            THE BIG MOUTH PR DOES NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED OR ERROR-FREE, THAT
            DEFECTS WILL BE CORRECTED, OR THAT THE SITE OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE
            OF VIRUSES OR OTHER HARMFUL COMPONENTS.
          </p>
          <p>
            Specific results from our PR and branding services cannot be guaranteed. Media placements,
            coverage, and audience outcomes depend on factors outside of our control, including editorial
            decisions of third-party publications.
          </p>
        </Section>

        <Section title="6. Limitation of Liability">
          <p>
            TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, THE BIG MOUTH PR AND ITS OWNERS,
            OFFICERS, EMPLOYEES, AGENTS, AND CONTRACTORS SHALL NOT BE LIABLE FOR ANY INDIRECT,
            INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES ARISING OUT OF OR RELATED
            TO YOUR USE OF OR INABILITY TO USE THE SITE OR SERVICES, EVEN IF ADVISED OF THE POSSIBILITY
            OF SUCH DAMAGES.
          </p>
          <p>
            Our total aggregate liability to you for any claim arising out of or related to these Terms
            or your use of our Services shall not exceed the total fees actually paid by you to The Big
            Mouth PR in the three (3) months preceding the claim.
          </p>
          <p>
            Some jurisdictions do not allow the exclusion or limitation of incidental or consequential
            damages, so the above limitation may not apply to you.
          </p>
        </Section>

        <Section title="7. Indemnification">
          <p>
            You agree to defend, indemnify, and hold harmless The Big Mouth PR, its owners, officers,
            employees, agents, and contractors from and against any claims, liabilities, damages,
            judgments, awards, losses, costs, expenses, and fees (including reasonable attorneys' fees)
            arising out of or relating to: (a) your violation of these Terms; (b) your use of the Site
            or Services; (c) any content you submit or provide to us; or (d) your violation of any
            third-party right.
          </p>
        </Section>

        <Section title="8. Third-Party Links">
          <p>
            Our Site may contain links to third-party websites, services, or resources. These links are
            provided for your convenience only. We have no control over the content, privacy policies,
            or terms of those sites and are not responsible for any harm or loss arising from your use
            of or reliance on them. Accessing third-party links is at your own risk.
          </p>
        </Section>

        <Section title="9. Confidentiality">
          <p>
            Any confidential or proprietary information shared with us in connection with a service
            engagement will be treated with reasonable care. We will not disclose client-specific
            confidential information to third parties except as required by law or as necessary to
            provide the services. Clients may request execution of a separate Non-Disclosure Agreement
            (NDA) for heightened confidentiality protections.
          </p>
        </Section>

        <Section title="10. Force Majeure">
          <p>
            Neither party shall be liable for any delay or failure to perform its obligations under
            these Terms or any service agreement to the extent such delay or failure is caused by
            circumstances beyond its reasonable control, including but not limited to acts of God,
            natural disasters, pandemics, war, terrorism, government actions, power failures, or
            internet outages ("Force Majeure Events"). The affected party shall provide prompt written
            notice and use reasonable efforts to mitigate the impact of the Force Majeure Event.
          </p>
        </Section>

        <Section title="11. Termination">
          <p>
            We reserve the right, in our sole discretion, to suspend or terminate your access to the
            Site or services at any time, with or without notice, for any reason, including violation
            of these Terms. Upon termination, all rights granted to you under these Terms will
            immediately cease. Provisions that by their nature should survive termination (including
            intellectual property, limitation of liability, indemnification, and governing law) shall
            survive.
          </p>
        </Section>

        <Section title="12. Dispute Resolution and Arbitration">
          <p className="font-bold text-navy-deep">
            PLEASE READ THIS SECTION CAREFULLY — IT AFFECTS YOUR LEGAL RIGHTS.
          </p>
          <p>
            Any dispute, controversy, or claim arising out of or relating to these Terms or the breach,
            termination, or validity thereof shall first be submitted to good-faith negotiation between
            the parties. If not resolved within thirty (30) days, the parties agree to submit the
            dispute to binding arbitration administered by the American Arbitration Association (AAA)
            under its Commercial Arbitration Rules, with proceedings conducted in Hennepin County,
            Minnesota.
          </p>
          <p className="font-semibold text-navy-deep">CLASS ACTION WAIVER:</p>
          <p>
            You agree that any arbitration or proceeding shall be conducted only on an individual basis
            and not in a class, consolidated, or representative action.
          </p>
          <p>
            Notwithstanding the above, either party may seek injunctive or other equitable relief in a
            court of competent jurisdiction to prevent irreparable harm pending arbitration.
          </p>
        </Section>

        <Section title="13. Governing Law and Jurisdiction">
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the State of
            Minnesota, without regard to its conflict of law provisions. Subject to the arbitration
            provisions above, any legal action or proceeding arising out of these Terms shall be brought
            exclusively in the state or federal courts located in Hennepin County, Minnesota, and you
            consent to the personal jurisdiction of such courts.
          </p>
        </Section>

        <Section title="14. Entire Agreement and Severability">
          <p>
            These Terms, together with our Privacy Policy and any applicable service agreement,
            constitute the entire agreement between you and The Big Mouth PR with respect to your use
            of the Site and Services and supersede all prior or contemporaneous communications and
            proposals. If any provision of these Terms is found to be unenforceable or invalid, that
            provision shall be limited or eliminated to the minimum extent necessary, and the remaining
            provisions shall continue in full force and effect.
          </p>
        </Section>

        <Section title="15. Changes to These Terms">
          <p>
            We may update these Terms at any time. Changes will be posted on this page with a revised
            'Last Updated' date. If we make material changes, we will make reasonable efforts to notify
            you (e.g., by email or a notice on our Site). Your continued use of the Site after changes
            are posted constitutes your acceptance of the updated Terms.
          </p>
        </Section>

        <Section title="16. Contact Us">
          <p>
            If you have any questions about these Terms &amp; Conditions, please contact us:
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
            Note: These Terms &amp; Conditions are designed to comply with applicable US law, including
            requirements relevant to service-based businesses operating in Minnesota. They do not
            constitute legal advice. We recommend periodic review by qualified legal counsel.
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
