import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { ServiceIcon } from './ContentBlocks';

type Service = { number: string; title: string; short: string; detail: string; tone: string; image: string; icon: string };

export function ServiceCard({ service }: { service: Service }) {
  return <article className={`service-card tone-${service.tone}`}>
    <div className="service-art"><img src={service.image} alt={`${service.title} sample image`} /><span className="service-icon"><ServiceIcon name={service.icon as never} size={17} /></span></div>
    <span className="card-number">SERVICE {service.number}</span>
    <h3>{service.title}</h3>
    <p>{service.short}</p>
    <Link className="card-link" href={`/services/#service-${service.number}`}>Explore service <ArrowUpRight size={13} /><span aria-hidden="true">↗</span></Link>
  </article>;
}
