import Link from 'next/link';
import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import { areas, services, siteConfig } from '../lib/content';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="brand-lockup" href="/">
            <span className="brand-mark" aria-hidden="true">B</span>
            <span className="brand-name">{siteConfig.brand}<span>{siteConfig.descriptor}</span></span>
          </Link>
          <p>{siteConfig.description} This is a design draft using obvious sample content.</p>
          <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}><Phone size={13} /> {siteConfig.phone}</a>
          <a href={`mailto:${siteConfig.email}`}><Mail size={13} /> {siteConfig.email}</a>
        </div>
        <div>
          <h3>Services</h3>
          {services.slice(0, 5).map((service) => <Link href="/services/" key={service.number}>{service.title}</Link>)}
        </div>
        <div>
          <h3>Areas we cover</h3>
          {areas.slice(0, 5).map((area) => <Link href="/about/" key={area}>{area}</Link>)}
        </div>
        <div>
          <h3>Need a fresh start?</h3>
          <p>Tell us what needs attention and we will make the next step simple.</p>
          <Link className="btn btn-primary" href="/contact/">Get a free quote <ArrowUpRight size={14} /></Link>
        </div>
      </div>
      <div className="container footer-rule">
        <span>© {new Date().getFullYear()} {siteConfig.brand} · Design draft</span>
        <span>Replace sample claims, content and placeholders before launch.</span>
      </div>
    </footer>
  );
}
