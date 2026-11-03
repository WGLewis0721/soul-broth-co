/* Nonessential V3 reveals. V2 remains authoritative for form and plate movement. */
(()=>{'use strict';const media=matchMedia('(prefers-reduced-motion: reduce)');
if(media.matches||!('IntersectionObserver' in window))return;
const els=[...document.querySelectorAll('.v3-manifesto-layout,.drop-heading,.drop-details,.v3-cinema-content,.section-topline,.request-intro,.gallery-heading,.join-layout')];
const obs=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting){entry.target.classList.add('v3-in-view');obs.unobserve(entry.target)}},{threshold:.06,rootMargin:'0px 0px -20px 0px'});
for(const el of els){el.setAttribute('data-v3-reveal','');obs.observe(el);if(el.getBoundingClientRect().top<innerHeight*.95){el.classList.add('v3-in-view');obs.unobserve(el)}}
document.documentElement.classList.add('v3-enhanced');
media.addEventListener?.('change',()=>{if(media.matches){obs.disconnect();document.documentElement.classList.remove('v3-enhanced')}});
})();