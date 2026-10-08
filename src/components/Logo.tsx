import React from 'react';
import { cn } from '@/lib/utils';

const Logo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={cn('h-8 w-8', className)} aria-hidden="true">
    <rect width="64" height="64" rx="14" className="fill-card stroke-border" strokeWidth="2" />
    <path
      d="M14 46 L24 18 L32 38 L40 18 L50 46"
      fill="none"
      className="stroke-primary"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="32" cy="50" r="3.5" className="fill-primary" />
  </svg>
);

export default Logo;
