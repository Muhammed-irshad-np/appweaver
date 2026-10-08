import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { company } from '@/data/site';
import Logo from '@/components/Logo';

const links = [
  { href: '#products', label: 'Products' },
  { href: '#lab', label: 'Lab' },
  { href: '#recognition', label: 'Recognition' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/70 bg-background/75 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <nav className="flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5" aria-label={`${company.lab} home`}>
            <Logo />
            <span className="font-display text-lg font-semibold tracking-tight">
              AppWeavers <span className="text-muted-foreground font-medium">Labs</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="https://www.readydm.com"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Try ReadyDM
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
