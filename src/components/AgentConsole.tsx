import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type Label = 'COLLAB' | 'SPAM' | 'BUYER' | 'FAN';

interface Event {
  handle: string;
  comment: string;
  label: Label;
  action: string;
}

// Sample comments illustrating how the ReadyDM agent triages a Reel.
const events: Event[] = [
  { handle: '@glowskin.co', comment: 'Love this! Can we discuss a paid collab? Check DM 🙌', label: 'COLLAB', action: 'Flagged as brand deal → creator notified' },
  { handle: '@crypto_gains_99', comment: 'Earn $5000/day 💰 click link in bio!!!', label: 'SPAM', action: 'Hidden · no reply sent' },
  { handle: '@ananya.cooks', comment: 'RECIPE', label: 'BUYER', action: 'Product card sent by DM in 2.3s' },
  { handle: '@fitwithrahul', comment: 'This is so helpful, thank you!', label: 'FAN', action: 'Saved to audience list' },
  { handle: '@promo.bot.4421', comment: 'Follow me for follow back 🔥🔥🔥', label: 'SPAM', action: 'Hidden · no reply sent' },
  { handle: '@meera.designs', comment: 'PRICE please', label: 'BUYER', action: 'Checkout link sent · UPI ready' },
  { handle: '@brand.partnerships', comment: 'Hi! We’d love to feature you in our next campaign.', label: 'COLLAB', action: 'Flagged as brand deal → creator notified' },
];

const labelStyle: Record<Label, string> = {
  COLLAB: 'bg-primary/15 text-primary border-primary/30',
  SPAM: 'bg-destructive/10 text-destructive border-destructive/30',
  BUYER: 'bg-sky-400/10 text-sky-300 border-sky-400/30',
  FAN: 'bg-muted text-muted-foreground border-border',
};

const VISIBLE = 4;

const AgentConsole = () => {
  const [tick, setTick] = useState(VISIBLE);

  useEffect(() => {
    const id = window.setInterval(() => setTick((t) => t + 1), 2200);
    return () => window.clearInterval(id);
  }, []);

  const rows = Array.from({ length: VISIBLE }, (_, i) => {
    const n = tick - VISIBLE + i;
    return { n, ...events[n % events.length] };
  }).reverse();

  const processed = 1284 + tick * 3;

  return (
    <div className="relative rounded-2xl border border-border bg-card/80 shadow-2xl shadow-black/40 backdrop-blur">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="ml-3 font-mono text-xs text-muted-foreground">readydm-agent<span className="hidden sm:inline"> · reel/8812</span></span>
        </div>
        <span className="flex items-center gap-1.5 font-mono text-[11px] text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          sample run
        </span>
      </div>

      <ul className="divide-y divide-border" aria-live="off">
        {rows.map((row, i) => (
          <li key={row.n} className={cn('px-4 py-3', i === 0 && 'animate-fade-up')}>
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="font-mono text-xs text-muted-foreground">{row.handle}</p>
                <p className="mt-0.5 truncate text-sm">{row.comment}</p>
              </div>
              <span
                className={cn(
                  'shrink-0 rounded-md border px-2 py-0.5 font-mono text-[10px] font-medium tracking-wider',
                  labelStyle[row.label],
                )}
              >
                {row.label}
              </span>
            </div>
            <p className="mt-1.5 font-mono text-[11px] text-muted-foreground">
              <span className="text-primary">→</span> {row.action}
            </p>
          </li>
        ))}
      </ul>

      <div className="grid grid-cols-3 border-t border-border font-mono text-[11px]">
        <div className="px-4 py-3">
          <p className="text-muted-foreground">comments</p>
          <p className="mt-0.5 text-sm text-foreground tabular-nums">{processed.toLocaleString('en-IN')}</p>
        </div>
        <div className="border-l border-border px-4 py-3">
          <p className="text-muted-foreground">spam blocked</p>
          <p className="mt-0.5 text-sm text-foreground tabular-nums">{Math.round(processed * 0.31).toLocaleString('en-IN')}</p>
        </div>
        <div className="border-l border-border px-4 py-3">
          <p className="text-muted-foreground">collabs found</p>
          <p className="mt-0.5 text-sm text-primary tabular-nums">{Math.round(processed * 0.012)}</p>
        </div>
      </div>
    </div>
  );
};

export default AgentConsole;
