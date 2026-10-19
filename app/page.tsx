import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Check, Phone } from 'lucide-react';
import { AreasSection, LogoStrip, MetricBadges, PhotoBlock, ReviewGrid, SectionHeading, ServiceIcon, SocialLinks } from './components/ContentBlocks';
import { ClosingCta } from './components/ClosingCta';
import { QuoteForm } from './components/QuoteForm';
import { ServiceCard } from './components/ServiceCard';
import { WipeHero } from './components/WipeHero';
import { heroTrustPoints, images, services, siteConfig, whyChooseUs } from './lib/content';

export const metadata: Metadata = {
  title: 'Thoughtful cleaning for spaces that feel ready',
  description: 'BrightClean is an original cleaning-company design draft for homes, teams, and property partners across [City] and [Area].',
};

export default function HomePage() {
  return <>
    <section className="hero-wrap">
      <div className="container-wide hero">
        <div className="hero-copy">
          <div className="eyebrow eyebrow-light">A clearer standard for everyday spaces</div>
          <h1 className="display">Professional <em>care</em> for the places that matter.</h1>
          <p className="body-copy">A polished cleaning service draft for homes, teams, and property partners who want a calm, considered reset without the runaround.</p>
          <div className="hero-actions"><Link className="btn btn-primary" href="/contact/">Get your free quote <ArrowUpRight size={14} /></Link><a className="btn btn-outline" href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}><Phone size={14} /> Give us a call</a></div>
          <div className="trust-row">{heroTrustPoints.map((point) => <div className="trust-point" key={point.eyebrow}><small>{point.eyebrow}</small><strong><ServiceIcon name={point.icon as never} size={15} /> {point.title}</strong><span>{point.text}</span></div>)}</div>
        </div>
        <WipeHero />
        <div className="quote-card"><div className="eyebrow">Start with the essentials</div><h2>Tell us what needs attention.</h2><p>Sample quick quote form. Replace the endpoint and fields once the client confirms the real offer.</p><QuoteForm compact /></div>
      </div>
    </section>

    <LogoStrip />

    <section className="section section-blue">
      <div className="container about-grid">
        <div className="about-copy"><div className="eyebrow">About {siteConfig.brand}</div><h2 className="display">A professional clean, made <em style={{ color: 'var(--teal)', fontStyle: 'normal' }}>human.</em></h2><p className="body-copy">We believe the best service feels visible in the small things: a clear brief, a thoughtful route through the space, and a handover that leaves you ready for what comes next. This is sample copy for the future client story.</p><MetricBadges /><SocialLinks /></div>
        <div className="about-visuals"><PhotoBlock label="Team at work" src={images.cleaningTeam} tall position="center" /><PhotoBlock label="Bright office" src={images.office} position="center" /></div>
      </div>
    </section>

    <section className="section section-blue home-story"><div className="container story-grid"><PhotoBlock label="A cleaner baseline" src={images.commercial} position="center" /><div><div className="eyebrow">The useful difference</div><h2 className="display">Good cleaning should give time back.</h2><p className="body-copy">A better-looking space is only the start. The real value is the feeling of returning to something that is easier to use, easier to welcome people into, and easier to keep moving.</p><div className="story-points">{['A clear scope before the work begins.', 'Thoughtful details where people notice them.', 'A final handover that feels complete.'].map((item, index) => <div className="story-point" key={item}><span>0{index + 1}</span><p>{item}</p></div>)}</div><Link className="btn btn-dark" href="/about/">Meet the approach <ArrowUpRight size={14} /></Link></div></div></section>

    <section className="section" id="services"><div className="container"><SectionHeading eyebrow="What we do" title="Cleaning services with a little more thought." body="From a weekly rhythm to a one-off reset, these sample services give the client a flexible starting point." /><div className="service-grid">{services.map((service) => <ServiceCard key={service.number} service={service} />)}</div><div className="center-action"><Link className="btn btn-dark" href="/services/">View all cleaning services <ArrowUpRight size={14} /></Link></div></div></section>

    <section className="section section-ink"><div className="container"><SectionHeading light eyebrow="Why us" title="Reliable, professional cleaners in [City] you can trust." body="Good service is not a grand promise. It is a series of useful details done well." /><div className="why-grid">{whyChooseUs.map((item) => <div className="why-card" key={item.number}><span className="card-number"><ServiceIcon name={item.icon as never} size={15} /> {item.number}</span><h3>{item.title}</h3><p>{item.text}</p></div>)}</div></div></section>

    <section className="section section-teal"><div className="container"><SectionHeading light eyebrow="Testimonials" title="What our customers are saying." body="Four obvious sample reviews, ready to be replaced with real permissioned feedback." /><ReviewGrid /></div></section>

    <section className="section section-blue"><div className="container"><AreasSection /></div></section>

    <ClosingCta />

    <a className="whatsapp" href={`https://wa.me/${siteConfig.whatsappNumber}`} aria-label="Message BrightClean on WhatsApp">WA</a>
  </>;
}
