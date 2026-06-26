import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Play,
  X,
  Plus,
  Minus,
  Megaphone,
  Compass,
  Eye,
  Heart,
  Flame,
  Shield,
  Sparkles,
  Users,
  Volume2,
  ArrowRight,
  Linkedin,
  Instagram,
  Twitter,
} from "lucide-react";

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
import storyThumb from "@/assets/story-video-thumb.jpg";
import storyThumbVideo from "@/assets/video/thumb-our-story.jpg";
import storyVideo from "@/assets/video/the-big-mouth-pr-final-cut.webm";
import happiness1 from "@/assets/cheif-happiness-officer-1.jpg";
import happiness2 from "@/assets/cheif-happiness-officer-2.jpg";
import happiness3 from "@/assets/cheif-happiness-officer-3.jpg";
import happiness4 from "@/assets/cheif-happiness-officer-4.jpg";
import viceRoarCorporate from "@/assets/vice-roar-sales.jpg";
import viceRoarFull from "@/assets/vice-roar-sales-2.jpg";
import srConsultantCorporate from "@/assets/sr-roar-consultant.jpg";
import srConsultantFull from "@/assets/senior-roar-consultant-2.jpg";
import digitalRoarCorporate from "@/assets/digital-roar-officer.jpg";
import digitalRoarFull from "@/assets/Digital Roar Officer 2.jpg";

const LION_URL = lionUrl;
const ICON_URL = iconUrl;

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us — The Big Mouth PR" },
      {
        name: "description",
        content:
          "The Big Mouth PR is a loud-by-design brand and PR studio. Meet our story, mission, vision, values and the team building category-defining voices.",
      },
      { property: "og:title", content: "About Us — The Big Mouth PR" },
      {
        property: "og:description",
        content:
          "Loud, unmissable PR for founders, executives and brands. Our story, mission, vision, values and team.",
      },
    ],
  }),
  component: AboutPage,
});

/* =============== HERO =============== */
function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-navy-deep pt-28 text-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-icon-pattern"
        style={{ "--icon-url": `url(${ICON_URL})` } as React.CSSProperties}
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.1fr_1fr] lg:py-28">
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.4em] text-cream/60 hover:text-gold"
          >
            ← Back to The Big Mouth PR
          </Link>
          <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-cream/15 bg-cream/5 px-4 py-1.5">
            <DotMark />
            <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-cream/75">
              About · The Big Mouth PR
            </span>
          </div>
          <h1 className="mt-6 font-display text-3xl sm:text-4xl md:text-6xl font-black uppercase leading-[0.95] tracking-tight md:text-7xl">
            We don't <span className="text-gold">Whisper.</span> We <span className="text-gold">Roar.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream/75 md:text-xl">
            The Big Mouth PR is a loud-by-design brand &amp; PR studio for the
            founders, executives and brands who refuse to be the{" "}
            <span className="text-gold font-semibold">best-kept secret.</span>
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#story"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-bold uppercase tracking-wider text-navy-deep shadow-gold transition hover:scale-[1.03]"
            >
              <Volume2 className="h-4 w-4" /> Our story
            </a>
            <a
              href="#team"
              className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-7 py-4 text-sm font-bold uppercase tracking-wider text-cream hover:border-gold hover:text-gold"
            >
              Meet the pride <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute -inset-10 rounded-full bg-gold/10 blur-3xl"
          />
          <img
            src={LION_URL}
            alt="The Big Mouth PR lion mascot"
            className="relative mx-auto h-[420px] w-auto drop-shadow-2xl md:h-[520px]"
          />
        </div>
      </div>
    </section>
  );
}

/* =============== STORY (with video) =============== */
function Story() {
  const [open, setOpen] = useState(false);
  return (
    <section id="story" className="relative bg-white py-24 md:py-32">
      <img
        src={ICON_URL}
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-0 top-10 hidden h-48 w-auto opacity-[0.05] md:block"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div className="relative">
          <button
            onClick={() => setOpen(true)}
            className="group relative block w-full overflow-hidden rounded-2xl shadow-luxe"
            aria-label="Play our story"
          >
            <img
              src={storyThumbVideo}
              alt="The Big Mouth PR story"
              loading="lazy"
              className="h-[520px] w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-navy-deep/70 via-navy-deep/20 to-transparent" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="relative">
                <span className="absolute inset-0 -m-2 animate-pulse-glow rounded-full" />
                <span className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gold text-navy-deep shadow-gold transition group-hover:scale-110">
                  <Play className="ml-1 h-9 w-9 fill-current" />
                </span>
              </span>
            </span>
            <span className="absolute bottom-6 left-6 inline-flex items-center gap-2 rounded-full bg-navy-deep/70 px-4 py-1.5 text-[11px] uppercase tracking-widest text-cream backdrop-blur">
              <DotMark /> Watch our story · 2:14
            </span>
          </button>
        </div>

        <div>
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-gold">
            <DotMark /> Our story
          </p>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-6xl font-black uppercase leading-[0.95] text-navy-deep md:text-6xl">
            Built for the ones <br />
            who refuse to be the <br />
            <span className="text-gold italic">best-kept secret.</span>
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-navy/80">
            Most agencies polish you until you're palatable. We do the opposite.
            We find the loudest, truest, most magnetic version of you — and we
            hand the world a megaphone.
          </p>
          <p className="mt-4 text-base leading-relaxed text-navy/70">
            Twelve years. Three continents. One belief:{" "}
            <em className="font-semibold text-navy-deep">
              a quiet brand is a forgotten brand.
            </em>
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-navy-deep/10 pt-8">
            <Stat n="340%" label="Avg inbound lift" />
            <Stat n="700+" label="Distribution platforms" />
            <Stat n="120+" label="Loud leaders served" />
          </div>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-deep/95 p-4 backdrop-blur"
          onClick={() => setOpen(false)}
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute right-6 top-6 rounded-full bg-cream/10 p-3 text-cream hover:bg-gold hover:text-navy-deep"
            aria-label="Close video"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-black shadow-luxe"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={storyVideo}
              className="w-full"
              controls
              playsInline
              poster={storyThumbVideo}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <p className="font-display text-2xl sm:text-3xl md:text-5xl font-black text-navy-deep">{n}</p>
      <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-navy/55">
        {label}
      </p>
    </div>
  );
}

/* =============== MISSION / VISION =============== */
function MissionVision() {
  const cards = [
    {
      icon: Compass,
      tag: "Mission",
      title: "Make the right people impossible to ignore.",
      body: "We turn founders, executives and brands into the loudest, most magnetic voice in their category — through brand strategy, PR, content and distribution that actually moves the needle.",
      accent: "bg-gold text-navy-deep",
    },
    {
      icon: Eye,
      tag: "Vision",
      title: "A world where the boldest voices win.",
      body: "We see a future where talent and conviction beat budgets and gatekeepers. Our job is to make sure the people changing industries are the ones being heard — not the ones shouting the longest.",
      accent: "bg-navy-deep text-cream",
    },
  ];

  return (
    <section className="relative bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-gold">
            <DotMark /> Why we exist
          </p>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-6xl font-black uppercase leading-[0.95] text-navy-deep md:text-6xl">
            Mission &amp; <span className="text-gold italic">vision.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {cards.map((c) => (
            <article
              key={c.tag}
              className="group relative overflow-hidden rounded-3xl border border-navy-deep/10 bg-white p-10 shadow-sm transition hover:shadow-luxe"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-gold/10 blur-2xl transition group-hover:bg-gold/20"
              />
              <div
                className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${c.accent}`}
              >
                <c.icon className="h-7 w-7" />
              </div>
              <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.4em] text-gold">
                {c.tag}
              </p>
              <h3 className="mt-3 font-display text-3xl font-black uppercase leading-tight text-navy-deep md:text-4xl">
                {c.title}
              </h3>
              <p className="mt-5 text-base leading-relaxed text-navy/75">
                {c.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =============== CORE VALUES =============== */
const values = [
  {
    icon: Megaphone,
    title: "Loud by design",
    body: "If it's safe, it's invisible. We pick bold over polite — every single time.",
  },
  {
    icon: Heart,
    title: "Truth first",
    body: "We amplify who you really are. No fake personas, no borrowed voices.",
  },
  {
    icon: Flame,
    title: "Earn the roar",
    body: "Attention is a privilege. We back every campaign with substance, receipts and results.",
  },
  {
    icon: Shield,
    title: "Protect the pride",
    body: "Your reputation is sacred. Discretion, ethics and care are non-negotiable.",
  },
  {
    icon: Sparkles,
    title: "Craft obsessed",
    body: "Words, design, strategy — we sweat the details until the work crackles.",
  },
  {
    icon: Users,
    title: "In your corner",
    body: "We're an extension of your team. Direct, fast, allergic to vanity reports.",
  },
];

function Values() {
  return (
    <section className="relative bg-white py-24 md:py-32">
      <img
        src={ICON_URL}
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-10 hidden h-40 w-auto -translate-x-1/2 opacity-[0.04] md:block"
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-gold">
            <DotMark /> Core values
          </p>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-6xl font-black uppercase leading-[0.95] text-navy-deep md:text-6xl">
            What we <span className="text-gold italic">stand on.</span>
          </h2>
          <p className="mt-5 text-navy/70">
            Six rules that decide who we work with, how we build and the work we
            put our name on.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="group relative overflow-hidden rounded-2xl border border-navy-deep/10 bg-card p-7 transition hover:-translate-y-1 hover:border-gold hover:shadow-luxe"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy-deep text-gold transition group-hover:bg-gold group-hover:text-navy-deep">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-black uppercase text-navy-deep">
                {v.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/70">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =============== TEAM =============== */
const team = [
  {
    name: "Alvin",
    role: "Chief Roar Officer",
    bio: "The voice behind the roar. Alvin leads strategy and vision — louder than any competitor dares.",
    img: happiness3,
    imgFull: happiness4,
    socials: { linkedin: "#", instagram: "https://www.instagram.com/the_big_mouth_pr/", x: "https://x.com/TheBigMouthpr" },
  },
  {
    name: "Emma Baker",
    role: "Chief Happiness Officer",
    bio: "Keeps the team, clients, and culture smiling. Emma ensures every client feels like the center of the universe.",
    img: happiness1,
    imgFull: happiness2,
    socials: { linkedin: "#", instagram: "https://www.instagram.com/the_big_mouth_pr/", x: "https://x.com/TheBigMouthpr" },
  },
  {
    name: "Chris James",
    role: "Vice Roar Sales",
    bio: "Turns handshakes into partnerships. Chris leads the sales engine with charm and strategic firepower.",
    img: viceRoarCorporate,
    imgFull: viceRoarFull,
    socials: { linkedin: "#", instagram: "https://www.instagram.com/the_big_mouth_pr/", x: "https://x.com/TheBigMouthpr" },
  },
  {
    name: "Nikita Johnson",
    role: "Sr. Roar Consultant",
    bio: "Seasoned strategist who maps the route from unseen to undeniable. Nikita builds brands that dominate their categories.",
    img: srConsultantCorporate,
    imgFull: srConsultantFull,
    socials: { linkedin: "#", instagram: "https://www.instagram.com/the_big_mouth_pr/", x: "https://x.com/TheBigMouthpr" },
  },
  {
    name: "Gavin",
    role: "Digital Roar Officer",
    bio: "Owns every pixel and platform. Gavin engineers digital dominance that leaves competitors scrambling.",
    img: digitalRoarCorporate,
    imgFull: digitalRoarFull,
    socials: { linkedin: "#", instagram: "https://www.instagram.com/the_big_mouth_pr/", x: "https://x.com/TheBigMouthpr" },
  },
];

function TeamCard({ member }: { member: (typeof team)[number] }) {
  const [tapped, setTapped] = useState(false);
  const hasFullBody = "imgFull" in member && member.imgFull !== member.img;

  return (
    <article
      className="group relative overflow-hidden rounded-2xl bg-cream/5 ring-1 ring-cream/10 transition hover:ring-gold"
      onClick={() => hasFullBody && setTapped((v) => !v)}
    >
      <div className="relative h-96 w-full overflow-hidden md:h-[420px]">
        <img
          src={member.img}
          alt={member.name}
          loading="lazy"
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
            hasFullBody
              ? tapped
                ? "opacity-0 scale-110"
                : "opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-110"
              : "opacity-100 group-hover:scale-105"
          }`}
        />
        {hasFullBody && (
          <img
            src={member.imgFull}
            alt={member.name}
            loading="lazy"
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
              tapped
                ? "opacity-100 scale-100"
                : "opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100"
            }`}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/30 to-transparent" />
        <div className="absolute right-4 top-4 flex gap-2 opacity-0 transition group-hover:opacity-100">
          <a
            href={member.socials.linkedin}
            aria-label={`${member.name} on LinkedIn`}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gold text-navy-deep hover:scale-110"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={member.socials.instagram}
            aria-label={`${member.name} on Instagram`}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cream text-navy-deep hover:scale-110"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href={member.socials.x}
            aria-label={`${member.name} on X`}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cream text-navy-deep hover:scale-110"
          >
            <Twitter className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl font-black uppercase text-cream">
          {member.name}
        </h3>
        <p className="mt-1 text-xs font-bold uppercase tracking-[0.25em] text-gold">
          {member.role}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-cream/75">
          {member.bio}
        </p>
      </div>
    </article>
  );
}

function Team() {
  return (
    <section id="team" className="relative bg-navy-deep py-24 text-cream md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-icon-pattern"
        style={{ "--icon-url": `url(${ICON_URL})` } as React.CSSProperties}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-gold">
              <DotMark /> The pride
            </p>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-6xl font-black uppercase leading-[0.95] md:text-6xl">
              Meet the <span className="text-gold italic">roar makers.</span>
            </h2>
          </div>
          <p className="max-w-md text-cream/70">
            Strategists, storytellers, designers and operators — all obsessed
            with making your brand impossible to scroll past.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <TeamCard key={m.name} member={m} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =============== FAQ (all services) =============== */
const faqGroups: { group: string; items: { q: string; a: string }[] }[] = [
  {
    group: "About us",
    items: [
      {
        q: "Who is The Big Mouth PR for?",
        a: "Founders, C-level executives, authors, speakers and high-profile professionals who are ready to be seen — not shy. We also work with growth-stage brands that need a louder, sharper voice.",
      },
      {
        q: "Where are you based and who do you serve?",
        a: "We're remote-first with hubs across three continents. We work with clients globally — currently across the US, UK, UAE, India, Singapore and Europe.",
      },
      {
        q: "How is The Big Mouth PR different from a traditional agency?",
        a: "Traditional agencies polish you into something safe. We do the opposite — we find the loudest, truest version of you and hand the world a megaphone. Strategy, PR, content and distribution under one roof.",
      },
    ],
  },
  {
    group: "Executive & Personal Branding",
    items: [
      {
        q: "What does a personal branding engagement include?",
        a: "Brand strategy, visual identity, narrative positioning, LinkedIn build-out, thought-leadership content, speaker kits and ongoing media placements — calibrated to your goals.",
      },
      {
        q: "How long until I see results?",
        a: "Most clients see meaningful media or audience movement inside 60–90 days. Wikipedia, authored books and audiobooks take longer by design.",
      },
    ],
  },
  {
    group: "Media & PR",
    items: [
      {
        q: "Do you guarantee press coverage?",
        a: "No ethical agency can guarantee coverage — anyone who does is selling fluff. What we guarantee is the strategy, the pitch craft, the relationships and the consistency that earn coverage.",
      },
      {
        q: "Can you handle reputation crises?",
        a: "Yes — discreetly. Crisis communications, online reputation management and rapid-response narratives are core services.",
      },
    ],
  },
  {
    group: "Content & Social",
    items: [
      {
        q: "Do you actually produce the content, or just strategy?",
        a: "Both. We script, shoot, edit and ship — reels, long-form video, podcasts, LinkedIn carousels, newsletters and more. Strategy without execution is just a deck.",
      },
      {
        q: "Will you use my voice or a generic agency voice?",
        a: "Your voice — always. We run voice-mining sessions and build a tone-of-voice playbook before a single post goes out.",
      },
    ],
  },
  {
    group: "Engagements & pricing",
    items: [
      {
        q: "Do you offer one-off services or only retainers?",
        a: "Both. Pick a single service (LinkedIn build, ISBN registration, speaker kit) or a full personal-brand or PR retainer.",
      },
      {
        q: "Is the 30-minute strategy call really free?",
        a: "Yes. Zero obligation. You leave with a custom 90-day roadmap whether or not we work together.",
      },
      {
        q: "How do we get started?",
        a: "Book a strategy call. We'll diagnose, send a tailored scope of work, and if it's a fit, kick off within two weeks.",
      },
    ],
  },
];

function FAQ() {
  const [open, setOpen] = useState<string | null>("0-0");
  return (
    <section id="faq" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-gold">
            <DotMark /> FAQ
          </p>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-6xl font-black uppercase leading-[0.95] text-navy-deep md:text-6xl">
            Loud questions, <span className="text-gold italic">louder answers.</span>
          </h2>
          <p className="mt-5 text-navy/70">
            Everything you wanted to ask about us and our services — in one place.
          </p>
        </div>

        <div className="mt-14 space-y-12">
          {faqGroups.map((grp, gi) => (
            <div key={grp.group}>
              <div className="mb-5 flex items-center gap-3">
                <MouthMark className="h-5 w-5 text-gold" />
                <h3 className="font-display text-2xl font-black uppercase text-navy-deep">
                  {grp.group}
                </h3>
              </div>
              <div className="space-y-3">
                {grp.items.map((f, i) => {
                  const key = `${gi}-${i}`;
                  const isOpen = open === key;
                  return (
                    <button
                      key={f.q}
                      onClick={() => setOpen(isOpen ? null : key)}
                      className="block w-full rounded-2xl border border-navy-deep/10 bg-card p-6 text-left transition hover:border-gold md:p-7"
                    >
                      <div className="flex items-center justify-between gap-6">
                        <h4 className="font-display text-lg font-bold text-navy-deep md:text-xl">
                          {f.q}
                        </h4>
                        {isOpen ? (
                          <Minus className="h-5 w-5 shrink-0 text-gold" />
                        ) : (
                          <Plus className="h-5 w-5 shrink-0 text-navy-deep" />
                        )}
                      </div>
                      {isOpen && (
                        <p className="mt-4 text-base leading-relaxed text-navy/75">
                          {f.a}
                        </p>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =============== CTA strip =============== */
function CTAStrip() {
  return (
    <section className="relative overflow-hidden bg-gold py-20 text-navy-deep">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-icon-pattern-sm"
        style={{ "--icon-url": `url(${ICON_URL})` } as React.CSSProperties}
      />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center">
        <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-black uppercase leading-[0.95] md:text-6xl">
          Ready to make some noise?
        </h2>
        <p className="max-w-2xl text-lg text-navy-deep/80">
          Book a free 30-minute strategy call. Walk away with a 90-day roadmap —
          whether or not we work together.
        </p>
        <Link
          to="/"
          hash="contact"
          className="inline-flex items-center gap-2 rounded-full bg-navy-deep px-8 py-4 text-sm font-bold uppercase tracking-wider text-cream transition hover:scale-[1.03]"
        >
          <Volume2 className="h-4 w-4" /> Start your roar
        </Link>
      </div>
    </section>
  );
}

/* =============== PAGE =============== */
function AboutPage() {
  return (
    <div className="lion-cursor min-h-screen bg-white text-navy-deep">
      <LionInteractions />
      <SiteHeader />
      <AboutHero />
      <Story />
      <MissionVision />
      <Values />
      <Team />
      <FAQ />
      <CTAStrip />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
