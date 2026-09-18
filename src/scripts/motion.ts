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

  // ---------- 0. Fond global : réseau de nœuds qui dérivent, réagit à la souris ----------
  const bg = document.querySelector<HTMLCanvasElement>('canvas.bg-net');
  if (bg) {
    const ctx = bg.getContext('2d')!;
    const css = getComputedStyle(root);
    const accent = css.getPropertyValue('--accent-text').trim() || '#38BDF8';
    const LINK = 140, MOUSE = 200;
    type Node = { x: number; y: number; vx: number; vy: number; r: number };
    let W = 0, H = 0, dpr = 1, nodes: Node[] = [];
    const mouse = { x: -1e4, y: -1e4, active: false };
    const packets: { a: Node; b: Node; t: number; speed: number }[] = [];
    const rgba = (hex: string, a: number) => {
      const n = parseInt(hex.slice(1), 16); return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
    };
    const resize = () => {
      dpr = Math.min(devicePixelRatio || 1, 2);
      W = innerWidth; H = innerHeight;
      bg.width = W * dpr; bg.height = H * dpr; bg.style.width = `${W}px`; bg.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const target = Math.min(110, Math.round((W * H) / (fine ? 16000 : 26000)));
      while (nodes.length < target) nodes.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25, r: 1 + Math.random() * 1.3 });
      nodes.length = target;
    };
    resize();
    addEventListener('resize', resize);
    if (fine) {
      addEventListener('pointermove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; mouse.active = true; });
      addEventListener('pointerleave', () => { mouse.active = false; });
    }
    let last = 0;
    const draw = (time: number) => {
      if (document.hidden) return;
      const dt = Math.min(32, time * 1000 - last) / 16.67; last = time * 1000;
      ctx.clearRect(0, 0, W, H);
      // dérive + attraction douce vers la souris
      for (const n of nodes) {
        if (mouse.active) {
          const dx = mouse.x - n.x, dy = mouse.y - n.y, d = Math.hypot(dx, dy);
          if (d < MOUSE && d > 1) { n.vx += (dx / d) * 0.012; n.vy += (dy / d) * 0.012; }
        }
        n.vx *= 0.985; n.vy *= 0.985;
        n.x += n.vx * dt; n.y += n.vy * dt;
        if (n.x < -20) n.x = W + 20; else if (n.x > W + 20) n.x = -20;
        if (n.y < -20) n.y = H + 20; else if (n.y > H + 20) n.y = -20;
      }
      // liens
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]; const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK) {
            ctx.strokeStyle = rgba(accent, (1 - d / LINK) * 0.22);
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
            if (packets.length < 6 && Math.random() < 0.0006) packets.push({ a, b, t: 0, speed: 0.008 + Math.random() * 0.01 });
          }
        }
        if (mouse.active) {
          const d = Math.hypot(a.x - mouse.x, a.y - mouse.y);
          if (d < MOUSE) { ctx.strokeStyle = rgba(accent, (1 - d / MOUSE) * 0.5); ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke(); }
        }
      }
      // paquets qui circulent sur les liens
      for (let k = packets.length - 1; k >= 0; k--) {
        const p = packets[k]; p.t += p.speed * dt;
        if (p.t >= 1 || Math.hypot(p.a.x - p.b.x, p.a.y - p.b.y) > LINK) { packets.splice(k, 1); continue; }
        const x = p.a.x + (p.b.x - p.a.x) * p.t, y = p.a.y + (p.b.y - p.a.y) * p.t;
        ctx.fillStyle = rgba(accent, 0.9); ctx.beginPath(); ctx.arc(x, y, 1.8, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = rgba(accent, 0.25); ctx.beginPath(); ctx.arc(x, y, 4.5, 0, Math.PI * 2); ctx.fill();
      }
      // nœuds
      for (const n of nodes) { ctx.fillStyle = rgba(accent, 0.55); ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill(); }
    };
    gsap.ticker.add(draw);
    document.addEventListener('visibilitychange', () => { last = performance.now(); });
  }

  // ---------- 1. Apparition au défilement (cascade) ----------
  const reveals = gsap.utils.toArray<HTMLElement>('[data-reveal]');
  if (reveals.length) {
    gsap.set(reveals, { autoAlpha: 0, y: 24 });
    ScrollTrigger.batch(reveals, {
      start: 'top 92%', once: true,
      onEnter: (els) => gsap.to(els, { autoAlpha: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.08 }),
    });
    // Sécurité : après 2,5 s, tout élément encore invisible ET non animé par ailleurs est affiché.
    // (jamais d'écrasement d'un tween en cours : sinon course avec Flip/onEnter → opacité bloquée à mi-chemin)
    setTimeout(() => reveals.forEach((el) => {
      if (getComputedStyle(el).display !== 'none' && Number(gsap.getProperty(el, 'opacity')) < 1 && !gsap.isTweening(el)) gsap.set(el, { autoAlpha: 1, y: 0 });
    }), 2500);
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
        if (root.classList.contains('flipping')) return; // 3) jamais de tilt pendant une transition de filtre
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

  // ---------- 3b. Micro-icônes des compétences : boucle de repos permanente + réaction au survol ----------
  // Chaque icône a une timeline infinie (repos). Au survol de la carte : elle accélère (×3.5),
  // le trait se redessine, et une réaction propre se joue. Au retour : ralentit en douceur.
  const iconIdle = (svg: SVGElement): gsap.core.Timeline => {
    const tl = gsap.timeline({ repeat: -1 });
    const q = (sel: string) => gsap.utils.toArray<SVGElement>(sel, svg);
    if (svg.classList.contains('cicon--c1')) {           // baie : LEDs qui clignotent en séquence
      q('.led').forEach((l, i) => tl.to(l, { opacity: 0.15, duration: 0.5, ease: 'steps(1)', yoyo: true, repeat: 1 }, i * 0.55));
      tl.to({}, { duration: 0.6 });
    } else if (svg.classList.contains('cicon--c2')) {    // clé : oscillation lente
      tl.to(svg, { rotation: -12, duration: 1.3, ease: 'sine.inOut', yoyo: true, repeat: 1, transformOrigin: '50% 50%' });
    } else if (svg.classList.contains('cicon--c3')) {    // présence en ligne : un satellite orbite en continu
      // Deux satellites suivent la même orbite : celui du plan avant est visible sur la moitié basse
      // (devant le globe), celui du plan arrière sur la moitié haute (derrière le globe opaque).
      const orbit = svg.querySelector<SVGPathElement>('.orbit--back')!;
      const front = svg.querySelector<SVGElement>('.sat--front')!, back = svg.querySelector<SVGElement>('.sat--back')!;
      tl.to([front, back], { motionPath: { path: orbit, align: orbit, alignOrigin: [0.5, 0.5] }, duration: 4.5, ease: 'none',
        onUpdate: () => { const below = Number(gsap.getProperty(front, 'y')) > 0; front.style.opacity = below ? '1' : '0'; back.style.opacity = below ? '0' : '1'; } });
    } else if (svg.classList.contains('cicon--c4')) {    // liste : barres qui progressent
      q('.bar').forEach((b, i) => tl.fromTo(b, { scaleX: 0.3, transformOrigin: 'left center' }, { scaleX: 1, duration: 0.9, ease: 'power2.out' }, i * 0.25));
      tl.to({}, { duration: 1.2 }).to(q('.bar'), { scaleX: 0.3, duration: 0.5, ease: 'power2.in', stagger: 0.1 });
    } else if (svg.classList.contains('cicon--c5')) {    // upload : la flèche respire
      tl.to(q('.arrow'), { y: -2.5, duration: 1.1, ease: 'sine.inOut', yoyo: true, repeat: 1 });
    } else if (svg.classList.contains('cicon--c6')) {    // wifi/RSS : ondes en séquence
      const w = q('.wave'); gsap.set(w, { opacity: 0.3 });
      w.forEach((el, i) => tl.to(el, { opacity: 1, duration: 0.35, yoyo: true, repeat: 1, ease: 'sine.inOut' }, i * 0.3));
      tl.to({}, { duration: 0.9 });
    }
    return tl;
  };
  const iconBurst = (svg: SVGElement) => {                 // réaction propre à chaque icône, jouée à chaque survol
    const q = (sel: string) => gsap.utils.toArray<SVGElement>(sel, svg);
    if (svg.classList.contains('cicon--c1')) gsap.fromTo(q('.led'), { opacity: 1 }, { opacity: 0.15, duration: 0.09, repeat: 7, yoyo: true, stagger: 0.04 });
    if (svg.classList.contains('cicon--c2')) gsap.fromTo(svg, { rotation: -25 }, { rotation: 0, duration: 0.9, ease: 'elastic.out(1, 0.35)', transformOrigin: '50% 50%' });
    if (svg.classList.contains('cicon--c3')) gsap.fromTo(q('.ping'), { attr: { r: 7.5 }, opacity: 0.9 }, { attr: { r: 15 }, opacity: 0, duration: 0.9, ease: 'power2.out', repeat: 1, repeatDelay: 0.15 }); // onde de diffusion
    if (svg.classList.contains('cicon--c4')) gsap.fromTo(q('.bar'), { scaleX: 0, transformOrigin: 'left center' }, { scaleX: 1, duration: 0.5, ease: 'power3.out', stagger: 0.08 });
    if (svg.classList.contains('cicon--c5')) gsap.fromTo(q('.arrow'), { y: 4 }, { y: -3, duration: 0.55, ease: 'back.out(2.5)' });
    if (svg.classList.contains('cicon--c6')) gsap.fromTo(q('.wave'), { opacity: 0, scale: 0.7, transformOrigin: 'left bottom' }, { opacity: 1, scale: 1, duration: 0.45, ease: 'back.out(2)', stagger: 0.09 });
  };
  gsap.utils.toArray<SVGElement>('.cicon').forEach((svg) => {
    const idle = iconIdle(svg);
    const host = svg.closest<HTMLElement>('.card') ?? svg;
    const shapes = gsap.utils.toArray<SVGElement>('[pathLength]', svg);
    host.addEventListener('pointerenter', () => {
      gsap.to(idle, { timeScale: 3.5, duration: 0.3 });
      gsap.fromTo(shapes, { strokeDasharray: 1, strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 0.7, ease: 'power2.out', stagger: 0.05, clearProps: 'strokeDasharray,strokeDashoffset' });
      iconBurst(svg);
    });
    host.addEventListener('pointerleave', () => gsap.to(idle, { timeScale: 1, duration: 0.8 }));
  });

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
