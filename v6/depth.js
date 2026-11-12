/* Depth layer behavior: header shadow, hero parallax, scroll reveals.
   Does nothing that moves content when reduced motion is requested. */
(() => {
  'use strict';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const header = document.querySelector('.v2-header');
  const figure = document.querySelector('.v4-hero-figure');
  const onScroll = () => {
    if (header) header.classList.toggle('hm-scrolled', window.scrollY > 8);
    if (figure && !reduce) {
      figure.style.setProperty('--hm-scroll', Math.min(1, window.scrollY / 700).toFixed(3));
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  if (reduce || !('IntersectionObserver' in window)) return;
  const selectors = [
    '.v4-hero-copy > *', '.drop-heading', '.drop-details > *', '.section-topline',
    '.steps-line li', '.request-intro > *', '.request-form', '.v5-kitchen-heading > *',
    '.pickup-layout > *', '.pickup-steps > div', '.faq-layout > *', '.contact-layout > *', '.join-layout > *'
  ];
  const targets = [...new Set(selectors.flatMap(s => [...document.querySelectorAll(s)]))];
  targets.forEach((el, i) => {
    el.classList.add('hm-reveal');
    el.style.setProperty('--hm-delay', (i % 4) * 90 + 'ms');
  });
  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    }
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  targets.forEach((el) => io.observe(el));
})();

/* Share a plate: Web Share when available, otherwise copy a link to that plate. */
(() => {
  'use strict';
  const btn = document.querySelector('[data-hm-share]');
  if (!btn) return;
  const status = btn.parentElement.querySelector('.hm-share-status');
  btn.addEventListener('click', async () => {
    const selected = document.querySelector('.v5-food-item[aria-expanded="true"]');
    const key = selected ? selected.dataset.v5Food : '';
    const url = new URL(window.location.href);
    url.search = key ? '?plate=' + encodeURIComponent(key) : '';
    url.hash = '#gallery';
    const name = document.querySelector('[data-v5-focus-name]');
    try {
      if (navigator.share) {
        await navigator.share({ title: 'Haus of Micah · ' + (name ? name.textContent : ''), url: url.href });
        status.textContent = '';
        return;
      }
      await navigator.clipboard.writeText(url.href);
      status.textContent = 'Link copied.';
    } catch (err) {
      if (err && err.name === 'AbortError') return;
      status.textContent = 'Copy this link: ' + url.href;
    }
  });
})();

/* Gallery keyboard and pause controls. Arrow keys move between photos. */
(() => {
  'use strict';
  const gallery = document.querySelector('[data-v5-gallery]');
  const viewport = document.querySelector('[data-v5-viewport]');
  const pause = document.querySelector('[data-hm-pause]');
  if (!gallery || !viewport) return;
  const items = [...document.querySelectorAll('[data-v5-original-set] .v5-food-item')];
  viewport.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    const index = items.indexOf(event.target);
    if (index === -1) return;
    event.preventDefault();
    const step = event.key === 'ArrowRight' ? 1 : -1;
    items[(index + step + items.length) % items.length].focus();
  });
  if (pause) {
    pause.addEventListener('click', () => {
      const paused = gallery.classList.toggle('is-user-paused');
      pause.setAttribute('aria-pressed', String(paused));
      pause.textContent = paused ? 'Play gallery' : 'Pause gallery';
    });
  }
})();

/* Deep links: ?plate=<key> opens that gallery photo on load. Unknown keys are ignored. */
(() => {
  'use strict';
  const key = new URLSearchParams(window.location.search).get('plate');
  if (!key) return;
  const item = document.querySelector('[data-v5-original-set] [data-v5-food="' + CSS.escape(key) + '"]');
  if (!item) return;
  const open = () => item.click();
  if (document.readyState === 'complete') open();
  else window.addEventListener('load', open, { once: true });
})();

/* Process line progress: tied to scroll position, full width under reduced motion. */
(() => {
  'use strict';
  const lines = [...document.querySelectorAll('.steps-line')];
  if (!lines.length) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const update = () => {
    for (const line of lines) {
      if (reduce) { line.style.setProperty('--hm-draw', '1'); continue; }
      const r = line.getBoundingClientRect();
      const span = window.innerHeight * 0.7;
      const progress = Math.min(1, Math.max(0, (window.innerHeight - r.top) / span));
      line.style.setProperty('--hm-draw', progress.toFixed(3));
    }
  };
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();

/* Gallery step arrows: move the loop by one photo. Falls back to scrolling the strip. */
(() => {
  'use strict';
  const gallery = document.querySelector('[data-v5-gallery]');
  const track = document.querySelector('[data-v5-track]');
  const viewport = document.querySelector('[data-v5-viewport]');
  const first = document.querySelector('[data-v5-original-set]');
  const prev = document.querySelector('[data-hm-prev]');
  const next = document.querySelector('[data-hm-next]');
  if (!gallery || !track || !viewport || !first || !prev || !next) return;
  const stepPx = () => {
    const item = first.querySelector('.v5-food-item');
    const gap = parseFloat(getComputedStyle(first).columnGap || getComputedStyle(first).gap) || 0;
    return item ? item.offsetWidth + gap : 0;
  };
  const move = (direction) => {
    const anim = track.getAnimations ? track.getAnimations()[0] : null;
    const step = stepPx();
    if (anim && anim.effect && anim.effect.getComputedTiming().duration) {
      const duration = anim.effect.getComputedTiming().duration;
      const setWidth = first.offsetWidth || 1;
      const delta = (step / setWidth) * duration;
      // Next moves the strip left (later in the loop); previous moves it right.
      const t = anim.currentTime === null ? 0 : anim.currentTime;
      anim.currentTime = (((t - direction * delta) % duration) + duration) % duration;
      return;
    }
    viewport.scrollBy({ left: -direction * step, behavior: 'smooth' });
  };
  next.addEventListener('click', () => move(1));
  prev.addEventListener('click', () => move(-1));
})();

/* Micro-promo reel: timed slides for images, play/pause for videos, manual steps.
   Under reduced motion it does not advance on its own. */
(() => {
  'use strict';
  const reel = document.querySelector('[data-hm-reel]');
  if (!reel) return;
  const slides = [...reel.querySelectorAll('[data-hm-slide]')];
  const bars = [...reel.querySelectorAll('.hm-reel-progress span')];
  const pause = reel.querySelector('[data-hm-reel-pause]');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const HOLD = 4500;
  let index = 0, paused = reduce, timer = 0;
  reel.style.setProperty('--hm-reel-ms', HOLD + 'ms');
  const setVideos = (slide) => {
    slide.querySelectorAll('video').forEach((v) => { v.muted = true; v.loop = true; v.playsInline = true; v.play().catch(() => {}); });
    slides.filter((s) => s !== slide).forEach((s) => s.querySelectorAll('video').forEach((v) => v.pause()));
  };
  const show = (n) => {
    index = (n + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle('is-current', i === index));
    bars.forEach((b, i) => {
      b.classList.remove('is-current', 'is-done');
      if (i < index) b.classList.add('is-done');
      if (i === index) { b.classList.add('is-current'); void b.offsetWidth; }
    });
    setVideos(slides[index]);
    schedule();
  };
  const schedule = () => {
    clearTimeout(timer);
    const current = slides[index];
    if (paused || current.querySelector('video')) return;
    timer = setTimeout(() => show(index + 1), HOLD);
  };
  reel.querySelector('[data-hm-reel-next]').addEventListener('click', () => show(index + 1));
  reel.querySelector('[data-hm-reel-prev]').addEventListener('click', () => show(index - 1));
  const setPaused = (value) => {
    paused = value;
    reel.classList.toggle('is-paused', paused);
    pause.setAttribute('aria-pressed', String(paused));
    pause.textContent = paused ? 'Play' : 'Pause';
    if (paused) clearTimeout(timer); else schedule();
  };
  pause.addEventListener('click', () => setPaused(!paused));
  if (!reduce) {
    reel.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') reel.classList.add('is-paused'); });
    reel.addEventListener('pointerleave', () => { if (!paused) reel.classList.remove('is-paused'); });
  }
  reduce ? pause.setAttribute('aria-pressed', 'true') : null;
  if (reduce) { pause.textContent = 'Play'; reel.classList.add('is-paused'); }
  show(0);
  if (reduce) setPaused(true);
})();
