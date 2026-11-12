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
