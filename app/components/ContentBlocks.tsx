import { ArrowUpRight, Armchair, Building2, CalendarCheck2, Check, ClipboardCheck, Focus, HeartHandshake, Home, Instagram, KeyRound, Linkedin, MessageCircle, RefreshCw, Repeat2, Sparkles, Utensils } from 'lucide-react';
import Link from 'next/link';
import { accreditations, areas, metrics, reviews, siteConfig } from '../lib/content';

const iconMap = { ArrowUpRight, Armchair, Building2, CalendarCheck2, Check, ClipboardCheck, Focus, HeartHandshake, Home, Instagram, KeyRound, Linkedin, MessageCircle, RefreshCw, Repeat2, Sparkles, Utensils };
export function ServiceIcon({ name, size = 18 }: { name?: keyof typeof iconMap; size?: number }) { const Icon = iconMap[name || 'Sparkles'] || Sparkles; return <Icon size={size} strokeWidth={1.8} aria-hidden="true" />; }

export function SectionHeading({ eyebrow, title, body, light = false }: { eyebrow: string; title: string; body?: string; light?: boolean }) {
  return <div className="section-head"><div><div className={`eyebrow ${light ? 'eyebrow-light' : ''}`}>{eyebrow}</div><h2 className="display">{title}</h2></div>{body && <p className="body-copy">{body}</p>}</div>;
}

export function PhotoBlock({ label, src, tall = false, position = 'center' }: { label: string; src: string; tall?: boolean; position?: string }) {
  return <div className={`photo-block ${tall ? 'tall' : ''}`}><img src={src} alt={`${label} — BrightClean sample image`} style={{ objectPosition: position }} /><span>{label}</span></div>;
}

export function PlaceholderPhoto({ label, tall = false }: { label: string; tall?: boolean }) {
  return <div className={`placeholder-photo ${tall ? 'tall' : ''}`} role="img" aria-label={`${label} placeholder image`}><span>PHOTO PLACEHOLDER · {label}</span></div>;
}

export function LogoStrip({ title = 'Sample client logos — replace before launch' }: { title?: string }) {
  return <section className="section-tight" aria-label="Client logo placeholders"><div className="container"><div className="eyebrow" style={{ marginBottom: 14 }}>{title}</div><div className="logo-strip">{['CLIENT LOGO', 'PROPERTY PARTNER', 'TEAM LOGO', 'LOCAL PARTNER'].map((label) => <div className="placeholder-logo" key={label}>{label}</div>)}</div></div></section>;
}

export function SocialLinks() {
  return <div className="socials" aria-label="Social links"><a href="#instagram" aria-label="Instagram placeholder"><Instagram size={15} /></a><a href="#linkedin" aria-label="LinkedIn placeholder"><Linkedin size={15} /></a><a href={`mailto:${siteConfig.email}`} aria-label={`Email ${siteConfig.brand}`}><ArrowUpRight size={15} /></a></div>;
}

export function MetricBadges() { return <div className="metrics">{metrics.map((metric) => <div className="metric" key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div>; }
export function ReviewGrid() { return <div className="review-grid">{reviews.map((review) => <article className="review-card" key={review.name}><div className="stars">★★★★★ <span>{review.rating}</span></div><blockquote>“{review.quote}”</blockquote><footer><strong>{review.name}</strong><small>{review.role}</small></footer></article>)}</div>; }

export function AreasSection() {
  return <div className="areas-grid"><div className="map-placeholder" role="img" aria-label="Map placeholder for [City] and [Area]"><div className="map-outline" /><span className="scene-label">MAP PLACEHOLDER · [CITY]</span></div><div className="areas-copy"><div className="eyebrow">Areas we serve</div><h2 className="display">Cleaning services across <em style={{ color: 'var(--teal)', fontStyle: 'normal' }}>[City]</em>.</h2><p className="body-copy">This draft map and area list are ready for the real places the business covers. Keep the list specific so local visitors know if the service is for them.</p><div className="area-chips">{areas.map((area) => <span className="area-chip" key={area}><Check size={12} /> {area}</span>)}</div><Link className="btn btn-primary" href="/contact/">See all locations <ArrowUpRight size={14} /></Link></div></div>;
}

export function AccreditationStrip() { return <div className="accreditation-strip" aria-label="Accreditation placeholders">{accreditations.map((item) => <div className="placeholder-logo" key={item}>{item}</div>)}</div>; }
