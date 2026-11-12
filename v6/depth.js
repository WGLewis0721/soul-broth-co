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
