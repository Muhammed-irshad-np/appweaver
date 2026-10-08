import React, { useEffect, useState } from 'react';
import { Boxes, FlaskConical, Home, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const tabs = [
  { id: 'top', label: 'Home', icon: Home },
  { id: 'products', label: 'Products', icon: Boxes },
  { id: 'lab', label: 'Lab', icon: FlaskConical },
  { id: 'contact', label: 'Contact', icon: Mail },
];

// App-style bottom navigation on phones; highlights the section in view.
const TabBar = () => {
  const [active, setActive] = useState('top');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id === 'recognition' ? 'lab' : entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    ['top', 'products', 'lab', 'recognition', 'contact'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="fixed inset-x-3 bottom-3 z-50 rounded-2xl border border-border bg-card/85 backdrop-blur-xl md:hidden"
      style={{ marginBottom: 'env(safe-area-inset-bottom)' }}
      aria-label="Sections"
    >
      <ul className="grid grid-cols-4">
        {tabs.map(({ id, label, icon: Icon }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={cn(
                'flex flex-col items-center gap-1 py-2.5 text-[11px] transition-colors',
                active === id ? 'text-primary' : 'text-muted-foreground',
              )}
            >
              <Icon className="h-5 w-5" />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TabBar;
