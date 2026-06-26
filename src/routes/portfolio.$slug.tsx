import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { ArrowLeft, ArrowUpRight, ArrowRight, Check, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { SiteHeader, Footer, FloatingCTA, LionInteractions, DotMark } from "./index";

import brandBook from "@/assets/case-study-portfolio/Brand Book.jpg";
import branding2 from "@/assets/case-study-portfolio/Branding 2.jpg";
import branding from "@/assets/case-study-portfolio/Branding.jpg";
import corporateHeadshot from "@/assets/case-study-portfolio/Corporate headshot.jpg";
import forbesJessica from "@/assets/case-study-portfolio/Forbes Jessica.jpg";
import forbes from "@/assets/case-study-portfolio/Forbes.jpg";
import usatoday from "@/assets/case-study-portfolio/screencapture-usatoday-press-release-story-34497-as-women-led-businesses-hit-record-numbers-media-entrepreneur-keri-murphy-launches-new-network-focused-on-visibility-2026-06-11-22_00_37-BoC8V-Zl.png";
import terraSecurities from "@/assets/case-study-portfolio/Terra Securities Time Square by TheBigMouthPR.jpg";
import website from "@/assets/case-study-portfolio/Website.jpg";

const projects: Record<string, {
  title: string;
  category: string;
  img: string;
  articleUrl?: string;
  tools: string[];
  result: string;
  detail: string[];
  prev: string | null;
  next: string | null;
}> = {
  "terra-securities-times-square": {
    title: "Terra Securities — Times Square Takeover",
    category: "Outdoor & Experiential",
    img: terraSecurities,
    tools: ["Times Square Advertising", "Video Production", "Media Licensing"],
    result: "340K+ daily impressions, 22% inquiry spike within 48 hours of the billboard going live.",
    detail: [
      "Terra Securities, a boutique investment firm, needed instant brand authority in a market dominated by household names. We proposed and executed a full Times Square billboard takeover — a 30-second animated spot running on a premium screen at the intersection of 7th Avenue and 47th Street.",
      "The creative paired bold typography with the firm's signature teal-and-gold palette against the chaos of Times Square, ensuring the brand stopped pedestrians and drivers alike. We handled media buying, content production, licensing, and rights clearance end-to-end in under three weeks.",
      "The result? A brand that went from 'who?' to 'oh, them' overnight — with CEO interview requests from Bloomberg and CNBC following within the same week.",
    ],
    prev: null,
    next: "usa-today-keri-murphy",
  },
  "usa-today-keri-murphy": {
    title: "USA Today — Keri Murphy Feature",
    category: "PR & Media Placement",
    img: usatoday,
    articleUrl: "https://www.usatoday.com/story/money/business/2026/06/11/women-led-businesses-record-numbers-keri-murphy/34497/",
    tools: ["Press Outreach", "Story Pitching", "Media Relations", "Executive Branding"],
    result: "USA Today front-page business section feature, 120K+ article reads, 3 podcast invitations.",
    detail: [
      "Keri Murphy, a media entrepreneur on the verge of launching a new network focused on women-led businesses, needed a media anchor piece that would give her launch instant credibility and reach.",
      "We crafted a narrative that positioned Keri as a thought leader at the intersection of media, entrepreneurship, and women's leadership — tying her story to the record-breaking numbers of women-led businesses in 2026. We pitched USA Today exclusively with a tailored angle, securing a full-length feature in the business section.",
      "The article served as the cornerstone of her launch campaign, generating over 120,000 reads, three podcast interview invitations, and a 4x increase in inbound inquiries for her new network within the first week.",
    ],
    prev: "terra-securities-times-square",
    next: "forbes-jessica-feature",
  },
  "forbes-jessica-feature": {
    title: "Forbes — Jessica Executive Profile",
    category: "PR & Media Placement",
    img: forbesJessica,
    tools: ["Forbes Council Placement", "Ghostwriting", "Editorial Strategy", "Personal Branding"],
    result: "Full Forbes profile, 85K+ views, LinkedIn following grew by 340% in 90 days.",
    detail: [
      "Jessica, a fintech executive scaling a Series B startup, needed to transition from operator to industry voice. We developed a 6-month editorial strategy centered on securing a Forbes feature — the gold standard for executive credibility.",
      "We ghostwrote three thought-leadership articles for Forbes, each targeting a different segment of her audience: investors, peers, and potential clients. The flagship piece — on the future of decentralized compliance — became her most-read article, with over 85,000 views in the first month.",
      "Her LinkedIn following grew by 340% in 90 days, and she was invited to speak at two major fintech conferences within the quarter. The Forbes feature became the cornerstone of her personal brand, referenced in every investor deck and media kit thereafter.",
    ],
    prev: "usa-today-keri-murphy",
    next: "brand-book-design",
  },
  "brand-book-design": {
    title: "Brand Book Design",
    category: "Creative Production",
    img: brandBook,
    tools: ["Print Design", "Typography", "Layout Design", "Brand Strategy"],
    result: "Delivered a print-ready brand book that unified the client's identity across all 12 global offices.",
    detail: [
      "A rapidly scaling consultancy with 12 global offices was suffering from brand fragmentation — every regional team was interpreting the visual identity differently. They needed a single source of truth that teams from Singapore to São Paulo could apply consistently.",
      "We designed a 64-page brand book covering logo usage, color systems, typography, imagery guidelines, tone of voice, and real-world application examples. Every spread was designed for clarity: minimal text, large visual examples, and intuitive page navigation.",
      "The book was printed and distributed across all offices, and a digital version was built into the company's internal knowledge base. Brand consistency scores improved by 60% within the first quarter of adoption.",
    ],
    prev: "forbes-jessica-feature",
    next: "visual-identity-system",
  },
  "visual-identity-system": {
    title: "Visual Identity System",
    category: "Creative Production",
    img: branding2,
    tools: ["Logo Design", "Visual Identity", "Design Systems", "Brand Strategy"],
    result: "Unified brand identity deployed across web, mobile, packaging, and 50+ team members.",
    detail: [
      "A B2B SaaS startup with a strong product but a weak visual identity approached us three months before their Series A. Their existing brand — a wordmark in Arial — was undermining their credibility with investors and enterprise prospects.",
      "We ran a 4-week identity sprint: three logo concepts, stakeholder workshops, visual territory exploration, and a final identity anchored in a geometric wordmark paired with a modular icon system. The color palette was derived from data visualization — intentional, systematic, and reflective of their analytics product.",
      "We delivered a full visual system including typography stack, color tokens, icon library, UI component styling, presentation templates, and brand guidelines. The new identity launched alongside their Series A announcement and was praised by investors and tech press alike.",
    ],
    prev: "brand-book-design",
    next: "brand-identity-design",
  },
  "brand-identity-design": {
    title: "Brand Identity Design",
    category: "Creative Production",
    img: branding,
    tools: ["Logo Design", "Color Theory", "Typography", "Mockup Production"],
    result: "Complete identity system adopted across all consumer touchpoints within 60 days.",
    detail: [
      "A DTC wellness brand was launching in a crowded market and needed an identity that would stand out on Instagram feeds and retail shelves alike. The challenge: look premium without looking inaccessible.",
      "We developed a warm, earthy palette paired with a refined serif wordmark and playful secondary iconography. The typography system balanced editorial elegance with digital readability. Application mockups showed the brand across packaging, social templates, website, and physical retail.",
      "The brand launched to 40K Instagram followers in the first month, with the visual identity cited by customers as a key reason for trying the product. Retail partners specifically noted the shelf presence as a differentiator in a saturated category.",
    ],
    prev: "visual-identity-system",
    next: "executive-portrait-series",
  },
  "executive-portrait-series": {
    title: "Executive Portrait Series",
    category: "Photography",
    img: corporateHeadshot,
    tools: ["Photography", "Art Direction", "Lighting Design", "Post-Production"],
    result: "15 executive portraits delivered, deployed across the company's website, LinkedIn, and press kit.",
    detail: [
      "A leadership team of 15 at a professional services firm had inconsistent, outdated headshots — some were selfies, others decades old. With a major rebrand underway, they needed a unified, polished visual representation of their executive bench.",
      "We shot a two-day portrait series combining studio-lit headshots on white for consistency with environmental portraits in the firm's boardroom and city-view terrace for warmth. Art direction emphasized approachability and competence — relaxed poses, natural expressions, and careful attention to wardrobe.",
      "The full set was delivered retouched and optimized for web, print, and social. The new portraits were rolled out alongside the rebrand, creating an immediate impression of cohesion and professionalism across the firm's digital presence.",
    ],
    prev: "brand-identity-design",
    next: "forbes-media-placement",
  },
  "forbes-media-placement": {
    title: "Forbes Media Placement",
    category: "PR & Media Placement",
    img: forbes,
    tools: ["Media Relations", "Press Outreach", "Story Pitching", "Executive Positioning"],
    result: "Forbes editorial mention, 45K+ article views, 3 additional press inquiries within a week.",
    detail: [
      "A tech founder building in the AI infrastructure space needed mainstream credibility — not just in tech blogs, but in business media that investors and enterprise buyers actually read.",
      "We identified a trending angle around AI infrastructure spending, connected the founder's work to the macro narrative, and pitched Forbes with an exclusive. The resulting editorial mention positioned the founder alongside established industry names, lending immediate weight to every subsequent pitch deck and media appearance.",
      "Within a week of publication, the founder received three additional press inquiries — TechCrunch, Business Insider, and a podcast with a 100K+ listener base. The Forbes mention became a permanent credibility anchor, referenced in the company's press kit, investor updates, and LinkedIn headline.",
    ],
    prev: "executive-portrait-series",
    next: "website-design-development",
  },
  "website-design-development": {
    title: "Website Design & Development",
    category: "Digital",
    img: website,
    tools: ["UX Design", "Web Design", "Responsive Development", "SEO"],
    result: "40% increase in time-on-site, 25% conversion lift, mobile traffic up 60%.",
    detail: [
      "A professional services firm with a 5-year-old website was losing prospects to competitors with more modern digital presence. Their bounce rate was 68% and mobile conversions were nearly nonexistent.",
      "We redesigned from the ground up: information architecture restructured around user journeys, a modular design system for consistency, mobile-first responsive layouts, and performance-optimized builds. The visual language balanced corporate trustworthiness with modern, confident typography and intentional whitespace.",
      "Post-launch, time-on-site increased by 40%, mobile traffic grew 60%, and the contact form conversion rate rose 25%. The new site also achieved a 98 Lighthouse performance score and top-3 rankings for five key industry search terms within the first quarter.",
    ],
    prev: "forbes-media-placement",
    next: null,
  },
};

const projectSlugs = Object.keys(projects);

export const Route = createFileRoute("/portfolio/$slug")({
  head: ({ params }) => {
    const project = projects[params.slug];
    return {
      meta: [
        { title: `${project?.title || "Case Study"} — The Big Mouth PR` },
        {
          name: "description",
          content: project?.result || "Case study from The Big Mouth PR portfolio.",
        },
      ],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { slug } = Route.useParams();
  const project = projects[slug];

  if (!project) {
    return (
      <main className="lion-cursor bg-navy-deep text-cream">
        <SiteHeader />
        <section className="flex min-h-[60vh] items-center justify-center pt-24">
          <div className="text-center">
            <h1 className="font-display text-2xl sm:text-3xl md:text-5xl font-black">Project not found</h1>
            <Link to="/portfolio" className="mt-6 inline-flex items-center gap-2 text-gold hover:underline">
              <ArrowLeft className="h-4 w-4" /> Back to portfolio
            </Link>
          </div>
        </section>
        <Footer />
        <FloatingCTA />
        <LionInteractions />
      </main>
    );
  }

  const currentIndex = projectSlugs.indexOf(slug);

  return (
    <main className="lion-cursor bg-white text-navy-deep">
      <SiteHeader />
      <HeroImage project={project} />
      <Content project={project} />
      <Navigation slug={slug} project={project} currentIndex={currentIndex} />
      <MoreProjects currentSlug={slug} />
      <CTA />
      <Footer />
      <FloatingCTA />
      <LionInteractions />
    </main>
  );
}

function HeroImage({ project }: { project: (typeof projects)[string] }) {
  return (
    <section className="relative h-[50vh] min-h-[320px] w-full overflow-hidden md:min-h-[420px] md:h-[65vh]">
      <img
        src={project.img}
        alt={project.title}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/50 to-navy-deep/20" />
      <div className="absolute bottom-8 left-0 right-0 px-6 md:bottom-16">
        <div className="mx-auto max-w-4xl">
          <Link
            to="/portfolio"
            className="mb-6 inline-flex items-center gap-2 text-sm text-cream/70 transition hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" /> Back to portfolio
          </Link>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">{project.category}</p>
          <h1 className="mt-3 font-display text-2xl sm:text-3xl md:text-5xl font-black uppercase leading-[1.05] text-cream md:text-6xl">
            {project.title}
          </h1>
        </div>
      </div>
    </section>
  );
}

function Content({ project }: { project: (typeof projects)[string] }) {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto grid max-w-4xl gap-16 px-6">
        <div>
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-gold">
            <DotMark /> Overview
          </p>
          <div className="mt-8 space-y-6">
            {project.detail.map((para, i) => (
              <p key={i} className="text-lg leading-relaxed text-navy-deep/80">
                {para}
              </p>
            ))}
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Tools & Skills
            </p>
            <ul className="mt-5 space-y-3">
              {project.tools.map((t) => (
                <li key={t} className="flex items-center gap-3 text-navy-deep">
                  <Check className="h-4 w-4 shrink-0 text-gold" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Results
            </p>
            <p className="mt-5 text-lg leading-relaxed text-navy-deep/80">
              {project.result}
            </p>
            {project.articleUrl && (
              <a
                href={project.articleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy-deep px-6 py-3 text-sm font-bold uppercase tracking-wider text-cream transition hover:scale-[1.02] hover:bg-navy"
              >
                Read Article <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Navigation({
  slug,
  project,
  currentIndex,
}: {
  slug: string;
  project: (typeof projects)[string];
  currentIndex: number;
}) {
  return (
    <section className="border-t border-navy-deep/10 bg-cream/50 py-12">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6">
        {project.prev ? (
          <Link
            to="/portfolio/$slug"
            params={{ slug: project.prev }}
            className="group flex items-center gap-3 text-sm font-medium text-navy-deep/60 transition hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
            <span className="hidden sm:inline">Previous</span>
          </Link>
        ) : (
          <div />
        )}
        <Link
          to="/portfolio"
          className="text-sm font-medium text-navy-deep/40 transition hover:text-gold"
        >
          All projects
        </Link>
        {project.next ? (
          <Link
            to="/portfolio/$slug"
            params={{ slug: project.next }}
            className="group flex items-center gap-3 text-sm font-medium text-navy-deep/60 transition hover:text-gold"
          >
            <span className="hidden sm:inline">Next</span>
            <ArrowLeft className="h-4 w-4 rotate-180 transition group-hover:translate-x-1" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </section>
  );
}

function MoreProjects({ currentSlug }: { currentSlug: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const otherEntries = Object.entries(projects).filter(([slug]) => slug !== currentSlug);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -340 : 340, behavior: "smooth" });
  };

  return (
    <section className="border-t border-navy-deep/10 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-gold">
              <DotMark /> More Projects
            </p>
            <h2 className="mt-3 font-display text-3xl font-black text-navy-deep">Keep exploring</h2>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button onClick={() => scroll("left")} className="grid h-10 w-10 place-items-center rounded-full border border-navy-deep/20 text-navy-deep transition hover:bg-navy-deep hover:text-white">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={() => scroll("right")} className="grid h-10 w-10 place-items-center rounded-full border border-navy-deep/20 text-navy-deep transition hover:bg-navy-deep hover:text-white">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="scrollbar-hide flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory"
        >
          {otherEntries.map(([slug, p]) => (
            <Link
              key={slug}
              to="/portfolio/$slug"
              params={{ slug }}
              className="group flex-shrink-0 w-[280px] sm:w-[320px] snap-start overflow-hidden rounded-2xl bg-navy-deep ring-1 ring-cream/10 transition hover:-translate-y-1 hover:ring-gold"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
              </div>
              <div className="p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold">{p.category}</p>
                <h3 className="mt-2 font-display text-lg font-bold text-cream group-hover:text-gold transition-colors">{p.title}</h3>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold">
                  View case study <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-navy-deep py-20 text-center">
      <div className="mx-auto max-w-2xl px-6">
        <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-black text-cream md:text-5xl">
          Ready to make <span className="text-gold italic">your noise?</span>
        </h2>
        <p className="mt-4 text-cream/65">
          Every brand has a story worth shouting. Let's make yours the one they can't stop talking about.
        </p>
        <Link
          to="/contact-us"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold uppercase tracking-wider text-navy-deep shadow-gold transition hover:scale-[1.03]"
        >
          Start your project <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
