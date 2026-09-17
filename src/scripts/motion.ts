// ============================================================
// Couche mouvement — GSAP. Ne s'exécute QUE si les animations sont
// autorisées (pas de data-motion="off", pas de prefers-reduced-motion).
// Sans elle, le site est complet : le CSS affiche tout d'emblée.
// ============================================================
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

const root = document.documentElement;
const off = root.dataset.motion === 'off' || matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!off) {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
  root.classList.add('gsap');
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches; // pas de suivi souris sur tactile

  // ---------- 1. Apparition au défilement (cascade) ----------
  const reveals = gsap.utils.toArray<HTMLElement>('[data-reveal]');
  if (reveals.length) {
    gsap.set(reveals, { autoAlpha: 0, y: 24 });
    ScrollTrigger.batch(reveals, {
      start: 'top 92%', once: true,
      onEnter: (els) => gsap.to(els, { autoAlpha: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.08, overwrite: true }),
    });
    // Sécurité : tout visible après 2 s quoi qu'il arrive (onglet caché, observer capricieux…)
    setTimeout(() => gsap.to(reveals, { autoAlpha: 1, y: 0, duration: 0.4, overwrite: 'auto' }), 2000);
  }
  root.classList.add('reveal-ready');

  // Titres de rubriques (fiches) : le trait se trace
  gsap.utils.toArray<HTMLElement>('.prose h2').forEach((h) => {
    h.classList.add('h2-line');
    gsap.from(h, { '--line': 0, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: h, start: 'top 90%', once: true } });
  });

  // ---------- 2. Cartes : halo qui suit le curseur + basculement 3D ----------
  if (fine) {
    gsap.utils.toArray<HTMLElement>('.card').forEach((card) => {
      const rx = gsap.quickTo(card, 'rotationX', { duration: 0.45, ease: 'power3.out' });
      const ry = gsap.quickTo(card, 'rotationY', { duration: 0.45, ease: 'power3.out' });
      gsap.set(card, { transformPerspective: 900, transformOrigin: 'center' });
      card.addEventListener('pointermove', (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
        card.style.setProperty('--mx', `${px * 100}%`); card.style.setProperty('--my', `${py * 100}%`);
        rx((0.5 - py) * 6); ry((px - 0.5) * 6);
      });
      card.addEventListener('pointerleave', () => { rx(0); ry(0); });
    });
  }

  // ---------- 3. Hero : réseau qui suit la souris (parallaxe douce) ----------
  const net = document.querySelector<SVGGElement>('.hero__net .layer');
  const hero = document.querySelector<HTMLElement>('.hero');
  if (net && hero && fine) {
    const tx = gsap.quickTo(net, 'x', { duration: 1.2, ease: 'power2.out' });
    const ty = gsap.quickTo(net, 'y', { duration: 1.2, ease: 'power2.out' });
    hero.addEventListener('pointermove', (e) => {
      const r = hero.getBoundingClientRect();
      tx(((e.clientX - r.left) / r.width - 0.5) * -18); ty(((e.clientY - r.top) / r.height - 0.5) * -12);
    });
    hero.addEventListener('pointerleave', () => { tx(0); ty(0); });
  }
  // Halo des nœuds : respiration décalée
  gsap.utils.toArray<SVGElement>('.hero__net .glow').forEach((g, i) =>
    gsap.to(g, { opacity: 0.9, scale: 1.6, transformOrigin: 'center', duration: 2.2, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: i * 0.35 }));

  // ---------- 4. Compteur (Compétences : « 5/6 ») ----------
  document.querySelectorAll<HTMLElement>('[data-count-to]').forEach((el) => {
    const to = Number(el.dataset.countTo); const o = { v: 0 };
    gsap.to(o, { v: to, duration: 1.1, ease: 'power2.out', snap: 'v', onUpdate: () => (el.textContent = String(Math.round(o.v))),
      scrollTrigger: { trigger: el, start: 'top 95%', once: true } });
  });

  // ---------- 5. Flux Veille : les articles circulent des sources aux fiches ----------
  const flux = document.querySelector<SVGSVGElement>('.flux');
  if (flux) {
    const inPaths = gsap.utils.toArray<SVGPathElement>('.flux .p-in');
    const outPaths = gsap.utils.toArray<SVGPathElement>('.flux .p-out');
    const hub = flux.querySelector<SVGElement>('.hub-ring');
    const fiches = gsap.utils.toArray<SVGElement>('.flux .fiche');
    const layer = flux.querySelector<SVGGElement>('.particles')!;
    const NS = 'http://www.w3.org/2000/svg';
    const spawn = (path: SVGPathElement, cls: string) => {
      const c = document.createElementNS(NS, 'circle');
      c.setAttribute('r', '3'); c.setAttribute('class', `particle ${cls}`); layer.appendChild(c); return c;
    };
    // Sources → Feedly
    inPaths.forEach((p, i) => {
      const dot = spawn(p, 'particle--in');
      gsap.timeline({ repeat: -1, delay: i * 0.55 })
        .fromTo(dot, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.25 }, 0)
        .to(dot, { motionPath: { path: p, align: p, alignOrigin: [0.5, 0.5] }, duration: 2.2 + i * 0.15, ease: 'power1.inOut' }, 0)
        .to(dot, { autoAlpha: 0, duration: 0.2 }, '>-0.2')
        .add(() => { if (hub) gsap.fromTo(hub, { opacity: 0.9, scale: 1 }, { opacity: 0, scale: 1.35, transformOrigin: 'center', duration: 0.7, ease: 'power2.out' }); }, '>-0.25')
        .to({}, { duration: 1.4 }); // pause
    });
    // Feedly → Fiches
    outPaths.forEach((p, i) => {
      const dot = spawn(p, 'particle--out');
      gsap.timeline({ repeat: -1, delay: 1.6 + i * 1.1 })
        .fromTo(dot, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.25 }, 0)
        .to(dot, { motionPath: { path: p, align: p, alignOrigin: [0.5, 0.5] }, duration: 1.8, ease: 'power1.inOut' }, 0)
        .to(dot, { autoAlpha: 0, duration: 0.2 }, '>-0.2')
        .add(() => { const f = fiches[i]; if (f) gsap.fromTo(f, { attr: { 'stroke-opacity': 1 } }, { attr: { 'stroke-opacity': 0.25 }, duration: 1.2, ease: 'power2.out' }); }, '>-0.25')
        .to({}, { duration: 2.4 });
    });
  }
}

// L'interrupteur recharge la page : GSAP est ainsi (dé)chargé proprement.
document.querySelector('[data-motion-toggle]')?.addEventListener('click', () => {
  const nowOff = root.dataset.motion !== 'off';
  try { localStorage.setItem('motion', nowOff ? 'off' : 'on'); } catch (e) {}
  location.reload();
});
