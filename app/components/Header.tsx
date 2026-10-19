import Link from 'next/link';
import { ArrowUpRight, ChevronDown, Mail, Menu, Phone } from 'lucide-react';
import { siteConfig } from '../lib/content';

export function Header() {
  return <>
    <div className="topbar"><div className="container-wide topbar-inner"><span>Sample local service · clear spaces, calmer days</span><a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}><Phone size={12} /> {siteConfig.phone}</a><a href={`mailto:${siteConfig.email}`}><Mail size={12} /> {siteConfig.email}</a></div></div>
    <header className="site-header"><div className="container-wide header-inner">
      <Link className="brand-lockup" href="/" aria-label={`${siteConfig.brand} home`}><span className="brand-mark" aria-hidden="true">B</span><span className="brand-name">{siteConfig.brand}<span>{siteConfig.descriptor}</span></span></Link>
      <nav className="nav-links" aria-label="Primary navigation">{siteConfig.nav.map((item) => item.submenu ? <div className="nav-dropdown" key={item.href}><Link className="nav-parent" href={item.href}>{item.label}<ChevronDown size={13} /></Link><div className="dropdown-menu">{item.submenu.map((sub) => <Link href={sub.href} key={sub.href}>{sub.label}<ArrowUpRight size={13} /></Link>)}</div></div> : <Link href={item.href} key={item.href}>{item.label}</Link>)}<Link className="nav-cta" href="/contact/">Get a quote <ArrowUpRight size={14} /></Link></nav>
      <details className="mobile-menu"><summary aria-label="Open navigation"><Menu size={22} /></summary><div className="mobile-nav">{siteConfig.nav.map((item) => item.submenu ? <details className="mobile-submenu" key={item.href}><summary>{item.label}<ChevronDown size={13} /></summary><div>{item.submenu.map((sub) => <Link href={sub.href} key={sub.href}>{sub.label}</Link>)}</div></details> : <Link href={item.href} key={item.href}>{item.label}</Link>)}<Link className="btn btn-primary" href="/contact/">Get a quote <ArrowUpRight size={14} /></Link></div></details>
    </div></header>
  </>;
}
