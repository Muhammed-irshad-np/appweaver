import React from 'react';
import { ArrowUpRight, Check, FlaskConical, Handshake, ShieldBan, Bot, LineChart } from 'lucide-react';
import { flagship, labProducts, upnow } from '@/data/site';

const capabilityIcons = [Handshake, ShieldBan, Bot, LineChart];

const Products = () => {
  return (
    <section id="products" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <p className="eyebrow">01 · Products</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            AI products we design, build and ship ourselves.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            No client work. Every app here is ours, with AI at the core rather than bolted on.
          </p>
        </div>

        {/* Flagship */}
        <article className="mt-14 overflow-hidden rounded-3xl border border-border bg-card">
          <div className="grid lg:grid-cols-[1fr_1.15fr]">
            <div className="flex flex-col p-8 md:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-primary/15 px-3 py-1 font-mono text-[11px] font-medium text-primary">
                  Flagship · Early access
                </span>
                <span className="font-mono text-[11px] text-muted-foreground">{flagship.kind}</span>
              </div>

              <img src={flagship.logo} alt="ReadyDM" className="mt-8 h-10 w-auto self-start" width={200} height={40} />

              <h3 className="mt-6 font-display text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
                {flagship.headline}
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{flagship.description}</p>

              <ul className="mt-6 space-y-2">
                {flagship.facts.map((fact) => (
                  <li key={fact} className="flex items-center gap-2.5 text-sm">
                    <Check className="h-4 w-4 shrink-0 text-primary" />
                    {fact}
                  </li>
                ))}
              </ul>

              <a
                href={flagship.url}
                target="_blank"
                rel="noopener"
                className="mt-8 inline-flex items-center gap-2 self-start rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Visit readydm.com
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-px border-t border-border bg-border sm:grid-cols-2 lg:border-l lg:border-t-0">
              {flagship.capabilities.map((cap, i) => {
                const Icon = capabilityIcons[i];
                return (
                  <div key={cap.title} className="bg-card p-7">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="mt-5 font-display text-lg font-semibold">{cap.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cap.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </article>

        {/* Live on Google Play */}
        <article className="mt-6 grid gap-8 rounded-3xl border border-border bg-card p-8 md:p-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-primary/15 px-3 py-1 font-mono text-[11px] font-medium text-primary">
                Live on Google Play
              </span>
              <span className="font-mono text-[11px] text-muted-foreground">{upnow.kind}</span>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <img src={upnow.icon} alt="" className="h-16 w-16 rounded-2xl" width={64} height={64} />
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-tight">{upnow.name}</h3>
                <p className="text-sm text-muted-foreground">{upnow.fullName}</p>
              </div>
            </div>
            <p className="mt-6 font-display text-xl font-semibold leading-snug md:text-2xl">{upnow.headline}</p>
            <p className="mt-3 leading-relaxed text-muted-foreground">{upnow.description}</p>
            <a
              href={upnow.url}
              target="_blank"
              rel="noopener"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get it on Google Play
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border">
            {upnow.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 bg-background p-5 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {feature}
              </li>
            ))}
          </ul>
        </article>

        {/* In the lab */}
        <div className="mt-16 flex items-center gap-3">
          <FlaskConical className="h-4 w-4 text-primary" />
          <p className="eyebrow">In the lab</p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {labProducts.map((product) => (
            <article
              key={product.name}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-background font-display text-xl font-semibold text-primary ring-1 ring-border">
                  {product.name[0]}
                </div>
                <span className="font-mono text-[11px] text-muted-foreground">{product.status}</span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold">{product.name}</h3>
              <p className="font-mono text-xs text-primary">{product.kind}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {product.ai.map((tag) => (
                  <span key={tag} className="rounded-md border border-border px-2 py-1 font-mono text-[11px] text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
