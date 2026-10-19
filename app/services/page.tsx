import type { Metadata } from 'next';
import { ArrowUpRight, Check } from 'lucide-react';
import Link from 'next/link';
import { ClosingCta } from '../components/ClosingCta';
import { PhotoBlock, SectionHeading, ServiceIcon } from '../components/ContentBlocks';
import { ServiceCard } from '../components/ServiceCard';
import { images, processSteps, services } from '../lib/content';

export const metadata: Metadata = { title: 'Cleaning services for homes, teams, and properties', description: 'Explore the original sample service menu for BrightClean, from home and office cleaning to turnovers, kitchens, and deep resets.' };

export default function ServicesPage() {
  return <>
    <section className="page-hero"><div className="container"><div className="eyebrow eyebrow-light">The service menu</div><h1 className="display">Clean work for real life.</h1><p className="body-copy">A flexible service catalogue for homes, teams, and property partners. Each route starts with the space, the people using it, and what ready needs to look like.</p></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Eight starting points" title="A service for the way your space actually works." body="Use these cards as the first layer of the final service menu. Each detail is intentionally marked as sample scope." /><div className="service-directory">{services.map((service) => <div className="service-directory-item" id={`service-${service.number}`} key={service.number}><ServiceCard service={service} /><p className="body-copy" style={{ fontSize: '.76rem', margin: '10px 4px 0' }}>{service.detail}</p></div>)}</div></div></section>
    <section className="section section-blue"><div className="container story-grid"><PhotoBlock label="A practical standard" src={images.upholstery} tall /><div><div className="eyebrow">Built around use</div><h2 className="display">The right clean starts with the right questions.</h2><p className="body-copy">A home, a shared office, and a short-let turnover all need different decisions. The point of a good brief is to make those decisions visible before the work begins.</p><div className="story-points">{['What is the space used for?', 'Where do people notice the difference first?', 'What needs to be ready when we leave?'].map((item) => <div className="story-point" key={item}><Check size={15} color="var(--teal)" /><p>{item}</p></div>)}</div><Link className="btn btn-dark" href="/contact/">Talk through your space <ArrowUpRight size={14} /></Link></div></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="How it works" title="Simple from first hello." body="The draft process is deliberately low-friction. Replace the sample labels with the client’s real booking flow and service boundaries." /><div className="detail-grid"><div className="process-list">{processSteps.map((step) => <div className="process-step" key={step.number}><span className="step-num">{step.number}</span><div><h3>{step.title}</h3><p className="body-copy">{step.text}</p></div></div>)}</div><div className="detail-panel service-fit"><div className="eyebrow">Useful to know</div><h2>What to include in a brief</h2>{['Space type and approximate size', 'Preferred timing or handover window', 'Priority rooms or touchpoints', 'Any access, parking, or key notes'].map((item) => <p key={item}><ServiceIcon name="Check" size={15} /> {item}</p>)}</div></div></div></section>
    <ClosingCta />
  </>;
}
