'use client';

import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';
import { images } from '../lib/content';

export function WipeHero() {
  const [progress, setProgress] = useState(0);
  const [dragging, setDragging] = useState(false);
  useEffect(() => { if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setProgress(1); }, []);
  function wipe() { setProgress((current) => Math.min(1, current + 0.16)); }
  return <div className="hero-visual" aria-label="Interactive cleaning reveal"><div className="hero-photo" onPointerDown={() => setDragging(true)} onPointerUp={() => setDragging(false)} onPointerLeave={() => setDragging(false)} onPointerMove={() => { if (dragging) wipe(); }}><img src={images.cleaningTeam} alt="Cleaning professional working near bright windows" /><span className="scene-label">A SMALL ACT OF CARE</span><div className="scene-lines" aria-hidden="true"><span /><span /><span /></div><div className={`hero-frost ${progress > .94 ? 'is-clear' : ''}`} style={{ '--frost-opacity': Math.max(.02, 1 - progress) } as React.CSSProperties} /><button className="clean-button" onClick={() => setProgress(1)} type="button"><Sparkles size={13} /> Clean it</button></div></div>;
}
