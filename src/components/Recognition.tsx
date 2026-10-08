import React from 'react';
import { ArrowUpRight, BadgeCheck } from 'lucide-react';
import { company, recognition } from '@/data/site';

const Recognition = () => {
  const backlinks = recognition.filter((item) => item.type !== 'Registration');

  return (
    <section id="recognition" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <p className="eyebrow">03 · Recognition</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            A registered Indian AI startup.
          </h2>
        </div>

        <a
          href={company.udyamVerifyUrl}
          target="_blank"
          rel="noopener"
          className="group mt-12 flex flex-col gap-6 rounded-3xl border border-primary/30 bg-primary/[0.06] p-6 sm:p-8 transition-colors hover:border-primary/60 md:flex-row md:items-center md:justify-between md:p-10"
        >
          <div className="flex items-start gap-4 sm:gap-5">
            <div className="flex h-11 w-11 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <BadgeCheck className="h-7 w-7" />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-primary">Udyam registered MSME</p>
              <p className="mt-2 font-display text-xl font-semibold tracking-tight whitespace-nowrap sm:text-2xl md:text-3xl">{company.udyam}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Registered with the Ministry of Micro, Small &amp; Medium Enterprises, Government of India.
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 self-start text-sm font-medium text-primary md:self-center">
            Verify on udyamregistration.gov.in
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </a>

        {backlinks.length > 0 && (
          <ul className="mt-6 divide-y divide-border rounded-2xl border border-border bg-card">
            {backlinks.map((item) => (
              <li key={item.url}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener"
                  className="flex flex-col gap-2 p-6 transition-colors hover:bg-accent sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-widest text-primary">{item.type}</p>
                    <p className="mt-1 font-display text-lg font-semibold">{item.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.issuer}
                      {item.detail && ` · ${item.detail}`}
                    </p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground" />
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Recognition;
