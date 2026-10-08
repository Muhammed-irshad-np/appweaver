import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { company } from '@/data/site';

const inputClass =
  'w-full rounded-xl border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Opens the visitor's mail client with the message addressed to the company inbox.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Hello from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n${form.name} · ${form.email}`);
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
  };

  const details = [
    { icon: Mail, label: 'Email', value: company.email, href: `mailto:${company.email}` },
    { icon: Phone, label: 'Phone', value: company.phone, href: `tel:${company.phone.replace(/\s/g, '')}` },
    { icon: MapPin, label: 'Lab', value: company.address },
  ];

  return (
    <section id="contact" className="border-t border-border bg-card/30 py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">04 · Contact</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Talk to the lab.
            </h2>
            <p className="mt-4 max-w-md text-lg text-muted-foreground">
              Investors, programme partners, creators who want early access to ReadyDM, or engineers who want to build AI products with us.
            </p>

            <dl className="mt-10 space-y-6">
              {details.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-background">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{label}</dt>
                    <dd className="mt-1">
                      {href ? (
                        <a href={href} className="transition-colors hover:text-primary">{value}</a>
                      ) : (
                        value
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          <form onSubmit={handleSubmit} className="rounded-3xl border border-border bg-card p-6 md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium">Name</span>
                <input name="name" value={form.name} onChange={handleChange} required className={inputClass} placeholder="Your name" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium">Email</span>
                <input name="email" type="email" value={form.email} onChange={handleChange} required className={inputClass} placeholder="you@company.com" />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="mb-2 block text-sm font-medium">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                className={`${inputClass} resize-none`}
                placeholder="What would you like to talk about?"
              />
            </label>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Send to {company.email}
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
