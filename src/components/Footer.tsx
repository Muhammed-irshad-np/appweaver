import React from 'react';
import { company, flagship } from '@/data/site';
import Logo from '@/components/Logo';

const Footer = () => {
  return (
    <footer className="border-t border-border pb-28 pt-14 md:pb-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo />
              <span className="font-display text-lg font-semibold">{company.lab}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              An AI product lab building agentic AI, physical AI and AI-native apps for mobile and the web.
            </p>
            <a
              href={company.udyamVerifyUrl}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-block rounded-lg border border-border px-3 py-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Udyam Registration No. <span className="text-foreground">{company.udyam}</span>
            </a>
          </div>

          <div>
            <p className="eyebrow">Products</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href={flagship.url} target="_blank" rel="noopener" className="text-muted-foreground hover:text-foreground">ReadyDM ↗</a></li>
              <li><a href="#products" className="text-muted-foreground hover:text-foreground">In the lab</a></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Company</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="#lab" className="text-muted-foreground hover:text-foreground">The lab</a></li>
              <li><a href="#recognition" className="text-muted-foreground hover:text-foreground">Recognition</a></li>
              <li><a href={`mailto:${company.email}`} className="text-muted-foreground hover:text-foreground">{company.email}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>Made in {company.city}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
