'use client';

import { FormEvent, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { services, siteConfig } from '../lib/content';

type Status = { type: 'success' | 'error'; message: string } | null;

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>(null);
  const [busy, setBusy] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const contact = String(data.get('contact') || '').trim();
    const service = String(data.get('service') || '').trim();
    if (!name || !contact || !service) {
      setStatus({ type: 'error', message: 'Please add your name, preferred contact, and a service so we know how to reply.' });
      return;
    }
    if (contact.length < 6) {
      setStatus({ type: 'error', message: 'Please check your phone number or email address.' });
      return;
    }
    setBusy(true);
    if (siteConfig.formEndpoint.includes('your-form-id')) {
      await new Promise((resolve) => setTimeout(resolve, 450));
      setStatus({ type: 'success', message: 'Demo submission received. Replace the Formspree endpoint in app/lib/content.ts before launch.' });
      form.reset();
      setBusy(false);
      return;
    }
    try {
      const response = await fetch(siteConfig.formEndpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      if (!response.ok) throw new Error('Request failed');
      setStatus({ type: 'success', message: 'Thanks — your request is on its way. We will be in touch using the details you shared.' });
      form.reset();
    } catch {
      setStatus({ type: 'error', message: 'Something went wrong while sending. Please try again or use the phone/email above.' });
    } finally {
      setBusy(false);
    }
  }

  return <form className="quote-form" onSubmit={handleSubmit} noValidate>
    <label>Name<input name="name" autoComplete="name" placeholder="Your name" /></label>
    <label>Service<select name="service" defaultValue=""><option value="" disabled>Select a service</option>{services.map((service) => <option key={service.number} value={service.title}>{service.title}</option>)}</select></label>
    <label>{compact ? 'Phone or email' : 'Phone or email'}<input name="contact" autoComplete="email" placeholder="How should we reach you?" /></label>
    {!compact && <label>Anything useful to know?<textarea name="message" placeholder="Tell us about the space or timing." /></label>}
    {status && <div className={`form-message ${status.type}`} role={status.type === 'error' ? 'alert' : 'status'}>{status.message}</div>}
    <button className="btn btn-primary" type="submit" disabled={busy}>{busy ? 'Sending…' : 'Request a quote'} <ArrowUpRight size={14} /></button>
  </form>;
}
