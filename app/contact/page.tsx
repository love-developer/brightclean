import type { Metadata } from 'next';
import { Mail, MapPin, Phone } from 'lucide-react';
import { QuoteForm } from '../components/QuoteForm';
import { SectionHeading } from '../components/ContentBlocks';
import { siteConfig, areas } from '../lib/content';

export const metadata: Metadata = { title: 'Contact BrightClean for a sample quote', description: 'Contact the BrightClean design draft through the sample quote form, phone, email, or placeholder service areas.' };

export default function ContactPage() {
  return <>
    <section className="page-hero"><div className="container"><div className="eyebrow eyebrow-light">Let’s make the next step simple</div><h1 className="display">Start with the space.</h1><p className="body-copy">Share a few essentials and this sample contact page will give the client a clear path to a real enquiry flow.</p></div></section>
    <section className="section"><div className="container contact-grid"><div><div className="eyebrow">Contact details</div><h2 className="display">A clear brief makes a calmer clean.</h2><p className="body-copy">Use the form for the first details, or replace the sample information below with the final business contact points once confirmed.</p><div className="contact-links"><div className="contact-link"><small><Phone size={13} /> Phone</small><a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>{siteConfig.phone}</a></div><div className="contact-link"><small><Mail size={13} /> Email</small><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div><div className="contact-link"><small><MapPin size={13} /> Sample coverage</small><span>{areas.slice(0, 3).join(' · ')}</span></div></div><div className="contact-note"><strong>Helpful before you enquire</strong><p className="body-copy">A rough idea of the space, preferred timing, and the most important rooms is enough for a useful first conversation.</p></div></div><div className="contact-card"><div className="eyebrow eyebrow-light">Request a quote</div><h2>What needs attention?</h2><p>All fields are sample-ready. Replace the Formspree endpoint in the single content file before launch.</p><QuoteForm /></div></div></section>
    <section className="section section-blue"><div className="container"><SectionHeading eyebrow="Common questions" title="A little more clarity before you send the form." body="These are draft answers for the final client to confirm and replace." /><div className="detail-grid"><div className="detail-panel"><h2>Do you offer one-off cleans?</h2><p>Sample answer: yes, the draft service menu includes one-off resets, handovers, and recurring rhythms. Confirm the actual availability before publishing.</p></div><div className="detail-panel"><h2>What happens after the enquiry?</h2><p>Sample answer: the team reviews the brief, asks any useful follow-up questions, and returns with a clear next step rather than a vague estimate.</p></div></div></div></section>
  </>;
}
