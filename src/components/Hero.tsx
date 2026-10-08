import React from 'react';
import { ArrowRight, BadgeCheck } from 'lucide-react';
import { company } from '@/data/site';
import AgentConsole from '@/components/AgentConsole';

const keywords = [
  'Agentic AI',
  'Physical AI',
  'LLM agents',
  'On-device ML',
  'Multimodal apps',
  'AI for creators',
  'Human-in-the-loop',
  'Evals-first',
  'Android · iOS · Web',
];

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute inset-0 glow" />

      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <a
              href={company.udyamVerifyUrl}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 font-mono text-[11px] text-muted-foreground transition-colors hover:text-foreground"
            >
              <BadgeCheck className="h-3.5 w-3.5 text-primary" />
              AI product lab · {company.city} · Udyam MSME
            </a>

            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              We build AI products.
              <span className="block text-primary">Better ones.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              AppWeavers Labs is a small, AI-first startup that designs, builds and ships its own
              AI-native apps for mobile and the web. Agentic AI that takes action, physical AI that
              senses the real world, and AI applications people actually use.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                See our AI products
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 font-medium transition-colors hover:bg-accent"
              >
                {company.email}
              </a>
            </div>
          </div>

          <AgentConsole />
        </div>
      </div>

      <div className="relative mt-20 border-y border-border bg-card/40 py-4 overflow-hidden">
        <div className="flex w-max animate-marquee gap-10 font-mono text-sm text-muted-foreground">
          {[...keywords, ...keywords].map((k, i) => (
            <span key={i} className="flex items-center gap-10 whitespace-nowrap">
              {k}
              <span className="text-primary">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
