import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Upload, Loader2, Sparkles } from "lucide-react";
import { SiteHeader, Footer, FloatingCTA, LionInteractions, DotMark } from "./index";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Join The Big Mouth PR" },
      { name: "description", content: "We're always looking for talent who can match our roar. Drop your resume and join The Big Mouth PR." },
    ],
  }),
  component: CareersPage,
});

function CareersPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError(null);

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: fd.get("name") as string,
      email: fd.get("email") as string,
      phone: fd.get("phone") as string,
      message: fd.get("message") as string,
      cv: fileName || "No CV attached",
    };

    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="lion-cursor bg-navy-deep text-cream">
      <SiteHeader />
      <section className="relative overflow-hidden pt-24 pb-16 md:pt-36 md:pb-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-gold">
            <DotMark /> Join the pride
          </p>
          <h1 className="mt-5 font-display text-5xl font-black uppercase leading-[0.95] md:text-7xl">
            Match our <span className="text-gold italic">roar.</span>
          </h1>
          <p className="mt-6 text-lg text-cream/70 max-w-xl mx-auto">
            We are always looking for talent who can match our roar. Drop your resume and someone from our team will get back to you when there's a match.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-32">
        <div className="mx-auto max-w-2xl px-6">
          {submitted ? (
            <div className="flex flex-col items-center rounded-3xl bg-cream/5 p-12 text-center">
              <Sparkles className="h-12 w-12 text-gold" />
              <h2 className="mt-6 font-display text-3xl font-black text-cream">Roar received!</h2>
              <p className="mt-3 max-w-sm text-cream/70">We've got your details. If there's a match, someone from our team will reach out. No promises — but we love ambition.</p>
              <Link to="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold uppercase tracking-wider text-navy-deep transition hover:scale-[1.03]">
                Back home <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-3xl bg-cream/5 p-8 md:p-10">
              <h2 className="font-display text-2xl font-black uppercase">Tell us about yourself</h2>
              <p className="mt-2 text-sm text-cream/60">No formalities. Just the good stuff.</p>

              {error && <p className="mt-4 rounded-xl bg-red-500/20 px-4 py-3 text-sm text-red-200">{error}</p>}

              <div className="mt-8 grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-cream/60">Full Name</span>
                    <input required name="name" type="text" className="mt-1.5 w-full rounded-xl border border-cream/15 bg-navy-deep/40 px-4 py-3 text-sm text-cream placeholder:text-cream/45 focus:border-gold focus:outline-none" placeholder="Your name" />
                  </label>
                  <label className="block">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-cream/60">Email</span>
                    <input required name="email" type="email" className="mt-1.5 w-full rounded-xl border border-cream/15 bg-navy-deep/40 px-4 py-3 text-sm text-cream placeholder:text-cream/45 focus:border-gold focus:outline-none" placeholder="you@example.com" />
                  </label>
                </div>
                <label className="block">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-cream/60">Phone</span>
                  <input name="phone" type="tel" className="mt-1.5 w-full rounded-xl border border-cream/15 bg-navy-deep/40 px-4 py-3 text-sm text-cream placeholder:text-cream/45 focus:border-gold focus:outline-none" placeholder="+1 (555) 000-0000" />
                </label>
                <label className="block">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-cream/60">What do you bring to the table?</span>
                  <textarea required name="message" rows={4} className="mt-1.5 w-full rounded-xl border border-cream/15 bg-navy-deep/40 px-4 py-3 text-sm text-cream placeholder:text-cream/45 focus:border-gold focus:outline-none" placeholder="Tell us about your experience, skills, and why you'd be a great fit..." />
                </label>
                <label className="block">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-cream/60">Upload your CV / Resume</span>
                  <div className="mt-1.5 flex items-center gap-3 rounded-xl border border-dashed border-cream/20 bg-navy-deep/20 px-4 py-5">
                    <input
                      type="file"
                      name="cv"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => setFileName(e.target.files?.[0]?.name || null)}
                      className="hidden"
                      id="cv-upload"
                    />
                    <label htmlFor="cv-upload" className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-cream/10 px-4 py-2 text-sm font-semibold text-cream transition hover:bg-cream/20">
                      <Upload className="h-4 w-4" /> Choose file
                    </label>
                    <span className="text-sm text-cream/50">{fileName || "No file selected (PDF, DOC, DOCX)"}</span>
                  </div>
                </label>
              </div>

              <button type="submit" disabled={sending}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-bold uppercase tracking-wider text-navy-deep shadow-gold transition hover:scale-[1.02] disabled:opacity-60"
              >
                {sending ? <><Loader2 className="h-4 w-4 animate-spin" /> Submitting...</> : <>Send my application <ArrowRight className="h-4 w-4" /></>}
              </button>
            </form>
          )}
        </div>
      </section>
      <Footer />
      <FloatingCTA />
      <LionInteractions />
    </main>
  );
}
