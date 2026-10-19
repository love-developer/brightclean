import Link from 'next/link';
import { ArrowUpRight, Phone } from 'lucide-react';
import { AccreditationStrip } from './ContentBlocks';
import { siteConfig } from '../lib/content';

export function ClosingCta() {
  return <section className="section section-tight">
    <div className="container">
      <div className="cta-banner"><div><div className="eyebrow">The next step</div><h2 className="display">Ready for a space that feels <em style={{ color: 'var(--teal)', fontStyle: 'normal' }}>ready?</em></h2><p className="body-copy">Tell us what needs attention, where you are, and what good looks like. This sample CTA is ready for the real client offer.</p></div><div className="cta-actions"><Link className="btn btn-primary" href="/contact/">Get your free quote <ArrowUpRight size={14} /></Link><a className="btn btn-dark" href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}><Phone size={14} /> {siteConfig.phone}</a></div></div>
      <AccreditationStrip />
    </div>
  </section>;
}
