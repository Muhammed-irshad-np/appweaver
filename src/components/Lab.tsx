import React from 'react';
import { Bot, Cpu, Smartphone } from 'lucide-react';
import { tracks } from '@/data/site';

const trackIcons = { agentic: Bot, physical: Cpu, apps: Smartphone } as const;

const principles = [
  { n: '01', title: 'Ship, then sharpen', body: 'Small releases to real users. Usage data decides what we build next, not roadmaps.' },
  { n: '02', title: 'Evals before launch', body: 'Every model-driven feature gets a test set and a pass bar before it reaches a user.' },
  { n: '03', title: 'Humans stay in charge', body: 'Agents act on their own for routine work and hand the important decisions back to a person.' },
  { n: '04', title: 'Private by design', body: 'On-device inference where we can, official APIs only, and no data we don’t need.' },
];

const Lab = () => {
  return (
    <section id="lab" className="border-t border-border bg-card/30 py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <p className="eyebrow">02 · The lab</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Three research tracks. One goal: AI products that work.
          </h2>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {tracks.map((track) => {
            const Icon = trackIcons[track.id as keyof typeof trackIcons];
            return (
              <article key={track.id} className="rounded-2xl border border-border bg-background p-7">
                <div className="flex items-center justify-between">
                  <Icon className="h-6 w-6 text-primary" />
                  <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{track.label}</span>
                </div>
                <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight">{track.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{track.body}</p>
                <ul className="mt-6 space-y-2 border-t border-border pt-5">
                  {track.points.map((point) => (
                    <li key={point} className="flex items-center gap-2.5 font-mono text-xs">
                      <span className="text-primary">+</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="eyebrow">How we build</p>
            <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight">
              A product lab, not an agency.
            </h3>
            <p className="mt-4 text-muted-foreground">
              We pick problems we understand, build the AI product end to end, and keep improving it with the people using it.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {principles.map((p) => (
              <div key={p.n} className="bg-background p-6">
                <p className="font-mono text-xs text-primary">{p.n}</p>
                <h4 className="mt-3 font-display text-lg font-semibold">{p.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lab;
